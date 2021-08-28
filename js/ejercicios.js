// Ejercicio 1
let n = 90
let m = 50
let r = n + m

console.log( n + m ) // 👈 Esto imprime en consola

// Ejercicio 2
let a = 1
let b = 5
let c = 90
let d = 10
let e = 8

let z = a * b * c * d * e

console.log(z)

// Ejercicio 3
let x = 8
let y = 10
z = 90

let w = ((x + z) * y * y)

console.log(w)

// Ejercicio 4
let texto1 = "hola "
let texto2 = " mundo"

console.log(texto1 + texto2)

// Ejercicio 5

a = "5"
b = "3"
c = "7"
d = a + b + c

console.log(a + " + " + b + " + " + c + " = " + d)

// Ejercicio 6

let usuario1 = { nombre: "juan", apellido: "perez" }
let usuario2 = { nombre: "sara", apellido: "aparicio" }
let usuario3 = { nombre: "sebastián", apellido: "gonzales" }
let usuario4 = { nombre: "catalina", apellido: "rodriguez" }
let usuario5 = { nombre: "laura", apellido: "quintanilla" }
let usuario6 = { nombre: "camila", apellido: "lopez" }
let usuario7 = { nombre: "carlos", apellido: "gutierrez" }
let usuario8 = { nombre: "sergio", apellido: "chacon" }

n = 8

if (n == 1) {
    console.log("Hola, " + usuario1.nombre + " " + usuario1.apellido)
}else if(n == 2) {
    console.log("Hola, " + usuario2.nombre + " " + usuario2.apellido)
} else if(n == 3) {
    console.log("Hola, " + usuario3.nombre + " " + usuario3.apellido)
}else if(n == 4) {
    console.log("Hola, " + usuario4.nombre + " " + usuario4.apellido)
}else if(n == 5) {
    console.log("Hola, " + usuario5.nombre + " " + usuario5.apellido)
}else if(n == 6) {
    console.log("Hola, " + usuario6.nombre + " " + usuario6.apellido)
}else if(n == 7) {
    console.log("Hola, " + usuario7.nombre + " " + usuario7.apellido)
}else if(n == 8) {
    console.log("Hola, " + usuario8.nombre + " " + usuario8.apellido)
}else{
    console.log("Usuario no registrado")
}

// Arreglo / Array

let usuarios = [usuario1, usuario2, usuario3, usuario4, 
                usuario5, usuario6, usuario7, usuario8]
//  8 <= 8
if (n <= usuarios.length) {
    console.log("Hola con arreglo, " + usuarios[n-1].nombre + " " + usuarios[n-1].apellido)    
}else{
    console.log("Usuario no registrado")
}


// Ejercicio IF

// ¿Cuál es mayor?
a = 50
b = 50

if (a > b) {
    console.log(a + " es mayor")
}else{
    console.log(b + " es mayor")
}

// ¿ Cuál es mayor, cuál es menor o son iguales?

a = 500
b = 500

if (a > b) {
    console.log(a + " es mayor y " + b + " es menor")
}else if (b > a){
    console.log(b + " es mayor y " + a + " es menor")
}else {
    console.log(a + " y " + b + " son iguales")
}

// División modular % 

n = 8
let residuo = n % 2 // división modular

if (residuo == 0) {
    console.log(n + " es PAR")
}


if (residuo != 0){
    console.log(n + " es IMPAR")
}
if (residuo > 0) {
    console.log(n + " es IMPAR")
}
if (residuo == 1) {
    console.log(n + " es IMPAR")
}


// Ejercicio de películas
// Edad >= 0
// Categorias
// - A => Todo público
// - B => Desde 9 años
// - C => Desde 18 años
// - D => Desde 25 años

let edad = prompt("Ingrese su edad")
let categoria = prompt("Ingrese la categoria A, B, C o D").toUpperCase()

if (edad >= 0 && categoria == "A" || categoria == "B" || 
    categoria == "C" || categoria == "D") {
    
    if (categoria == "A") {
        alert("Si puede ver la película cat A 👪")
    }else if (categoria == "B" && edad >= 9){
        alert("Si puede ver la película cat B 🧨")
    }else if (categoria == "C" && edad >= 18){
        alert("Si puede ver la película cat C 🔪")
    }else if (categoria == "D" && edad >= 25){
        alert("Si puede ver la película cat D 🐹")
    }else{
        alert("PARA LA CASA 🏠👈")
    }

}else{
    alert("Edad o categorias invalidas 😣")
}
