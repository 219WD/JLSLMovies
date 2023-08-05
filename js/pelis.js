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
        category: "series",
        image: "https://occ-0-2100-56.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWZNa0EMQzd0mtKBvxOY5cUW8z0WmXlRWkRx9-uzuGJmDm6dI6GCk8tZcStj5_NCKep8lmPzW9Cq7M0OdF9La10kBkFfLbwQfUo.webp?r=d69",
  
        favorito: false,
      },
      {
        id: 15,
        title:
          "Django",
        description:
          "Con la ayuda de Django, Schultz emprende la búsqueda y captura de los delincuentes más buscados del Sur. Según va puliendo sus capacidad como cazado",
        category: "peliculas",
        image: "https://occ-0-2100-56.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRp4488J1Rc2OL01d-pwZYi7qS1HXqTK7Sv78TGuYLoOYCwJoK8USGEyqyDUv7eAHhBzo7fDYrOe9cRDCppfK78kmqfnq_FaMxo.webp?r=0f4",
  
        favorito: false,
      },
      {
        id: 16,
        title:
          "Petroleo Sangriento",
        description:
          "Un ambicioso buscador de petróleo se hace rico y convierte un simple pueblo en una ciudad en auge, provocando la ira de un carismático joven pastor.",
        category: "peliculas",
        image: "https://occ-0-2100-56.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABf6nlpg19juUHiIjcSvgoqi6MvyEXQRazWv_Q6bMPqdCXUnmoJgmr3zz9k-iAe4jGAiIeMyihuNeEGkwAs7zXRPLvNQLeQ88Tv0.webp?r=317",
  
        favorito: false,
      },
      {
        id: 17,
        title:
          "Better Call Saul",
        description:
          "Esta precuela de Breaking Bad nominada al Emmy narra la vida del picapleitos Jimmy McGill y su transformación en Saul Goodman, el abogado de moral laxa.",
        category: "series",
        image: "https://occ-0-2100-56.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb23UfK2ybvFeaezXTi5G2rR2W9Mhd3PwEwq1THSMLPxBcNm7a90G4v0o8KDSI01Z-q2FsNk4b-NYyUdiAQYxSB2k8xZh8324lo-WkJGiUZXcp9aC1sLrxp6FuUe7tQPQtZk.jpg?r=90f",
  
        favorito: false,
      },
      {
        id: 9,
        title: "El Patron del Mal",
        description:
          "El Patrón del mal es la producción más ambiciosa que se ha producido en Colombia. Basada en un completísimo documento periodístico y en los testimonios de personas que de alguna manera tuvieron que ver con este genio del mal.",
        category: "series",
        image: "https://occ-0-2100-56.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaEOkD-USu86d1QUn-lBgcJ0km3NZ553t8aVKF0bHcC4w32hqVvBd_R1aaIPS9KTXUSVNEUAdpD1sLz-WOoki8ELxLZK2dFd7kU.webp?r=1c1",
  
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
      <div class="titleFav">
      <h5 class="card-title">
      ${
      item.title
    }</h5><div class=" puntero">
      <ion-icon name="${item.favorito ? "star-outline" : "star-sharp"}" onclick="marcarFavorito(${item.id})" aria-hidden="true"></ion-icon>    
        </div>
        <p>${item.description}</p>
        <a class="button peli" href="./pages/producto.html?id=${item.id}"><ion-icon name="play-sharp"></ion-icon></a>
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
  
  const listarProductosPopulares = () => {
    const contenedorPopulares = document.getElementById("populares-slider");
    // Limpiar
    contenedorPopulares.innerHTML = "";
    // Recorrer
    productos.forEach((item) => {
        // Creamos los NODOS
        let columna = document.createElement("div");
        columna.classList = "swiper-wrapper";

        // Creamos la tarjeta
        let tarjeta = `
        <div class="swiper-slide">
        <img src="${item.image}" class="card-img-top img-tarjeta" alt="${
          item.title
        }">
        <div class="hover">
      <div class="titleFav">
      <h5 class="card-title">
      ${
      item.title
    }</h5><div class=" puntero">
      <ion-icon name="${item.favorito ? "star-outline" : "star-sharp"}" onclick="marcarFavorito(${item.id})" aria-hidden="true"></ion-icon>    
        </div>
        <p>${item.description}</p>
        <a class="button peli" href="./pages/producto.html?id=${item.id}"><ion-icon name="play-sharp"></ion-icon></a>
      </div>
      </div>
        `;

        columna.innerHTML = tarjeta;
        contenedorPopulares.appendChild(columna);
    });
    
  }

  listarProductosPopulares();

  const listarAccion = () => {
    const contenedorPopulares = document.getElementById("accion-slider");
    // Limpiar
    contenedorPopulares.innerHTML = "";
    // Recorrer
    productos.forEach((item) => {
        // Creamos los NODOS
        let columna = document.createElement("div");
        columna.classList = "swiper-wrapper";

        // Creamos la tarjeta
        let tarjeta = `
        <div class="swiper-slide">
        <img src="${item.image}" class="card-img-top img-tarjeta" alt="${
          item.title
        }">
        <div class="hover">
      <div class="titleFav">
      <h5 class="card-title">
      ${
      item.title
    }</h5><div class=" puntero">
      <ion-icon name="${item.favorito ? "star-outline" : "star-sharp"}" onclick="marcarFavorito(${item.id})" aria-hidden="true"></ion-icon>    
        </div>
        <p>${item.description}</p>
        <a class="button peli" href="./pages/producto.html?id=${item.id}"><ion-icon name="play-sharp"></ion-icon></a>
      </div>
      </div>
        `;

        columna.innerHTML = tarjeta;
        contenedorPopulares.appendChild(columna);
    });
    
  }

  listarAccion();








  const inicializacion2 = () => {
    const data = [
      {
        id: 9,
        title: "Tabu",
        description:
          "Taboo está ambientada en 1814 y comienza con James Delaney (Tom Hardy) regresando a Inglaterra después de doce años en África con catorce diamantes robados.",
        category: "series",
        image: "https://occ-0-2100-56.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYu7tPVcIXPmUJOtIRxxPkgM43VBJiV_JvlkyOnhwvM4J5usIx5CliQUB_Otgy1agEBghG4y3-h-2pjC4GTMT2dSGaS5mYWwbPA.webp?r=fc2",
  
        favorito: false,
      },
      {
        id: 10,
        title: "Narcos Mexico",
        description:
          "El narcotráfico en México es una actividad ilegal que consiste en el cultivo, fabricación, distribución y venta de sustancias ilícitas.",
        category: "series",
        image: "https://occ-0-2100-56.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRkAmby2-255CQk7dKpzfxi8yKi7xYD_PPxmHTkKcbMctGcJfoA6I818v8wqzJdrTrqqM6Yn3elPpDinFXe60MEexF7KCxAnIHQuvRBfOR1Pp0Ee-oIqJwoRpr2xp3tX7ptP.jpg?r=86f",
  
        favorito: false,
      },
      {
        id: 11,
        title:
          "Freud",
        description:
          "En la segunda mitad del siglo XIX, en la Viena imperial, una joven mujer es asesinada en extrañas circunstancias. Sigmund Freud, de treinta años, acaba de llegar a la ciudad de un viaje académico desde Francia",
        category: "series",
        image: "https://occ-0-2100-56.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcX53MCM3v2M9hEKKpRJQq9b0LIKk5ULE2lXJXyTn3tVJxiO-Ybeaa7nPL88iCPFwac0O9D5eVsLDNAfOuyv2gKUzNzJ2pKnPX4godWgsE3eEF_aJyijeNq7qL-CuXgwpSDy.jpg?r=d39",
  
        favorito: false,
      },
      {
        id: 12,
        title:
          "Scarface",
        description:
          "Scarface fue un gangster y empresario estadounidense que se dio a conocer durante la época de la Ley Seca como cofundador y jefe del Chicago .",
        category: "peliculas",
        image: "https://occ-0-2100-56.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb6lREBajbS9wL0W-13ZSvgrJVkcqV9Wc1-bZVMZ-VWMAT1Bev6DAPZpvKcv66JREDSkPO2q8edotfXt-b_JHBIfc3UzM6vVmI4.webp?r=c69",
  
        favorito: false,
      },
      {
        id: 13,
        title: "El Padrino",
        description:
          "El Padrino narra la historia de un hombre, Vito Corleone, el capo más respetado de Nueva York. Déspota benevolente, implacable con sus rivales, inteligente y fiel a los principios del honor y la amistad.",
        category: "peliculas",
        image: "https://occ-0-2100-56.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdV5v-UL390Zkh34DPkME56qTEnuAmkhWxtpu9FGBrmO8ZlvxZmEO8OuSTnFqrEiNrkPM1GWdYYBV6VWgMgNhlg1yhTwFLWRZm8.webp?r=2c8",
  
        favorito: false,
      },
      {
        id: 14,
        title:
          "Rescatando al soldado Ryan",
        description:
          "El soldado James Ryan es el único sobreviviente de entre sus hermanos quienes, también soldados, han muerto en distintas batallas de la Segunda Guerra Mundial. ",
        category: "series",
        image: "https://occ-0-2100-56.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZwC7OVRlFLcR_n_QuP1D_skyzDTvrxYvFbJKIjN2knMltuQK452qEH-Rs1djA4HD4PS3WZJTlb8AOtrhoeJoRPCdErY1-Jzrzo.webp?r=e4a",
  
        favorito: false,
      },
      {
        id: 15,
        title:
          "El Renacido",
        description:
          "Inspirada en hechos reales, EL RENACIDO (THE REVENANT) es una épica historia de supervivencia y transformación que tiene lugar en el salvaje Oeste americano. Durante una expedición en esas inexploradas tierras vírgenes.",
        category: "peliculas",
        image: "https://occ-0-2100-56.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbgqDMvkYtYGIsvPWVUxbpJX3a2AuAYouOTQ2L2QmFyWhf8PdgzmN_SRoq5UUwJuWMAWRT9Yl70Sry0TbISbOi20Qbvxl2V3L5E.webp?r=8ce",
  
        favorito: false,
      },
      {
        id: 16,
        title:
          "El Hombre Gris",
        description:
          "El Hombre Gris es una adaptación de la serie de novelas homónima escrita por Mark Greaney y está protagonizada por Chris Evans y Ryan Gosling",
        category: "peliculas",
        image: "https://occ-0-2100-56.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbSPvhXfKAqW3Nehc2KkBces7XbMImP8TjPuUWGgRNO85H1f0dF7fUuykLw7XXtrngArMOJit1N0DAvIqQScnKkXuMzzSRQWX7DWueVg_1QcIOhj7R_8Jv3MqqSZARzNfSBV.jpg?r=c85",
  
        favorito: false,
      },
      {
        id: 17,
        title:
          "La Isla Siniestra",
        description:
          "La isla siniestra muestra a DiCaprio como un alguacil federal atrapado en una red de ilusiones y paranoia mientras investiga la desaparición de una asesina en un remoto hospital (psiquiátrico-prisión)",
        category: "peliculas",
        image: "https://occ-0-2100-56.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTPPzEJFQndmbwiK3u2ahRVskkSVBZ-CtNnzgN_0rduVx9N3pQOvM_kFUkkImy08z86zMEjxEgzl2Ntnf3xiPE7uEDnMKfJN0j8.webp?r=01b",
  
        favorito: false,
      },
      {
        id: 9,
        title: "El Patron del Mal",
        description:
          "El Patrón del mal es la producción más ambiciosa que se ha producido en Colombia. Basada en un completísimo documento periodístico y en los testimonios de personas que de alguna manera tuvieron que ver con este genio del mal.",
        category: "series",
        image: "https://occ-0-2100-56.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaEOkD-USu86d1QUn-lBgcJ0km3NZ553t8aVKF0bHcC4w32hqVvBd_R1aaIPS9KTXUSVNEUAdpD1sLz-WOoki8ELxLZK2dFd7kU.webp?r=1c1",
  
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
