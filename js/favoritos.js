//Contenedor
let contenedor = document.querySelector("#populares-slider");

//Traemos los datos del localS
let productos = JSON.parse(localStorage.getItem("productos")) || [];

//Listar productos favoritos

const listarProductos = () => {
  //limpiar el contenedor
  contenedor.innerHTML = "";

  //Traigo los obj con nuevo estado
  let productosFavoritos = productos.filter((producto) => {
    return producto.favorito === true;
  });

  if (productosFavoritos.length > 0) {
    productosFavoritos.forEach((item) => {
      //Creamos los nodos
      let columna = document.createElement("div");
      columna.classList = "col";
      let tarjeta = `
      <div class="swiper-slide">
      <div class="contenedor-img">
      <img src="${item.image}" class="card-img-top img-tarjeta" alt="${
        item.title
      }">
            </div>
      <div class="hover">

      <h5 class="card-title">
      <a class="nav-link" href="./pages/producto.html?id=${item.id}">${
      item.title
    }      <div class=" puntero">
      <ion-icon name="${item.favorito ? "star-outline" : "star-sharp"}" onclick="marcarFavorito(${item.id})" aria-hidden="true"></ion-icon>    
        </div></a>  
        <p>${item.description}</p>
        <button class="button peli"><ion-icon name="play-sharp"></ion-icon></button>
      </h5>
      </div>
      </div>
      `;

      columna.innerHTML = tarjeta;
      contenedor.append(columna);
    });
  } else {
    //Mensaje
    let columna = document.createElement("div");
    let mensaje = `<h3>No existen productos favoritos!</h3>`;
    columna.innerHTML = mensaje;
    contenedor.append(columna);
  }
};

listarProductos();

/*

<div class="card h-100">
          <div class="contenedor-img">     
          <img src="${item.image}" class="card-img-top img-tarjeta" alt="${item.title}">
          </div>
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <div class="text-muted puntero" >
        <i class="fa fa-times fa-2x puntero" aria-hidden="true" onclick="marcarFavorito(${item.id})"></i>
        </div>
      </div>
      </div>

*/

  //Funcion marcarFavorito
  
  const marcarFavorito = (id) => {
    //Obtenemos el index
    let index = productos.findIndex((item) => {
      return item.id == id;
    });
  
    //Cambiar el estado
    productos[index].favorito = !productos[index].favorito;
  
    //Actualizo localS
    localStorage.setItem("productos", JSON.stringify(productos));
    //Listar los productos
    listarProductos();
  };
  