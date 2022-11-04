function setup() {
    createCanvas(800, 500); 
                                                                                  // random ut
    vert = []; 
    sz = 30; // ## vsz
    for (var i = 0; i < sz; i++) {
      v = createVector(random(40, width - 40), random(40, height - 40));
      vert.push(v);
    }
    k = 0; 
    frame = 0;
  }
  
  function draw() {
                                                                               //////GRAFIKA//////
    background(240);
    frameRate(30); //# seb                                                              
    
    beginShape();
    for (var i = 0; i < sz; i++) {
      vertex(vert[i].x, vert[i].y);
      fill(50);
      noStroke();
      ellipse(vert[i].x, vert[i].y, 12, 12);
    }
    noFill();          // a vonalak kozott kitoltene ha nem adom feketevel ?!
    stroke(50);               // utvonal szine
    strokeWeight(2);         // utvonal vastagsaga
    endShape(CLOSE);
   
    buf = frame;
    buf2 = k;
    top:
    {
      for (var i = k; i < sz; i++) {
        for (var j = i + 2; j < sz; j++) {
          d1 = vert[i].dist(vert[(i + 1) % sz]) + vert[j].dist(vert[(j + 1) % sz]);
          d2 = vert[i].dist(vert[j]) + vert[(i + 1) % sz].dist(vert[(j + 1) % sz]);
          if (d2 < d1) {          
            m = vert.slice(Math.min((i + 1) % sz, (j + 1) % sz), Math.max((i + 1) % sz, (j + 1) % sz)).reverse();
            l = vert.slice(0, Math.min((i + 1) % sz, (j + 1) % sz));
            r = vert.slice(Math.max((i + 1) % sz, (j + 1) % sz), sz);
            vert = l.concat(m).concat(r);
            frame++;
            k = i; 
            break top;
          }
        }
      }
      k = 0;
    }
    
    if (frame == buf && buf2 == 0) {
      noLoop();
    }
    
    var pathlength = 0;
    for (var i = 0; i < sz; i++) {
      var d1 = vert[i].dist(vert[(i + 1) % sz]);
      pathlength+=d1;
    }
    
    textSize(25);
    fill(50);
    noStroke();
    text("Probálkozás: " + frame, 20, 25);
    text("Útvonal hossza: " + Math.round(pathlength)+" km", 360, 25);
  }