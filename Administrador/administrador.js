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

  
    let main = document.querySelector("#main");

    let contenedorTabla = document.querySelector("#contenedor-tabla");
    let cuerpoTabla = document.querySelector("#cuerpo-tabla");

    const myModal = new bootstrap.Modal(document.getElementById("productoModal"));


    let productos = JSON.parse(localStorage.getItem("productos")) || [];


    let indexUpdate = null;


    const cargarTabla = () => {
        cuerpoTabla.innerHTML = "";
        productos.forEach((producto) => {
          let tableRow = document.createElement("tr");
          let contenidoHTML = `
          
          <th scope="row">${producto.title}</th>
          <td>${producto.description}</td>
          <td>${producto.category}</td>
          <td>${producto.price}</td>
          <td>
          <div class="d-flex gap-2">
          <i class="fa fa-pencil puntero" onclick="abrirModal(${producto.id})" aria-hidden="true"></i>
          <i class="fa fa-trash puntero" onclick="eliminarProducto(${producto.id})" aria-hidden="true"></i>
          </div>
          
          </td>
          `;
          tableRow.innerHTML = contenidoHTML;
          cuerpoTabla.append(tableRow);
        });
      };

      const guardarProducto = (event) => {
        event.preventDefault();

    let id = productos.at(-1).id + 1;

    let titulo = document.querySelector("#titulo").value;
    let descripcion = document.querySelector("#descripcion").value;
    let categoria = document.querySelector("#categoria").value;
    let precio = document.querySelector("#precio").value;
    let imagen = document.querySelector("#imagen").value;

    let producto = new Producto(
      id,
      titulo,
      descripcion,
      categoria,
      precio,
      imagen
    );

    productos.push(producto);

    localStorage.setItem("productos", JSON.stringify(productos));

    document.querySelector("#titulo").value = "";
    document.querySelector("#descripcion").value = "";
    document.querySelector("#categoria").value = "";
    document.querySelector("#precio").value = "";
    ocument.querySelector("#imagen").value = "";

    cargarTabla();

     };

      const eliminarProducto = (id)=> {
        let nuevoArreglo = productos.filter((producto)=>{
          return producto.id !=id;
        })

        let validar = confirm(
            `Esta seguro que desea eliminar el producto con el id ${id}`
          );

          if (validar) {
            productos =[...nuevoArreglo];
            localStorage.setItem("productos" , JSON.stringify(productos));
            cargarTabla();
          }
      
      };

    const abrirModal = (id) => {
     console.log(id);

     indexUpdate=productos.findIndex((item) =>{
        return item.id = id;
      });
      console.log(indexUpdate);
  
      document.querySelector("#tituloModal").value= productos[indexUpdate].title;
  
      document.querySelector("#descripcionModal").value= productos[indexUpdate].description;                                      
  
      document.querySelector("#categoriaModal").value= productos[indexUpdate].category;
  
      document.querySelector("#precioModal").value= productos[indexUpdate].price;
  
      document.querySelector("#imagenModal").value= productos[indexUpdate].image;
  

     myModal.show();
    };

    const actualizarProducto = (event) => {
        event.preventDefault();

        productos[indexUpdate].title = document.querySelector("#tituloModal").value;
        productos[indexUpdate].description = document.querySelector("#descripcionModal").value;
        productos[indexUpdate].category = document.querySelector("#categoriaModal").value;
        productos[indexUpdate].price = document.querySelector("#precioModal").value;
        productos[indexUpdate].image = document.querySelector("#imagenModal").value;

      
        localStorage.setItem("productos", JSON.stringify(productos));

        cargarTabla();
      
        myModal.hide();


    };
    

      cargarTabla();

      
