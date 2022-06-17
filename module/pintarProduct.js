export const pintarProduct = ( data, template, cont ) => {

    cont.innerHTML = "";

    let fragment = document.createDocumentFragment()

    data.forEach( h => {
        const { id,city, image} = h;

        template.querySelector('img').setAttribute( 'src', image );
        // template.querySelector('h5').textContent = name;
        template.querySelector('h3').textContent = city;
        template.querySelector('#itemb').dataset.id = id;

        const clone = template.cloneNode(true);
        fragment.appendChild( clone )
    } );

    cont.appendChild( fragment );

}

