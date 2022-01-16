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

        image.setAttribute("onclick", display_info); 


        image.setAttribute('src', obras[i].imagen); // pasted content
        
        // card.appendChild(h2);
        
        grid.appendChild(image);
    }
  });

function display_info() {
    let display = document.querySelector("click-info");
    display.style.display = "block";
}