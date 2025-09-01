function updateAvatar() {
  const name = document.getElementById("recipientName").value.trim();
  const avatar = document.getElementById("avatar");
  const words = name.split(" ").filter(word => word.length > 0);
  let initials = "";

  if (words.length > 0) {
    initials += words[0][0];
    if (words.length > 1) {
      initials += words[1][0];
    }
  }

  avatar.textContent = initials.toUpperCase() || "R";
}

updateAvatar();

// ✅ Fullscreen trigger jab user name input field par click kare
function goFullscreen() {
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}

function proceedToPay() {
  const name = document.getElementById('recipientName').value.trim();
  const amountInput = document.querySelector('.amount-input').value.trim();
  const amount = amountInput.replace(/[^0-9.]/g, '');
  const encodedName = encodeURIComponent(name);
  const encodedAmount = encodeURIComponent(amount);

  // ✅ Play audio
  const audio = document.getElementById("successTune");
  audio.play().then(() => {
    // ✅ Wait for audio to start then redirect
    setTimeout(() => {
      window.location.href = `paymentdone.html?name=${encodedName}&amount=${encodedAmount}`;
    }, 1500);
  }).catch(err => {
    console.error("Autoplay error:", err);
    window.location.href = `paymentdone.html?name=${encodedName}&amount=${encodedAmount}`;
  });
}
