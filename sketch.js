let titlecard, screen1, screen2, screen3, screen4, screen5, screen6, screen7, screen8, screen9, screen10, screen11, screen12, screen13, screen14, screen15, screen16, screen17, screen18, runchoice, fightchoice, kisschoice, kisschoicetwo, song, song2, song3;

let state = 0;
let typed = "";


function preload(){
  
  titlecard = loadImage('titlecard.png');
   screen1 = loadImage("screen1.jpg");
  screen2 = loadImage("screen2.jpg");
  screen3 = loadImage("screen3.jpg");
  screen4 = loadImage("screen4.jpg");
  screen5 = loadImage("screen5.jpg");
  screen6 = loadImage("screen6.jpg");
  screen7 = loadImage("screen7.jpg");
  screen8 = loadImage("screen8.jpg");
  screen9 = loadImage("screen9.jpg");
  screen10 = loadImage("screen10.jpg");
  screen11 = loadImage("screen11.jpg");
  screen12 = loadImage("screen12.jpg");
  screen13 = loadImage("screen13.jpg");
  screen14 = loadImage("screen14.jpg");
  screen15 = loadImage("screen15.jpg");
  screen16 = loadImage("screen16.jpg");
  screen17 = loadImage("screen17.jpg");
  screen18 = loadImage("screen18.jpg");
  runchoice = loadImage("Run.jpg");
  fightchoice = loadImage("Fight.jpg");
  kisschoice = loadImage("Kiss.jpg");
  kisschoicetwo = loadImage("Kiss2.jpg");
  song = createAudio("driver.mp3");
  song.pause();
  
  song2 = createAudio("bagpipes.mp3");
  song2.pause();
  
  song3 = createAudio("starsandstripes.mp3");
  song3.pause();
  
}


function setup() {
  createCanvas(1200, 800);
  textSize(24);
  
}

function draw() {
  
   background(220);

  if (state == 0) {
    image(titlecard, 0, 0);
    titlecard.resize(width, height);
  } else if (state == 1) {
    image(screen1, 0, 0);
    screen1.resize(width, height);
  } else if (state == 2) {
    image(screen2, 0, 0);
    screen2.resize(width, height);
  } else if (state == 3) {
    image(screen3, 0, 0);
    screen3.resize(width, height);
  } else if (state == 4) {
    image(screen4, 0, 0);
    screen4.resize(width, height);
  } else if (state == 5) {
    image(screen5, 0, 0);
    screen5.resize(width, height);
    song2.pause();
  } else if (state == 6) {
    image(screen6, 0, 0);
    screen6.resize(width, height);
    song.play();
    song.loop();
  } else if (state == 7) {
    image(screen7, 0, 0);
    screen7.resize(width, height);
    song.play();
    song.loop();
  } else if (state == 8) {
    image(screen8, 0, 0);
    screen8.resize(width,height);
    textSize(50);
    stroke(0);
    strokeWeight(3);
    textStyle(ITALIC);
    fill(255,0,0);
    text("TYPE BOOK TO RETURN", 100, 750);
    song.pause();
    } else if (state == 9) {
    image(screen9, 0, 0);
    screen9.resize(width, height);
  } else if (state == 10) {
    image(screen10, 0, 0);
    screen10.resize(width, height);
  } else if (state == 11) {
    image(screen11, 0, 0);
    screen11.resize(width, height);
    textSize(50);
    fill(255,0,0);
    text("TYPE BOOK TO RETURN", 100, 750);
  } else if (state == 12) {
    image(screen12, 0, 0);
    screen12.resize(width, height);
  } else if (state == 13) {
    image(screen13, 0, 0);
    screen13.resize(width, height);
  } else if (state == 14) {
    image(screen14, 0, 0);
    screen14.resize(width, height);
    textSize(50);
    fill(255,0,0);
    text("TYPE BOOK TO RETURN", 100, 750);
  } else if (state == 15) {
    image(screen15, 0, 0);
    screen15.resize(width, height);
    textSize(50);
    fill(255,0,0);
    text("TYPE BOOK TO RETURN", 100, 750);
    song2.play();
  } else if (state == 16) {
    image(screen16, 0, 0);
    screen16.resize(width, height);
  } else if (state == 17) {
    image(screen17, 0, 0);
    screen17.resize(width, height);
  } else if (state == 18) {
    image(screen18, 0, 0);
    screen18.resize(width, height);
  } else if (state == 19) {
    image(runchoice, 0, 0);
    runchoice.resize(width, height);
  } else if (state == 20) {
    image(fightchoice, 0, 0);
    fightchoice.resize(width, height);
  } else if (state == 21) {
    image(kisschoice, 0, 0);
    kisschoice.resize(width, height);
  } else if (state == 22) {
    image(kisschoicetwo, 0, 0);
    kisschoicetwo.resize(width, height);
    song3.play();
    song3.loop();
  } 
  

  text(typed, 0, 200);
  

}

function keyTyped() {
  
   // if (key == '5') {
   //  state = 5;
  if (keyCode == RETURN) {
    if (typed == '251') {
      state = 6;
      typed = "";
    } else if (typed == '346') {
      state = 12;
      typed = "";
    } else if (typed == '72') {
      state = 9;
      typed = "";
    } else if (typed == '890') {
      state = 15;
      typed = "";
    } else if (typed == '666') {
      state = 16;
      typed = "";
    } else if (typed == 'run') {
      state = 19;
      typed = "";
      } else if (typed == 'fight') {
      state = 20;
      typed = "";
    } else if (typed == 'kiss') {
      state = 21;
      typed = "";
      } else if (typed == 'book') {
      state = 5;
      typed = "";
        } else if (typed == 'A') {
      state = 3;
      typed = "";
   } else if (typed == 'B') {
      state = 2;
      typed = "";
     } else if (typed == 'ABCD') {
      state = 17;
      typed = "";
    }
  } else {
    typed += key;
  }
}

function mousePressed() {
  
  state++;
  
  if (state > 22) {
      state = 0;
      
    }
  
}

function keyPressed() {
  if(keyCode == BACKSPACE) {
    typed = "";
 
  }
}
