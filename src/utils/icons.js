import L from 'leaflet';

export function getIcon(iconSize, icon) {
  return L.icon({
    iconUrl: icon,
    iconSize: iconSize
  })
}

export function createIconSize(magnitude) {
  const pixel = magnitude * 10;

  const iconSize = [pixel, pixel];

  return iconSize
}