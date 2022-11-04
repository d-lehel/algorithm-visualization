let tomb = []; // tomb szama - globalis valtozo
let x=-1;
let y=-1;

function setup() { // eloszor fut le
  createCanvas(800, 400);
  general();
  buborek();
}

function general(){
  for(let i = 0;i<width/20;i++){ // n = szelessegnel hanyszor kevesebb
    tomb.push(int(random()*90)); // oszlopok magassaga
  }
}

async function buborek() { 
          
  for(var i = 0; i < tomb.length; i++) { 
      for(var j = 0; j < tomb.length-i-1; j++) {
          await sleep(10);
          x=j;
            y=j+1;
          if(tomb[j] > tomb[j+1]) { 
              csere(j, j+1); 
          } 
      } 
  } 
} 

function draw(){
  
  background(250);
  for(let i = 0;i<tomb.length;i++){
    
     noStroke();

      if(i==x||i==y){
        fill(100,0,0); 
      }

      else{
        fill(100);
      }
      
     rect(i*20 , height-20, 18, -tomb[i]*4);
     textSize(12);
     text(tomb[i], i*20, height-5);
  }
}

function csere(i,j){
  
  let seged=tomb[i];
  tomb[i]=tomb[j];
  tomb[j]=seged;
}

function sleep(ms) { 
  return new Promise(resolve => setTimeout(resolve, ms)); 
} 
