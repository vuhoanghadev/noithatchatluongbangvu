// Khởi tạo Supabase client
const supabaseUrl = 'https://xsuyxftywtysdltdlvna.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzdXl4ZnR5d3R5c2RsdGRsdm5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2NjYzMjcsImV4cCI6MjA2MTI0MjMyN30.P8iiRp5ZyfUbgMpD8kwC5bPUO1Aron3sLDAe8fIbZY8';
let supabase;

// Khởi tạo Supabase khi trang được tải
function initSupabaseClient() {
  if (typeof Supabase !== 'undefined') {
    supabase = Supabase.createClient(supabaseUrl, supabaseKey);
  } else if (typeof window.supabase !== 'undefined') {
    supabase = window.supabase.createClient(supabaseUrl, supabaseKey);
  } else {
    console.error('Thư viện Supabase không được tải đúng cách');
  }
}

// Hàm lấy lượt xem từ Supabase
async function getViewCount(postId) {
  try {
    const { data, error } = await supabase
      .from('blog_views')
      .select('views')
      .eq('post_id', postId.toString())
      .single();

    if (error && error.code !== 'PGRST116') {
      console.error('Lỗi khi lấy lượt xem:', error);
      return null;
    }

    return data?.views || 0;
  } catch (error) {
    console.error('Lỗi khi lấy lượt xem:', error);
    return null;
  }
}

// Hàm tăng lượt xem
async function increaseViewCount(postId) {
  try {
    const postIdStr = postId.toString();

    // Lấy danh sách bài viết đã xem từ sessionStorage
    let sessionViewedData = sessionStorage.getItem('viewedBlogPosts');
    let sessionViewed = sessionViewedData ? JSON.parse(sessionViewedData) : {};

    // Chỉ tăng lượt xem nếu chưa xem trong phiên này
    if (!sessionViewed[postIdStr]) {
      // Gọi hàm RPC để tăng lượt xem
      const { data, error } = await supabase.rpc('increment_blog_view', {
        post_id_param: postIdStr,
      });

      if (error) {
        console.error('Lỗi khi tăng lượt xem:', error);
        return;
      }

      const newViews = data;
      console.log(`Tăng lượt xem cho bài viết ID ${postIdStr} lên ${newViews}`);

      // Cập nhật lượt xem trong đối tượng post
      const post = posts.find((p) => p.id == postId);
      if (post) {
        post.views = newViews;
      }

      // Cập nhật hiển thị
      if (document.getElementById('blog-views')) {
        document.getElementById('blog-views').textContent = newViews;
      }

      // Đánh dấu bài viết đã được xem trong phiên này
      sessionViewed[postIdStr] = true;
      sessionStorage.setItem('viewedBlogPosts', JSON.stringify(sessionViewed));
    }
  } catch (error) {
    console.error('Lỗi khi tăng lượt xem:', error);
  }
}

// Hàm cập nhật lượt xem thủ công (cho admin)
async function updateViewCount(postId, count) {
  try {
    const postIdStr = postId.toString();

    // Gọi hàm RPC để cập nhật lượt xem
    const { data, error } = await supabase.rpc('update_blog_view', {
      post_id_param: postIdStr,
      new_views_param: count,
    });

    if (error) {
      console.error('Lỗi khi cập nhật lượt xem:', error);
      return false;
    }

    console.log(`Đã cập nhật lượt xem cho bài viết ID ${postId} thành ${data}`);
    return true;
  } catch (error) {
    console.error('Lỗi khi cập nhật lượt xem:', error);
    return false;
  }
}

// Hàm đồng bộ lượt xem từ Supabase vào posts
async function syncViewsFromSupabase() {
  try {
    // Lấy tất cả lượt xem từ Supabase
    const { data, error } = await supabase
      .from('blog_views')
      .select('post_id, views');

    if (error) {
      console.error('Lỗi khi lấy lượt xem:', error);
      return;
    }

    // Đồng bộ lượt xem vào posts
    if (data && data.length > 0) {
      data.forEach((item) => {
        const post = posts.find((p) => p.id.toString() === item.post_id);
        if (post) {
          // Nếu lượt xem trong blog.js lớn hơn, ưu tiên giá trị trong blog.js
          if (!post.views || post.views < item.views) {
            post.views = item.views;
          } else if (post.views > item.views) {
            // Nếu lượt xem trong blog.js lớn hơn, cập nhật lên Supabase
            updateViewCount(post.id, post.views);
          }
        }
      });
    }

    console.log('Đã đồng bộ lượt xem từ Supabase');
  } catch (error) {
    console.error('Lỗi khi đồng bộ lượt xem:', error);
  }
}

// Hàm khởi tạo - gọi khi trang được tải
async function initSupabaseViews() {
  // Khởi tạo Supabase client
  initSupabaseClient();

  // Đảm bảo Supabase đã được khởi tạo
  if (!supabase) {
    console.error('Không thể khởi tạo Supabase client');
    return;
  }

  // Đồng bộ lượt xem từ Supabase
  await syncViewsFromSupabase();

  // Nếu đang ở trang chi tiết bài viết, tăng lượt xem
  if (window.location.pathname.includes('blog-detail.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));

    if (postId) {
      // Lấy lượt xem hiện tại và hiển thị
      const views = await getViewCount(postId);
      if (views !== null && document.getElementById('blog-views')) {
        document.getElementById('blog-views').textContent = views;
      }

      // Tăng lượt xem
      increaseViewCount(postId);
    }
  }
}

// Khởi tạo khi trang được tải
document.addEventListener('DOMContentLoaded', initSupabaseViews);
