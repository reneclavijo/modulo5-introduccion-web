# Ejercicio 3 | Lógica de programación, Js y Git

> Entregar el link de github en los buzones: Función Básica I; Fundamentos Básicos I (Los 13 algoritmos básicos); Jugando con objetos

## Enunciado

Utilizar el digrama de T y el lenguaje de javascript  para resolver los siguientes problemas.

Crear un archivo llamado logica.html en la carpeta de vistas, un archivo /js/ejercicios.js y enlazarlos utilizando la etiqueta <script>

## Pasos para resolver el ejercicio

1. Variables y Tipos de datos

   1. Dado 2 números n y m, sumarlo e imprimirlos por consola
   2. Dado 5 números a, b, c, d y e, multiplicarlos entre sí, guardarlos en una variable z e imprimirlos en consola
   3. Dado las variables x, y, z; imprimir el resultado de la operación

        ```math
            ((x + z) * y * y)
        ```

   4. Dados dos variables de texto como a = "hola " y b = "mundo" mostrar el restulado de a + b
   5. Dado 3 variables a, b y c; imprimir en consola el resultado de la operación. 5 + 3 + 7 = 537
   6. Dado los siguientes objetos javascript (JSON)

        ```javascript
        usuario1 = { nombre: "juan", apellido: "perez" }
        usuario2 = { nombre: "sara", apellido: "aparicio" }
        usuario3 = { nombre: "sebastián", apellido: "gonzales" }
        usuario4 = { nombre: "catalina", apellido: "rodriguez" }
        usuario5 = { nombre: "laura", apellido: "quintanilla" }
        usuario6 = { nombre: "camila", apellido: "lopez" }
        usuario7 = { nombre: "carlos", apellido: "gutierrez" }
        usuario8 = { nombre: "sergio", apellido: "chacon" }
        ```

    Imprimir un saludo para el usuario según un número n. Por ejemplo, si n = 3 debería imprimirse en consola "Hola, sebastián gonzales"

2. Estructura If
    1. Entendiendo la restructura If

        ```javascript
        //1. Dado un número b realizar la siguiente operación
            if(b<10) {
                return 2;
            }
            else     {
                return 4;
            }
            console.log(b);
        ```

    2. Dado dos variables numéricas a y b, deterinar cuál de los dos es mayor
    3. Dados dos variables numéricas a y b, determinar cuál es mayor, cuál es menor o si son iguales
    4. Dado un número n, determinar si es un número par
    5. Dado un número n, determinar si es un número impar
    6. Realizar un software para el control del ingreso de pesonas al cine, donde las películas se dividen en las siguientes categorías:

       - A => Todo público
       - B => Desde 9 años
       - C => Desde 18 años
       - D => Desde 25 años

        El usuario debe ingresar su edad y la categoría de la película que desea ver y el software deberá imprimir en consola si puede no ver la película según la clasificación.

3. Estructura For
4. Estructura While
5. Funciones y fetch (ajax|api)
