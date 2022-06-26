import L from 'leaflet';

export function getIcon(iconSize, icon) {
  return L.icon({
    iconUrl: icon,
    iconSize: iconSize
  })
}

export function createIconSize(magnitude) {

  // https://stackoverflow.com/questions/3571717/how-to-check-if-a-number-is-negative
  function isPositive(n) {
    return 1/(n*0)===1/0
  }

  if (isPositive(magnitude)) {
    const pixel = magnitude * 10;

    const iconSize = [pixel, pixel];

    return iconSize
  } else {
    const iconSize = [0.5, 0.5]

    return iconSize;
  }

}