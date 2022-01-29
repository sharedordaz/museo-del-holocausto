let boton = document.getElementById("subir");
boton.addEventListener("click", apendar)
function apendar(){
    let nombre = document.getElementById("nombre_input").value;
    let ibime_item = document.getElementById("ibime_input");
    let ibime = ibime_item.options[ibime_item.selectedIndex].value;
    let tecnica = document.getElementById("tecnica_input").value;
    let descripcion = document.getElementById("descripcion_input").value;
    let generacion = document.getElementById("gen_input").value;

    //console.log(nombre,ibime,tecnica,descripcion,generacion);
}

//! All good until i know is not possible to append info to a json file only with web. Sad story
//! You need PHP to do it