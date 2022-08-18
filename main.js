class Pizzas {
    constructor (id, nombre, ingredientes, precio) {
        this.id = id;
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.precio = precio;                                                                         
    }
}

const pizzas = [
    
    new Pizzas (0, 'Napolitana',[' Tomate', ' Queso', ' Oregano', ' Aceitunas'] , 1200),

    new Pizzas (1, 'Muzzarella',[' Salsa de tomate', ' Queso Muzarella', ' Oregano', ' Aceitunas'] , 599),
    
    new Pizzas (2, 'Fugazzeta',[' Cebolla', ' Queso', ' Oregano', ' Aceitunas'] , 1000),
    
    new Pizzas (3, 'Champiñones',[' Champiñones asados', ' Queso', ' Oregano', ' Aceitunas Negras'] , 1400),
    
    new Pizzas (4, 'Especial con Huevo',[' Jamon', ' Queso', ' Oregano', ' Aceitunas',' Huevo'] , 900),
    
    new Pizzas (5, 'A la piedra',[' Tomate', ' Queso', ' Oregano', ' Aceitunas', ' Pimiento asado'] , 1100),

]

console.log('*Consigna 1:')

function impar(pizzas) {
    
    let pizzasImpares=[];
   
    pizzas.forEach( (pizza) => {

        pizza.id %2 !== 0 ? pizzasImpares.push (" " + pizza.nombre) : null;

    });
    console.log("Las Pizzas con ID impar son las siguientes:" + pizzasImpares)
}

impar(pizzas)

console.log('*Consigna 2:')

function masBarata (pizzas) {

    const pizzaMasBarata = pizzas.some(function(pizza){
        return pizza.precio <=599
    });

    console.log(pizzaMasBarata ? 'Tenemos pizzas con precios mas bajos a $600' : 'No tenemos pizzas mas baratas que $600')

}

masBarata(pizzas)


console.log ('*Consigna 3:')

function NombrePrecio (pizzas) {
 pizzas.forEach( (pizza) => {
    console.log(`La Pizza "${pizza.nombre}" tiene un precio de $${pizza.precio}`)
 })           
}
 
NombrePrecio(pizzas)

console.log('*Consigna 4:')

function ingredientes (pizzas) {
    pizzas.forEach((pizza) => {
        console.log('la Pizza ' + pizza.nombre + ' tiene los siguientes ingredientes:')

        pizza.ingredientes.forEach( (ingrediente) => {
            console.log(`- ${ingrediente}`)
        })
    });
}

ingredientes(pizzas)