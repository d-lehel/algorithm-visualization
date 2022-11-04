let n=5;
let eredmeny = [0,0,0,0,0];
let run=true;

function setup(){
    createCanvas(500,500);
    kiralyno(1);
}

async function kiralyno(i_kiralyno){ 
    
    for (var j_oszlop = 1; j_oszlop <= n; j_oszlop++){
        
        eredmeny[i_kiralyno] = j_oszlop;
        ellenoriz();
        await alszik(300);
        
        if (biztonsagos(i_kiralyno)){

            if (i_kiralyno<n){
                await kiralyno(i_kiralyno + 1); 
            }

            else{
                console.log('talalat! vege!');
                run=false;
            }
        }
        if(!run)
        return;
    }
}

function biztonsagos(i_kiralyno){
    
    for (var i_sor = 1; i_sor < i_kiralyno; i_sor++) //ha i_kiralyno==1 akkor true
        if( eredmeny[i_sor]==eredmeny[i_kiralyno] || (i_kiralyno-i_sor)==abs(eredmeny[i_kiralyno]-eredmeny[i_sor]) )
            return false;  

     return true;
}

function ellenoriz(){

    console.log('eredmeny = '+ eredmeny);
}

function draw(){
    
    background(250); 
    noStroke();
    for(var i=1;i<=n;i++){
        for(var j=1;j<=n;j++){

            if(eredmeny[i]==j){
                fill(200,0,0);
                rect(j*100-100,i*100-100,100);
                textSize(25);
                fill(1000);
                text('Queen',j*100-90,i*100-40);
                fill(1000);
            }

            else{ 
                if(i%2==0 && j%2!=0 || j%2==0 && i%2!=0){
                    fill(230);
                    rect(j*100-100,i*100-100,100);
                }
                
                else{
                    fill(10);
                    rect(j*100-100,i*100-100,100);
                }
            }
        }
    }
}

async function alszik(ms) { 
    return new Promise(resolve => setTimeout(resolve, ms)); 
} 