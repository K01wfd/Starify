const long = document.getElementById('long');
const lat = document.getElementById('lat');

const azimuth = document.getElementById('azimuth');
const pitch = document.getElementById('pitch');

function updateLocation(coords) {
  long.textContent = coords.long;
  lat.textContent = coords.lat;
}

function updateOrientation(orientation) {
  azimuth.textContent = orientation.azimuth;
  pitch.textContent = orientation.pitch;
}
