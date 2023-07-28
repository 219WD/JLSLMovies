//Clase Producto con su constructor
/*la propiedad favorito en false, al ingresar un producto nuevo */

class Producto {
  constructor(
    id,
    title,
    description,
    category,
    image,
    favorito = false
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.category = category;
    this.image = image;
    this.favorito = favorito;
  }
}
// ------------------------------------------------------------------------------------------

//Variable productos que trae los prod de localS
/*Pero al comenzar como esta vacio devuelve el arreglo vacio "[];
por eso usamos el OPERADOR OR ||" */
const productos = JSON.parse(localStorage.getItem("productos")) || [];
// ------------------------------------------------------------------------------------------

//Funcion inicializacion (a manera de ejemplo para poder comenzar)

const inicializacion = () => {
  const data = [
    {
      id: 9,
      title: "Peaky Blinders",
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      category: "electronics",
      image: "./assets/peakyblinders.jpg",

      favorito: false,
    },
    {
      id: 10,
      title: "Vikings",
      description:
        "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
      category: "electronics",
      image: "./assets/vikings.jpg",

      favorito: false,
    },
    {
      id: 11,
      title:
        "Ozark",
      description:
        "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
      category: "electronics",
      image: "./assets/ozark.jpg",

      favorito: false,
    },
    {
      id: 12,
      title:
        "Los Ilegales",
      description:
        "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      category: "electronics",
      image: "./assets/losilegales.jpg",

      favorito: false,
    },
    {
      id: 13,
      title: "El Diablo a Todas Horas",
      description:
        "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
      category: "electronics",
      image: "./assets/eldiabloatodashoras.jpg",

      favorito: false,
    },
    {
      id: 14,
      title:
        "Billions",
      description:
        "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
      category: "electronics",
      image: "./assets/billions.jpg",

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
// ------------------------------------------------------------------------------------------

//Capturamos el contenedor
let contenedor = document.querySelector("#swiper-wrapper");

//Estructura de las cards
/*

<div class="swiper-wrapper" id="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="/assets/asesinodelaspostales.jpg" alt="" />
                </div>
                </div>

  

*/

const listarProductos = () => {
  //limpiar
  contenedor.innerHTML = "";
  //Recorrer
  productos.forEach((item) => {
    //Creamos los NODOS
    let columna = document.createElement("div");
    columna.classList = "col";
    //Creamos la tarjeta
    let tarjeta = `
    <div class="swiper-slide">
    <img src="${item.image}" alt="${item.title}">
    </div>
    <div class="card-body ">
      <h5 class="card-title">
      <a class="nav-link" href="./pages/producto.html?id=${item.id}">${item.title
      }</a>
      </h5>
      
    </div>
    <div class=" puntero">
  <i class="${item.favorito ? "fa fa-star fa-2x" : "fa fa-star-o fa-2x"
      }" onclick="marcarFavorito(${item.id})" aria-hidden="true"></i>    
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
