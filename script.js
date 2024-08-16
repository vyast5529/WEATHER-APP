let inp = document.querySelector("input");
let bt = document.querySelector("button");
let id = document.querySelector("#img");
let tm = document.querySelector("#tem h6");
let td = document.querySelector("#tem p");
let hr = document.querySelector("#humi h6");
let ws = document.querySelector("#wind h6");
let img = document.querySelector("img");
let info = document.querySelector("#info");
       
inp.webkitSpeech="true";
let ak ="4932dbc58d79dde72b23e6077c63b3e5";
 async function cw(city)
{
    let  url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ak}`;
      
    let res = await fetch(url);
    console.log(res);
    let data =  await res.json();
    console.log(data);
   
    
    if(data.cod=="200"){
      hr.innerText = `${data.main.humidity} %`;
      ws.innerText=`${data.wind.speed}km/h`;
        tm.innerText=`${Math.round(data.main.temp-273.15)}°C`;
        td.innerText =data.weather[0].description;
        info.style.visibility="visible";
       
        img.style.visibility="visible";
 
        img.src =`${data.weather[0].main}.png`;
          
       
      
    }
    else{

    hr.innerText = "";
      ws.innerText="";
        tm.innerText="";
        td.innerText ="incorrect input 🤔";
        img.style.visibility="visible";

         
      img.src ="404.png";
     
     
        info.style.visibility="hidden";
    }
    let inc = document.querySelector("#inc");
     
   


}


    bt.addEventListener("click",function(){
     cw(inp.value);
     let inc = document.querySelector("#inc");
     
   gsap.to(inc,{
   display:"flex", scale:1,duration:0.6

   })
    
    
     
    
    })



 




