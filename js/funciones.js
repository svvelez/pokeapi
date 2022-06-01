export const $=qs=>document.querySelector(qs);

export const mostrarAlerta=mensaje=>{
    const alerta=$('.alerta');
    alerta.innerHTML=`
        <div class="alert alert-danger mt-2 text-center" role="alert">
        <strong>${mensaje}</strong>
        </div>
    `;
    setTimeout(() => {
       alerta.innerHTML='';
    }, 2000);
}
export const mostraInfo=({sprites:{front_default},name,types,abilities})=>{
    const info=$('.info');
    const div=document.createElement('div');
    div.classList.add('ml-3')
    div.innerHTML=`
        <div class="pokemon w-25 my-2">
        <img src="${front_default}" style="width: 100%;"></img>
        </div>
        <h6 class="text-warning">Nombre: </h6>
        <h5 class="text-white text-uppercase">${name}</h5>
        <h6 class="text-warning">Tipo: </h6>
       
    `;
    types.forEach(({type:{name}})=>{
      
        let ul=document.createElement('ul');
        ul.innerHTML=`
            <li class="text-info">
            <h5 class="text-white text-uppercase">${name}</h5>
            </li>
            
        `;

        div.appendChild(ul)
        
    })

    
    abilities.forEach(({ability:{name}})=>{
            let x=document.createElement('ul');

            x.innerHTML=`
            <li class="text-info">
            <h6 class="text-warning">Habilidad:</h6>
            <h5 class="text-white text-uppercase">${name}</h5>
            </li>
            `;

            div.appendChild(x)

    });
 
   
    info.appendChild(div);
}
