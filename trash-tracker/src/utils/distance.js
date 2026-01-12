
export function getDistanceInMeters([lat1, lon1], [lat2, lon2]) {
  const R = 6371e3;
  const x1 = (lat1 * Math.PI) / 180;
  const x2 = (lat2 * Math.PI) / 180;
  const Dx = ((lat2 - lat1) * Math.PI) / 180;
  const Dy = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(Dx / 2) ** 2 +
    Math.cos(x1) * Math.cos(x2) * Math.sin(Dy / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}
