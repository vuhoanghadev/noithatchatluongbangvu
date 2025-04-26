// Khởi tạo Supabase client
const supabaseUrl = 'https://xsuyxftywtysdltdlvna.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzdXl4ZnR5d3R5c2RsdGRsdm5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2NjYzMjcsImV4cCI6MjA2MTI0MjMyN30.P8iiRp5ZyfUbgMpD8kwC5bPUO1Aron3sLDAe8fIbZY8';
let supabase;

// Khởi tạo Supabase khi trang được tải
function initSupabaseClient() {
  console.log('Đang khởi tạo Supabase client...');
  console.log('Supabase global:', typeof Supabase);

  try {
    if (typeof Supabase !== 'undefined') {
      supabase = Supabase.createClient(supabaseUrl, supabaseKey);
      console.log('Đã khởi tạo Supabase client thành công (Supabase global)');
    } else if (typeof window.supabase !== 'undefined') {
      supabase = window.supabase.createClient(supabaseUrl, supabaseKey);
      console.log('Đã khởi tạo Supabase client thành công (window.supabase)');
    } else {
      console.error('Thư viện Supabase không được tải đúng cách');
      // Thử tải lại thư viện Supabase
      loadSupabaseScript();
      return null;
    }

    return supabase;
  } catch (error) {
    console.error('Lỗi khi khởi tạo Supabase client:', error);
    return null;
  }
}

// Hàm tải thư viện Supabase nếu chưa được tải
function loadSupabaseScript() {
  console.log('Đang tải thư viện Supabase...');

  return new Promise((resolve, reject) => {
    // Kiểm tra xem script đã tồn tại chưa
    if (document.querySelector('script[src*="supabase.js"]')) {
      console.log('Thư viện Supabase đã được tải trước đó');
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src =
      'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js';
    script.async = true;

    script.onload = () => {
      console.log('Đã tải thư viện Supabase thành công');
      // Khởi tạo lại Supabase client sau khi tải thư viện
      setTimeout(() => {
        supabase = Supabase.createClient(supabaseUrl, supabaseKey);
        console.log('Đã khởi tạo lại Supabase client sau khi tải thư viện');
        resolve(supabase);
      }, 500);
    };

    script.onerror = (error) => {
      console.error('Lỗi khi tải thư viện Supabase:', error);
      reject(error);
    };

    document.head.appendChild(script);
  });
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
  console.log('Gọi hàm increaseViewCount từ supabase-views.js với ID:', postId);

  try {
    // Kiểm tra xem Supabase đã được khởi tạo chưa
    if (!supabase) {
      console.error('Supabase chưa được khởi tạo, không thể tăng lượt xem');
      return;
    }

    const postIdStr = postId.toString();

    // Lấy danh sách bài viết đã xem từ sessionStorage
    let sessionViewedData = sessionStorage.getItem('viewedBlogPosts');
    let sessionViewed = sessionViewedData ? JSON.parse(sessionViewedData) : {};

    console.log('Trạng thái đã xem:', sessionViewed);

    // Chỉ tăng lượt xem nếu chưa xem trong phiên này
    if (!sessionViewed[postIdStr]) {
      console.log('Bài viết chưa được xem trong phiên này, tăng lượt xem...');

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
        console.log('Đã cập nhật lượt xem trong đối tượng post:', post.views);
      }

      // Cập nhật hiển thị
      if (document.getElementById('blog-views')) {
        document.getElementById('blog-views').textContent = newViews;
        console.log('Đã cập nhật hiển thị lượt xem:', newViews);
      }

      // Đánh dấu bài viết đã được xem trong phiên này
      sessionViewed[postIdStr] = true;
      sessionStorage.setItem('viewedBlogPosts', JSON.stringify(sessionViewed));
      console.log('Đã đánh dấu bài viết đã xem trong phiên này');
    } else {
      console.log('Bài viết đã được xem trong phiên này, không tăng lượt xem');

      // Lấy lượt xem hiện tại từ Supabase để hiển thị
      const views = await getViewCount(postId);

      // Cập nhật hiển thị
      if (views !== null && document.getElementById('blog-views')) {
        document.getElementById('blog-views').textContent = views;
        console.log('Đã cập nhật hiển thị lượt xem (không tăng):', views);
      }
    }
  } catch (error) {
    console.error('Lỗi khi tăng lượt xem:', error);
  }
}

// Đăng ký hàm increaseViewCount toàn cục để có thể gọi từ bên ngoài
window.supabaseIncreaseViewCount = increaseViewCount;

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
  console.log('Đang khởi tạo Supabase Views...');

  try {
    // Khởi tạo Supabase client
    let client = initSupabaseClient();

    // Nếu không thể khởi tạo, thử tải lại thư viện
    if (!client) {
      console.log('Thử tải lại thư viện Supabase...');
      await loadSupabaseScript();

      // Thử khởi tạo lại sau khi tải thư viện
      setTimeout(async () => {
        // Khởi tạo lại Supabase client
        client = initSupabaseClient();

        if (!client) {
          console.error(
            'Không thể khởi tạo Supabase client sau khi tải lại thư viện'
          );
          return;
        }

        // Tiếp tục khởi tạo
        await continueInitialization();
      }, 1000);
    } else {
      // Tiếp tục khởi tạo nếu đã có client
      await continueInitialization();
    }
  } catch (error) {
    console.error('Lỗi khi khởi tạo Supabase Views:', error);
  }
}

// Hàm tiếp tục khởi tạo sau khi đã có Supabase client
async function continueInitialization() {
  console.log('Tiếp tục khởi tạo với Supabase client:', supabase);

  // Đảm bảo Supabase đã được khởi tạo
  if (!supabase) {
    console.error('Không thể khởi tạo Supabase client');
    return;
  }

  try {
    // Đồng bộ lượt xem từ Supabase
    await syncViewsFromSupabase();

    // Nếu đang ở trang chi tiết bài viết, xử lý lượt xem
    if (window.location.pathname.includes('blog-detail.html')) {
      const urlParams = new URLSearchParams(window.location.search);
      const postId = parseInt(urlParams.get('id'));

      if (postId) {
        console.log('Đang xử lý lượt xem cho bài viết ID:', postId);

        // Lấy lượt xem hiện tại từ Supabase
        const views = await getViewCount(postId);
        console.log('Lượt xem từ Supabase:', views);

        // Hiển thị lượt xem
        if (views !== null && document.getElementById('blog-views')) {
          document.getElementById('blog-views').textContent = views;
          console.log('Đã cập nhật hiển thị lượt xem:', views);
        }

        // Tăng lượt xem sau một khoảng thời gian ngắn
        setTimeout(() => {
          increaseViewCount(postId);
        }, 500);
      }
    }
  } catch (error) {
    console.error('Lỗi trong quá trình khởi tạo:', error);
  }
}

// Khởi tạo khi trang được tải
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM đã tải xong, bắt đầu khởi tạo Supabase Views...');

  // Vô hiệu hóa hàm increaseViewCount cũ nếu tồn tại
  if (
    typeof window.originalIncreaseViewCount === 'undefined' &&
    typeof window.increaseViewCount === 'function' &&
    window.increaseViewCount !== increaseViewCount
  ) {
    console.log('Vô hiệu hóa hàm increaseViewCount cũ');
    window.originalIncreaseViewCount = window.increaseViewCount;
    window.increaseViewCount = function () {
      console.log(
        'Hàm increaseViewCount cũ đã bị vô hiệu hóa, sử dụng hàm từ supabase-views.js'
      );
    };
  }

  // Khởi tạo Supabase Views
  initSupabaseViews();
});
