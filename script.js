VANTA.NET({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0xffffff,
  backgroundColor: 0x0d0d0d,
  points: 12.0,
  maxDistance: 20.0,
  spacing: 15.0
});

function playMusic() {
  document.getElementById('backgroundMusic').play();
}

function stopMusic() {
  document.getElementById('backgroundMusic').pause();
  document.getElementById('backgroundMusic').currentTime = 0;
}
