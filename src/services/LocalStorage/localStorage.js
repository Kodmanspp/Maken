export function localSetArray(items) {
    if(Array.isArray(items)){
        items.forEach(item =>{
            localStorage.setItem(item.name, item.data); 
            console.log(item); 
        })
    }
}
export function localGetItem(name){
    return localStorage.getItem(name); 
}