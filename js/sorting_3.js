        let tomb = []; 
        let x=-1;
        let y=-1;
           
        function setup() { 

            createCanvas(800, 400); 
            general();
            gyors(0,tomb.length-1); // gyors rendezes
        } 

        function general(){
            for(let i = 0;i<width/20;i++){
                 tomb.push(int(random()*99)); // oszlopok magassaga
            }
        }
           
        async function gyors(low, high){ 
            await varakozik(50);
            if (low < high) 
            { 
            
            var pi = await partition(low, high); 
    
            
            gyors(low, pi - 1); 
            gyors(pi + 1, high); 
            } 
         } 

           async function partition (low, high){
 
            var pivot = tomb[high]; 
            var i = (low - 1); 
        
            for (var j = low; j <= high - 1; j++) 
            { 
               await varakozik(50);
                x=i;
                y=j;
                
                if (tomb[j] < pivot) 
                { 
                    i++; 
                    csere(i,j);
                   
                } 
            } 
            csere(i + 1,high); 
            x=i+1;
            y=high;
            return (i + 1); 
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