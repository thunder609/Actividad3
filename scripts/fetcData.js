let template = document.getElementById('template-card').content;
let fragment = document.createDocumentFragment();
let boton1 = document.querySelector('#itemb');
let itm = document.getElementById('main');
let url=('../data/data.json')
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
         template.querySelector('#itemb').dataset.id = item.id;
         const clone = template.cloneNode(true)
        fragment.appendChild(clone)
      }
    })
   itm.appendChild(fragment)
  }

 itm.addEventListener('click', (e) => {
    let id;
    if (e.target.classList.contains('.itemb')) {
          id=e.target.dataset.id
          console.log('cabr'+id)
          alert("alert")
        // Modal(e.target.dataset.id)
   }
  
  
  })
  
  
  const Modal = async (id2) => {
    let url=(`../data/data.json`)
   const res = await fetch(url);
   const data = await res.json();
  let modal=document.getElementById('contenedorModal')
  
   //listarIngre.innerHTML = '';
   //preparar.innerHTML = '';
  
   data.forEach(plato => {
       const { id, name, image} = plato;
     
       if (plato.id == id2) {
      
    
        modal.innerHTML = `
        <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${name}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
       </div>
       <div class='row g-0'>
        <div class='col-md-4'>
          <img class='w-100 my-5 ms-4' src="${image}" alt="${name}">
        </div>
        <div class='col-md-8'>
          <div class="modal-body my-3 mx-2">
            
            <h3> $${id}</h3>
            <p>${image}</p>
              <center>
                <button id='${id}' class='btn btn-outline-primary boton'>agregar al carrito</button>
              </center>
            </div>
        </div>
       </div> 
      `
       console.log(id)
       }
  
   })
  }