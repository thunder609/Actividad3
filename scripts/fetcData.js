let template = document.getElementById('template-card').content;
let fragment = document.createDocumentFragment();
let boton1 = document.querySelector('#itemb');
let itm = document.getElementById('main');
let url=('https://basedatosjson.herokuapp.com/articulos')
//data impri
let idd=0
export const fetchData1 = async (idd) => {
    const res = await fetch(url);
    const data = await res.json()
  
  data.forEach(item => {
     itm.innerHTML = ""
      const {id,name,image} = item;
      if(item.id==idd)
      {
        template.querySelector('h5').textContent = item.name
        template.querySelector('img').setAttribute('src',item.image);
         template.querySelector('.itemb').dataset.id = item.id;
         const clone = template.cloneNode(true)
        fragment.appendChild(clone)
      }
    })
   itm.appendChild(fragment)
  }


//   const Carrito = e=> {
//     console.log(e.target.classList.contains("#itemb"))
  
//   }
//   e.stopPropagation()
  
// }