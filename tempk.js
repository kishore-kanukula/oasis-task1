"use strict";
let s1=document.querySelector(".select1");
let s2=document.querySelector(".select2");
let num=document.querySelector(".userInp");
let convert=document.querySelector(".convert");
let result=document.querySelector(".result");
let reset=document.querySelector(".reset");


convert.addEventListener("click",function(){
    let n=Number(num.value);
    if(s1.value==="celsious" && s2.value==="fahrenheit")
    {
       let  f=parseFloat((n*(9/5))+32).toFixed(3);
        result.textContent=f+" F";
    }
    else if(s1.value==="celsious" && s2.value==="kelvin")
    {
        let k=parseFloat(n+273.15).toFixed(3);
        result.textContent=k+" K";
    }
    else if(s1.value==="fahrenheit" && s2.value==="celsious")
    {
        let c=parseFloat((n-32)*(5/9)).toFixed(3); 
        result.textContent=c+" C";
    }
   else if(s1.value==="fahrenheit" && s2.value==="kelvin")
    {
        let k=parseFloat((n-32)*(5/9)+273.15).toFixed(3); 
        result.textContent=k+" K";
    }
    else if(s1.value==="kelvin" && s2.value==="celsious")
    {
        let c=parseFloat(n-273.15).toFixed(3);
        result.textContent=c+" C";
    }
    else if(s1.value==="kelvin" && s2.value==="fahrenheit")
    {
        let f=parseFloat(((n-273.15)*(9/5))+32).toFixed(3);
        result.textContent=f+" F";
    }
    else
    {
        if(s1.value==="celsious" && s2.value==="celsious")
            result.textContent=num.value+" C";
        else if(s1.value==="fahrenheit" && s2.value==="fahrenheit")
            result.textContent=num.value+" F";
        else if(s1.value==="kelvin" && s2.value==="kelvin")
            result.textContent=num.value+" K";
    }
    
});

reset.addEventListener("click",function(){
    s1.value="celsious";
    s2.value="fahrenheit";
    num.value=null;
    result.textContent=null;
});
