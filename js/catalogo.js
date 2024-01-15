
const btnToggle = document.querySelector('.side-btn');

btnToggle.addEventListener('click', function () {
  console.log('clik')
  document.getElementById('sidebar').classList.toggle('active');
  console.log(document.getElementById('sidebar'))
});
var imagenes =['img/Camisa_catalogo (1).png','img/Camisa_catalogo (2).png','img/Camisa_catalogo (3).png','img/Camisa_catalogo (4).png',"img/Camisa_catalogo (5).png","img/Camisa_catalogo (6).png","img/Camisa_catalogo (7).png","img/Camisa_catalogo (8).png","img/Camisa_catalogo (9).png","img/Camisa_catalogo (10).png","img/Camisa_catalogo(11).png","img/Camisa_catalogo(12).png"],
    cont=0;

function carrousel(contenedor){

    contenedor.addEventListener('click', e=>{

        let atras= contenedor.querySelector('.atras'),
        adelante= contenedor.querySelector('.adelante'),
        img=contenedor.querySelector('img'),
        tgt= e.target;

        if(tgt == atras){
            if(cont>0){
                img.src=imagenes[cont-1];
                cont--;
            }else{
                img.src=imagenes[imagenes.length-1];
                cont=imagenes.length-1

            }
        }else if(tgt== adelante){
            if(cont<imagenes.length-1){
                img.src=imagenes[cont+1];
                cont++;
            }else{
                img.src=imagenes[0];
                cont=0

            }
        }


    });

}

document.addEventListener("DOMcontentLoaded",()=>{
    let contenedor= document.querySelector('.contenedor');

    carrousel(contenedor);
});