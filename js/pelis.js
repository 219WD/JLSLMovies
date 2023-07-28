//-------------------------------------------------------------------------------

  class Producto {
    constructor(
      id,
      title,
      description,
      category,
      price,
      image,
      favorito = false
    ) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.category = category;
      this.price = price;
      this.image = image;
      this.favorito = favorito;
    }
  }

//-------------------------------------------------------------------------------

  const productos = JSON.parse(localStorage.getItem("productos")) || [];

//-------------------------------------------------------------------------------

const inicializacion = () => {
    const data = [
      {
        id: 9,
        title: "Peaky Blinders",
        description:
          "Cuenta la vida de la familia Shelby, una pandilla criminal de Birmingham en los años 30 conocida como Peaky blinders. Cada temporada nos va narrando como dicha familia llega a convertirse en una de las familias más influyentes de todos los tiempos",
        category: "series",
        image: "https://occ-0-2100-56.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeSBNWEyJU2Zq6xBeoyc9QNpnpEwzj5z4iODdTEUaQvN91on_2t4w46NlbWmsXkmxtDN-I2Qt-zS9YeklCIiXuFTPhPIe4yHb5c-pY1FBITKssZ9Y8zHJfnvibPh4rn3_OS4.jpg?r=1f6",
  
        favorito: false,
      },
      {
        id: 10,
        title: "Vikings",
        description:
          "El programa retrata a Ragnar como un granjero que ha conseguido construir barcos revolucionarios con instrumentos de navegación también revolucionarios",
        category: "series",
        image: "https://occ-0-2100-56.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSsdXt2UOduN09zjuCT3rseeRHfxnGzhjdNwwqKbpbTXl-m7jmtJ0plmYeC4aYhla61-fRdiwsJwSxdstz_8vMVjXR8feLUopnw.webp?r=21a",
  
        favorito: false,
      },
      {
        id: 11,
        title:
          "Ozark",
        description:
          "Un asesor financiero arrastra a su familia desde Chicago hasta los lagos de Ozark para lavar 500 millones de dólares en cinco años y tranquilizar a un jefe narco.",
        category: "series",
        image: "https://occ-0-2100-56.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeWVUnLavhCav6NuSMWZFQzNqAYPNt3Pf1kzZ3L_gsCTz8PCUAUtFCg556QZHoLQ2oXWlNjSrcnNbKDAJB2hEk7zhQROs69AG4SknEcMQlF8RPFaRYXAU6hXiQVU-3jt7A5Y.jpg?r=b2c",
  
        favorito: false,
      },
      {
        id: 12,
        title:
          "Los Ilegales",
        description:
          "Es simplemente una historia de un trío de hermanos que trafican con licor ilegal durante esta Prohibición, a quienes se les complican las cosas ...",
        category: "peliculas",
        image: "https://occ-0-2100-56.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABazILBuavNAiM-sIyC9-cRjF-fs2SopwhKOSl8glCX3ca7FTgcfBJXzIYPNWa8lE5vEcBxUF56zUW7a5bT-kYYxY7FDK_bUl1Vo.webp?r=935",
  
        favorito: false,
      },
      {
        id: 13,
        title: "El Diablo a Todas Horas",
        description:
          "Willard Russell convierte sus oraciones en un sacrificio. Las acciones de Russel llevan a su hijo Arvin a pasar de ser un niño que sufre abusos en el instituto a convertirse en un hombre que sabe cuándo y cómo ha de pasar a la acción.",
        category: "peliculas",
        image: "https://occ-0-2100-56.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQSWMeWQfwXPuVh9r3Vf64iLLncNQpo37GbyUzWPxtZcafZNbXpGTbcT6XheIJygYY1ptTDeLdF8fgxWnlF9j0Fdqgk28ZmOYJzPcvbdf2dzJpX-FWo9FXaUeWAVecMYvipx.jpg?r=223",
  
        favorito: false,
      },
      {
        id: 14,
        title:
          "Billions",
        description:
          "Billions encarna el relato utópico del neoliberalismo donde el mercado es un mecanismo de libertad y justicia y el Estado es un...",
        category: "serie",
        image: "https://occ-0-2100-56.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWZNa0EMQzd0mtKBvxOY5cUW8z0WmXlRWkRx9-uzuGJmDm6dI6GCk8tZcStj5_NCKep8lmPzW9Cq7M0OdF9La10kBkFfLbwQfUo.webp?r=d69",
  
        favorito: false,
      },
      {
        id: 15,
        title:
          "Django",
        description:
          "Con la ayuda de Django, Schultz emprende la búsqueda y captura de los delincuentes más buscados del Sur. Según va puliendo sus capacidad como cazado",
        category: "pelicula",
        image: "https://occ-0-2100-56.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRp4488J1Rc2OL01d-pwZYi7qS1HXqTK7Sv78TGuYLoOYCwJoK8USGEyqyDUv7eAHhBzo7fDYrOe9cRDCppfK78kmqfnq_FaMxo.webp?r=0f4",
  
        favorito: false,
      },
      {
        id: 16,
        title:
          "Petroleo Sangriento",
        description:
          "Un ambicioso buscador de petróleo se hace rico y convierte un simple pueblo en una ciudad en auge, provocando la ira de un carismático joven pastor.",
        category: "pelicula",
        image: "https://occ-0-2100-56.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABf6nlpg19juUHiIjcSvgoqi6MvyEXQRazWv_Q6bMPqdCXUnmoJgmr3zz9k-iAe4jGAiIeMyihuNeEGkwAs7zXRPLvNQLeQ88Tv0.webp?r=317",
  
        favorito: false,
      },
      {
        id: 17,
        title:
          "Better Call Saul",
        description:
          "Esta precuela de Breaking Bad nominada al Emmy narra la vida del picapleitos Jimmy McGill y su transformación en Saul Goodman, el abogado de moral laxa.",
        category: "serie",
        image: "https://occ-0-2100-56.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb23UfK2ybvFeaezXTi5G2rR2W9Mhd3PwEwq1THSMLPxBcNm7a90G4v0o8KDSI01Z-q2FsNk4b-NYyUdiAQYxSB2k8xZh8324lo-WkJGiUZXcp9aC1sLrxp6FuUe7tQPQtZk.jpg?r=90f",
  
        favorito: false,
      },
    ];

    data.forEach((item) => {
        let prod = new Producto(
          item.id,
          item.title,
          item.description,
          item.category,
          item.price,
          item.image
        );
    
        productos.push(prod);
      });
      localStorage.setItem("productos", JSON.stringify(productos));
    };

    //-------------------------------------------------------------------------------

    let contenedor = document.querySelector(".swiper-wrapper");

    //-------------------------------------------------------------------------------

//     <div class="swiper-slide">
//     <img src="/assets/hombreEnLlamas.jpg" alt="" />
// <div class="hover"></div>
// </div>

const listarProductos = () => {
    //limpiar
    contenedor.innerHTML = "";
    //Recorrer
    productos.forEach((item) => {
      //Creamos los NODOS
      let columna = document.createElement("div");
      columna.classList = "swiper-slide";
      //Creamos la tarjeta
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
    }</a>
        <p>${item.description}</p>
      </h5>
      </div>
      </div>
      `;
  
      columna.innerHTML = tarjeta;
      contenedor.appendChild(columna);
    });
  };
  
  if (productos == 0) {
    inicializacion();
  }
  
  listarProductos();
  