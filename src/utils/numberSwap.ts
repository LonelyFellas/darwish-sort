export default function numberSwap(arr: number[], lfs: number, rfs: number) {
  var temp = arr[lfs];
  arr[lfs] = arr[rfs];
  arr[rfs] = temp;
}
