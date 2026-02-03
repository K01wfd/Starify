const long = document.getElementById('long');
const lat = document.getElementById('lat');

const azimuth = document.getElementById('azimuth');
const pitch = document.getElementById('pitch');

const errorMessage = document.getElementById('error-message');

function updateLocation(coords) {
  long.textContent = coords.long;
  lat.textContent = coords.lat;
}

function updateOrientation(orientation) {
  azimuth.textContent = `Azimuth is ${orientation.azimuth}`;
  pitch.textContent = `Pitch is ${orientation.pitch}`;
}

function setErrorMessage(message) {
  errorMessage.textContent = message;
}
