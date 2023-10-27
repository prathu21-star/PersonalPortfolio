// Your existing JavaScript code here

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

// Additional JavaScript to integrate with your cursor effect

// Define colors for circles
const colors = [
    "#FFD700", // Gold
    "#FFC30D",
    "#FFB500",
    "#FFA800",
    "#FF9B00",
    "#FF8E00",
    "#FF8100",
    "#FF7400",
    "#FF6700",
    "#FF5A00",
    "#FF4D00",
    "#FF4000",
    "#FF3300",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();
