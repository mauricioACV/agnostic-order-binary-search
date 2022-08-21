console.clear();

// **********************************************************
// **********************************************************
// Búsqueda Binaria Independiente del Orden (order-agnostic)
// **********************************************************
// **********************************************************

// Supongamos que tenemos que encontrar un elemento de destino
// en una matriz ordenada. Sabemos que la matriz está ordenada,
// pero no sabemos si está ordenada en orden ascendente o descendente.

// Enfoque para la búsqueda binaria independiente del orden
// La implementación es similar a la búsqueda binaria, excepto
// que necesitamos identificar si la matriz está ordenada
// en orden ascendente o descendente. Esto nos permite tomar
// la decisión de continuar la búsqueda en la mitad izquierda
// de la matriz o en la mitad derecha de la matriz.

// 1.- Primero comparamos el objetivo con el elemento medio.

// 2.- Si la matriz está ordenada en orden ascendente y
// el objetivo es menor que el elemento del medio, O la matriz
// está ordenada en orden descendente y el objetivo es mayor
// que el elemento del medio, entonces continuamos la búsqueda
// en la mitad inferior de la matriz configurando end=mid-1.

// 3.- De lo contrario, realizamos la búsqueda en la mitad
// superior de la matriz configurando start=mid+1
// Lo único que debemos hacer es averiguar si la matriz
// está ordenada en orden ascendente o descendente.
// Podemos encontrar esto fácilmente comparando el primer
//  y el último elemento de la matriz.

// if arr[0] < arr[arr.length-1]
//     array is sorted in ascending order
// else
//     array is sorted in descending order

const arr1 = [-1, 2, 4, 6, 7, 8, 12, 15, 19, 32, 45, 67, 99];
const arr2 = [99, 67, 45, 32, 19, 15, 12, 8, 7, 6, 4, 2, -1];
const target = 15;

function orderAgnosticSearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let isAscending = arr[start] < arr[end];
  while (start <= end) {
    let mid = start + (end - start) / 2;
    if (target === arr[mid]) return mid;
    if (isAscending) {
      if (target < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (target < arr[mid]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
}

console.log("Índice target: ", orderAgnosticSearch(arr1, target));
console.log("Índice target: ", orderAgnosticSearch(arr2, target));

// Análisis de la complejidad del tiempo
// No habrá cambios en la complejidad del tiempo,
// por lo que será igual que la búsqueda binaria.
