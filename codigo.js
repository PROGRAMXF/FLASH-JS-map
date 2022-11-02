const productos = [
    {id: 'lista', precio: 1},
    {id: 'lista', precio: 2},
    {id: 'lista', precio: 3},
    {id: 'lista', precio: 4},
    {id: 'lista', precio: 5},
];
const nuevaLista = productos.map(function(producto){
    if(producto.precio < 10) return producto

    
         producto.precio = producto.precio *2;
    


});
console.log(nuevaLista);