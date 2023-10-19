import numberSwap from './utils/numberSwap';
import objectSwap from './utils/objectSwap';

export function bubbleSort<T = number[]>(arr: T): T;
export default function bubbleSort<T>(arr: T[], key?: keyof T): T[] {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    var swapped = false;
    for (let j = 0; j < len - 1 - i; j++) {
      if (key !== undefined && arr[j][key] > arr[j + 1][key]) {
        objectSwap(arr, j, j + 1);
        swapped = true;
      } else if (key === undefined && arr[j] > arr[j + 1]) {
        numberSwap(arr as number[], j, j + 1);
        swapped = true;
      }
    }

    if (!swapped) break;
  }
  return arr;
}

// console.log(bubbleSort([1, 9, 4, 2, 3, 8, 4, 7, 5]));
console.log(
  bubbleSort(
    [
      { name: '1', age: 2 },
      { name: '9', age: 9 },
      { name: '4', age: 4 },
      { name: '2', age: 2 },
      { name: '3', age: 3 },
      { name: '8', age: 8 },
      { name: '4', age: 4 },
      { name: '7', age: 7 },
    ],
    'age'
  )
);
