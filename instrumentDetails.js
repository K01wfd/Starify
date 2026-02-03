const instLocation = { long: null, lat: null };
const instOrientation = { azimuth: null, pitch: null };

navigator.geolocation.getCurrentPosition((pos) => {
  try {
    instLocation.long = pos.coords.longitude;
    instLocation.lat = pos.coords.latitude;
    updateLocation(instLocation);
  } catch (error) {
    setErrorMessage(error.message);
  }
});

if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', (e) => {
    try {
      instOrientation.azimuth = e.alpha;
      instOrientation.pitch = e.beta;
      console.log(e);
      updateOrientation(instOrientation);
      setErrorMessage(e.timeStamp);
    } catch (error) {
      setErrorMessage(error.message);
    }
  });
}
