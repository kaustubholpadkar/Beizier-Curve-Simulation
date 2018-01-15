var dia = 20;

var count = 0;

var x = [];
var y = [];

var tx, ty, ti = -1;

var degree = 4;

function fact(x) {
   if(x==0) {
      return 1;
   }
   return x * fact(x-1);
}

function C (n, r) {
  return (fact(n) / (fact(r) * fact(n - r)));
}

function setup() {
  createCanvas(600,400);
  stroke(255);
}

function draw() {

  var xx, yy;

  background(51);

  for (var i = 0; i < x.length; i++) {
    ellipse(x[i], y[i], 20, 20);
  }


  if (count < degree) {

  } else {

    midpoint(x[0], y[0], x[1], y[1], x[2], y[2], x[3], y[3], 9);

/*
    for (var j = 0; j < 1; j += 0.0001) {

      if (degree == 4) {
        yy = y[3] * j * j * j + 3 * y[2] * j * j * (1 - j) + 3 * y[1] * j * (1 - j) * (1 - j) + y[0] * (1 - j) * (1 - j) * (1 - j);
        xx = x[3] * j * j * j + 3 * x[2] * j * j * (1 - j) + 3 * x[1] * j * (1 - j) * (1 - j) + x[0] * (1 - j) * (1 - j) * (1 - j);
      }
      else if (degree == 5) {
        yy = y[4] * j * j * j * j + 4 * y[3] * j * j * j * (1 - j) + 6 * y[2] * j * j * (1 - j) * (1 - j) + 4 * y[1] * j * (1 - j) * (1 - j) * (1 - j) + y[0] * (1 - j) * (1 - j) * (1 - j) * (1 - j);
        xx = x[4] * j * j * j * j + 4 * x[3] * j * j * j * (1 - j) + 6 * x[2] * j * j * (1 - j) * (1 - j) + 4 * x[1] * j * (1 - j) * (1 - j) * (1 - j) + x[0] * (1 - j) * (1 - j) * (1 - j) * (1 - j);
      }
/*
      xx = 0;
      yy = 0;

      for (var k = 0; k < degree + 1; k++) {
        xx += parseInt(C(degree, k) * parseFloat(Math.pow(1 - j, degree - k)) * parseFloat(Math.pow(j, k)) * x[k]);
        yy += parseInt(C(degree, k) * parseFloat(Math.pow(1 - j, degree - k)) * parseFloat(Math.pow(j, k)) * y[k]);
      }
//
      // console.log(xx, yy);
      point(xx, yy);


    }
*/

  }


}

function mouseClicked(){
  if (count < degree && mouseX < 600 && mouseY < 400) {
    x[count] = mouseX;
    y[count] = mouseY;
    count++;
  }
}

function mouseDragged () {
  if (count < degree) {

  } else {
    tx = mouseX;
    ty = mouseY;

    for (var i = 0; i < x.length; i++) {
      if (tx < x[i] + dia && tx > x[i] - dia && ty < y[i] + dia && ty > y[i] - dia) {
        x[i] = tx;
        y[i] = ty;
        break;
      }
    }
  }
}

function midpoint (x1, y1, x2, y2, x3, y3, x4, y4, n) {

  if (n == 0) {

    line(x1, y1, x2, y2);
    line(x2, y2, x3, y3);
    line(x3, y3, x4, y4);
    return;
  }

  let x12 = (x1 + x2) / 2;
  let y12 = (y1 + y2) / 2;

  let x23 = (x2 + x3) / 2;
  let y23 = (y2 + y3) / 2;

  let x34 = (x3 + x4) / 2;
  let y34 = (y3 + y4) / 2;

  let x123 = (x12 + x23) / 2;
  let y123 = (y12 + y23) / 2;

  let x234 = (x23 + x34) / 2;
  let y234 = (y23 + y34) / 2;

  let x1234 = (x123 + x234) / 2;
  let y1234 = (y123 + y234) / 2;


  midpoint (x1, y1, x12, y12, x123, y123, x1234, y1234, n - 1);
  midpoint (x1234, y1234, x234, y234, x34, y34, x4, y4, n - 1);
}
