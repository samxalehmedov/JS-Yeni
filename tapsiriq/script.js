let saitler = ['a','ı',"o","u","e","ə","i","ö","ü"];
let inp = document.querySelector("textarea");
let count = 0;

function Say(){
    for(let i = 0; i<inp.value.length; i++){
        for(let j=0; j<saitler.length; j++){
            if(inp.value[i].toLowerCase() == saitler[j]){
               count++;
            }
        }
    }
    let sozler = (inp.value.toLowerCase().trim().split(' ').length);
    document.querySelector("p").innerHTML = (count+" sait"+ " ve" +" "+sozler+' Soz');
};