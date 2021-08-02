const getData= async ()=>{
    const url="https://jsonplaceholder.typicode.com/photos";
    
    try{
        let response = await fetch(url);
        let photo = await response.json();

        for(let cont=0;cont<20;cont++)
            console.log(photo[cont]);

    }catch(e){
        console.log(e);
    }
}

const myPromesa = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Información Enviada");
        },3000);
    })
}

const getPromesa =async()=>{
    const respuesta = await myPromesa();
    console.log(respuesta);
}

getData();
getPromesa();