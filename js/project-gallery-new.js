const projectGalleryData = {
  project1: {
    title: 'Căn Hộ Chung Cư Hiện Đại',
    description:
      'Thiết kế và thi công trọn gói nội thất cho căn hộ 85m² với phong cách hiện đại, tối ưu không gian sống.',
    location: 'Hà Nội',
    year: '2023',
    thumbnail:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.0.3',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    ],
  },
  project2: {
    title: 'Nhà Hàng Sang Trọng',
    description:
      'Thiết kế và thi công nội thất cho nhà hàng với phong cách ấm cúng, sang trọng, tạo không gian thư giãn cho thực khách.',
    location: 'Hồ Chí Minh',
    year: '2022',
    thumbnail:
      'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    images: [
      'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3',
    ],
  },
  project3: {
    title: 'Khách Sạn 5 Sao',
    description:
      'Thiết kế và thi công toàn bộ nội thất cho khách sạn 5 sao với hơn 100 phòng, kết hợp phong cách hiện đại và truyền thống.',
    location: 'Đà Nẵng',
    year: '2021',
    thumbnail:
      'https://images.unsplash.com/photo-1540304453527-62f979142a17?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    images: [
      'https://images.unsplash.com/photo-1540304453527-62f979142a17?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3',
    ],
  },
};

document.addEventListener('DOMContentLoaded', function () {
  createGalleryModal();
  renderProjectCards();
});

let currentProject = null;
let currentSlide = 0;
let zoomLevel = 1;
let isDragging = false;
let startPos = { x: 0, y: 0 };
let currentPos = { x: 0, y: 0 };
let touchStartX = 0;

let modal;
let galleryTitle;
let galleryContent;
let galleryDots;
let galleryCounter;
let closeBtn;
let prevBtn;
let nextBtn;
let zoomInBtn;
let zoomOutBtn;
let zoomResetBtn;
let gallerySlides = null;
let galleryImages = null;

// Store event handlers
const eventHandlers = {
  mousemove: null,
  mouseup: null,
  mousedown: [],
  touchstart: null,
  touchmove: null,
  touchend: null,
  keydown: null,
  wheel: null,
  doubletap: null,
};

