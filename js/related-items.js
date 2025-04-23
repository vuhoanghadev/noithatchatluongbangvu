/**
 * Xử lý hiển thị sản phẩm liên quan và bài viết liên quan
 * Sử dụng thuật toán tương đồng nội dung để tìm sản phẩm và bài viết liên quan
 */

// Hàm tìm sản phẩm liên quan dựa trên nội dung bài viết
function findRelatedProducts(post, maxItems = 3) {
  // Nếu bài viết đã có danh sách sản phẩm liên quan được chỉ định
  if (post.relatedProducts && post.relatedProducts.length > 0) {
    // Lấy thông tin chi tiết của các sản phẩm đã chỉ định
    const specifiedProducts = post.relatedProducts
      .map((id) => products.find((product) => product.id === id))
      .filter((product) => product !== undefined);

    // Nếu có đủ sản phẩm đã chỉ định, trả về danh sách đó (tối đa maxItems)
    if (specifiedProducts.length >= maxItems) {
      return specifiedProducts.slice(0, maxItems);
    }

    // Nếu không đủ, sử dụng các sản phẩm đã chỉ định và tìm thêm sản phẩm liên quan
    const remainingCount = maxItems - specifiedProducts.length;
    const specifiedIds = post.relatedProducts;

    // Tìm thêm sản phẩm liên quan dựa trên nội dung
    const additionalProducts = findProductsByContentSimilarity(
      post,
      remainingCount,
      specifiedIds
    );

    // Kết hợp danh sách sản phẩm
    return [...specifiedProducts, ...additionalProducts];
  }

  // Nếu bài viết không có danh sách sản phẩm liên quan được chỉ định
  // Tìm sản phẩm liên quan dựa trên nội dung
  return findProductsByContentSimilarity(post, maxItems, []);
}

// Hàm tìm sản phẩm dựa trên độ tương đồng nội dung
function findProductsByContentSimilarity(post, count, excludeIds = []) {
  // Tạo từ khóa từ tiêu đề, danh mục và nội dung bài viết
  const postKeywords = extractKeywords(
    post.title + ' ' + post.category + ' ' + post.content
  );

  // Tính điểm tương đồng cho mỗi sản phẩm
  const scoredProducts = products
    .filter((product) => !excludeIds.includes(product.id)) // Loại bỏ các sản phẩm đã có trong danh sách chỉ định
    .map((product) => {
      // Tạo từ khóa từ tên, danh mục và mô tả sản phẩm
      const productKeywords = extractKeywords(
        product.name +
          ' ' +
          product.category +
          ' ' +
          (product.description || '')
      );

      // Tính điểm tương đồng giữa bài viết và sản phẩm
      const similarityScore = calculateSimilarity(
        postKeywords,
        productKeywords
      );

      return {
        product,
        score: similarityScore,
      };
    });

  // Sắp xếp sản phẩm theo điểm tương đồng giảm dần
  scoredProducts.sort((a, b) => b.score - a.score);

  // Trả về danh sách sản phẩm có điểm tương đồng cao nhất
  return scoredProducts.slice(0, count).map((item) => item.product);
}

// Hàm tìm bài viết liên quan
function findRelatedPosts(currentPost, maxItems = 3) {
  // Loại bỏ bài viết hiện tại khỏi danh sách
  const otherPosts = posts.filter((post) => post.id !== currentPost.id);

  // Tạo từ khóa từ tiêu đề, danh mục và nội dung bài viết hiện tại
  const currentPostKeywords = extractKeywords(
    currentPost.title + ' ' + currentPost.category + ' ' + currentPost.content
  );

  // Tính điểm tương đồng cho mỗi bài viết khác
  const scoredPosts = otherPosts.map((post) => {
    // Tạo từ khóa từ tiêu đề, danh mục và nội dung bài viết khác
    const postKeywords = extractKeywords(
      post.title + ' ' + post.category + ' ' + post.content
    );

    // Tính điểm tương đồng
    const similarityScore = calculateSimilarity(
      currentPostKeywords,
      postKeywords
    );

    // Thêm điểm nếu cùng danh mục
    const categoryBonus = post.category === currentPost.category ? 0.3 : 0;

    // Thêm điểm nếu cùng tác giả
    const authorBonus = post.author === currentPost.author ? 0.2 : 0;

    return {
      post,
      score: similarityScore + categoryBonus + authorBonus,
    };
  });

  // Sắp xếp bài viết theo điểm tương đồng giảm dần
  scoredPosts.sort((a, b) => b.score - a.score);

  // Trả về danh sách bài viết có điểm tương đồng cao nhất
  return scoredPosts.slice(0, maxItems).map((item) => item.post);
}

