const requestURL = '../datos.json';

let grid = document.querySelector('.image-grid')


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing'
    const obras = jsonObject['main'];

    for (let i = 0; i < obras.length; i++ ) {
        let image = document.createElement("img");

        //let h2 = document.createElement('h2');       

        // h2.textContent = obras[i].nombre;
        // c_info.textContent = obras[i].contact_info;

        image.addEventListener("click", () => {
        let click_info = document.querySelector(".click-info");
        //console.log(click_info);
          click_info.style.display = "block";
          
        let title = document.createElement("h2");
        title.textContent = obras[i].nombre;
        click_info.appendChild(title);

        let inner_image = document.createElement("img");
        inner_image.setAttribute("src", obras[i].imagen);
        click_info.appendChild(inner_image);

        let autor = document.createElement("p");
        autor.innerHTML = "<b>Autor: </b>" + obras[i].autor;
        click_info.appendChild(autor);

        let tecnica = document.createElement("p");
        tecnica.innerHTML = "<b>Tecnica: </b>" + obras[i].tecnica;
        click_info.appendChild(tecnica);

        let descripcion = document.createElement("p");
        descripcion.textContent =  obras[i].descripcion;
        click_info.appendChild(descripcion);

        let generacion = document.createElement("p");
        generacion.innerHTML = "<b>De la generacion: </b>" + obras[i].gen;
        click_info.appendChild(generacion);

        }); 


        image.setAttribute('src', obras[i].imagen); // pasted content
        
        // card.appendChild(h2);
        
        grid.appendChild(image);
    }
  });

    