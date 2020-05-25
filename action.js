setInterval(()=>{
    let secDoc= document.getElementById('sec');
    let minDoc= document.getElementById('min');
    let hourDoc= document.getElementById('hour');
    let newSec=parseInt(secDoc.innerHTML)+1;
    newSec+='';
    if(newSec.length==1){
        newSec='0'+newSec;
    }
    if(newSec=='01'){
        minDoc.classList.remove('animate');
        hourDoc.classList.remove('animate');
    }
    if(newSec=='60'){
        newSec='00';
        minDoc.classList.add('animate');
        newMin=parseInt(minDoc.innerHTML)+1;
        newMin+='';
        if(newMin.length==1){
            newMin='0'+newMin;
        }
        if(newMin=='60'){
            newMin='00';
            hourDoc.classList.add('animate');
            newHour=parseInt(hourDoc.innerHTML)+1;
            newHour+='';
            if(newHour.length==1){
                newHour='0'+newHour;
            }
            if(newHour=='24'){
                newHour='00';
                newMin='00';
                newSec='00';
            }
            hourDoc.innerHTML=newHour;
        }
        minDoc.innerHTML=newMin;
    }
    secDoc.innerHTML=newSec;
}, 1000);