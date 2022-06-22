

//  import {  fetchData1}  from '../scripts/fetcData.js'
import {  getProduct }   from '../helper/getProduct.js'
import { pintarProduct}  from '../module/pintarProduct.js'
 import {setCarrito,controladorBoton  }  from '../module/pintarCarrito.js'
// import { controladorBoton }  from '../module/controladorBoton.js'
let boton1 = document.querySelector('itemb');
const modal1 = document.getElementById('modal1')
// console.log(boton1)
let template = document.getElementById('template-card').content;
let fragment = document.createDocumentFragment();
let itm = document.getElementById('main')
let items = document.getElementById('items')
let templateFooter = document.getElementById('template-footer').content
let footer = document.getElementById('footer')

const templateCarrito = document.getElementById('template-carrito').content
let categorias = document.getElementById('categoria');


 let buscador = document.getElementById('buscar');
let url=('https://basedatosjson.herokuapp.com/articulos')
let data
let carrito={}
document.addEventListener( "DOMContentLoaded", async () => {


    try {

        data = await getProduct( url );
        //  pintarProduct( data, template, itm  );
           console.log("hola"+data)
    } catch (err) {

        alert( "Servidor no responde" );

    }

} );
itm.addEventListener('click', (e) => {    
   aCarrito(e)    
  
  })
  items.addEventListener('click', (e) => {    
    controladorBoton(e)    
   
   })
  const aCarrito =e=>{
    if (e.target.classList.contains("itemb")){
         setCarrito(e.target.parentElement) 

    }
    e.stopPropagation()
  }



categorias.addEventListener('change', (e) => {
    let prueba = e.target.value;
    console.log("holakkkkk"+prueba)
    if(prueba==0) {
          const results = data.filter( h => h.categorie==="juguetes" || h.categorie==="deporte" )
            
      pintarProduct( results, template, itm);
             console.log("results"+results)
        }

    if(prueba==1){
    const results = data.filter( h => h.categorie==="juguetes") 
        
  pintarProduct( results, template, itm);
         console.log("results"+results)
    }
    if(prueba==2){
        const results = data.filter( h => h.categorie==="deporte") 
            
      pintarProduct( results, template, itm);
             console.log("results"+results)
    

}
    });   

 //desarrollo del buscador
    buscador.addEventListener('keyup', async(e) => {
        e.preventDefault();
        let ingreso = e.target.value.toLowerCase();
        const data =await getProduct('https://basedatosjson.herokuapp.com/articulos')
        console.log("ingreso"+ingreso)       
        let er = new RegExp(ingreso, "i")
        console.log("errr"+er)
        let  resBuscador = data.filter((item) => er.test(item.name));
        console.log(resBuscador)
        pintarProduct( resBuscador, template, itm);         
        }       
        )
        
     

 