function createGalleryModal() {
  modal = document.createElement('div');
  modal.className = 'gallery-modal';
  modal.innerHTML = `
    <div class="gallery-container">
      <div class="gallery-header">
        <div class="gallery-title">Project Title</div>
        <button class="gallery-close"><i class="fas fa-times"></i></button>
      </div>
      <div class="gallery-content">
        <div class="gallery-controls">
          <button class="gallery-control prev-slide"><i class="fas fa-chevron-left"></i></button>
          <button class="gallery-control next-slide"><i class="fas fa-chevron-right"></i></button>
        </div>
        <div class="zoom-controls">
          <button class="zoom-control zoom-in"><i class="fas fa-search-plus"></i></button>
          <button class="zoom-control zoom-out"><i class="fas fa-search-minus"></i></button>
          <button class="zoom-control zoom-reset"><i class="fas fa-sync-alt"></i></button>
        </div>
      </div>
      <div class="gallery-footer">
        <div class="gallery-dots"></div>
        <div class="gallery-counter">1 / 10</div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  galleryTitle = modal.querySelector('.gallery-title');
  galleryContent = modal.querySelector('.gallery-content');
  galleryDots = modal.querySelector('.gallery-dots');
  galleryCounter = modal.querySelector('.gallery-counter');
  closeBtn = modal.querySelector('.gallery-close');
  prevBtn = modal.querySelector('.prev-slide');
  nextBtn = modal.querySelector('.next-slide');
  zoomInBtn = modal.querySelector('.zoom-in');
  zoomOutBtn = modal.querySelector('.zoom-out');
  zoomResetBtn = modal.querySelector('.zoom-reset');

  closeBtn.addEventListener('click', closeGallery);
  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  // Add zoom event listeners with debug logs
  zoomInBtn.addEventListener('click', () => {
    console.log('Zoom In button clicked');
    zoomIn();
  });
  zoomOutBtn.addEventListener('click', () => {
    console.log('Zoom Out button clicked');
    zoomOut();
  });
  zoomResetBtn.addEventListener('click', () => {
    console.log('Zoom Reset button clicked');
    resetZoom();
  });

  // Store event handlers
  eventHandlers.keydown = handleKeydown;
  eventHandlers.wheel = handleWheel;
  eventHandlers.touchstart = handleTouchStart;
  eventHandlers.touchmove = handleTouchMove;
  eventHandlers.touchend = handleTouchEnd;
  eventHandlers.doubletap = handleDoubleTap;

  document.addEventListener('keydown', eventHandlers.keydown);
  galleryContent.addEventListener('wheel', eventHandlers.wheel);
  galleryContent.addEventListener('touchstart', eventHandlers.touchstart);
  galleryContent.addEventListener('touchmove', eventHandlers.touchmove);
  galleryContent.addEventListener('touchend', eventHandlers.touchend);
  galleryContent.addEventListener('touchend', eventHandlers.doubletap);
}

function handleDoubleTap(e) {
  const currentTime = new Date().getTime();
  const tapLength = currentTime - (window.lastTap || 0);

  if (tapLength < 300 && tapLength > 0) {
    if (zoomLevel > 1) {
      resetZoom();
    } else {
      zoomIn(2);
    }
    e.preventDefault();
  }

  window.lastTap = currentTime;
}

function handleKeydown(e) {
  if (!modal?.classList.contains('active')) return;

  switch (e.key) {
    case 'Escape':
      closeGallery();
      break;
    case 'ArrowLeft':
      prevSlide();
      break;
    case 'ArrowRight':
      nextSlide();
      break;
    case '+':
      console.log('Zoom In via keyboard (+)');
      zoomIn();
      break;
    case '-':
      console.log('Zoom Out via keyboard (-)');
      zoomOut();
      break;
    case '0':
      console.log('Zoom Reset via keyboard (0)');
      resetZoom();
      break;
  }
}

function handleWheel(e) {
  if (!modal?.classList.contains('active')) return;

  e.preventDefault();
  if (e.deltaY < 0) {
    console.log('Zoom In via wheel');
    zoomIn();
  } else {
    console.log('Zoom Out via wheel');
    zoomOut();
  }
}

function handleTouchStart(e) {
  touchStartX = e.touches[0].clientX;

  if (zoomLevel > 1) {
    isDragging = true;
    startPos = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };

    const currentImage =
      gallerySlides?.[currentSlide]?.querySelector('.gallery-image');
    if (currentImage) {
      currentPos = {
        x: parseInt(currentImage.style.marginLeft || 0),
        y: parseInt(currentImage.style.marginTop || 0),
      };
    }
  }
}

function handleTouchMove(e) {
  if (zoomLevel > 1 && isDragging) {
    const dx = e.touches[0].clientX - startPos.x;
    const dy = e.touches[0].clientY - startPos.y;

    const currentImage =
      gallerySlides?.[currentSlide]?.querySelector('.gallery-image');
    if (currentImage) {
      currentImage.style.marginLeft = `${currentPos.x + dx}px`;
      currentImage.style.marginTop = `${currentPos.y + dy}px`;
    }

    e.preventDefault();
  } else {
    const touchEndX = e.touches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 5) {
      e.preventDefault();
    }
  }
}

function handleTouchEnd(e) {
  if (zoomLevel <= 1) {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
  }

  isDragging = false;
}

function renderProjectCards() {
  const projectsContainer = document.querySelector('.featured-projects-grid');
  if (!projectsContainer) return;

  for (const key in projectGalleryData) {
    const project = projectGalleryData[key];
    const card = document.createElement('div');
    card.className = 'featured-project-card';
    card.dataset.project = key;

    card.innerHTML = `
      <div class="featured-project-image">
        <img src="${project.thumbnail}" alt="${project.title}">
        <div class="featured-project-overlay">
          <button class="view-project-btn">Xem dự án</button>
        </div>
      </div>
      <div class="featured-project-info">
        <h4 class="featured-project-title">${project.title}</h4>
        <p class="featured-project-description">${project.description}</p>
        <div class="featured-project-meta">
          <div class="featured-project-location">
            <i class="fas fa-map-marker-alt"></i> ${project.location}
          </div>
          <div class="featured-project-year">
            <i class="far fa-calendar-alt"></i> ${project.year}
          </div>
        </div>
      </div>
    `;

    card.addEventListener('click', function () {
      openGallery(key);
    });

    projectsContainer.appendChild(card);
  }
}

function openGallery(projectKey) {
  currentProject = projectGalleryData[projectKey];
  currentSlide = 0;
  zoomLevel = 1;
  isDragging = false;

  if (!modal || !galleryTitle || !galleryContent) return;

  galleryTitle.textContent = currentProject.title;
  createSlides();
  updateCounter();

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Add global mouse event listeners
  eventHandlers.mousemove = handleMouseMove;
  eventHandlers.mouseup = handleMouseUp;
  document.addEventListener('mousemove', eventHandlers.mousemove);
  document.addEventListener('mouseup', eventHandlers.mouseup);
}

function closeGallery() {
  if (!modal) return;

  modal.classList.remove('active');
  document.body.style.overflow = '';
  resetZoom();

  zoomLevel = 1;
  isDragging = false;
  currentSlide = 0;

  // Clear slides and dots
  if (galleryContent) {
    galleryContent
      .querySelectorAll('.gallery-slide')
      .forEach((slide) => slide.remove());
  }
  if (galleryDots) {
    galleryDots.innerHTML = '';
  }

  // Remove global mouse event listeners
  if (eventHandlers.mousemove) {
    document.removeEventListener('mousemove', eventHandlers.mousemove);
    eventHandlers.mousemove = null;
  }
  if (eventHandlers.mouseup) {
    document.removeEventListener('mouseup', eventHandlers.mouseup);
    eventHandlers.mouseup = null;
  }

  // Clear mousedown handlers
  eventHandlers.mousedown.forEach(({ img, handler }) => {
    img.removeEventListener('mousedown', handler);
  });
  eventHandlers.mousedown = [];

  // Reset DOM references
  gallerySlides = null;
  galleryImages = null;
}

function createSlides() {
  if (!galleryContent || !galleryDots) return;

  // Remove existing slides
  galleryContent
    .querySelectorAll('.gallery-slide')
    .forEach((slide) => slide.remove());
  galleryDots.innerHTML = '';

  // Create new slides
  currentProject.images.forEach((image, index) => {
    const slide = document.createElement('div');
    slide.className = `gallery-slide ${index === 0 ? 'active' : ''}`;
    const img = document.createElement('img');
    img.src = image;
    img.alt = `${currentProject.title} - Image ${index + 1}`;
    img.className = 'gallery-image';
    slide.appendChild(img);
    galleryContent.insertBefore(
      slide,
      galleryContent.querySelector('.gallery-controls')
    );

    const dot = document.createElement('div');
    dot.className = `gallery-dot ${index === 0 ? 'active' : ''}`;
    dot.dataset.slide = index;
    dot.addEventListener('click', function () {
      goToSlide(index);
    });
    galleryDots.appendChild(dot);
  });

  // Update references
  gallerySlides = galleryContent.querySelectorAll('.gallery-slide');
  galleryImages = galleryContent.querySelectorAll('.gallery-image');

  // Add image drag events
  galleryImages.forEach((img) => {
    const mousedownHandler = function (e) {
      if (zoomLevel <= 1) return;

      isDragging = true;
      startPos = { x: e.clientX, y: e.clientY };
      currentPos = {
        x: parseInt(img.style.marginLeft || 0),
        y: parseInt(img.style.marginTop || 0),
      };
      img.style.cursor = 'grabbing';
      e.preventDefault();
    };
    img.addEventListener('mousedown', mousedownHandler);
    eventHandlers.mousedown.push({ img, handler: mousedownHandler });
  });

  // Ensure zoom is applied to the initial slide
  applyZoom();
}

function handleMouseMove(e) {
  if (!isDragging || !gallerySlides) return;

  const dx = e.clientX - startPos.x;
  const dy = e.clientY - startPos.y;

  const currentImage =
    gallerySlides[currentSlide]?.querySelector('.gallery-image');
  if (currentImage) {
    currentImage.style.marginLeft = `${currentPos.x + dx}px`;
    currentImage.style.marginTop = `${currentPos.y + dy}px`;
  }
}

function handleMouseUp() {
  if (!isDragging || !gallerySlides) return;

  isDragging = false;
  const currentImage =
    gallerySlides[currentSlide]?.querySelector('.gallery-image');
  if (currentImage) {
    currentImage.style.cursor = 'grab';
  }
}

function goToSlide(index) {
  if (!gallerySlides || !galleryDots) return;

  gallerySlides.forEach((slide) => slide.classList.remove('active'));
  const dots = galleryDots.querySelectorAll('.gallery-dot');
  dots.forEach((dot) => dot.classList.remove('active'));

  gallerySlides[index].classList.add('active');
  dots[index].classList.add('active');

  currentSlide = index;
  resetZoom();
  updateCounter();
}

function prevSlide() {
  if (!currentProject) return;
  const newIndex =
    currentSlide === 0 ? currentProject.images.length - 1 : currentSlide - 1;
  goToSlide(newIndex);
}

function nextSlide() {
  if (!currentProject) return;
  const newIndex =
    currentSlide === currentProject.images.length - 1 ? 0 : currentSlide + 1;
  goToSlide(newIndex);
}

function updateCounter() {
  if (!galleryCounter || !currentProject) return;
  galleryCounter.textContent = `${currentSlide + 1} / ${
    currentProject.images.length
  }`;
}

function zoomIn(level = null) {
  const newZoom = level || zoomLevel + 0.5;
  if (newZoom <= 3) {
    zoomLevel = newZoom;
    console.log(`Zoom level set to: ${zoomLevel}`);
    applyZoom();
  } else {
    console.log('Maximum zoom level reached');
  }
}

function zoomOut() {
  const newZoom = zoomLevel - 0.5;
  if (newZoom >= 1) {
    zoomLevel = newZoom;
    console.log(`Zoom level set to: ${zoomLevel}`);
    applyZoom();
  } else {
    console.log('Minimum zoom level reached');
  }
}

function resetZoom() {
  zoomLevel = 1;
  console.log(`Zoom level reset to: ${zoomLevel}`);
  applyZoom();

  const currentImage =
    gallerySlides?.[currentSlide]?.querySelector('.gallery-image');
  if (currentImage) {
    currentImage.style.marginLeft = '0';
    currentImage.style.marginTop = '0';
  }
}

function applyZoom() {
  if (!gallerySlides || !gallerySlides[currentSlide]) {
    console.log('No slides available to apply zoom');
    return;
  }

  const currentImage =
    gallerySlides[currentSlide].querySelector('.gallery-image');
  if (currentImage) {
    currentImage.style.transform = `scale(${zoomLevel})`;
    currentImage.style.cursor = zoomLevel > 1 ? 'grab' : 'default';
    console.log(`Applied zoom: scale(${zoomLevel}) to current image`);
  } else {
    console.log('Current image not found for zoom');
  }
}
