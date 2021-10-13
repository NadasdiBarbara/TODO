function listaGomb(){

    let szoveg=document.getElementById("szoveg").value;
    if (szoveg=="") {
        alert("A beviteli mező nem lehet üres!");
        return;
    }else{
        document.getElementById("szoveg").value="";
        let li = document.createElement("li");
        let input= document.createElement("input");
        input.type="checkbox"; 
        let span = document.createElement("span");
        span.innerHTML = "X";
        span.addEventListener("click",torol)
        li.appendChild(input);
        li.append(szoveg);
        li.appendChild(span);
        input.addEventListener("click", athuz);    
        document.getElementById("lista").appendChild(li);
    }
    
    
}

function deleteAll(){
    let elemek = document.getElementById('lista');
    while (elemek.firstChild) {
        elemek.removeChild(elemek.firstChild);
    }
}

function athuz(e){
    if(e.target.checked){
        e.target.parentElement.style.textDecoration="line-through";
    }else{
        e.target.parentElement.style.textDecoration="none";
    }
}

function torol(e){
    e.target.parentElement.remove();
}
function init(){
    document.getElementById("listaGomb").addEventListener("click", listaGomb);
    document.getElementById("deleteAll").addEventListener("click", deleteAll);
}
document.addEventListener("DOMContentLoaded", init);