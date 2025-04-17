// Hàm để tự động tăng lượt xem mỗi ngày
function autoIncreaseViews() {
  // Lấy ngày hiện tại
  const today = new Date().toLocaleDateString();

  // Kiểm tra xem đã tăng lượt xem hôm nay chưa
  const lastUpdated = localStorage.getItem('lastViewsUpdate');

  // Nếu chưa tăng lượt xem hôm nay
  if (lastUpdated !== today) {
    // Lấy dữ liệu lượt xem từ localStorage
    let viewsData = localStorage.getItem('blogPostViews');
    let views = viewsData ? JSON.parse(viewsData) : {};

    // Tăng lượt xem cho mỗi bài viết
    posts.forEach((post) => {
      const postId = post.id;
      views[postId] = (views[postId] || 0) + 5;
    });

    // Lưu lại vào localStorage
    localStorage.setItem('blogPostViews', JSON.stringify(views));
    localStorage.setItem('lastViewsUpdate', today);
  }

  // Cập nhật lượt xem vào dữ liệu bài viết
  const viewsData = localStorage.getItem('blogPostViews');
  if (viewsData) {
    const views = JSON.parse(viewsData);
    posts.forEach((post) => {
      post.views = views[post.id] || 0;
    });
  }
}

const posts = [
  {
    id: 1,
    title: '5 Mẹo Chọn Tủ Quần Áo Phù Hợp',
    category: 'Mẹo thiết kế',
    author: 'Vũ Hoàng Hà',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt:
      'Tìm hiểu cách chọn tủ quần áo phù hợp với không gian và nhu cầu của bạn.',
    content: `
        <p><strong>1. Đo đạc không gian:</strong> Hãy đảm bảo đo chính xác diện tích phòng trước khi mua.</p>
        <p><strong>2. Chọn chất liệu bền:</strong> Gỗ MDF hoặc gỗ tự nhiên là lựa chọn tốt.</p>
        <p><strong>3. Tối ưu thiết kế:</strong> Tủ có ngăn kéo hoặc kệ sẽ tiện lợi hơn.</p>
        <img src="images/blog/post-1b.jpg" alt="Tủ quần áo" loading="lazy">
        <p>Liên hệ với chúng tôi để được tư vấn chi tiết!</p>
      `,
    relatedProducts: [1, 2, 3],
    views: 261, // Khởi tạo lượt xem
  },
  {
    id: 2,
    title: 'Xu Hướng Nội Thất 2025',
    category: 'Xu hướng',
    author: 'Trần Thị Hương',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Khám phá các xu hướng nội thất mới nhất cho năm 2025.',
    content: `
        <p>Năm 2025, nội thất tối giản và bền vững sẽ lên ngôi...</p>
        <p><strong>Màu sắc:</strong> Tông màu trung tính kết hợp điểm nhấn cam.</p>
      `,
    relatedProducts: [4, 5],
    views: 0,
  },
  {
    id: 3,
    title: 'Dự Án Phòng Ngủ Hiện Đại',
    category: 'Dự án',
    author: 'Lê Văn Bình',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Xem dự án phòng ngủ chúng tôi đã thực hiện cho khách hàng.',
    content: `
        <p>Phòng ngủ này sử dụng giường gỗ tự nhiên và tủ quần áo đa năng...</p>
        <img src="images/blog/post-3b.jpg" alt="Phòng ngủ" loading="lazy">
      `,
    relatedProducts: [8, 1],
    views: 0,
  },
  {
    id: 4,
    title: 'Cách Bố Trí Tủ Bếp Tiết Kiệm Không Gian',
    category: 'Mẹo thiết kế',
    author: 'Phạm Thị Mai',
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Mẹo bố trí tủ bếp để tối ưu diện tích căn bếp nhỏ.',
    content: `
        <p><strong>1. Sử dụng tủ góc:</strong> Tận dụng góc bếp hiệu quả.</p>
        <p><strong>2. Kệ treo:</strong> Tăng không gian lưu trữ.</p>
      `,
    relatedProducts: [2],
    views: 0,
  },
  {
    id: 5,
    title: 'Nội Thất Thông Minh Cho Nhà Nhỏ',
    category: 'Xu hướng',
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Giải pháp nội thất thông minh cho không gian hạn chế.',
    content: `
        <p>Nội thất đa năng như giường gấp, bàn gấp đang rất được ưa chuộng...</p>
      `,
    relatedProducts: [6, 7],
  },

  {
    id: 1,
    title: '5 Mẹo Chọn Tủ Quần Áo Phù Hợp',
    category: 'Mẹo thiết kế',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt:
      'Tìm hiểu cách chọn tủ quần áo phù hợp với không gian và nhu cầu của bạn.',
    content: `
            <p><strong>1. Đo đạc không gian:</strong> Hãy đảm bảo đo chính xác diện tích phòng trước khi mua.</p>
            <p><strong>2. Chọn chất liệu bền:</strong> Gỗ MDF hoặc gỗ tự nhiên là lựa chọn tốt.</p>
            <p><strong>3. Tối ưu thiết kế:</strong> Tủ có ngăn kéo hoặc kệ sẽ tiện lợi hơn.</p>
            <img src="images/blog/post-1b.jpg" alt="Tủ quần áo" loading="lazy">
            <p>Liên hệ với chúng tôi để được tư vấn chi tiết!</p>
          `,
    relatedProducts: [1, 2, 3],
  },
  {
    id: 2,
    title: 'Xu Hướng Nội Thất 2025',
    category: 'Xu hướng',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Khám phá các xu hướng nội thất mới nhất cho năm 2025.',
    content: `
            <p>Năm 2025, nội thất tối giản và bền vững sẽ lên ngôi...</p>
            <p><strong>Màu sắc:</strong> Tông màu trung tính kết hợp điểm nhấn cam.</p>
          `,
    relatedProducts: [4, 5],
  },
  {
    id: 3,
    title: 'Dự Án Phòng Ngủ Hiện Đại',
    category: 'Dự án',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Xem dự án phòng ngủ chúng tôi đã thực hiện cho khách hàng.',
    content: `
            <p>Phòng ngủ này sử dụng giường gỗ tự nhiên và tủ quần áo đa năng...</p>
            <img src="images/blog/post-3b.jpg" alt="Phòng ngủ" loading="lazy">
          `,
    relatedProducts: [8, 1],
  },
  {
    id: 4,
    title: 'Cách Bố Trí Tủ Bếp Tiết Kiệm Không Gian',
    category: 'Mẹo thiết kế',
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Mẹo bố trí tủ bếp để tối ưu diện tích căn bếp nhỏ.',
    content: `
            <p><strong>1. Sử dụng tủ góc:</strong> Tận dụng góc bếp hiệu quả.</p>
            <p><strong>2. Kệ treo:</strong> Tăng không gian lưu trữ.</p>
          `,
    relatedProducts: [2],
  },
  {
    id: 5,
    title: 'Nội Thất Thông Minh Cho Nhà Nhỏ',
    category: 'Xu hướng',
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Giải pháp nội thất thông minh cho không gian hạn chế.',
    content: `
            <p>Nội thất đa năng như giường gấp, bàn gấp đang rất được ưa chuộng...</p>
          `,
    relatedProducts: [6, 7],
  },
  {
    id: 1,
    title: '5 Mẹo Chọn Tủ Quần Áo Phù Hợp',
    category: 'Mẹo thiết kế',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt:
      'Tìm hiểu cách chọn tủ quần áo phù hợp với không gian và nhu cầu của bạn.',
    content: `
            <p><strong>1. Đo đạc không gian:</strong> Hãy đảm bảo đo chính xác diện tích phòng trước khi mua.</p>
            <p><strong>2. Chọn chất liệu bền:</strong> Gỗ MDF hoặc gỗ tự nhiên là lựa chọn tốt.</p>
            <p><strong>3. Tối ưu thiết kế:</strong> Tủ có ngăn kéo hoặc kệ sẽ tiện lợi hơn.</p>
            <img src="images/blog/post-1b.jpg" alt="Tủ quần áo" loading="lazy">
            <p>Liên hệ với chúng tôi để được tư vấn chi tiết!</p>
          `,
    relatedProducts: [1, 2, 3],
  },
  {
    id: 2,
    title: 'Xu Hướng Nội Thất 2025',
    category: 'Xu hướng',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Khám phá các xu hướng nội thất mới nhất cho năm 2025.',
    content: `
            <p>Năm 2025, nội thất tối giản và bền vững sẽ lên ngôi...</p>
            <p><strong>Màu sắc:</strong> Tông màu trung tính kết hợp điểm nhấn cam.</p>
          `,
    relatedProducts: [4, 5],
  },
  {
    id: 3,
    title: 'Dự Án Phòng Ngủ Hiện Đại',
    category: 'Dự án',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Xem dự án phòng ngủ chúng tôi đã thực hiện cho khách hàng.',
    content: `
            <p>Phòng ngủ này sử dụng giường gỗ tự nhiên và tủ quần áo đa năng...</p>
            <img src="images/blog/post-3b.jpg" alt="Phòng ngủ" loading="lazy">
          `,
    relatedProducts: [8, 1],
  },
  {
    id: 4,
    title: 'Cách Bố Trí Tủ Bếp Tiết Kiệm Không Gian',
    category: 'Mẹo thiết kế',
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Mẹo bố trí tủ bếp để tối ưu diện tích căn bếp nhỏ.',
    content: `
            <p><strong>1. Sử dụng tủ góc:</strong> Tận dụng góc bếp hiệu quả.</p>
            <p><strong>2. Kệ treo:</strong> Tăng không gian lưu trữ.</p>
          `,
    relatedProducts: [2],
  },
  {
    id: 5,
    title: 'Nội Thất Thông Minh Cho Nhà Nhỏ',
    category: 'Xu hướng',
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Giải pháp nội thất thông minh cho không gian hạn chế.',
    content: `
            <p>Nội thất đa năng như giường gấp, bàn gấp đang rất được ưa chuộng...</p>
          `,
    relatedProducts: [6, 7],
  },
  {
    id: 1,
    title: '5 Mẹo Chọn Tủ Quần Áo Phù Hợp',
    category: 'Mẹo thiết kế',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt:
      'Tìm hiểu cách chọn tủ quần áo phù hợp với không gian và nhu cầu của bạn.',
    content: `
            <p><strong>1. Đo đạc không gian:</strong> Hãy đảm bảo đo chính xác diện tích phòng trước khi mua.</p>
            <p><strong>2. Chọn chất liệu bền:</strong> Gỗ MDF hoặc gỗ tự nhiên là lựa chọn tốt.</p>
            <p><strong>3. Tối ưu thiết kế:</strong> Tủ có ngăn kéo hoặc kệ sẽ tiện lợi hơn.</p>
            <img src="images/blog/post-1b.jpg" alt="Tủ quần áo" loading="lazy">
            <p>Liên hệ với chúng tôi để được tư vấn chi tiết!</p>
          `,
    relatedProducts: [1, 2, 3],
  },
  {
    id: 2,
    title: 'Xu Hướng Nội Thất 2025',
    category: 'Xu hướng',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Khám phá các xu hướng nội thất mới nhất cho năm 2025.',
    content: `
            <p>Năm 2025, nội thất tối giản và bền vững sẽ lên ngôi...</p>
            <p><strong>Màu sắc:</strong> Tông màu trung tính kết hợp điểm nhấn cam.</p>
          `,
    relatedProducts: [4, 5],
  },
  {
    id: 3,
    title: 'Dự Án Phòng Ngủ Hiện Đại',
    category: 'Dự án',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Xem dự án phòng ngủ chúng tôi đã thực hiện cho khách hàng.',
    content: `
            <p>Phòng ngủ này sử dụng giường gỗ tự nhiên và tủ quần áo đa năng...</p>
            <img src="images/blog/post-3b.jpg" alt="Phòng ngủ" loading="lazy">
          `,
    relatedProducts: [8, 1],
  },
  {
    id: 4,
    title: 'Cách Bố Trí Tủ Bếp Tiết Kiệm Không Gian',
    category: 'Mẹo thiết kế',
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Mẹo bố trí tủ bếp để tối ưu diện tích căn bếp nhỏ.',
    content: `
            <p><strong>1. Sử dụng tủ góc:</strong> Tận dụng góc bếp hiệu quả.</p>
            <p><strong>2. Kệ treo:</strong> Tăng không gian lưu trữ.</p>
          `,
    relatedProducts: [2],
  },
  {
    id: 5,
    title: 'Nội Thất Thông Minh Cho Nhà Nhỏ',
    category: 'Xu hướng',
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Giải pháp nội thất thông minh cho không gian hạn chế.',
    content: `
            <p>Nội thất đa năng như giường gấp, bàn gấp đang rất được ưa chuộng...</p>
          `,
    relatedProducts: [6, 7],
  },
  {
    id: 1,
    title: '5 Mẹo Chọn Tủ Quần Áo Phù Hợp',
    category: 'Mẹo thiết kế',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt:
      'Tìm hiểu cách chọn tủ quần áo phù hợp với không gian và nhu cầu của bạn.',
    content: `
            <p><strong>1. Đo đạc không gian:</strong> Hãy đảm bảo đo chính xác diện tích phòng trước khi mua.</p>
            <p><strong>2. Chọn chất liệu bền:</strong> Gỗ MDF hoặc gỗ tự nhiên là lựa chọn tốt.</p>
            <p><strong>3. Tối ưu thiết kế:</strong> Tủ có ngăn kéo hoặc kệ sẽ tiện lợi hơn.</p>
            <img src="images/blog/post-1b.jpg" alt="Tủ quần áo" loading="lazy">
            <p>Liên hệ với chúng tôi để được tư vấn chi tiết!</p>
          `,
    relatedProducts: [1, 2, 3],
  },
  {
    id: 2,
    title: 'Xu Hướng Nội Thất 2025',
    category: 'Xu hướng',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Khám phá các xu hướng nội thất mới nhất cho năm 2025.',
    content: `
            <p>Năm 2025, nội thất tối giản và bền vững sẽ lên ngôi...</p>
            <p><strong>Màu sắc:</strong> Tông màu trung tính kết hợp điểm nhấn cam.</p>
          `,
    relatedProducts: [4, 5],
  },
  {
    id: 3,
    title: 'Dự Án Phòng Ngủ Hiện Đại',
    category: 'Dự án',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Xem dự án phòng ngủ chúng tôi đã thực hiện cho khách hàng.',
    content: `
            <p>Phòng ngủ này sử dụng giường gỗ tự nhiên và tủ quần áo đa năng...</p>
            <img src="images/blog/post-3b.jpg" alt="Phòng ngủ" loading="lazy">
          `,
    relatedProducts: [8, 1],
  },
  {
    id: 4,
    title: 'Cách Bố Trí Tủ Bếp Tiết Kiệm Không Gian',
    category: 'Mẹo thiết kế',
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Mẹo bố trí tủ bếp để tối ưu diện tích căn bếp nhỏ.',
    content: `
            <p><strong>1. Sử dụng tủ góc:</strong> Tận dụng góc bếp hiệu quả.</p>
            <p><strong>2. Kệ treo:</strong> Tăng không gian lưu trữ.</p>
          `,
    relatedProducts: [2],
  },
  {
    id: 5,
    title: 'Nội Thất Thông Minh Cho Nhà Nhỏ',
    category: 'Xu hướng',
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Giải pháp nội thất thông minh cho không gian hạn chế.',
    content: `
            <p>Nội thất đa năng như giường gấp, bàn gấp đang rất được ưa chuộng...</p>
          `,
    relatedProducts: [6, 7],
  },
  {
    id: 1,
    title: '5 Mẹo Chọn Tủ Quần Áo Phù Hợp',
    category: 'Mẹo thiết kế',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt:
      'Tìm hiểu cách chọn tủ quần áo phù hợp với không gian và nhu cầu của bạn.',
    content: `
            <p><strong>1. Đo đạc không gian:</strong> Hãy đảm bảo đo chính xác diện tích phòng trước khi mua.</p>
            <p><strong>2. Chọn chất liệu bền:</strong> Gỗ MDF hoặc gỗ tự nhiên là lựa chọn tốt.</p>
            <p><strong>3. Tối ưu thiết kế:</strong> Tủ có ngăn kéo hoặc kệ sẽ tiện lợi hơn.</p>
            <img src="images/blog/post-1b.jpg" alt="Tủ quần áo" loading="lazy">
            <p>Liên hệ với chúng tôi để được tư vấn chi tiết!</p>
          `,
    relatedProducts: [1, 2, 3],
  },
  {
    id: 2,
    title: 'Xu Hướng Nội Thất 2025',
    category: 'Xu hướng',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Khám phá các xu hướng nội thất mới nhất cho năm 2025.',
    content: `
            <p>Năm 2025, nội thất tối giản và bền vững sẽ lên ngôi...</p>
            <p><strong>Màu sắc:</strong> Tông màu trung tính kết hợp điểm nhấn cam.</p>
          `,
    relatedProducts: [4, 5],
  },
  {
    id: 3,
    title: 'Dự Án Phòng Ngủ Hiện Đại',
    category: 'Dự án',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Xem dự án phòng ngủ chúng tôi đã thực hiện cho khách hàng.',
    content: `
            <p>Phòng ngủ này sử dụng giường gỗ tự nhiên và tủ quần áo đa năng...</p>
            <img src="images/blog/post-3b.jpg" alt="Phòng ngủ" loading="lazy">
          `,
    relatedProducts: [8, 1],
  },
  {
    id: 4,
    title: 'Cách Bố Trí Tủ Bếp Tiết Kiệm Không Gian',
    category: 'Mẹo thiết kế',
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Mẹo bố trí tủ bếp để tối ưu diện tích căn bếp nhỏ.',
    content: `
            <p><strong>1. Sử dụng tủ góc:</strong> Tận dụng góc bếp hiệu quả.</p>
            <p><strong>2. Kệ treo:</strong> Tăng không gian lưu trữ.</p>
          `,
    relatedProducts: [2],
  },
  {
    id: 5,
    title: 'Nội Thất Thông Minh Cho Nhà Nhỏ',
    category: 'Xu hướng',
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Giải pháp nội thất thông minh cho không gian hạn chế.',
    content: `
            <p>Nội thất đa năng như giường gấp, bàn gấp đang rất được ưa chuộng...</p>
          `,
    relatedProducts: [6, 7],
  },
  {
    id: 1,
    title: '5 Mẹo Chọn Tủ Quần Áo Phù Hợp',
    category: 'Mẹo thiết kế',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt:
      'Tìm hiểu cách chọn tủ quần áo phù hợp với không gian và nhu cầu của bạn.',
    content: `
            <p><strong>1. Đo đạc không gian:</strong> Hãy đảm bảo đo chính xác diện tích phòng trước khi mua.</p>
            <p><strong>2. Chọn chất liệu bền:</strong> Gỗ MDF hoặc gỗ tự nhiên là lựa chọn tốt.</p>
            <p><strong>3. Tối ưu thiết kế:</strong> Tủ có ngăn kéo hoặc kệ sẽ tiện lợi hơn.</p>
            <img src="images/blog/post-1b.jpg" alt="Tủ quần áo" loading="lazy">
            <p>Liên hệ với chúng tôi để được tư vấn chi tiết!</p>
          `,
    relatedProducts: [1, 2, 3],
  },
  {
    id: 2,
    title: 'Xu Hướng Nội Thất 2025',
    category: 'Xu hướng',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Khám phá các xu hướng nội thất mới nhất cho năm 2025.',
    content: `
            <p>Năm 2025, nội thất tối giản và bền vững sẽ lên ngôi...</p>
            <p><strong>Màu sắc:</strong> Tông màu trung tính kết hợp điểm nhấn cam.</p>
          `,
    relatedProducts: [4, 5],
  },
  {
    id: 3,
    title: 'Dự Án Phòng Ngủ Hiện Đại',
    category: 'Dự án',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Xem dự án phòng ngủ chúng tôi đã thực hiện cho khách hàng.',
    content: `
            <p>Phòng ngủ này sử dụng giường gỗ tự nhiên và tủ quần áo đa năng...</p>
            <img src="images/blog/post-3b.jpg" alt="Phòng ngủ" loading="lazy">
          `,
    relatedProducts: [8, 1],
  },
  {
    id: 4,
    title: 'Cách Bố Trí Tủ Bếp Tiết Kiệm Không Gian',
    category: 'Mẹo thiết kế',
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Mẹo bố trí tủ bếp để tối ưu diện tích căn bếp nhỏ.',
    content: `
            <p><strong>1. Sử dụng tủ góc:</strong> Tận dụng góc bếp hiệu quả.</p>
            <p><strong>2. Kệ treo:</strong> Tăng không gian lưu trữ.</p>
          `,
    relatedProducts: [2],
  },
  {
    id: 5,
    title: 'Nội Thất Thông Minh Cho Nhà Nhỏ',
    category: 'Xu hướng',
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Giải pháp nội thất thông minh cho không gian hạn chế.',
    content: `
            <p>Nội thất đa năng như giường gấp, bàn gấp đang rất được ưa chuộng...</p>
          `,
    relatedProducts: [6, 7],
  },
  {
    id: 1,
    title: '5 Mẹo Chọn Tủ Quần Áo Phù Hợp',
    category: 'Mẹo thiết kế',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt:
      'Tìm hiểu cách chọn tủ quần áo phù hợp với không gian và nhu cầu của bạn.',
    content: `
            <p><strong>1. Đo đạc không gian:</strong> Hãy đảm bảo đo chính xác diện tích phòng trước khi mua.</p>
            <p><strong>2. Chọn chất liệu bền:</strong> Gỗ MDF hoặc gỗ tự nhiên là lựa chọn tốt.</p>
            <p><strong>3. Tối ưu thiết kế:</strong> Tủ có ngăn kéo hoặc kệ sẽ tiện lợi hơn.</p>
            <img src="images/blog/post-1b.jpg" alt="Tủ quần áo" loading="lazy">
            <p>Liên hệ với chúng tôi để được tư vấn chi tiết!</p>
          `,
    relatedProducts: [1, 2, 3],
  },
  {
    id: 2,
    title: 'Xu Hướng Nội Thất 2025',
    category: 'Xu hướng',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Khám phá các xu hướng nội thất mới nhất cho năm 2025.',
    content: `
            <p>Năm 2025, nội thất tối giản và bền vững sẽ lên ngôi...</p>
            <p><strong>Màu sắc:</strong> Tông màu trung tính kết hợp điểm nhấn cam.</p>
          `,
    relatedProducts: [4, 5],
  },
  {
    id: 3,
    title: 'Dự Án Phòng Ngủ Hiện Đại',
    category: 'Dự án',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Xem dự án phòng ngủ chúng tôi đã thực hiện cho khách hàng.',
    content: `
            <p>Phòng ngủ này sử dụng giường gỗ tự nhiên và tủ quần áo đa năng...</p>
            <img src="images/blog/post-3b.jpg" alt="Phòng ngủ" loading="lazy">
          `,
    relatedProducts: [8, 1],
  },
  {
    id: 4,
    title: 'Cách Bố Trí Tủ Bếp Tiết Kiệm Không Gian',
    category: 'Mẹo thiết kế',
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Mẹo bố trí tủ bếp để tối ưu diện tích căn bếp nhỏ.',
    content: `
            <p><strong>1. Sử dụng tủ góc:</strong> Tận dụng góc bếp hiệu quả.</p>
            <p><strong>2. Kệ treo:</strong> Tăng không gian lưu trữ.</p>
          `,
    relatedProducts: [2],
  },
  {
    id: 5,
    title: 'Nội Thất Thông Minh Cho Nhà Nhỏ',
    category: 'Xu hướng',
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Giải pháp nội thất thông minh cho không gian hạn chế.',
    content: `
            <p>Nội thất đa năng như giường gấp, bàn gấp đang rất được ưa chuộng...</p>
          `,
    relatedProducts: [6, 7],
  },
  {
    id: 1,
    title: '5 Mẹo Chọn Tủ Quần Áo Phù Hợp',
    category: 'Mẹo thiết kế',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt:
      'Tìm hiểu cách chọn tủ quần áo phù hợp với không gian và nhu cầu của bạn.',
    content: `
            <p><strong>1. Đo đạc không gian:</strong> Hãy đảm bảo đo chính xác diện tích phòng trước khi mua.</p>
            <p><strong>2. Chọn chất liệu bền:</strong> Gỗ MDF hoặc gỗ tự nhiên là lựa chọn tốt.</p>
            <p><strong>3. Tối ưu thiết kế:</strong> Tủ có ngăn kéo hoặc kệ sẽ tiện lợi hơn.</p>
            <img src="images/blog/post-1b.jpg" alt="Tủ quần áo" loading="lazy">
            <p>Liên hệ với chúng tôi để được tư vấn chi tiết!</p>
          `,
    relatedProducts: [1, 2, 3],
  },
  {
    id: 2,
    title: 'Xu Hướng Nội Thất 2025',
    category: 'Xu hướng',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Khám phá các xu hướng nội thất mới nhất cho năm 2025.',
    content: `
            <p>Năm 2025, nội thất tối giản và bền vững sẽ lên ngôi...</p>
            <p><strong>Màu sắc:</strong> Tông màu trung tính kết hợp điểm nhấn cam.</p>
          `,
    relatedProducts: [4, 5],
  },
  {
    id: 3,
    title: 'Dự Án Phòng Ngủ Hiện Đại',
    category: 'Dự án',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Xem dự án phòng ngủ chúng tôi đã thực hiện cho khách hàng.',
    content: `
            <p>Phòng ngủ này sử dụng giường gỗ tự nhiên và tủ quần áo đa năng...</p>
            <img src="images/blog/post-3b.jpg" alt="Phòng ngủ" loading="lazy">
          `,
    relatedProducts: [8, 1],
  },
  {
    id: 4,
    title: 'Cách Bố Trí Tủ Bếp Tiết Kiệm Không Gian',
    category: 'Mẹo thiết kế',
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Mẹo bố trí tủ bếp để tối ưu diện tích căn bếp nhỏ.',
    content: `
            <p><strong>1. Sử dụng tủ góc:</strong> Tận dụng góc bếp hiệu quả.</p>
            <p><strong>2. Kệ treo:</strong> Tăng không gian lưu trữ.</p>
          `,
    relatedProducts: [2],
  },
  {
    id: 5,
    title: 'Nội Thất Thông Minh Cho Nhà Nhỏ',
    category: 'Xu hướng',
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Giải pháp nội thất thông minh cho không gian hạn chế.',
    content: `
            <p>Nội thất đa năng như giường gấp, bàn gấp đang rất được ưa chuộng...</p>
          `,
    relatedProducts: [6, 7],
  },
  {
    id: 1,
    title: '5 Mẹo Chọn Tủ Quần Áo Phù Hợp',
    category: 'Mẹo thiết kế',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt:
      'Tìm hiểu cách chọn tủ quần áo phù hợp với không gian và nhu cầu của bạn.',
    content: `
            <p><strong>1. Đo đạc không gian:</strong> Hãy đảm bảo đo chính xác diện tích phòng trước khi mua.</p>
            <p><strong>2. Chọn chất liệu bền:</strong> Gỗ MDF hoặc gỗ tự nhiên là lựa chọn tốt.</p>
            <p><strong>3. Tối ưu thiết kế:</strong> Tủ có ngăn kéo hoặc kệ sẽ tiện lợi hơn.</p>
            <img src="images/blog/post-1b.jpg" alt="Tủ quần áo" loading="lazy">
            <p>Liên hệ với chúng tôi để được tư vấn chi tiết!</p>
          `,
    relatedProducts: [1, 2, 3],
  },
  {
    id: 2,
    title: 'Xu Hướng Nội Thất 2025',
    category: 'Xu hướng',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Khám phá các xu hướng nội thất mới nhất cho năm 2025.',
    content: `
            <p>Năm 2025, nội thất tối giản và bền vững sẽ lên ngôi...</p>
            <p><strong>Màu sắc:</strong> Tông màu trung tính kết hợp điểm nhấn cam.</p>
          `,
    relatedProducts: [4, 5],
  },
  {
    id: 3,
    title: 'Dự Án Phòng Ngủ Hiện Đại',
    category: 'Dự án',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Xem dự án phòng ngủ chúng tôi đã thực hiện cho khách hàng.',
    content: `
            <p>Phòng ngủ này sử dụng giường gỗ tự nhiên và tủ quần áo đa năng...</p>
            <img src="images/blog/post-3b.jpg" alt="Phòng ngủ" loading="lazy">
          `,
    relatedProducts: [8, 1],
  },
  {
    id: 4,
    title: 'Cách Bố Trí Tủ Bếp Tiết Kiệm Không Gian',
    category: 'Mẹo thiết kế',
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Mẹo bố trí tủ bếp để tối ưu diện tích căn bếp nhỏ.',
    content: `
            <p><strong>1. Sử dụng tủ góc:</strong> Tận dụng góc bếp hiệu quả.</p>
            <p><strong>2. Kệ treo:</strong> Tăng không gian lưu trữ.</p>
          `,
    relatedProducts: [2],
  },
  {
    id: 5,
    title: 'Nội Thất Thông Minh Cho Nhà Nhỏ',
    category: 'Xu hướng',
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Giải pháp nội thất thông minh cho không gian hạn chế.',
    content: `
            <p>Nội thất đa năng như giường gấp, bàn gấp đang rất được ưa chuộng...</p>
          `,
    relatedProducts: [6, 7],
  },
  {
    id: 1,
    title: '5 Mẹo Chọn Tủ Quần Áo Phù Hợp',
    category: 'Mẹo thiết kế',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt:
      'Tìm hiểu cách chọn tủ quần áo phù hợp với không gian và nhu cầu của bạn.',
    content: `
            <p><strong>1. Đo đạc không gian:</strong> Hãy đảm bảo đo chính xác diện tích phòng trước khi mua.</p>
            <p><strong>2. Chọn chất liệu bền:</strong> Gỗ MDF hoặc gỗ tự nhiên là lựa chọn tốt.</p>
            <p><strong>3. Tối ưu thiết kế:</strong> Tủ có ngăn kéo hoặc kệ sẽ tiện lợi hơn.</p>
            <img src="images/blog/post-1b.jpg" alt="Tủ quần áo" loading="lazy">
            <p>Liên hệ với chúng tôi để được tư vấn chi tiết!</p>
          `,
    relatedProducts: [1, 2, 3],
  },
  {
    id: 2,
    title: 'Xu Hướng Nội Thất 2025',
    category: 'Xu hướng',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Khám phá các xu hướng nội thất mới nhất cho năm 2025.',
    content: `
            <p>Năm 2025, nội thất tối giản và bền vững sẽ lên ngôi...</p>
            <p><strong>Màu sắc:</strong> Tông màu trung tính kết hợp điểm nhấn cam.</p>
          `,
    relatedProducts: [4, 5],
  },
  {
    id: 3,
    title: 'Dự Án Phòng Ngủ Hiện Đại',
    category: 'Dự án',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Xem dự án phòng ngủ chúng tôi đã thực hiện cho khách hàng.',
    content: `
            <p>Phòng ngủ này sử dụng giường gỗ tự nhiên và tủ quần áo đa năng...</p>
            <img src="images/blog/post-3b.jpg" alt="Phòng ngủ" loading="lazy">
          `,
    relatedProducts: [8, 1],
  },
  {
    id: 4,
    title: 'Cách Bố Trí Tủ Bếp Tiết Kiệm Không Gian',
    category: 'Mẹo thiết kế',
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Mẹo bố trí tủ bếp để tối ưu diện tích căn bếp nhỏ.',
    content: `
            <p><strong>1. Sử dụng tủ góc:</strong> Tận dụng góc bếp hiệu quả.</p>
            <p><strong>2. Kệ treo:</strong> Tăng không gian lưu trữ.</p>
          `,
    relatedProducts: [2],
  },
  {
    id: 5,
    title: 'Nội Thất Thông Minh Cho Nhà Nhỏ',
    category: 'Xu hướng',
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Giải pháp nội thất thông minh cho không gian hạn chế.',
    content: `
            <p>Nội thất đa năng như giường gấp, bàn gấp đang rất được ưa chuộng...</p>
          `,
    relatedProducts: [6, 7],
  },
  {
    id: 1,
    title: '5 Mẹo Chọn Tủ Quần Áo Phù Hợp',
    category: 'Mẹo thiết kế',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt:
      'Tìm hiểu cách chọn tủ quần áo phù hợp với không gian và nhu cầu của bạn.',
    content: `
            <p><strong>1. Đo đạc không gian:</strong> Hãy đảm bảo đo chính xác diện tích phòng trước khi mua.</p>
            <p><strong>2. Chọn chất liệu bền:</strong> Gỗ MDF hoặc gỗ tự nhiên là lựa chọn tốt.</p>
            <p><strong>3. Tối ưu thiết kế:</strong> Tủ có ngăn kéo hoặc kệ sẽ tiện lợi hơn.</p>
            <img src="images/blog/post-1b.jpg" alt="Tủ quần áo" loading="lazy">
            <p>Liên hệ với chúng tôi để được tư vấn chi tiết!</p>
          `,
    relatedProducts: [1, 2, 3],
  },
  {
    id: 2,
    title: 'Xu Hướng Nội Thất 2025',
    category: 'Xu hướng',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Khám phá các xu hướng nội thất mới nhất cho năm 2025.',
    content: `
            <p>Năm 2025, nội thất tối giản và bền vững sẽ lên ngôi...</p>
            <p><strong>Màu sắc:</strong> Tông màu trung tính kết hợp điểm nhấn cam.</p>
          `,
    relatedProducts: [4, 5],
  },
  {
    id: 3,
    title: 'Dự Án Phòng Ngủ Hiện Đại',
    category: 'Dự án',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Xem dự án phòng ngủ chúng tôi đã thực hiện cho khách hàng.',
    content: `
            <p>Phòng ngủ này sử dụng giường gỗ tự nhiên và tủ quần áo đa năng...</p>
            <img src="images/blog/post-3b.jpg" alt="Phòng ngủ" loading="lazy">
          `,
    relatedProducts: [8, 1],
  },
  {
    id: 4,
    title: 'Cách Bố Trí Tủ Bếp Tiết Kiệm Không Gian',
    category: 'Mẹo thiết kế',
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Mẹo bố trí tủ bếp để tối ưu diện tích căn bếp nhỏ.',
    content: `
            <p><strong>1. Sử dụng tủ góc:</strong> Tận dụng góc bếp hiệu quả.</p>
            <p><strong>2. Kệ treo:</strong> Tăng không gian lưu trữ.</p>
          `,
    relatedProducts: [2],
  },
  {
    id: 5,
    title: 'Nội Thất Thông Minh Cho Nhà Nhỏ',
    category: 'Xu hướng',
    image:
      'https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    excerpt: 'Giải pháp nội thất thông minh cho không gian hạn chế.',
    content: `
            <p>Nội thất đa năng như giường gấp, bàn gấp đang rất được ưa chuộng...</p>
          `,
    relatedProducts: [6, 7],
  },
];

