//Contenedor
let contenedorFavoritos = document.querySelector(".swiper-wrapper");

//Listar productos favoritos

const listarProductosFavoritos = () => {
  //limpiar el contenedor
  contenedorFavoritos.innerHTML = "";

  //Traigo los obj con nuevo estado
  let productosFavoritos = productos.filter((producto) => {
    return producto.favorito === true;
  });

  if (productosFavoritos.length > 0) {
    productosFavoritos.forEach((item) => {
      //Creamos los nodos
      let columna = document.createElement("div");
      columna.classList = "swiper-slide";
      let tarjeta = `
      <div class="swiper-slide">
      <div class="contenedor-img">
      <img src="${item.image}" class="card-img-top img-tarjeta" alt="${
        item.title
      }">
            </div>
      <div class="hover">
      <div class="titleFav">
      <h5 class="card-title">
      ${
      item.title
    }</h5>
    <ion-icon name="${item.favorito ? 'star-sharp' : 'star-outline'}" class="favorito-icon" onclick="marcarFavorito(${item.id})" aria-hidden="true"></ion-icon>        
        <p>${item.description}</p>  
        <a class="button peli" href="./pages/peliculas.html?id=${item.id}"><ion-icon name="play-sharp"></ion-icon></a>
    </div>
      </div>
      `;

      columna.innerHTML = tarjeta;
      contenedorFavoritos.append(columna);
    });
  } else {
    //Mensaje
    let columna = document.createElement("div");
    let mensaje = `<h3 style="color: #ffffff;"> No existen productos en Mi Lista!</h3>`;
    columna.innerHTML = mensaje;
    contenedorFavoritos.append(columna);
  }
};

listarProductosFavoritos();



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
    listarProductosFavoritos();
  };