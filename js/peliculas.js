//js para hacer click y me redireccione a otra pagina
const parametro = new URLSearchParams(location.search);

const idProducto = parametro.get("id");

//Capturar el contenedor
let contenedor = document.querySelector("#contenedorproductos");

//Trae del localS
let productos = JSON.parse(localStorage.getItem("productos")) || [];

//Funcion traer los datos
const traeDatos = () => {
  let producto = productos.find((item) => item.id == idProducto);

  if (producto) {
    let col = document.createElement("div");
    col.classList = "card";

    let tarjeta = `

    <div>
    <img src="${producto.image}" class="" alt="${producto.title}">
    
    </div>
    <div> <h5 class="titulo">${producto.title}</h5>
      <h3>Rating: ${producto.rating} </i><i class="fa-solid fa-star"><i class="fa-sharp fa-solid fa-star-half-stroke fa-beat"></i></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></h3>
    <p class="card-text">${producto.description}</p>
    <a href=""><button class="button header"><ion-icon name="play-sharp"></ion-icon>reproducir</button></a>

    </div>

     
   

  

    `;

    col.innerHTML = tarjeta;
    contenedor.append(col);

   // Crear y agregar el nuevo contenedor después de la tarjeta existente
   let nuevoContenedor = document.createElement("div");
   nuevoContenedor.classList = "nuevo-contenedor";
   nuevoContenedor.textContent = "Este es un contenedor adicional.";
 
   contenedor.append(nuevoContenedor);
   
  } else {
    console.log("No existe un producto con el id recibido!");
  }
};

traeDatos();
