# Game 01

Let M be a not empty set of integer numbers, find the first subset of 2 numbers of M which sum N. For instance, let's say we've got a set of numbers [2, 5, 8, 14, 0] and N = 10, the resulting subset should be [2, 8].

## Challenge
You're required to create a function that receives an array (M) and integer value (N). This function has to return an array of the first possible solution.


> 🚨 We're looking to someone who can imagine future problems while is coding.

## Solución
### Función: `dontPermute(M, N)`

**Propósito:** Esta función busca el primer par de números dentro de un array `M` cuya suma sea igual a un número objetivo `N`. El orden de aparición de los números en `M` es importante; se devuelve el primer par encontrado.

**Entrada:**

*   `M`: Un array de números enteros (`number[]`). **Debe ser un array no vacío.**
*   `N`: Un número entero (`number`).

**Salida:**

*   Si se encuentra un par cuya suma es igual a `N`, la función devuelve un array de dos números `[num1, num2]`, donde `num1` y `num2` son los números del par encontrados en `M`, en el orden en que aparecen.
*   Si no se encuentra ningún par que cumpla la condición, la función devuelve `null`.

**Lógica:**

La función itera a través del array `M` usando un `Map` para almacenar los números ya visitados y su índice. Para cada número `num` en `M`, calcula su complemento `complement = N - num`. Si el complemento ya está presente en el `Map`, significa que se ha encontrado un par que suma `N`, y la función devuelve el par. Si no, se añade el número actual al `Map` junto con su índice. Esto asegura que se respete el orden de aparición.

**Ejemplo:**

`dontPermute([1, 4, 2, 7, 8, 6, 3], 10)` devuelve `[4, 6]`.

**Complejidad:**

*   **Temporal:** O(n), donde n es la longitud del array `M`.
*   **Espacial:** O(n) en el peor de los casos, debido al uso del `Map`.

## Tests

Este proyecto utiliza Jest para realizar pruebas unitarias.

**Ejecución de tests:**

1.  Instala las dependencias:

    ```bash
    npm install  # o yarn install
    ```

2.  Ejecuta los tests:

    ```bash
    npm test     # o yarn test
    ```

**Cobertura de código:**

Para generar un reporte de cobertura de código, ejecuta:

```bash
npm run test:coverage # o yarn test:coverage