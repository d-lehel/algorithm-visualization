 
        let tomb = []; 
        let x=-1;
        let y=-1;
           
        function setup() { 

            createCanvas(800, 400); 
            general();
            minimum(); 
        } 

        function general(){
            for(let i = 0;i<width/20;i++){
                 tomb.push(int(random()*99)); // oszlopok magassaga
            }
        }
           
        async function minimum() {
     
        for (var i = 0; i < tomb.length - 1; i++) {

            var min_idx = i; 
            for (var j = i + 1; j < tomb.length; j++){
                await varakozik(10); 
                x=i;
                y=j;

                if (tomb[j] < tomb[min_idx])
                    min_idx = j; 
        }
                    
                    csere(min_idx,i);
            
        } 
    } 
           
        function draw() { 
            
            background(240); 
            for(let i = 0; i < tomb.length; i++) { 
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

        function csere(a, b) { 
             
            
            let csere = tomb[a]; 
            tomb[a] = tomb[b]; 
            tomb[b] = csere; 
        } 
           
        function varakozik(ms) { 
            return new Promise(resolve => setTimeout(resolve, ms)); 
        } 