// Tự động tăng lượt xem mỗi ngày
document.addEventListener('DOMContentLoaded', function () {
  // Gọi hàm tự động tăng lượt xem
  autoIncreaseViews();
});

// Trang danh sách blog
if (document.getElementById('blog-grid')) {
  const blogGrid = document.getElementById('blog-grid');
  const pagination = document.getElementById('pagination');
  const categoryFilter = document.getElementById('category');
  const itemsPerPage = 6;
  let currentPage = 1;

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

      // Format date - using a placeholder date since we don't have actual dates
      const date = new Date();
      date.setDate(date.getDate() - Math.floor(Math.random() * 30)); // Random date within last 30 days
      const formattedDate = date.toLocaleDateString('vi-VN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });

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
                <span class="blog-card-views"><i class="far fa-eye"></i> ${
                  post.views || 0
                } lượt xem</span>
              </div>
              <a href="blog-post.html?id=${
                post.id
              }" class="btn-read-more">Đọc thêm <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>
        `;
      blogGrid.appendChild(card);
    });

    renderPagination(posts.length);
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

    // Create a more responsive empty state
    blogGrid.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-newspaper"></i>
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
      padding: 50px 20px;
      background: var(--blog-white);
      border-radius: var(--blog-border-radius);
      box-shadow: var(--blog-shadow);
      margin: 40px auto;
      max-width: 600px;
    }

    .empty-state i {
      font-size: 3rem;
      color: var(--blog-primary);
      margin-bottom: 20px;
      opacity: 0.7;
    }

    .empty-state h3 {
      font-family: var(--blog-font-heading);
      font-size: 1.5rem;
      color: var(--blog-text);
      margin-bottom: 15px;
    }

    .empty-state p {
      color: var(--blog-text-light);
      margin-bottom: 25px;
      line-height: 1.6;
    }

    .empty-state button {
      padding: 12px 25px;
      background: var(--blog-primary);
      color: var(--blog-white);
      border: none;
      border-radius: 30px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: var(--blog-transition);
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }

    .empty-state button:hover {
      background: var(--blog-primary-dark);
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(249, 115, 22, 0.2);
    }

    .reset-filters-btn {
      animation: pulse-button 2s infinite;
    }

    @keyframes pulse-button {
      0% {
        box-shadow: 0 0 0 0 rgba(249, 115, 22, 0.4);
      }
      70% {
        box-shadow: 0 0 0 10px rgba(249, 115, 22, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(249, 115, 22, 0);
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
        padding: 30px 15px;
      }

      .empty-state i {
        font-size: 2.5rem;
      }

      .empty-state h3 {
        font-size: 1.3rem;
      }

      .empty-state p {
        font-size: 0.9rem;
      }

      .empty-state button {
        padding: 10px 20px;
        font-size: 0.9rem;
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

    // Render bài viết liên quan
    relatedPosts.innerHTML = '';
    const related = posts
      .filter((p) => p.id !== postId && p.category === post.category)
      .slice(0, 3);
    related.forEach((p) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
          <img src="${p.image}" alt="${p.title}" loading="lazy">
          <h4>${p.title}</h4>
          <a href="blog-post.html?id=${p.id}" class="btn-read-more">Đọc thêm</a>
        `;
      relatedPosts.appendChild(card);
    });
  } else {
    postContent.innerHTML = '<p>Bài viết không tồn tại.</p>';
  }
}
