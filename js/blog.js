// Hàm lọc các bài viết trùng lặp
function removeDuplicatePosts() {
  const uniquePosts = [];
  const uniqueIds = new Set();

  // Lọc các bài viết có ID duy nhất
  for (let i = 0; i < posts.length; i++) {
    if (!uniqueIds.has(posts[i].id)) {
      uniquePosts.push(posts[i]);
      uniqueIds.add(posts[i].id);
    }
  }

  // Thay thế mảng posts gốc bằng mảng đã lọc
  posts.length = 0; // Xóa tất cả phần tử hiện tại
  uniquePosts.forEach((post) => posts.push(post)); // Thêm các phần tử duy nhất vào mảng
}

// Hàm kiểm tra và tăng lượt xem tự động mỗi ngày mới
function checkAndIncreaseViewsDaily() {
  // Lấy ngày hiện tại
  const today = new Date().toLocaleDateString('vi-VN');

  // Lấy ngày cuối cùng đã tăng lượt xem từ localStorage
  const lastIncreasedDate = localStorage.getItem('lastViewsIncreasedDate');

  // Nếu chưa có ngày cuối cùng hoặc ngày hiện tại khác ngày cuối cùng
  if (!lastIncreasedDate || lastIncreasedDate !== today) {
    console.log(`Sang ngày mới: ${today}, tăng lượt xem cho tất cả bài viết`);

    // Lấy dữ liệu lượt xem từ localStorage
    let viewsData = localStorage.getItem('blogPostViews');
    let views = viewsData ? JSON.parse(viewsData) : {};

    // Tăng lượt xem cho tất cả bài viết
    posts.forEach((post) => {
      const postId = post.id.toString();

      // Tăng lượt xem lên 5
      post.views = (post.views || 0) + 5;
      views[postId] = post.views;

      console.log(
        `Tăng lượt xem cho bài viết ID ${postId} lên ${post.views} (+5 lượt xem)`
      );
    });

    // Lưu lại vào localStorage
    localStorage.setItem('blogPostViews', JSON.stringify(views));

    // Cập nhật ngày cuối cùng đã tăng lượt xem
    localStorage.setItem('lastViewsIncreasedDate', today);
  }
}

// Hàm để đồng bộ lượt xem giữa blog.js và localStorage
function syncViewsWithLocalStorage() {
  // Kiểm tra và tăng lượt xem tự động mỗi ngày mới
  checkAndIncreaseViewsDaily();

  // Lấy dữ liệu lượt xem từ localStorage
  let viewsData = localStorage.getItem('blogPostViews');
  let views = viewsData ? JSON.parse(viewsData) : {};

  // Lấy dữ liệu bài viết đã xem từ localStorage
  let viewedPostsData = localStorage.getItem('viewedBlogPosts');
  let viewedPosts = viewedPostsData ? JSON.parse(viewedPostsData) : {};

  // Lấy dữ liệu baseViews từ localStorage
  let baseViewsData = localStorage.getItem('previousBaseViews');
  let baseViews = baseViewsData ? JSON.parse(baseViewsData) : {};

  // Đồng bộ lượt xem giữa blog.js và localStorage
  posts.forEach((post) => {
    const postId = post.id.toString();

    // Khởi tạo baseViews nếu chưa có
    if (post.baseViews === undefined) {
      post.baseViews = post.views || 0;
      post.views = 0;
    }

    // Luôn ưu tiên baseViews từ blog.js và ghi đè lên giá trị trong localStorage
    baseViews[postId] = post.baseViews;
    console.log(
      `Cập nhật baseViews cho bài viết ID ${postId}: ${post.baseViews}`
    );

    // Nếu admin cập nhật lượt xem thủ công trong blog.js
    if (post.views && (!views[postId] || post.views > views[postId])) {
      // Cập nhật lượt xem trong localStorage
      views[postId] = post.views;
      console.log(
        `Admin đã cập nhật lượt xem cho bài viết ID ${postId}: ${post.views}`
      );
    }
    // Nếu đã có lượt xem trong localStorage, sử dụng giá trị đó
    else if (views[postId]) {
      post.views = views[postId];
    }
    // Nếu chưa có lượt xem trong localStorage, khởi tạo giá trị ban đầu
    else {
      views[postId] = post.views || 0;
    }
  });

  // Lưu lại vào localStorage
  localStorage.setItem('blogPostViews', JSON.stringify(views));
  localStorage.setItem('previousBaseViews', JSON.stringify(baseViews));
}

