 const formulario = document.querySelector(".formulario-fale-conosco")
 const mascara = document.querySelector(".mascara-formulario")


function mostrarform(){
    
    formulario.style.left = "50%"
    mascara.style.visibility = "visible"
    formulario.style.transform = "translateX(-50%)"    }

function esconderform(){

    formulario.style.left = "-300px"
    formulario.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}
   
console.log(esconderform)

   