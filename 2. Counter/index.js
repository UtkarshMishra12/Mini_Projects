let contentVal= document.querySelector('#value');

function increment(){
    let val= parseInt(contentVal.innerHTML);
    val=val+1;
    contentVal.innerHTML= val;
}

function decrement(){
    let val= parseInt(contentVal.innerHTML);
    val=val-1;
    contentVal.innerHTML=val;
}