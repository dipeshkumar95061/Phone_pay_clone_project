let html5QrCode;

// Open Scanner
function openScanner() {
  startScanner(); // Start scanner when QR button clicked
}

// Start Scanner
function startScanner() {
  // Request fullscreen (mobile-friendly)
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { // Safari
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { // IE11
    elem.msRequestFullscreen();
  }

  document.getElementById("scanner-modal").style.display = "flex";
  html5QrCode = new Html5Qrcode("reader");

  Html5Qrcode.getCameras().then(devices => {
    if (devices && devices.length) {
      html5QrCode.start(
        { facingMode: "environment" }, // Use rear camera
        { fps: 10, qrbox: 250 },
        qrCodeMessage => {
          alert("Scanned: " + qrCodeMessage);
          closeScanner();
        },
        errorMessage => {
          // Optional: handle scanning errors
          console.warn("Scanning error:", errorMessage);
        }
      ).catch(err => {
        console.error("Start failed", err);
      });
    }
  }).catch(err => {
    console.error("Camera error", err);
  });
}

// Close Scanner
function closeScanner() {
  if (html5QrCode) {
    html5QrCode.stop().then(() => {
      html5QrCode.clear();
      document.getElementById("scanner-modal").style.display = "none";
    }).catch(err => {
      console.error("Stop failed", err);
    });
  }
}

// Navigate to Payment Page
function goToPayment() {
  // Navigate with query param to indicate fullscreen request
  window.location.href = "process.html?fullscreen=true";
}

// Go Home
function goHome() {
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}
