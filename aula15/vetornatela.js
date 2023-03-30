let valores = [8, 1, 7, 4, 2, 9]

/*
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)

} */


// de forma simplificada 
//for(let pos  in valores) {
   // console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
//}
let pos = valores.indexOf(7)
console.log(`valor ${valores} esta na posição ${pos}`)