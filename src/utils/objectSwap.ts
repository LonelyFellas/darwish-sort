export default function objectSwap<T>(arr: T[], lfs: number, rfs: number) {
  const defaultVal = Array.isArray(arr[0] ? [] : {});
  var temp = Object.assign(defaultVal, arr[lfs]);
  arr[lfs] = Object.assign(defaultVal, arr[rfs]);
  arr[rfs] = Object.assign(defaultVal, temp);
}
