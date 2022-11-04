class Reszecske {
  
    constructor(){
      this.x = random(0,width);
      this.y = random(0,height);
      this.r = random(1,10); //meretezem
      this.xSpeed = random(-0.5,0.5);
      this.ySpeed = random(-0.2,0.3);
    }
  
  // letrehozom az objektumokat
    reszecske_letrehozas() {
      noStroke();
      fill(0); // szinezem a reszecskeket
      circle(this.x,this.y,this.r);
    }
  
  // beallitom a mozgasuk
    reszecske_mozgas() {
      if(this.x < 0 || this.x > width)
        this.xSpeed*=-1;
      if(this.y < 0 || this.y > height)
        this.ySpeed*=-1;
      this.x+=this.xSpeed;
      this.y+=this.ySpeed;
    }
  
  // ha x tavolsagnal kisebbre vannak osszekotom oket
    reszecske_osszekot(particles) {
      particles.forEach(element =>{
        let dis = dist(this.x,this.y,element.x,element.y);
        if(dis<180) { // tavolsag amikor osszekotom
          stroke(0); // vonalak szinet allitom ///####
          line(this.x,this.y,element.x,element.y);
        }
      });
    }
  }
  
  // ebben tarolom a pontokat
  let particles = [];
  
  function setup() {
    createCanvas(1360, 700);
    for(let i = 0;i<width/10;i++){
      particles.push(new Reszecske());
    }
  }
  
  function draw() {
    background(68);
    for(let i = 0;i<particles.length;i++) {
      particles[i].reszecske_letrehozas();
      particles[i].reszecske_mozgas();
      particles[i].reszecske_osszekot(particles.slice(i));
    }
  }
  