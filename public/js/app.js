//Creación de variables para acceder a los botones
let min5 = document.getElementById("contador5");
let min10 = document.getElementById("contador10");
let min15 = document.getElementById("contador15");
let min20 = document.getElementById("contador20");
let timeclockcountdown = document.getElementById("timeclockcountdown");
let empezar = document.getElementById("empezar");
let cont=0;



//Eventos click que hacen que cuando clickes a los botones de minutos te marque el tiempo 
min5.addEventListener("click", () => {
  document.getElementById("timeclockcountdown").style.fontSize="70px";
    timeclockcountdown.innerHTML="5:00"
    cont=5;
    empezar.style.pointerEvents = "auto";
    
  });
  min10.addEventListener("click", () => {
    document.getElementById("timeclockcountdown").style.fontSize="70px";
    timeclockcountdown.innerHTML="10:00"
    cont=10;
    empezar.style.pointerEvents = "auto";
    
  });
  min15.addEventListener("click", () => {
    document.getElementById("timeclockcountdown").style.fontSize="70px";
    timeclockcountdown.innerHTML="15:00"
    cont=15;
    empezar.style.pointerEvents = "auto";
    
  });
  min20.addEventListener("click", () => {
    document.getElementById("timeclockcountdown").style.fontSize="70px";
    timeclockcountdown.innerHTML="20:00"
    cont=20;
    empezar.style.pointerEvents = "auto";
    
  });

  // Evento de click que hace al darle al boton de start dependiendo de que minutos hayas pulsado anteriormente te lleve a la función donde empieza la cuenta atras
  empezar.addEventListener("click", () => {
   
    if(cont===5){
      

      RelojCUentaAtras(5,0)
      
      
    }else if(cont===10){
      
  
      RelojCUentaAtras(10,0)
    }else if (cont===15){
      
      
      RelojCUentaAtras(15,0)
    }else if(cont===20){
      
    
      RelojCUentaAtras(20,0)
    } 
    
  });

  //Función que hace que el tiempo empiece a contar hacia atras pasandole el tiempo (minutos y segundos) de variables
   function RelojCUentaAtras(min, seg) {
    
    empezar.style.pointerEvents = "none";

    
    let cuentaAtras = (min * 60 + seg) * 1000;

    
    const interval = setInterval(function() {
        
        const minRestantes = Math.floor(cuentaAtras / (1000 * 60));
        const segRestantes = Math.floor((cuentaAtras % (1000 * 60)) / 1000);

      
        document.getElementById("timeclockcountdown").innerHTML = minRestantes + ":" + segRestantes ;

        
        cuentaAtras -= 1000;
       
        
        if (cuentaAtras < 0) {
            clearInterval(interval);
            document.getElementById("timeclockcountdown").style.fontSize = "40px";
            document.getElementById("timeclockcountdown").innerHTML = "TIME OVER";


        }
      
    }, 1000);
}
 


