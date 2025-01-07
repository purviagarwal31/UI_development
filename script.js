// Rectangle Rotation and Color Change
const rectangle = document.getElementById('rectangle');
const rotationSlider = document.getElementById('rotationSlider');
const colorPicker = document.getElementById('colorPicker');

// Update rectangle's rotation based on slider value
rotationSlider.addEventListener('input', () => {
  rectangle.style.transform = `rotate(${rotationSlider.value}deg)`;
});

// Update rectangle's background color based on color picker value
colorPicker.addEventListener('input', () => {
  rectangle.style.backgroundColor = colorPicker.value;
});

// Draggable Circle within a Square
const circle = document.getElementById('circle');
const container = document.getElementById('circle-container');

let isDragging = false;
let offsetX, offsetY;

// Start dragging the circle
circle.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - circle.offsetLeft;
  offsetY = e.clientY - circle.offsetTop;
});

// Move the circle while dragging
document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  let x = e.clientX - offsetX;
  let y = e.clientY - offsetY;

  // Get container and circle dimensions
  const containerRect = container.getBoundingClientRect();
  const circleRect = circle.getBoundingClientRect();

  // Prevent the circle from moving outside the container
  x = Math.max(0, Math.min(x, containerRect.width - circleRect.width));
  y = Math.max(0, Math.min(y, containerRect.height - circleRect.height));

  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
});

// Stop dragging when mouse button is released
document.addEventListener('mouseup', () => {
  isDragging = false;
});

// Resizable Circle Functionality
circle.addEventListener('mousedown', (e) => {
  if (e.target === circle) {
    // Save original size and position for resizing
    circle.originalWidth = circle.offsetWidth;
    circle.originalHeight = circle.offsetHeight;
    circle.originalX = e.clientX;
    circle.originalY = e.clientY;

    window.addEventListener('mousemove', resizeCircle);
    window.addEventListener('mouseup', stopResizing);
  }
});

// Resize the circle
function resizeCircle(e) {
  circle.style.width = Math.abs(circle.originalWidth + (e.clientX - circle.originalX)) + 'px';
  circle.style.height = Math.abs(circle.originalHeight + (e.clientY - circle.originalY)) + 'px';
}

// Stop resizing when mouse button is released
function stopResizing() {
  window.removeEventListener('mousemove', resizeCircle);
}
