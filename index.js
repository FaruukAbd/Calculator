let screen= document.getElementById('screen');
let cal=document.getElementsByTagName('h2');
// let buttons=document.querySelectorAll('button');
let screenValue='';
let buttons=document.querySelectorAll('button');
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttontext = e.target.innerHTML;
        console.log('button text is ',buttontext);
    
    if(buttontext=='x'){
        buttontext='*';
        screenValue+=buttontext;
        screen.value=screenValue;
    }
    else if(buttontext=='÷'){
        buttontext='/';
        screenValue+=buttontext;
        screen.value=screenValue;
    }
    else if(buttontext=='⌫'){
        
        screenValue=screenValue.slice(0,-1);
        screen.value=screenValue;
    }
    else if(buttontext=='AC'){
        screenValue="";
        screen.value=screenValue;
    }
    else if(buttontext=='='){
        
        screen.value=eval(screenValue);
        screenValue=screen.value;
    }
    
    else{
       screenValue+=buttontext;
       screen.value=screenValue;
       
    }
    })
};
   

