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

function impar() {
    let pizzasImpares=[];
    for (i=0; i<pizzas.length; i++){

        if ((pizzas[i].id %2) !==0){
            pizzasImpares.push(" " + pizzas[i].nombre)
         } 
        } 
       console.log("Las Pizzas con id impar son las siguientes:" + pizzasImpares)
};
 
impar()

function masBarata () {

    for (i=0; i<pizzas.length; i++){

        if (pizzas[i].precio<600){
           console.log(`La Pizza "${pizzas[i].nombre}" es la mas barata. Su Precio es de: $${pizzas[i].precio}`)
       }
}
}

masBarata()

function NombrePrecio () {
    for (i=0; i<pizzas.length; i++){
           console.log(`La Pizza "${pizzas[i].nombre}" tiene un precio de $${pizzas[i].precio}`)
       }
}
 
NombrePrecio()


function ingredientes () {
    for (i=0; i<pizzas.length; i++){
        console.log(`La Pizza "${pizzas[i].nombre}" tiene los siguientes ingredientes: ${pizzas[i].ingredientes}`)
    }
}

ingredientes()