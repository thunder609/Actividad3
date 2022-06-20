export const getProduct= async url => {

    try {
        // const data = await ( await fetch( url ) ).json();
        const resp = await fetch( url );
        const data = await resp.json();
        return data
    } catch ( err ) {
        throw err 
    }

}

