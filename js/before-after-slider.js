document.addEventListener('DOMContentLoaded', function () {
  // Initialize all before-after sliders
  const sliders = document.querySelectorAll('.before-after-container');

  sliders.forEach((slider) => {
    const beforeImage = slider.querySelector('.before-image');
    const sliderHandle = slider.querySelector('.slider-handle');
    let isResizing = false;

    // Set initial position
    beforeImage.style.width = '50%';
    sliderHandle.style.left = '50%';

    // Function to handle slider movement
    function moveSlider(clientX) {
      const sliderRect = slider.getBoundingClientRect();
      const x = clientX - sliderRect.left;
      const percent = (x / sliderRect.width) * 100;

      if (percent >= 0 && percent <= 100) {
        beforeImage.style.width = `${percent}%`;
        sliderHandle.style.left = `${percent}%`;
      }
    }

    // Mouse events
    sliderHandle.addEventListener('mousedown', function (e) {
      e.preventDefault();
      isResizing = true;
    });

    document.addEventListener('mouseup', function () {
      isResizing = false;
    });

    document.addEventListener('mousemove', function (e) {
      if (!isResizing) return;
      moveSlider(e.clientX);
    });

    // Touch events for mobile
    sliderHandle.addEventListener('touchstart', function (e) {
      e.preventDefault();
      isResizing = true;
    });

    document.addEventListener('touchend', function () {
      isResizing = false;
    });

    document.addEventListener('touchmove', function (e) {
      if (!isResizing) return;
      e.preventDefault(); // Prevent scrolling while dragging
      const touch = e.touches[0];
      moveSlider(touch.clientX);
    });

    // Allow clicking anywhere on the slider to move the handle
    slider.addEventListener('click', function (e) {
      moveSlider(e.clientX);
    });
  });
});
