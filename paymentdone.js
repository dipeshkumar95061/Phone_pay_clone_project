function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

window.onload = function() {
  const name = getQueryParam('name') || 'Rani Devi';
  const amount = getQueryParam('amount') || '20';
  const upi = getQueryParam('upi') || 'payqrpp3xxkjp4v@oksbi';

  const avatar = document.getElementById('avatar');
  const initials = name.trim().split(' ').map(n => n[0]).join('').toUpperCase() || 'RD';
  avatar.textContent = initials;

  document.getElementById('nameInput').value = name;
  document.getElementById('amountDisplay').textContent = amount;
  document.getElementById('upiDisplay').textContent = upi;

  const timestamp = document.getElementById("timestamp");
  const now = new Date();
  const options = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  timestamp.textContent = now.toLocaleString("en-GB", options).replace(",", " at");
}

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

function handleDone() {
  window.location.href = "index.html"; // ✅ Redirect to Home
}
