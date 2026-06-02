let s1=document.getElementById("sq1");
let s2=document.getElementById("sq2");
let s3=document.getElementById("sq3");
let s4=document.getElementById("sq4");
let c=0;
let co=111111;
let co1,co2,co3;

s1.addEventListener("mouseenter",function(){
    let x=Math.floor(Math.random()*100+Math.random());
    s1.innerHTML="<h1>"+x+"</h1>";
})
s1.addEventListener("mouseleave",function(){
    s1.innerHTML="<h1>1</h1>";
})


s2.addEventListener("mouseenter",function(){
    if(c == 0){
    s2.style.backgroundColor = "#00fff5";  /* neon cyan */
    c++;
}
else{
    s2.style.backgroundColor = "#ff2d78";  /* hot pink */
    s2.innerHTML="<h1>Debasish</h1>";
    c--;
}
})
s2.addEventListener("mouseleave",function(){
    s2.style.backgroundColor="transparent";
    s2.innerHTML="<h1>2</h1>";
})


s3.addEventListener("mouseenter",function(){
    co=('#'+(Math.floor(100000 + Math.random() * 900000)));
    s3.style.backgroundColor=co;
    
    
})
s3.addEventListener("mouseleave",function(){
    s3.style.backgroundColor="transparent";
})


s4.addEventListener("click",function(){
    co1=('#'+(Math.floor(100000 + Math.random() * 900000)));
    co2=('#'+(Math.floor(100000 + Math.random() * 900000)));
    co3=('#'+(Math.floor(100000 + Math.random() * 900000)));

    s1.style.backgroundColor=co1;
    s2.style.backgroundColor=co2;
    s3.style.backgroundColor=co3;
    
})
s4.addEventListener("mouseleave",function(){
    s1.style.backgroundColor="transparent";
    s2.style.backgroundColor="transparent";
    s3.style.backgroundColor="transparent";
})