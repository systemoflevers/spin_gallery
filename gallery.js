ACC = 0.00001;

IMG = null;

images = [];

last = null;

c = 0;

function Image(url, x, y, vx, vy) {
  this.a = 0;
  this.d = 200;
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.ax = 0;
  this.ay = 0;

  var i_element = document.createElement("img")
  i_element.src = url;
  i_element.style.position = "absolute";
  i_element.style.top = "0";
  i_element.style.bottom = "0";
  i_element.style.left = "0";
  i_element.style.right = "0";
  i_element.style.margin="auto";

  var a = document.createElement("a");
  a.href = url;
  a.appendChild(i_element);

  this.element = document.createElement("div");

  this.element.href = url;
  this.element.appendChild(a);

  this.element.style.position = "absolute";
  //this.element.style.top = y-156 + "px";
  //this.element.style.left = x-234 + "px";
  this.element.style.top = "0";
  this.element.style.bottom = "0";
  this.element.style.left = "0";
  this.element.style.right = "0";
  this.element.style.margin = "auto";


  /*this.element.style.maxWidth = "100px";
  this.element.style.width = "100%";
  this.element.style.height = "auto";
  */
  document.body.appendChild(this.element);
}

function makedot(x,y,c) {
  var e = document.createElement("div");
  e.appendChild(document.createTextNode('.'));
  e.style.position = 'absolute';
  e.style.top = y + "px";
  e.style.left = x + "px";
  e.style.color = c;
  document.body.appendChild(e);

}

Image.prototype.render = function() {
  /*if (c < 1000) {
    c++;
    makedot(this.x, this.y, 'black')
    makedot(Math.abs(this.ax), Math.abs(this.ay), 'blue');
    makedot(Math.abs(this.vx), Math.abs(this.vy)+10, 'red');
    //makedot(this.x + this.vx, this.y + this.vy, 'red');
  }*/
  //this.element.style.top = (this.y-156) + "px";
  //this.element.style.left = (this.x-234) + "px";
  //this.element.style.transform = "translate("+this.x+"px,"+this.y+"px)";

  this.element.style.transform = " rotate("+this.a+"deg) translateY("+this.d+"px)";
  //this.element.style.
}

Image.prototype.update = function(delta){
  this.d += 0.005*delta;
  this.a += 0.05*delta;
  this.a %= 360;
  return;
  /*var center = {'x': screen.width/2,
                'y': screen.height/2};

  var dx = center.x - this.x;
  var dy = center.y - this.y;
  if (dx!=0 || dy!=0) {
    var d = Math.sqrt(dx*dx + dy*dy);
    var ax = ACC * dy / d;
    var ay = -ACC * dx / d;

    //ax += (ACC/2) * dx / d;
    //ay += (ACC/2) * dy / d;
  } else {
    var ax = 0;
    var ay = 0;
  }
  this.x += this.vx;
  this.y += this.vy;
  this.vx += this.ax;
  this.vy += this.ay;
  this.ax += ax;
  this.ay += ay;*/
}

function load_gallery() {
  var center = {'x': screen.width/2,
                'y': screen.height/2};

  IMG = new Image("http://www.systemoflevers.com/misc/voms/me_mouth_open_s.jpg",
              center.x+100, center.y, 0,0);//0.5, 0.5);

  requestAnimationFrame(render);


  /*var pos = angle_to_elipse(screen.width, screen.height, 0);
  var img = document.createElement("img");
  img.src = "http://www.systemoflevers.com/misc/voms/me_mouth_open_s.jpg";
  img.style.position = "absolute";
  img.style.top = center.y - 156;
  img.style.left = center.x - 234;

  document.body.appendChild(img);*/
}

function render(time) {
  if (last === null) last = time;
  requestAnimationFrame(render);

  var delta = time - last;
  last = time;
  IMG.update(delta);
  IMG.render();
}

/*function angle_to_elipse(width, height, angle) {
  var r = angle*math.pi/180;
  var m = math.tan(r);
  var x = width * height / math.sqrt(height*height + width*width*m);
  var y = m*x;
  return {'x': x, 'y': y};
}*/