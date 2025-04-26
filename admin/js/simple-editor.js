/**
 * simple-editor.js - Trình soạn thảo văn bản đơn giản
 */

// Khởi tạo trình soạn thảo khi trang được tải
document.addEventListener('DOMContentLoaded', function () {
  // Kiểm tra xem có trình soạn thảo trên trang không
  if (document.querySelector('.simple-editor-container')) {
    initSimpleEditor();
  }
});

// Hàm khởi tạo trình soạn thảo
function initSimpleEditor() {
  const editor = document.getElementById('detailed-content-editor');
  const textarea = document.getElementById('detailed-content');
  const toolbar = document.querySelector('.simple-editor-toolbar');

  if (!editor || !textarea || !toolbar) return;

  // Thêm sự kiện cho các nút trong toolbar
  const buttons = toolbar.querySelectorAll('.editor-btn');
  buttons.forEach((button) => {
    button.addEventListener('click', function () {
      const command = this.getAttribute('data-command');

      if (command === 'createLink') {
        const url = prompt('Nhập URL liên kết:', 'https://');
        if (url) {
          document.execCommand(command, false, url);
        }
      } else if (command === 'insertImage') {
        const url = prompt('Nhập URL hình ảnh:', 'https://');
        if (url) {
          document.execCommand(command, false, url);
        }
      } else {
        document.execCommand(command, false, null);
      }

      // Cập nhật trạng thái nút
      updateButtonStates();

      // Cập nhật nội dung textarea
      updateTextarea();
    });
  });

  // Thêm sự kiện cho các select trong toolbar
  const selects = toolbar.querySelectorAll('.editor-select');
  selects.forEach((select) => {
    select.addEventListener('change', function () {
      const command = this.getAttribute('data-command');
      const value = this.value;

      document.execCommand(command, false, value);

      // Cập nhật nội dung textarea
      updateTextarea();
    });
  });

  // Thêm sự kiện cho editor
  editor.addEventListener('input', function () {
    // Cập nhật nội dung textarea
    updateTextarea();
  });

  editor.addEventListener('keyup', function () {
    // Cập nhật trạng thái nút
    updateButtonStates();
  });

  editor.addEventListener('mouseup', function () {
    // Cập nhật trạng thái nút
    updateButtonStates();
  });

  // Hàm cập nhật trạng thái nút
  function updateButtonStates() {
    buttons.forEach((button) => {
      const command = button.getAttribute('data-command');

      if (command === 'createLink' || command === 'insertImage') {
        // Không cần cập nhật trạng thái cho các nút này
        return;
      }

      if (document.queryCommandState(command)) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }

  // Hàm cập nhật nội dung textarea
  function updateTextarea() {
    textarea.value = editor.innerHTML;
  }

  // Hàm điền nội dung từ textarea vào editor
  function updateEditor() {
    editor.innerHTML = textarea.value;
  }

  // Thêm hàm điền nội dung vào đối tượng window để có thể gọi từ bên ngoài
  window.simpleEditor = {
    setContent: function (content) {
      editor.innerHTML = content;
      updateTextarea();
    },
    getContent: function () {
      return editor.innerHTML;
    },
  };
}

// Hàm điền nội dung vào trình soạn thảo
function setEditorContent(content) {
  if (window.simpleEditor) {
    window.simpleEditor.setContent(content);
  }
}

// Hàm lấy nội dung từ trình soạn thảo
function getEditorContent() {
  if (window.simpleEditor) {
    return window.simpleEditor.getContent();
  }
  return '';
}
