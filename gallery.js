function load_gallery() {
  var center_x = screen.width/2;
  var center_y = screen.height/2;

  var img = document.createElement("img");
  img.src = "http://www.systemoflevers.com/misc/voms/me_mouth_open_s.jpg";
  img.style.position = "absolute";
  img.style.top = center_y - 156;
  img.style.left = center_x - 234;

  document.body.appendChild(img);
}