const posts = [
  {
    id: 1,
    title: '5 Mẹo Chọn Tủ Quần Áo Phù Hợp Với Không Gian Sống Của Bạn',
    category: 'Mẹo thiết kế nội thất',
    author: 'Vũ Hoàng Hà',
    authorAvatar: '../images/avt tac gia/vuhoangha.jpg',
    blogDate: '10/04/2025',
    authorBio:
      'Với hơn 5 năm kinh nghiệm trong lĩnh vực thiết kế nội thất, Vũ Hoàng Hà đã thực hiện thành công trên 150 dự án, mang đến không gian sống tinh tế và tiện nghi cho hàng trăm khách hàng. Anh nổi bật với phong cách thiết kế hiện đại, kết hợp giữa thẩm mỹ và công năng, luôn đặt trải nghiệm người dùng lên hàng đầu. Hà cam kết đồng hành cùng khách hàng từ ý tưởng đến hiện thực, đảm bảo từng sản phẩm đều đạt chất lượng vượt mong đợi.',
    authorVerified: 'Chuyên gia',
    authorJob: 'Chuyên gia thiết kế nội thất',
    authorExperience: 5,
    authorProjects: 150,
    authorRating: 4.9,
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt:
      'Khám phá 5 mẹo vàng giúp bạn chọn tủ quần áo hoàn hảo, vừa đẹp mắt vừa tối ưu không gian và nhu cầu sử dụng.',
    content: `
      <h2>5 Mẹo Chọn Tủ Quần Áo Phù Hợp Với Không Gian Sống Của Bạn</h2>
      <p>Chọn được một chiếc tủ quần áo phù hợp không chỉ giúp bạn tổ chức không gian sống gọn gàng mà còn nâng tầm thẩm mỹ cho căn phòng. Dưới đây là 5 mẹo chi tiết giúp bạn đưa ra quyết định đúng đắn khi chọn mua tủ quần áo.</p>

      <h3>1. Đo đạc không gian chính xác</h3>
      <p>Trước khi chọn mua tủ quần áo, việc đầu tiên bạn cần làm là đo đạc chính xác diện tích phòng ngủ. Hãy ghi lại chiều dài, chiều rộng và chiều cao của khu vực định đặt tủ. Đừng quên tính đến khoảng không gian cần thiết để mở cửa tủ hoặc kéo ngăn kéo. Nếu phòng nhỏ, hãy cân nhắc tủ âm tường hoặc tủ cánh lùa để tiết kiệm diện tích.</p>
      <img src="https://plus.unsplash.com/premium_photo-1676823547752-1d24e8597047?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Đo đạc không gian phòng ngủ" loading="lazy">

      <h3>2. Lựa chọn chất liệu bền bỉ</h3>
      <p>Chất liệu là yếu tố quyết định độ bền và vẻ đẹp lâu dài của tủ quần áo. Gỗ tự nhiên như gỗ sồi, gỗ óc chó mang lại vẻ đẹp sang trọng và độ bền cao, nhưng giá thành thường cao hơn. Trong khi đó, gỗ công nghiệp như MDF phủ melamine hoặc laminate là lựa chọn phổ biến nhờ giá cả hợp lý, chống cong vênh và đa dạng màu sắc.</p>
      <p><strong>Mẹo:</strong> Nếu bạn sống ở khu vực có độ ẩm cao, hãy chọn gỗ công nghiệp có lớp phủ chống ẩm để tăng tuổi thọ cho sản phẩm.</p>

      <h3>3. Tối ưu hóa thiết kế và công năng</h3>
      <p>Một chiếc tủ quần áo lý tưởng không chỉ đẹp mà còn phải đáp ứng nhu cầu sử dụng. Hãy xác định số lượng quần áo, phụ kiện và vật dụng bạn cần lưu trữ. Tủ có nhiều ngăn kéo, kệ treo, hoặc thanh ngang sẽ giúp bạn dễ dàng phân loại và sắp xếp. Ngoài ra, các thiết kế hiện đại còn tích hợp gương, đèn LED hoặc kệ đa năng, giúp tối ưu hóa trải nghiệm sử dụng.</p>
      <img src="https://plus.unsplash.com/premium_photo-1661777938520-110b62a5537f?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Tủ quần áo thiết kế hiện đại" loading="lazy">

      <h3>4. Phù hợp với phong cách nội thất</h3>
      <p>Tủ quần áo nên hòa hợp với phong cách tổng thể của căn phòng. Nếu phòng ngủ mang phong cách tối giản, hãy chọn tủ có thiết kế đơn giản, màu sắc trung tính như trắng, xám hoặc be. Ngược lại, với phong cách cổ điển, tủ quần áo bằng gỗ tự nhiên với các chi tiết chạm khắc sẽ là điểm nhấn hoàn hảo.</p>
      <p><strong>Lưu ý:</strong> Đừng quên phối màu tủ với các nội thất khác như giường, bàn trang điểm để tạo sự thống nhất.</p>

      <h3>5. Cân nhắc ngân sách và thương hiệu</h3>
      <p>Trước khi mua, hãy xác định ngân sách rõ ràng để thu hẹp lựa chọn. Các thương hiệu nội thất uy tín thường cung cấp sản phẩm chất lượng cao kèm chính sách bảo hành tốt. Nếu bạn muốn tiết kiệm chi phí, hãy tìm kiếm các chương trình khuyến mãi hoặc cân nhắc mua tủ lắp ráp với thiết kế hiện đại.</p>
      <p><strong>Gợi ý:</strong> Đừng chỉ tập trung vào giá rẻ mà bỏ qua chất lượng, vì một chiếc tủ tốt sẽ đồng hành cùng bạn trong nhiều năm.</p>

      <h3>Kết luận</h3>
      <p>Chọn tủ quần áo không chỉ là việc mua sắm mà còn là cách bạn đầu tư cho không gian sống tiện nghi và thẩm mỹ. Hãy áp dụng 5 mẹo trên để tìm được chiếc tủ hoàn hảo cho ngôi nhà của bạn. Nếu cần tư vấn thêm hoặc muốn khám phá các mẫu tủ quần áo hiện đại, hãy liên hệ với chúng tôi ngay hôm nay!</p>

    `,
    baseViews: 290, // Lượt xem cơ sở do admin đặt
    views: 0, // Lượt xem từ người dùng
  },
  {
    id: 2,
    title: 'Xu Hướng Nội Thất 2025',
    category: 'Xu hướng',
    author: 'Trần Thị Hương',
    authorAvatar: 'https://i.pravatar.cc/150?img=5',
    blogDate: '25/03/2025',
    authorBio:
      'Trần Thị Hương là nhà phân tích xu hướng nội thất với hơn 8 năm kinh nghiệm. Cô đã cộng tác với nhiều tạp chí nội thất hàng đầu và thường xuyên tham dự các triển lãm quốc tế để cập nhật xu hướng mới nhất.',
    authorVerified: 'Nhà phân tích',
    authorJob: 'Nhà phân tích xu hướng nội thất',
    authorExperience: 8,
    authorProjects: 200,
    authorRating: 4.8,
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Khám phá các xu hướng nội thất mới nhất cho năm 2025.',
    content: `
        <p>Năm 2025, nội thất tối giản và bền vững sẽ lên ngôi...</p>
        <p><strong>Màu sắc:</strong> Tông màu trung tính kết hợp điểm nhấn cam.</p>
      `,
    views: 0,
  },
  {
    id: 3,
    title: 'Dự Án Phòng Ngủ Hiện Đại',
    category: 'Dự án',
    author: 'Lê Văn Bình',
    authorAvatar: 'https://i.pravatar.cc/150?img=8',
    blogDate: '18/03/2025',
    authorBio:
      'Lê Văn Bình là kiến trúc sư nội thất với hơn 12 năm kinh nghiệm trong thiết kế và thi công. Anh đã hoàn thành hơn 200 dự án nội thất cho căn hộ, biệt thự và văn phòng, với phong cách thiết kế hiện đại và tinh tế.',
    authorVerified: 'Kiến trúc sư',
    authorJob: 'Kiến trúc sư nội thất',
    authorExperience: 12,
    authorProjects: 200,
    authorRating: 4.7,
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Xem dự án phòng ngủ chúng tôi đã thực hiện cho khách hàng.',
    content: `
        <p>Phòng ngủ này sử dụng giường gỗ tự nhiên và tủ quần áo đa năng...</p>
        <img src="images/blog/post-3b.jpg" alt="Phòng ngủ" loading="lazy">
      `,
    views: 0,
  },
  {
    id: 4,
    title: 'Cách Bố Trí Tủ Bếp Tiết Kiệm Không Gian',
    category: 'Mẹo thiết kế',
    author: 'Phạm Thị Mai',
    authorAvatar: 'https://i.pravatar.cc/150?img=9',
    blogDate: '05/03/2025',
    authorBio:
      'Phạm Thị Mai là nhà thiết kế nội thất chuyên về không gian bếp. Với hơn 7 năm kinh nghiệm, cô đã giúp hàng trăm gia đình tối ưu hóa không gian bếp nhỏ với các giải pháp thông minh và tiện ích.',
    authorVerified: 'Chuyên gia bếp',
    authorJob: 'Chuyên gia thiết kế bếp',
    authorExperience: 7,
    authorProjects: 120,
    authorRating: 4.9,
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Mẹo bố trí tủ bếp để tối ưu diện tích căn bếp nhỏ.',
    content: `
        <p><strong>1. Sử dụng tủ góc:</strong> Tận dụng góc bếp hiệu quả.</p>
        <p><strong>2. Kệ treo:</strong> Tăng không gian lưu trữ.</p>
      `,
    views: 0,
  },
  {
    id: 5,
    title: 'Nội Thất Thông Minh Cho Nhà Nhỏ',
    category: 'Xu hướng',
    author: 'Nguyễn Văn An',
    authorAvatar: 'https://i.pravatar.cc/150?img=11',
    blogDate: '28/02/2025',
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Giải pháp nội thất thông minh cho không gian hạn chế.',
    content: `
        <p>Nội thất đa năng như giường gấp, bàn gấp đang rất được ưa chuộng...</p>
      `,
    baseViews: 85,
    views: 0,
  },
  {
    id: 6,
    title: 'Nội Thất Thông Minh Cho Nhà Nhỏ',
    category: 'Xu hướng',
    author: 'Trần Minh Tuấn',
    authorAvatar: 'https://i.pravatar.cc/150?img=12',
    blogDate: '25/02/2025',
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Giải pháp nội thất thông minh cho không gian hạn chế.',
    content: `
        <p>Nội thất đa năng như giường gấp, bàn gấp đang rất được ưa chuộng...</p>
      `,
    baseViews: 72,
    views: 0,
  },
  {
    id: 7,
    title: 'Nội Thất Thông Minh Cho Nhà Nhỏ',
    category: 'Xu hướng',
    author: 'Lê Thị Hồng',
    authorAvatar: 'https://i.pravatar.cc/150?img=13',
    blogDate: '22/02/2025',
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Giải pháp nội thất thông minh cho không gian hạn chế.',
    content: `
        <p>Nội thất đa năng như giường gấp, bàn gấp đang rất được ưa chuộng...</p>
      `,
    baseViews: 65,
    views: 0,
  },
  {
    id: 8,
    title: 'Nội Thất Thông Minh Cho Nhà Nhỏ',
    category: 'Xu hướng',
    author: 'Phạm Văn Đức',
    authorAvatar: 'https://i.pravatar.cc/150?img=14',
    blogDate: '20/02/2025',
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Giải pháp nội thất thông minh cho không gian hạn chế.',
    content: `
        <p>Nội thất đa năng như giường gấp, bàn gấp đang rất được ưa chuộng...</p>
      `,
    baseViews: 58,
    views: 0,
  },
  {
    id: 9,
    title: 'Nội Thất Thông Minh Cho Nhà Nhỏ',
    category: 'Xu hướng',
    author: 'Nguyễn Thị Lan',
    authorAvatar: 'https://i.pravatar.cc/150?img=15',
    blogDate: '18/02/2025',
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Giải pháp nội thất thông minh cho không gian hạn chế.',
    content: `
        <p>Nội thất đa năng như giường gấp, bàn gấp đang rất được ưa chuộng...</p>
      `,
    baseViews: 52,
    views: 0,
  },
  {
    id: 10,
    title: 'Nội Thất Thông Minh Cho Nhà Nhỏ',
    category: 'Xu hướng',
    author: 'Trần Văn Bình',
    authorAvatar: 'https://i.pravatar.cc/150?img=16',
    blogDate: '15/02/2025',
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Giải pháp nội thất thông minh cho không gian hạn chế.',
    content: `
        <p>Nội thất đa năng như giường gấp, bàn gấp đang rất được ưa chuộng...</p>
      `,
    baseViews: 48,
    views: 0,
  },

  {
    id: 11,
    title: 'Nội Thất Thông Minh Cho Nhà Nhỏ',
    category: 'Xu hướng',
    author: 'Lê Minh Hoàng',
    authorAvatar: 'https://i.pravatar.cc/150?img=17',
    blogDate: '12/02/2025',
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Giải pháp nội thất thông minh cho không gian hạn chế.',
    content: `
        <p>Nội thất đa năng như giường gấp, bàn gấp đang rất được ưa chuộng...</p>
      `,
    baseViews: 45,
    views: 0,
  },
  {
    id: 12,
    title: 'Nội Thất Thông Minh Cho Nhà Nhỏ',
    category: 'Xu hướng',
    author: 'Nguyễn Thị Hà',
    authorAvatar: 'https://i.pravatar.cc/150?img=18',
    blogDate: '10/02/2025',
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Giải pháp nội thất thông minh cho không gian hạn chế.',
    content: `
        <p>Nội thất đa năng như giường gấp, bàn gấp đang rất được ưa chuộng...</p>
      `,
    baseViews: 42,
    views: 0,
  },
  {
    id: 13,
    title: 'Nội Thất Thông Minh Cho Nhà Nhỏ',
    category: 'Xu hướng',
    author: 'Trần Văn Nam',
    authorAvatar: 'https://i.pravatar.cc/150?img=19',
    blogDate: '08/02/2025',
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Giải pháp nội thất thông minh cho không gian hạn chế.',
    content: `
        <p>Nội thất đa năng như giường gấp, bàn gấp đang rất được ưa chuộng...</p>
      `,
    baseViews: 38,
    views: 0,
  },
  {
    id: 14,
    title: 'Nội Thất Thông Minh Cho Nhà Nhỏ',
    category: 'Xu hướng',
    author: 'Phạm Thị Linh',
    authorAvatar: 'https://i.pravatar.cc/150?img=20',
    blogDate: '05/02/2025',
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Giải pháp nội thất thông minh cho không gian hạn chế.',
    content: `
        <p>Nội thất đa năng như giường gấp, bàn gấp đang rất được ưa chuộng...</p>
      `,
    baseViews: 35,
    views: 0,
  },
  {
    id: 15,
    title: 'Nội Thất Thông Minh Cho Nhà Nhỏ',
    category: 'Xu hướng',
    author: 'Lê Văn Tùng',
    authorAvatar: 'https://i.pravatar.cc/150?img=21',
    blogDate: '03/02/2025',
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Giải pháp nội thất thông minh cho không gian hạn chế.',
    content: `
        <p>Nội thất đa năng như giường gấp, bàn gấp đang rất được ưa chuộng...</p>
      `,
    baseViews: 32,
    views: 0,
  },
  {
    id: 16,
    title: 'Nội Thất Thông Minh Cho Nhà Nhỏ',
    category: 'Xu hướng',
    author: 'Nguyễn Văn Hùng',
    authorAvatar: 'https://i.pravatar.cc/150?img=22',
    blogDate: '30/01/2025',
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Giải pháp nội thất thông minh cho không gian hạn chế.',
    content: `
        <p>Nội thất đa năng như giường gấp, bàn gấp đang rất được ưa chuộng...</p>
      `,
    baseViews: 28,
    views: 0,
  },
  {
    id: 17,
    title: 'Nội Thất Thông Minh Cho Nhà Nhỏ',
    category: 'Xu hướng',
    author: 'Trần Thị Thảo',
    authorAvatar: 'https://i.pravatar.cc/150?img=23',
    blogDate: '28/01/2025',
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Giải pháp nội thất thông minh cho không gian hạn chế.',
    content: `
        <p>Nội thất đa năng như giường gấp, bàn gấp đang rất được ưa chuộng...</p>
      `,
    baseViews: 25,
    views: 0,
  },
  {
    id: 18,
    title: 'Nội Thất Thông Minh Cho Nhà Nhỏ',
    category: 'Xu hướng',
    author: 'Lê Minh Tuấn',
    authorAvatar: 'https://i.pravatar.cc/150?img=24',
    blogDate: '25/01/2025',
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Giải pháp nội thất thông minh cho không gian hạn chế.',
    content: `
        <p>Nội thất đa năng như giường gấp, bàn gấp đang rất được ưa chuộng...</p>
      `,
    baseViews: 22,
    views: 0,
  },
  {
    id: 19,
    title: 'Nội Thất Thông Minh Cho Nhà Nhỏ',
    category: 'Xu hướng',
    author: 'Phạm Văn Hải',
    authorAvatar: 'https://i.pravatar.cc/150?img=25',
    blogDate: '22/01/2025',
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Giải pháp nội thất thông minh cho không gian hạn chế.',
    content: `
        <p>Nội thất đa năng như giường gấp, bàn gấp đang rất được ưa chuộng...</p>
      `,
    baseViews: 18,
    views: 0,
  },
  {
    id: 20,
    title: 'Nội Thất Thông Minh Cho Nhà Nhỏ',
    category: 'Xu hướng',
    author: 'Nguyễn Thị Hương',
    authorAvatar: 'https://i.pravatar.cc/150?img=26',
    blogDate: '20/01/2025',
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Giải pháp nội thất thông minh cho không gian hạn chế.',
    content: `
        <p>Nội thất đa năng như giường gấp, bàn gấp đang rất được ưa chuộng...</p>
      `,
    baseViews: 15,
    views: 0,
  },
  {
    id: 21,
    title: '5 Mẹo Chọn Tủ Quần Áo Phù Hợp Với Không Gian Sống Của Bạn',
    category: 'Mẹo thiết kế nội thất',
    author: 'Vũ Hoàng Hà',
    authorAvatar: '../images/avt tac gia/vuhoangha2.jpg',
    blogDate: '01/02/2025',
    authorBio:
      'Với hơn 5 năm kinh nghiệm trong lĩnh vực thiết kế nội thất, Vũ Hoàng Hà đã thực hiện thành công trên 150 dự án, mang đến không gian sống tinh tế và tiện nghi cho hàng trăm khách hàng. Anh nổi bật với phong cách thiết kế hiện đại, kết hợp giữa thẩm mỹ và công năng, luôn đặt trải nghiệm người dùng lên hàng đầu. Hà cam kết đồng hành cùng khách hàng từ ý tưởng đến hiện thực, đảm bảo từng sản phẩm đều đạt chất lượng vượt mong đợi.',
    authorVerified: 'Chuyên gia',
    authorJob: 'Chuyên gia thiết kế nội thất',
    authorExperience: 5,
    authorProjects: 150,
    authorRating: 4.9,
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt:
      'Khám phá 5 mẹo vàng giúp bạn chọn tủ quần áo hoàn hảo, vừa đẹp mắt vừa tối ưu không gian và nhu cầu sử dụng.',
    content: `
      <h2>5 Mẹo Chọn Tủ Quần Áo Phù Hợp Với Không Gian Sống Của Bạn</h2>
      <p>Chọn được một chiếc tủ quần áo phù hợp không chỉ giúp bạn tổ chức không gian sống gọn gàng mà còn nâng tầm thẩm mỹ cho căn phòng. Dưới đây là 5 mẹo chi tiết giúp bạn đưa ra quyết định đúng đắn khi chọn mua tủ quần áo.</p>

      <h3>1. Đo đạc không gian chính xác</h3>
      <p>Trước khi chọn mua tủ quần áo, việc đầu tiên bạn cần làm là đo đạc chính xác diện tích phòng ngủ. Hãy ghi lại chiều dài, chiều rộng và chiều cao của khu vực định đặt tủ. Đừng quên tính đến khoảng không gian cần thiết để mở cửa tủ hoặc kéo ngăn kéo. Nếu phòng nhỏ, hãy cân nhắc tủ âm tường hoặc tủ cánh lùa để tiết kiệm diện tích.</p>
      <img src="https://plus.unsplash.com/premium_photo-1676823547752-1d24e8597047?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Đo đạc không gian phòng ngủ" loading="lazy">

      <h3>2. Lựa chọn chất liệu bền bỉ</h3>
      <p>Chất liệu là yếu tố quyết định độ bền và vẻ đẹp lâu dài của tủ quần áo. Gỗ tự nhiên như gỗ sồi, gỗ óc chó mang lại vẻ đẹp sang trọng và độ bền cao, nhưng giá thành thường cao hơn. Trong khi đó, gỗ công nghiệp như MDF phủ melamine hoặc laminate là lựa chọn phổ biến nhờ giá cả hợp lý, chống cong vênh và đa dạng màu sắc.</p>
      <p><strong>Mẹo:</strong> Nếu bạn sống ở khu vực có độ ẩm cao, hãy chọn gỗ công nghiệp có lớp phủ chống ẩm để tăng tuổi thọ cho sản phẩm.</p>

      <h3>3. Tối ưu hóa thiết kế và công năng</h3>
      <p>Một chiếc tủ quần áo lý tưởng không chỉ đẹp mà còn phải đáp ứng nhu cầu sử dụng. Hãy xác định số lượng quần áo, phụ kiện và vật dụng bạn cần lưu trữ. Tủ có nhiều ngăn kéo, kệ treo, hoặc thanh ngang sẽ giúp bạn dễ dàng phân loại và sắp xếp. Ngoài ra, các thiết kế hiện đại còn tích hợp gương, đèn LED hoặc kệ đa năng, giúp tối ưu hóa trải nghiệm sử dụng.</p>
      <img src="https://plus.unsplash.com/premium_photo-1661777938520-110b62a5537f?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Tủ quần áo thiết kế hiện đại" loading="lazy">

      <h3>4. Phù hợp với phong cách nội thất</h3>
      <p>Tủ quần áo nên hòa hợp với phong cách tổng thể của căn phòng. Nếu phòng ngủ mang phong cách tối giản, hãy chọn tủ có thiết kế đơn giản, màu sắc trung tính như trắng, xám hoặc be. Ngược lại, với phong cách cổ điển, tủ quần áo bằng gỗ tự nhiên với các chi tiết chạm khắc sẽ là điểm nhấn hoàn hảo.</p>
      <p><strong>Lưu ý:</strong> Đừng quên phối màu tủ với các nội thất khác như giường, bàn trang điểm để tạo sự thống nhất.</p>

      <h3>5. Cân nhắc ngân sách và thương hiệu</h3>
      <p>Trước khi mua, hãy xác định ngân sách rõ ràng để thu hẹp lựa chọn. Các thương hiệu nội thất uy tín thường cung cấp sản phẩm chất lượng cao kèm chính sách bảo hành tốt. Nếu bạn muốn tiết kiệm chi phí, hãy tìm kiếm các chương trình khuyến mãi hoặc cân nhắc mua tủ lắp ráp với thiết kế hiện đại.</p>
      <p><strong>Gợi ý:</strong> Đừng chỉ tập trung vào giá rẻ mà bỏ qua chất lượng, vì một chiếc tủ tốt sẽ đồng hành cùng bạn trong nhiều năm.</p>

      <h3>Kết luận</h3>
      <p>Chọn tủ quần áo không chỉ là việc mua sắm mà còn là cách bạn đầu tư cho không gian sống tiện nghi và thẩm mỹ. Hãy áp dụng 5 mẹo trên để tìm được chiếc tủ hoàn hảo cho ngôi nhà của bạn. Nếu cần tư vấn thêm hoặc muốn khám phá các mẫu tủ quần áo hiện đại, hãy liên hệ với chúng tôi ngay hôm nay!</p>

    `,
    baseViews: 290,
    views: 0,
  },
  {
    id: 22,
    title: 'Tương lai của thiết kế nội thất với công nghệ AI',
    category: 'Công nghệ',
    author: 'Vũ Hoàng Hà',
    authorAvatar: '../images/avt tac gia/vuhoangha2.jpg',
    authorBio:
      'Vũ Hoàng Hà là CEO và đồng sáng lập Nội Thất Chất Lượng Bàng Vũ – thương hiệu nổi bật trong lĩnh vực thiết kế và sản xuất nội thất cao cấp tại Việt Nam. Với hơn 15 năm kinh nghiệm, anh đã góp phần kiến tạo hàng trăm không gian sống tối ưu, tinh tế và chuẩn gu khách hàng. Phong cách thiết kế của anh tập trung vào sự hài hoà giữa thẩm mỹ hiện đại và công năng thực tiễn. Bên cạnh vai trò điều hành, anh còn là người truyền cảm hứng cho giới trẻ theo đuổi ngành nội thất. Triết lý của anh là: “Không gian sống đẹp phải vừa tiện dụng, vừa thể hiện được cá tính của chủ nhân.” Anh hiện dẫn dắt đội ngũ Bàng Vũ hướng tới các giải pháp nội thất thông minh và cá nhân hoá cho từng gia đình Việt.',

    authorVerified: 'CEO & Founder',
    authorJob: 'CEO & Đồng sáng lập',
    authorExperience: 15,
    authorProjects: 500,
    authorRating: 5.0,
    blogDate: '23/04/2025',
    image:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    excerpt:
      'Khám phá cách công nghệ AI đang cách mạng hóa ngành thiết kế nội thất và tương lai của không gian sống thông minh.',
    content: `
      <h2>Tương lai của thiết kế nội thất với công nghệ AI</h2>
      <p>Trong thời đại số hóa ngày nay, trí tuệ nhân tạo (AI) đang dần trở thành một công cụ không thể thiếu trong nhiều ngành công nghiệp, và thiết kế nội thất không phải là ngoại lệ. Công nghệ AI đang mở ra những cách tiếp cận mới mẻ và sáng tạo trong việc thiết kế, sản xuất và tối ưu hóa không gian sống.</p>
      <img src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="AI trong thiết kế nội thất" loading="lazy">

      <h3>1. Thiết kế cá nhân hóa với AI</h3>
      <p>Một trong những ứng dụng nổi bật nhất của AI trong thiết kế nội thất là khả năng tạo ra các giải pháp cá nhân hóa. Thông qua việc phân tích dữ liệu về sở thích, thói quen và nhu cầu của người dùng, AI có thể đề xuất những thiết kế phù hợp nhất với từng cá nhân.</p>
      <p>Các công cụ thiết kế dựa trên AI có thể tạo ra hàng trăm phiên bản của một không gian, cho phép người dùng khám phá nhiều lựa chọn và tìm ra giải pháp tối ưu nhất mà có thể họ chưa từng nghĩ đến.</p>

      <h3>2. Mô phỏng 3D và thực tế ảo</h3>
      <p>AI đã cách mạng hóa cách chúng ta trực quan hóa không gian sống trước khi xây dựng. Các công nghệ mô phỏng 3D và thực tế ảo (VR) kết hợp với AI cho phép người dùng "đi" vào không gian sống ảo và trải nghiệm thiết kế trước khi quyết định đầu tư.</p>
      <p>Các thuật toán AI có thể tự động tạo ra mô hình 3D chi tiết từ các bản vẽ 2D, tiết kiệm thời gian và công sức cho các nhà thiết kế. Đồng thời, công nghệ này còn giúp khách hàng hiểu rõ hơn về không gian sống tương lai của họ.</p>
      <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Mô phỏng 3D trong thiết kế nội thất" loading="lazy">

      <h3>3. Tối ưu hóa không gian và công năng</h3>
      <p>AI có khả năng phân tích và tối ưu hóa việc sử dụng không gian dựa trên các yếu tố như luồng di chuyển, ánh sáng tự nhiên, và các yếu tố môi trường khác. Điều này đặc biệt hữu ích trong các không gian nhỏ hoặc có hình dạng khó.</p>
      <p>Các thuật toán AI có thể đề xuất cách bố trí nội thất tối ưu nhất để tối đa hóa không gian sử dụng, đồng thời đảm bảo tính thẩm mỹ và công năng. Đặc biệt, AI có thể cân nhắc giữa nhiều mục tiêu khác nhau như tiết kiệm không gian, tối ưu hóa ánh sáng, và tạo sự thoải mái cho người sử dụng.</p>

      <h3>4. Nhà thông minh và Internet of Things (IoT)</h3>
      <p>AI là trái tim của các hệ thống nhà thông minh, nơi mà nội thất và thiết bị được kết nối với nhau thông qua Internet of Things (IoT). Các hệ thống này có thể học hỏi thói quen của người dùng và tự động điều chỉnh để tạo môi trường sống tối ưu.</p>
      <p>Ví dụ, hệ thống chiếu sáng thông minh có thể tự động điều chỉnh độ sáng dựa trên thời gian trong ngày và hoạt động của người dùng, trong khi hệ thống điều hòa có thể duy trì nhiệt độ lý tưởng dựa trên sở thích cá nhân và điều kiện thời tiết.</p>

      <h3>5. Sản xuất bền vững và tiết kiệm chi phí</h3>
      <p>AI đang giúp cách mạng hóa quá trình sản xuất nội thất, giúp giảm thiểu chất thải và tối ưu hóa việc sử dụng nguyên liệu. Các thuật toán AI có thể tính toán cách cắt vật liệu hiệu quả nhất, giảm thiểu phế liệu và tiết kiệm chi phí.</p>
      <p>Ngoài ra, AI còn giúp dự đoán xu hướng thị trường và nhu cầu của người tiêu dùng, giúp các nhà sản xuất tập trung vào những sản phẩm có tiềm năng thành công cao, giảm thiểu rủi ro và lãng phí.</p>
      <img src="https://i.ytimg.com/vi/2pPg7Rxh5EA/maxresdefault.jpg" alt="Sản xuất nội thất bền vững" loading="lazy">

      <h3>Kết luận</h3>
      <p>Công nghệ AI đang mở ra một kỷ nguyên mới trong thiết kế và sản xuất nội thất, nơi mà sự cá nhân hóa, hiệu quả và bền vững được đặt lên hàng đầu. Tuy nhiên, điều quan trọng là phải nhận thức rằng AI không phải là để thay thế con người, mà là công cụ hỗ trợ để nâng cao khả năng sáng tạo và hiệu quả của các nhà thiết kế.</p>
      <p>Khi công nghệ AI tiếp tục phát triển, chúng ta có thể mong đợi những đột phá mới trong cách chúng ta thiết kế, sản xuất và trải nghiệm không gian sống. Tương lai của thiết kế nội thất với AI không chỉ là về công nghệ, mà còn là về việc tạo ra những không gian sống thông minh hơn, tiện nghi hơn và bền vững hơn cho tất cả mọi người.</p>
    `,
    baseViews: 152,
    views: 0,
  },
];