// Hàm trích xuất từ khóa từ văn bản
function extractKeywords(text) {
  if (!text) return [];

  // Chuyển đổi văn bản thành chữ thường và loại bỏ HTML tags
  const cleanText = text.toLowerCase().replace(/<[^>]*>/g, ' ');

  // Tách văn bản thành các từ
  const words = cleanText.split(/\s+/);

  // Loại bỏ các từ ngắn và từ thông dụng
  const stopWords = [
    'và',
    'hoặc',
    'nhưng',
    'vì',
    'nên',
    'là',
    'có',
    'không',
    'với',
    'các',
    'của',
    'từ',
    'cho',
    'trong',
    'ngoài',
    'trên',
    'dưới',
    'này',
    'khi',
    'bởi',
    'được',
    'để',
    'tại',
    'về',
    'như',
    'những',
    'nhiều',
    'cũng',
    'sẽ',
    'đã',
    'đang',
    'rất',
    'mà',
    'một',
    'hai',
    'ba',
    'bốn',
    'năm',
    'sáu',
    'bảy',
    'tám',
    'chín',
    'mười',
  ];

  const keywords = words.filter(
    (word) =>
      word.length > 2 &&
      !stopWords.includes(word) &&
      /[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+/.test(
        word
      )
  );

  return keywords;
}

// Hàm tính độ tương đồng giữa hai tập từ khóa
function calculateSimilarity(keywords1, keywords2) {
  // Nếu một trong hai tập từ khóa rỗng, trả về 0
  if (keywords1.length === 0 || keywords2.length === 0) return 0;

  // Đếm số từ khóa chung
  const intersection = keywords1.filter((keyword) =>
    keywords2.includes(keyword)
  );

  // Tính độ tương đồng Jaccard: |A ∩ B| / |A ∪ B|
  const union = new Set([...keywords1, ...keywords2]);

  return intersection.length / union.size;
}

// Hàm hiển thị sản phẩm liên quan
function displayRelatedProducts(post) {
  const container = document.getElementById('related-products');
  if (!container) return;

  // Tìm sản phẩm liên quan
  const relatedProducts = findRelatedProducts(post, 3);

  // Nếu không có sản phẩm liên quan, ẩn phần này
  if (relatedProducts.length === 0) {
    document.querySelector('.related-products-section').style.display = 'none';
    return;
  }

  // Hiển thị sản phẩm liên quan
  container.innerHTML = '';
  container.className = 'related-items';

  relatedProducts.forEach((product) => {
    const card = document.createElement('div');
    card.className = 'related-card';

    // Tạo badge nếu có
    let badgeHTML = '';
    if (product.promotion) {
      badgeHTML = `<span class="promo-badge">${product.promotion}</span>`;
    } else if (product.tag && product.tag.toLowerCase() === 'mới') {
      badgeHTML = `<span class="new-badge">Mới</span>`;
    }

    // Tạo HTML cho card
    card.innerHTML = `
      ${badgeHTML}
      <div class="card-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="card-content">
        <div>
          <h3 class="card-title">${product.name}</h3>
          <div class="card-meta">
            <span><i class="fas fa-tag"></i> ${product.category}</span>
          </div>
          <div class="card-price">${product.price || 'Liên hệ'}</div>
        </div>
        <a href="product-details.html?id=${
          product.id
        }" class="card-button">Xem chi tiết</a>
      </div>
    `;

    container.appendChild(card);
  });

  // Hiển thị phần sản phẩm liên quan
  document.querySelector('.related-products-section').style.display = 'block';
}

// Hàm hiển thị bài viết liên quan
function displayRelatedPosts(post) {
  const container = document.getElementById('related-posts');
  if (!container) return;

  // Tìm bài viết liên quan
  const relatedPosts = findRelatedPosts(post, 3);

  // Nếu không có bài viết liên quan, ẩn phần này
  if (relatedPosts.length === 0) {
    document.querySelector('.related-posts-section').style.display = 'none';
    return;
  }

  // Hiển thị bài viết liên quan
  container.innerHTML = '';
  container.className = 'related-items';

  relatedPosts.forEach((post) => {
    const card = document.createElement('div');
    card.className = 'related-card';

    // Tạo HTML cho card
    card.innerHTML = `
      <div class="card-image">
        <img src="${post.image}" alt="${post.title}" loading="lazy">
      </div>
      <div class="card-content">
        <div>
          <h3 class="card-title">${post.title}</h3>
          <div class="card-meta">
            <span><i class="fas fa-folder"></i> ${post.category}</span>
            <span><i class="fas fa-calendar"></i> ${post.blogDate || ''}</span>
          </div>
          <p class="card-excerpt">${post.excerpt || ''}</p>
        </div>
        <a href="blog-detail.html?id=${
          post.id
        }" class="card-button">Đọc thêm</a>
      </div>
    `;

    container.appendChild(card);
  });

  // Hiển thị phần bài viết liên quan
  document.querySelector('.related-posts-section').style.display = 'block';
}

// Hàm khởi tạo phần sản phẩm liên quan và bài viết liên quan
function initRelatedItems() {
  // Kiểm tra xem có phải trang blog-detail không
  if (!window.location.pathname.includes('blog-detail.html')) return;

  // Lấy ID bài viết từ URL
  const urlParams = new URLSearchParams(window.location.search);
  const postId = parseInt(urlParams.get('id'));

  // Nếu không có ID hoặc ID không hợp lệ, thoát
  if (!postId) return;

  // Tìm bài viết theo ID
  const post = posts.find((p) => p.id === postId);

  // Nếu không tìm thấy bài viết, thoát
  if (!post) return;

  // Hiển thị sản phẩm liên quan và bài viết liên quan
  displayRelatedProducts(post);
  displayRelatedPosts(post);
}

// Khởi tạo khi trang được tải
document.addEventListener('DOMContentLoaded', initRelatedItems);

// Khởi tạo khi trang được tải qua AJAX
document.addEventListener('ajaxPageLoaded', function (event) {
  if (event.detail.url.includes('blog-detail.html')) {
    setTimeout(initRelatedItems, 100);
  }
});

// Khởi tạo khi hoàn tất chuyển trang
document.addEventListener('page-transition-complete', function (event) {
  if (event.detail.url.includes('blog-detail.html')) {
    setTimeout(initRelatedItems, 100);
  }
});
