const instLocation = { long: null, lat: null };
const instOrientation = { azimuth: null, pitch: null };

navigator.geolocation.getCurrentPosition((pos) => {
  instLocation.long = pos.coords.longitude;
  instLocation.lat = pos.coords.latitude;
  updateLocation(instLocation);
});

window.addEventListener('deviceorientationabsolute', (e) => {
  instOrientation.azimuth = e.alpha;
  instOrientation.pitch = e.beta;
  updateOrientation(instOrientation);
});