/**
 * Tính tổng lượt xem của bài viết (baseViews + views)
 * @param {Object} post - Bài viết cần tính tổng lượt xem
 * @returns {number} - Tổng lượt xem
 */
function calculateTotalViews(post) {
  // Lấy dữ liệu lượt xem từ localStorage
  let viewsData = localStorage.getItem('blogPostViews');
  let views = viewsData ? JSON.parse(viewsData) : {};

  // Lấy baseViews từ localStorage
  let baseViewsData = localStorage.getItem('previousBaseViews');
  let baseViews = baseViewsData ? JSON.parse(baseViewsData) : {};

  // Lấy ID bài viết
  const postId = post.id.toString();

  // Tính tổng lượt xem = baseViews + views
  const totalViews =
    (baseViews[postId] || post.baseViews || 0) +
    (views[postId] || post.views || 0);

  return totalViews;
}

// Đồng bộ lượt xem khi tải trang
document.addEventListener('DOMContentLoaded', function () {
  // Gọi hàm đồng bộ lượt xem
  syncViewsWithLocalStorage();
});

// Trang danh sách blog
if (document.getElementById('blog-grid')) {
  // Lọc các bài viết trùng lặp trước khi hiển thị
  removeDuplicatePosts();

  // Đồng bộ lượt xem
  syncViewsWithLocalStorage();

  // Sắp xếp bài viết theo thứ tự giảm dần của ID
  posts.sort((a, b) => {
    // Chuyển đổi ID thành số để so sánh
    const idA = parseInt(a.id);
    const idB = parseInt(b.id);
    return idB - idA; // Sắp xếp giảm dần
  });

  const blogGrid = document.getElementById('blog-grid');
  const pagination = document.getElementById('pagination');
  const categoryFilter = document.getElementById('category');
  const itemsPerPage = 6;
  let currentPage = 1;

  // Hàm lấy tất cả các danh mục duy nhất từ mảng posts
  function getUniqueCategories() {
    const categories = new Set();
    posts.forEach((post) => {
      if (post.category) {
        categories.add(post.category);
      }
    });
    return Array.from(categories).sort(); // Sắp xếp theo thứ tự bảng chữ cái
  }

  // Hàm cập nhật dropdown danh mục
  function updateCategoryDropdown() {
    if (!categoryFilter) return;

    // Lưu lại giá trị đang được chọn
    const selectedValue = categoryFilter.value;

    // Xóa tất cả các tùy chọn hiện tại trừ tùy chọn "Tất cả"
    while (categoryFilter.options.length > 1) {
      categoryFilter.remove(1);
    }

    // Thêm các danh mục duy nhất vào dropdown
    const categories = getUniqueCategories();
    categories.forEach((category) => {
      const option = document.createElement('option');
      option.value = category;
      option.textContent = category;
      categoryFilter.appendChild(option);
    });

    // Khôi phục giá trị đã chọn nếu vẫn còn trong danh sách
    if (selectedValue !== 'all') {
      const exists = Array.from(categoryFilter.options).some(
        (option) => option.value === selectedValue
      );
      categoryFilter.value = exists ? selectedValue : 'all';
    }
  }

  // Cập nhật dropdown danh mục khi trang được tải
  updateCategoryDropdown();

  function renderPosts(posts, page = 1) {
    blogGrid.innerHTML = '';
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedPosts = posts.slice(start, end);

    if (paginatedPosts.length === 0) {
      renderEmptyState();
      return;
    }

    paginatedPosts.forEach((post) => {
      const card = document.createElement('div');
      card.className = 'blog-card';

      // Format date - use blogDate if available, otherwise use current date
      let formattedDate;
      if (post.blogDate) {
        formattedDate = post.blogDate;
      } else {
        const date = new Date();
        formattedDate = date.toLocaleDateString('vi-VN', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        });
      }

      card.innerHTML = `
          <img src="${post.image}" alt="${post.title}" loading="lazy">
          <div class="blog-card-content">
            <span class="blog-card-category">${post.category}</span>
            <h3>${post.title}</h3>
            <div class="blog-card-author">
              <i class="fas fa-user-edit"></i> ${post.author || 'Vũ Hoàng Hà'}
            </div>
            <p>${post.excerpt}</p>
            <div class="blog-card-footer">
              <div class="blog-card-meta">
                <span class="blog-card-date"><i class="far fa-calendar-alt"></i> ${formattedDate}</span>
                <span class="blog-card-views"><i class="far fa-eye"></i> ${calculateTotalViews(
                  post
                )} Lượt xem</span>
              </div>
              <a href="blog-detail.html?id=${
                post.id
              }" class="btn-read-more" data-post-id="${
        post.id
      }">Đọc thêm <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>
        `;
      blogGrid.appendChild(card);
    });

    // Thêm sự kiện click cho các nút "Đọc thêm"
    addReadMoreClickHandlers();

    renderPagination(posts.length);
  }

  // Hàm thêm sự kiện click cho các nút "Đọc thêm"
  function addReadMoreClickHandlers() {
    const readMoreButtons = document.querySelectorAll('.btn-read-more');
    readMoreButtons.forEach((button) => {
      // Xóa các sự kiện click cũ để tránh bị trùng lặp
      const newButton = button.cloneNode(true);
      button.parentNode.replaceChild(newButton, button);

      newButton.addEventListener('click', function () {
        // Lấy ID bài viết từ thuộc tính data-post-id
        const postId = parseInt(this.getAttribute('data-post-id'));
        if (!postId) return;

        // Chuyển postId thành chuỗi để đảm bảo tính nhất quán
        const postIdStr = postId.toString();

        // Tìm bài viết theo ID
        const post = posts.find((p) => p.id === postId);
        if (!post) return;

        // Lấy dữ liệu lượt xem từ localStorage
        let viewsData = localStorage.getItem('blogPostViews');
        let views = viewsData ? JSON.parse(viewsData) : {};

        // Lấy danh sách bài viết đã xem từ localStorage
        let viewedPostsData = localStorage.getItem('viewedBlogPosts');
        let viewedPosts = viewedPostsData ? JSON.parse(viewedPostsData) : {};

        // Lấy baseViews từ localStorage
        let baseViewsData = localStorage.getItem('previousBaseViews');
        let baseViews = baseViewsData ? JSON.parse(baseViewsData) : {};

        // Khởi tạo baseViews nếu chưa có
        if (post.baseViews === undefined) {
          post.baseViews = post.views || 0;
          post.views = 0;
        }

        // Lưu baseViews vào localStorage nếu có thay đổi
        if (!baseViews[postIdStr] || post.baseViews > baseViews[postIdStr]) {
          baseViews[postIdStr] = post.baseViews;
          localStorage.setItem('previousBaseViews', JSON.stringify(baseViews));
        }

        // Tính tổng lượt xem hiện tại
        const currentTotalViews = calculateTotalViews(post);

        // Kiểm tra xem người dùng đã từng xem bài viết này chưa
        if (!viewedPosts[postIdStr]) {
          // Tăng lượt xem lên 1
          post.views = (post.views || 0) + 1;

          // Cập nhật lượt xem trong localStorage
          views[postIdStr] = post.views;
          localStorage.setItem('blogPostViews', JSON.stringify(views));

          // Đánh dấu bài viết đã được xem
          viewedPosts[postIdStr] = true;
          localStorage.setItem('viewedBlogPosts', JSON.stringify(viewedPosts));

          // Tính tổng lượt xem mới
          const newTotalViews = calculateTotalViews(post);

          console.log(
            `Tăng lượt xem cho bài viết ID ${postIdStr} lên ${post.views} (tổng: ${newTotalViews})`
          );
        } else {
          console.log(
            `Người dùng đã xem bài viết ID ${postIdStr} trước đó, giữ nguyên lượt xem: ${post.views} (tổng: ${currentTotalViews})`
          );
        }

        // Cho phép sự kiện click tiếp tục xảy ra (chuyển trang)
      });
    });
  }

  function renderPagination(totalItems) {
    pagination.innerHTML = '';
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Không cần phân trang nếu chỉ có 1 trang
    if (totalPages <= 1) {
      updatePostCount(totalItems);
      return;
    }

    // Số trang hiển thị mỗi bên của trang hiện tại
    const visiblePages = 2;

    // Thêm nút Previous
    if (currentPage > 1) {
      const prevBtn = document.createElement('button');
      prevBtn.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
      prevBtn.className = 'nav-btn';
      prevBtn.onclick = () => {
        currentPage--;
        renderPosts(getFilteredPosts(), currentPage);
      };
      pagination.appendChild(prevBtn);
    }

    // Xác định trang bắt đầu và kết thúc để hiển thị
    let startPage = Math.max(1, currentPage - visiblePages);
    let endPage = Math.min(totalPages, currentPage + visiblePages);

    // Điều chỉnh để luôn hiển thị đủ số trang cần thiết
    if (endPage - startPage < visiblePages * 2) {
      if (currentPage < totalPages / 2) {
        endPage = Math.min(totalPages, startPage + visiblePages * 2);
      } else {
        startPage = Math.max(1, endPage - visiblePages * 2);
      }
    }

    // Hiển thị nút trang đầu và dấu ...
    if (startPage > 1) {
      const firstBtn = document.createElement('button');
      firstBtn.textContent = '1';
      firstBtn.onclick = () => {
        currentPage = 1;
        renderPosts(getFilteredPosts(), 1);
      };
      pagination.appendChild(firstBtn);

      if (startPage > 2) {
        const ellipsis = document.createElement('span');
        ellipsis.textContent = '...';
        ellipsis.className = 'ellipsis';
        pagination.appendChild(ellipsis);
      }
    }

    // Hiển thị các nút trang
    for (let i = startPage; i <= endPage; i++) {
      const btn = document.createElement('button');
      btn.textContent = i;
      btn.onclick = () => {
        currentPage = i;
        renderPosts(getFilteredPosts(), i);
      };
      if (i === currentPage) btn.className = 'active';
      pagination.appendChild(btn);
    }

    // Hiển thị dấu ... và nút trang cuối
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        const ellipsis = document.createElement('span');
        ellipsis.textContent = '...';
        ellipsis.className = 'ellipsis';
        pagination.appendChild(ellipsis);
      }

      const lastBtn = document.createElement('button');
      lastBtn.textContent = totalPages;
      lastBtn.onclick = () => {
        currentPage = totalPages;
        renderPosts(getFilteredPosts(), totalPages);
      };
      pagination.appendChild(lastBtn);
    }

    // Thêm nút Next
    if (currentPage < totalPages) {
      const nextBtn = document.createElement('button');
      nextBtn.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
      nextBtn.className = 'nav-btn';
      nextBtn.onclick = () => {
        currentPage++;
        renderPosts(getFilteredPosts(), currentPage);
      };
      pagination.appendChild(nextBtn);
    }

    // Update post count
    updatePostCount(totalItems);
  }

  function updatePostCount(totalItems) {
    const postCount = document.getElementById('post-count');
    if (postCount) {
      const start = (currentPage - 1) * itemsPerPage + 1;
      const end = Math.min(currentPage * itemsPerPage, totalItems);

      if (totalItems === 0) {
        postCount.innerHTML = 'Không tìm thấy bài viết nào';
      } else {
        // On mobile, show simplified count
        if (window.innerWidth <= 576) {
          postCount.innerHTML = `Hiển thị <span>${totalItems}</span> bài viết`;
        } else {
          postCount.innerHTML = `Hiển thị <span>${start} - ${end}</span> trên tổng số <span>${totalItems}</span> bài viết`;
        }
      }
    }
  }

  function renderEmptyState() {
    // Check if we're on mobile
    const isMobile = window.innerWidth <= 576;

    // Create a more responsive and visually appealing empty state
    blogGrid.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon-container">
          <i class="fas fa-newspaper"></i>
        </div>
        <h3>Không tìm thấy bài viết nào</h3>
        <p>${
          isMobile
            ? 'Không có bài viết nào phù hợp với tiêu chí tìm kiếm.'
            : 'Không có bài viết nào phù hợp với tiêu chí tìm kiếm của bạn. Vui lòng thử lại với các bộ lọc khác.'
        }</p>
        <button onclick="resetFilters()" class="reset-filters-btn">
          <i class="fas fa-sync-alt"></i> Xem tất cả bài viết
        </button>
      </div>
    `;

    // Hide pagination when no posts
    if (pagination) {
      pagination.innerHTML = '';
    }

    // Update post count
    updatePostCount(0);
  }

  function getFilteredPosts() {
    let filtered = posts;
    const category = categoryFilter.value;
    if (category !== 'all') {
      filtered = filtered.filter((p) => p.category === category);
    }
    return filtered;
  }

  function resetFilters() {
    // Reset category filter to 'all'
    categoryFilter.value = 'all';

    // Reset to page 1 and render all posts
    currentPage = 1;
    renderPosts(posts, 1);

    // Scroll to top of blog section
    document
      .querySelector('.blog')
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  categoryFilter.onchange = () => {
    currentPage = 1;
    renderPosts(getFilteredPosts(), 1);
  };

  // Add CSS for empty state
  const style = document.createElement('style');
  style.textContent = `
    .empty-state {
      text-align: center;
      padding: 60px 30px;
      background: var(--blog-white);
      border-radius: var(--blog-border-radius);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08), 0 5px 15px rgba(0, 0, 0, 0.05);
      margin: 40px auto;
      max-width: 600px;
      position: relative;
      overflow: hidden;
      border: 1px solid rgba(0, 0, 0, 0.05);
      transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
      transform: translateY(0);
      animation: empty-state-appear 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .empty-state::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, var(--blog-primary), var(--blog-secondary));
      border-radius: var(--blog-border-radius) var(--blog-border-radius) 0 0;
    }

    .empty-state::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at center, rgba(249, 115, 22, 0.03) 0%, transparent 70%);
      z-index: 0;
      opacity: 0.8;
    }

    @keyframes empty-state-appear {
      0% {
        opacity: 0;
        transform: translateY(30px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .empty-state-icon-container {
      position: relative;
      width: 120px;
      height: 120px;
      margin: 0 auto 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(249, 115, 22, 0.05);
      border-radius: 50%;
      z-index: 1;
    }

    .empty-state-icon-container::before {
      content: '';
      position: absolute;
      top: -8px;
      left: -8px;
      right: -8px;
      bottom: -8px;
      border-radius: 50%;
      background: linear-gradient(135deg, rgba(249, 115, 22, 0.2), rgba(0, 88, 221, 0.2));
      z-index: -1;
      opacity: 0.5;
      animation: rotate-gradient 8s linear infinite;
    }

    @keyframes rotate-gradient {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    .empty-state i {
      font-size: 3.5rem;
      color: var(--blog-primary);
      position: relative;
      z-index: 2;
      animation: float 3s ease-in-out infinite;
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    .empty-state h3 {
      font-family: var(--blog-font-heading);
      font-size: 1.8rem;
      color: var(--blog-text);
      margin-bottom: 15px;
      position: relative;
      display: inline-block;
      z-index: 1;
    }

    .empty-state h3::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      height: 2px;
      background: linear-gradient(90deg, var(--blog-primary), var(--blog-secondary));
      border-radius: 2px;
    }

    .empty-state p {
      color: var(--blog-text-light);
      margin-bottom: 30px;
      line-height: 1.6;
      font-size: 1.1rem;
      max-width: 80%;
      margin-left: auto;
      margin-right: auto;
      position: relative;
      z-index: 1;
    }

    .empty-state button {
      padding: 12px 28px;
      background: var(--blog-primary);
      color: var(--blog-white);
      border: none;
      border-radius: 50px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      position: relative;
      overflow: hidden;
      z-index: 1;
      box-shadow: 0 6px 15px rgba(249, 115, 22, 0.25);
    }

    .empty-state button::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, var(--blog-primary), var(--blog-primary-dark));
      z-index: -1;
      transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .empty-state button::after {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0) 100%);
      transform: rotate(30deg);
      opacity: 0;
      transition: opacity 0.6s, transform 0.6s;
      z-index: 0;
    }

    .empty-state button:hover {
      background: transparent;
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(249, 115, 22, 0.3);
    }

    .empty-state button:hover::before {
      background: linear-gradient(90deg, var(--blog-primary-dark), var(--blog-primary));
    }

    .empty-state button:hover::after {
      opacity: 1;
      transform: rotate(30deg) translate(120%, -60%);
      transition: transform 0.8s;
    }

    .empty-state button i {
      font-size: 1rem;
      animation: spin 2s linear infinite;
      margin: 0;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    .reset-filters-btn {
      animation: pulse-button 2s infinite;
    }

    @keyframes pulse-button {
      0% {
        box-shadow: 0 6px 15px rgba(249, 115, 22, 0.25);
      }
      70% {
        box-shadow: 0 0 0 15px rgba(249, 115, 22, 0);
      }
      100% {
        box-shadow: 0 6px 15px rgba(249, 115, 22, 0.25);
      }
    }

    .blog-card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 15px;
      border-top: 1px solid var(--blog-border);
      position: relative;
    }

    .blog-card-author {
      display: flex;
      align-items: center;
      margin: -5px 0 10px;
      font-size: 0.9rem;
      color: var(--blog-secondary);
      font-weight: 500;
      background: var(--blog-secondary-light);
      padding: 6px 12px;
      border-radius: 20px;
      width: fit-content;
      transition: all 0.3s ease;
      height: 20px; /* Fixed height for author section */
    }

    .blog-card-author i {
      margin-right: 6px;
      font-size: 0.85rem;
      color: var(--blog-secondary);
    }

    .blog-card:hover .blog-card-author {
      transform: translateY(-2px);
      box-shadow: 0 3px 10px rgba(0, 88, 221, 0.1);
    }

    .blog-card-meta {
      display: flex;
      align-items: center;
      gap: 15px;
      background: var(--blog-light);
      padding: 8px 12px;
      border-radius: 30px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
    }

    .blog-card-meta:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transform: translateY(-2px);
    }

    .blog-card-date, .blog-card-views {
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--blog-text-light);
      display: flex;
      align-items: center;
      transition: all 0.3s ease;
    }

    .blog-card-date i, .blog-card-views i {
      margin-right: 5px;
      font-size: 0.9rem;
    }

    .blog-card-date i {
      color: var(--blog-secondary);
    }

    .blog-card-views i {
      color: var(--blog-primary);
    }

    .blog-card-views {
      position: relative;
      padding-left: 15px;
    }

    .blog-card-views::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      height: 12px;
      width: 1px;
      background-color: var(--blog-border);
    }

    .btn-read-more {
      display: inline-flex;
      align-items: center;
      padding: 10px 20px;
      background: linear-gradient(135deg, var(--blog-primary), var(--blog-primary-dark));
      color: var(--blog-white);
      font-weight: 600;
      border-radius: 30px;
      text-decoration: none;
      transition: all 0.3s ease;
      border: none;
      box-shadow: 0 4px 10px rgba(249, 115, 22, 0.2);
      position: relative;
      overflow: hidden;
      z-index: 1;
    }

    .btn-read-more::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, var(--blog-primary-dark), var(--blog-primary));
      opacity: 0;
      z-index: -1;
      transition: opacity 0.3s ease;
    }

    .btn-read-more:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 15px rgba(249, 115, 22, 0.3);
    }

    .btn-read-more:hover::before {
      opacity: 1;
    }

    .btn-read-more i {
      margin-left: 8px;
      transition: transform 0.3s ease;
    }

    .btn-read-more:hover i {
      transform: translateX(4px);
    }

    @media (max-width: 576px) {
      .empty-state {
        padding: 40px 20px;
        margin: 30px auto;
      }

      .empty-state-icon-container {
        width: 90px;
        height: 90px;
        margin-bottom: 20px;
      }

      .empty-state i {
        font-size: 2.8rem;
      }

      .empty-state h3 {
        font-size: 1.4rem;
        margin-bottom: 12px;
      }

      .empty-state h3::after {
        width: 40px;
        bottom: -4px;
      }

      .empty-state p {
        font-size: 0.95rem;
        margin-bottom: 25px;
        max-width: 95%;
      }

      .empty-state button {
        padding: 10px 22px;
        font-size: 0.9rem;
        border-radius: 30px;
      }

      .blog-card-author {
        font-size: 0.85rem;
        padding: 5px 10px;
        margin-bottom: 8px;
      }

      .blog-card-meta {
        flex-direction: row;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        padding: 6px 10px;
      }

      .blog-card-views::before {
        display: none;
      }

      .blog-card-views {
        padding-left: 0;
      }

      .blog-card-footer {
        flex-direction: column;
        gap: 15px;
      }

      .btn-read-more {
        width: 100%;
        justify-content: center;
        padding: 12px 20px;
      }
    }
  `;
  document.head.appendChild(style);

  renderPosts(posts, 1);
}

// Trang chi tiết blog
if (document.getElementById('post-title')) {
  const postTitle = document.getElementById('post-title');
  const postImage = document.getElementById('post-image');
  const postContent = document.getElementById('post-content');
  const relatedProducts = document.getElementById('related-products');
  const relatedPosts = document.getElementById('related-posts');
  const urlParams = new URLSearchParams(window.location.search);
  const postId = parseInt(urlParams.get('id'));

  const post = posts.find((p) => p.id === postId);
  if (post) {
    postTitle.textContent = post.title;
    postImage.src = post.image;
    postImage.alt = post.title;
    postContent.innerHTML = post.content;

    // Render sản phẩm liên quan
    relatedProducts.innerHTML = '';

    // Kiểm tra xem biến products có tồn tại không
    if (typeof products !== 'undefined' && Array.isArray(products)) {
      post.relatedProducts.forEach((productId) => {
        const product = products.find((p) => p.id === productId);
        if (product) {
          const card = document.createElement('div');
          card.className = 'card';
          card.innerHTML = `
              <img src="${product.image}" alt="${product.name}" loading="lazy">
              <h4>${product.name}</h4>
              ${
                product.promotion
                  ? `<span class="promo-badge">${product.promotion}</span>`
                  : ''
              }
              <a href="product-details.html?id=${
                product.id
              }" class="btn-details">Xem chi tiết</a>
            `;
          relatedProducts.appendChild(card);
        }
      });
    } else {
      // Nếu không có dữ liệu sản phẩm, hiển thị thông báo
      relatedProducts.innerHTML = '<p>Không có sản phẩm liên quan.</p>';
    }

    // Render bài viết liên quan
    relatedPosts.innerHTML = '';
    const related = posts
      .filter((p) => p.id !== postId && p.category === post.category)
      // Sắp xếp theo thứ tự ID giảm dần
      .sort((a, b) => {
        const idA = parseInt(a.id);
        const idB = parseInt(b.id);
        return idB - idA; // Sắp xếp giảm dần
      })
      .slice(0, 3);
    related.forEach((p) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
          <img src="${p.image}" alt="${p.title}" loading="lazy">
          <h4>${p.title}</h4>
          <a href="blog-detail.html?id=${p.id}" class="btn-read-more">Đọc thêm</a>
        `;
      relatedPosts.appendChild(card);
    });
  } else {
    postContent.innerHTML = '<p>Bài viết không tồn tại.</p>';
  }
}
