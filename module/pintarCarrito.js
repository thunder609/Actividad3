
// import { controladorBoton }  from '../module/controladorBoton.js'
let items = document.getElementById('items')
const fragment = document.createDocumentFragment()
const templateCarrito = document.getElementById('template-carrito').content

let templateFooter = document.getElementById('template-footer').content
let footer = document.getElementById('footer')
let carrito={}
export const setCarrito = obj => {
    // console.log(item)
    const articulos = {
        name: obj.querySelector('h3').textContent,
        precio: obj.querySelector('p').textContent,
        id:obj.querySelector('.itemb').dataset.id,
        cantidad: 1
    }
    // console.log(producto)
    if (carrito.hasOwnProperty(articulos.id)) {
        articulos.cantidad = carrito[articulos.id].cantidad + 1
    }

    carrito[articulos.id] = { ...articulos }
    // console.log(carrito)  
    pintarCarrito()

}
   const pintarCarrito=()=>{
    items.innerHTML = ''  
    Object.values(carrito).forEach(ca => {
        templateCarrito.querySelector('th').textContent = ca.id
         templateCarrito.querySelectorAll('td')[0].textContent =   ca.name
          templateCarrito.querySelectorAll('td')[1].textContent = ca.cantidad
     
       templateCarrito.querySelector('p').textContent = ca.precio * ca.cantidad        
        //botones
          templateCarrito.querySelector('.btn-info').dataset.id = ca.id
          templateCarrito.querySelector('.btn-danger').dataset.id = ca.id

        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
  
    console.log("teplate",+items)
      pintarFooter()
}
const pintarFooter = () => {
    footer.innerHTML = ''
    
    if (Object.keys(carrito).length === 0) {
        footer.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío con innerHTML</th>
        `
        return
    }
    
    // sumar cantidad y sumar totales
    const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio ,0)
    // console.log(nPrecio)

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)

    footer.appendChild(fragment)

    const boton = document.querySelector('#vaciar-carrito')
    boton.addEventListener('click', () => {
        carrito = {}
        pintarCarrito()
    })

}
// import { pintarCarrito } from "./pintarCarrito.js"

export const controladorBoton = e => {
    console.log(e.target.classList.contains('btn-info'))
   if (e.target.classList.contains('btn-info')) {
       const articulo = carrito[e.target.dataset.id]
       articulo.cantidad++
       carrito[e.target.dataset.id] = { ...articulo }
       pintarCarrito()
   }

   if (e.target.classList.contains('btn-danger')) {
       const articulo = carrito[e.target.dataset.id]
       articulo.cantidad--
       if (articulo.cantidad === 0) {
           delete carrito[e.target.dataset.id]
       } else {
           carrito[e.target.dataset.id] = {...articulo}
       }
        pintarCarrito()
   }
   e.stopPropagation()
}