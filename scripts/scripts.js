

import {  fetchData1}  from '../scripts/fetcData.js'
import {  getProduct }   from '../helper/getProduct.js'
import { pintarProduct }  from '../module/pintarProduct.js'
let boton1 = document.querySelector('.itemb');
const modal1 = document.getElementById('modal1')
// console.log(boton1)
let template = document.getElementById('template-card').content;
// let template1 = document.getElementById('template-formut').content;

let fragment = document.createDocumentFragment();
let itm = document.getElementById('main')
let modal= document.getElementById('main1');


let deporteCon = document.getElementById('contenedorDeporte');
let juguetesCon = document.getElementById('contenedorJuguetes');
let electronicCon = document.getElementById('contenedorElectronic');
let LineaBlancaCon = document.getElementById('contenedorLineaBlanca');
let categorias = document.getElementById('categoria');
let juguete = document.getElementById('juguete');
let deporte = document.getElementById('deporte');
let electronic = document.getElementById('electronic');
let lineablanca = document.getElementById('lineablanca');
 let buscador = document.getElementById('buscar');
let url=('https://basedatosjson.herokuapp.com/articulos')
let data
document.addEventListener( "DOMContentLoaded", async () => {


    try {

        data = await getProduct( url );
        //  pintarProduct( data, template, itm  );
           console.log("hola"+data)
    } catch (err) {

        alert( "Servidor no responde" );

    }

} );


// const filterData = (articulos) => {
//     let articulosDeporte = articulos.filter(item => item.categorie === "deporte");
//     let articulosJuguetes = articulos.filter(item => item.categorie === "juguete");
//     // let paletasLeche = paletas.filter(item => item.categorie === "leche");
//     // let paletasAgua = paletas.filter(item => item.categorie === "agua");
//     // let paletasPopsy = paletas.filter(item => item.categorie === 'popsy');


//     pintarDatos(articulosDeporte , deporteCon)
//     pintarDatos(articulosJuguetes, juguetesCon)
//     // pintarDatos(paletasAgua, aguaCon)
//     // pintarDatos(paletasPopsy, popsyCon)
// }

document.addEventListener('click', (e) => {
    let id = e.target.id;
    if (e.target.classList.contains('btn')) {
        // mostrarModal(id)
    }
})



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

 
    buscador.addEventListener('keyup', async(e) => {
        e.preventDefault();
        let ingreso = e.target.value.toLowerCase();
        const data =await getProduct('https://basedatosjson.herokuapp.com/articulos')
        console.log("ingreso"+ingreso)
        let a
       
       
        //console.log(texto)
        let er = new RegExp(ingreso, "i")
        console.log("errr"+er)
        let  resBuscador = data.filter((item) => er.test(item.name));
        console.log(resBuscador)
        pintarProduct( resBuscador, template, itm);
            // if(er.test(valor.innerText)){
            //     valor.classList.remove("ocultar")
            // }else{
            //     console.log(valor)
            //     valor.classList.add("ocultar")
            // }
        }
  
        // let resBuscador=[]
        // let  resBuscador = data.filter(item => item.name.toLowerCase() === ingreso.toLowerCase());
        // console.log("holabuscador",resBuscador)
       
    
        // if(resBuscador.length !== 0){
        //     // let a = JSON.parse(resBuscador);
        //     //    console.log(a)
        //        pintarProduct( resBuscador, template, itm);
        // }else{
        //    console.log("La busqueda que has realizado no ha sido exitosa")
        // }
      
        )
        
    

 
