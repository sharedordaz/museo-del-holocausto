const requestURL = '../datos.json';

let grid = document.querySelector('.image-grid')


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing'
    const obras = jsonObject['main'];

    let start_index = 0;
    let end_index = 8;
    let next_button =  document.getElementById("right");
    next_button.addEventListener("click", () =>{

      start_index += 8;
      end_index += 8;

      let all_b = document.querySelectorAll(".page-reader b")
      all_b.forEach((element)=> {
        element.style.color = "var(--sepia)"
      });

      display_menu(start_index,end_index);
    })

    let back_button =  document.getElementById("left");
    back_button.addEventListener("click", () =>{

      start_index -= 8;
      end_index -= 8;
      
      let all_b = document.querySelectorAll(".page-reader b")
      all_b.forEach((element)=> {
        element.style.color = "var(--sepia)"
      });
      
      display_menu(start_index,end_index);
    })
    let page_reader = document.querySelector(".page-reader");
      for (let x = 0; x < obras.length; x += 8){
        let page_number = document.createElement("b");
        page_number.textContent = x/8 + 1 +  " ";
        page_number.addEventListener("click", () =>{

          start_index = x;
          end_index = x + 8;
        let all_b = document.querySelectorAll(".page-reader b")
        all_b.forEach((element)=> {
          element.style.color = "var(--sepia)"
        });
        page_number.style.color = "var(--brown)"

          display_menu(start_index,end_index);
        })
        page_reader.appendChild(page_number);
      }


    display_menu(start_index, end_index)
  function display_menu(start_index, end_index) {
    grid.innerHTML = "";
    if (start_index < 0 ) {
    }
    else{

    
      for (let i = start_index; i < end_index; i++ ) {

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

            if (obras[i].ibime == true){
              let autoribime = document.createElement("b");
              autoribime.textContent = "(Autor Ibime)";
              autoribime.style.color = "blue";
              click_info.appendChild(autoribime);
            };
            let tecnica = document.createElement("p");
            tecnica.innerHTML = "<b>Tecnica: </b>" + obras[i].tecnica;
            click_info.appendChild(tecnica);

            let descripcion = document.createElement("p");
            descripcion.textContent =  obras[i].descripcion;
            click_info.appendChild(descripcion);

            let generacion = document.createElement("p");
            generacion.innerHTML = "<b>De la generacion: </b>" + obras[i].gen;
            click_info.appendChild(generacion);


            let site_title = document.getElementById("title");
            
            let logo = document.getElementById("ibime-logo");

            site_title.style.display = "none";
            logo.style.display = "none";
          
          }); 


          image.setAttribute('src', obras[i].imagen); // pasted content
          
          // card.appendChild(h2);
          
          grid.appendChild(image);
        
      }
    }
  }
  });
  //!Testing some details to dont show blank pages
  // if (start_index < 0 || end_index > obras.length ) {
  //   start_index = obras.length - 8;
  //   end_index = obras.length;
    
  // }

  //!Add a nav bar with page number please!