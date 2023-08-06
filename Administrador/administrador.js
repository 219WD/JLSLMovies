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
     myModal.show();
    };
  
    





      cargarTabla();

      
