
let actualTag = null;
let canRun = true;
let intentos = 0;

const totalElements = document.getElementsByClassName("oculto").length / 2;
let cantidadResueltos = 0;

function winGame(){
    alert("Has ganado el juego")
}

function sumarIntento(){
    intentos++;
    document.getElementById("intentos").innerHTML = intentos;
}

function darVuelta(tag){
    console.log(tag.id)
    
    if( canRun & !actualTag ){
        actualTag = tag;
        tag.classList.toggle("oculto");
        return;
    }else if( canRun & actualTag.id === tag.id & tag.classList.contains("oculto") ){
        canRun = false;
        tag.classList.toggle("oculto");
        
        sumarIntento();
        
        // alert(cantidadResueltos)
        cantidadResueltos++;
        setTimeout( ()=>{
            if( cantidadResueltos === totalElements ){
                winGame();
            }
            canRun = true;
        }, 500);
        actualTag = null;
        return;
    }else if(canRun){
        canRun = false;
        tag.classList.toggle("oculto");
        
        sumarIntento();
        
        setTimeout( ()=>{
            console.log("Ultimo ELSE")
            tag.classList.toggle("oculto");
            actualTag.classList.toggle("oculto");
            
            canRun = true;
            actualTag = null;
        } ,1000);
    }
}


function renderMemorize(){
    const main = document.getElementById("main");

    let contenido = `
        <h4 >Intentos: <span id="intentos" >0</span> </h4>
        <main>
            <div class="oculto" id="memorize1" onclick="darVuelta(this)" ><span>?</span></div>
            <div class="oculto" id="memorize4" onclick="darVuelta(this)" ><span>?</span></div>
            <div class="oculto" id="memorize2" onclick="darVuelta(this)" ><span>?</span></div>
            <div class="oculto" id="memorize3" onclick="darVuelta(this)" ><span>?</span></div>
            <div class="oculto" id="memorize2" onclick="darVuelta(this)" ><span>?</span></div>
            <div class="oculto" id="memorize3" onclick="darVuelta(this)" ><span>?</span></div>
            <div class="oculto" id="memorize4" onclick="darVuelta(this)" ><span>?</span></div>
            <div class="oculto" id="memorize1" onclick="darVuelta(this)" ><span>?</span></div>
        </main>
        `;

    main.innerHTML = contenido;
}