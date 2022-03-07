

export const getUserLocation = async (): Promise<[number, number]> => {
  return new Promise((resolve, reject) => {
    /* también tengo watch para geolocalizar en movimiento */
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve([coords.latitude, coords.longitude]);
      },
      (err) => {
        alert(err)
        reject("Error: " + err);
      })
  })
}