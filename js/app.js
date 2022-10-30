const form=document.getElementById("form");
const nombre=document.getElementById("nombre");
const apellido=document.getElementById("apellido");
const email=document.getElementById("email");
const text=document.getElementById("animated")
const parrafo=document.getElementById("warnings")
 form.addEventListener("submit" , e =>{
    e.preventDefault();
    let warnings="";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(nombre.value.length <4 )
    {
       
        warnings += "El nombre no es valido";
        entrar = true;

    }
    if(apellido.value.length <4 )
    {
       
        warnings += "El apellido no es valido";
        entrar = true;

    }
    if(text.value.length <4 )
    {
       
        warnings += "El texto no es valido";
        entrar = true;

    }
    if(!regexEmail.test(email.value)){
        warnings += "El email no es valido"
        entrar = true;
       
    }
    if(nombre.value.length <0 )
    {
       
        warnings += "El texto no es valido";
        entrar = true;

    }
    if(entrar){
        parrafo.innerHTML=alert(warnings);
    }else{
        parrafo.innerHTML=alert("enviado");
    }
        
    

})


