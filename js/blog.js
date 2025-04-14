const posts = [
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

    paginatedPosts.forEach((post) => {
      const card = document.createElement('div');
      card.className = 'blog-card';
      card.innerHTML = `
          <img src="${post.image}" alt="${post.title}" loading="lazy">
          <h3>${post.title}</h3>
          <p>${post.excerpt}</p>
          <a href="blog-post.html?id=${post.id}" class="btn-read-more">Đọc thêm</a>
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
        postCount.innerHTML = `Hiển thị <span>${start} - ${end}</span> trên tổng số <span>${totalItems}</span> bài viết`;
      }
    }
  }

  function getFilteredPosts() {
    let filtered = posts;
    const category = categoryFilter.value;
    if (category !== 'all') {
      filtered = filtered.filter((p) => p.category === category);
    }
    return filtered;
  }

  categoryFilter.onchange = () => renderPosts(getFilteredPosts(), 1);
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
