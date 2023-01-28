//Valores considerados como falsy
// false, 0, NaN, "", undefined, null
// Todos os demais valores são considerados como truthy

let v1 = ""

if (v1){
    console.log("Verdadeiro", v1, typeof v1)
} else {
    console.log("Falso", v1, typeof v1)
}