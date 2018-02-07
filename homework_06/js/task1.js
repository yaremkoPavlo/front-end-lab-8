var bool = true,
    typeTr = '';
var a = Number(prompt("Input 1-st length of triangle side"));
var b = Number(prompt("Input 2-nd length of triangle side"));
var c = Number(prompt("Input 3-th length of triangle side"));

if ((c >= a + b) || (a >= b + c) || (b >= a + c)) {
  typeTr = "It can`t be a triangle";
  bool = false;
}

if ((a>0) && (b>0) && (c>0) && bool) {
  var p = (a + b + c)/2;
  var square = Math.sqrt(p*(p-a)*(p-b)*(p-c));
  square = (Number.isInteger(square))?square:square.toFixed(2);
  if (pifagor(a, b, c))
    typeTr = "Right triangle"
  else if ( a == b && b == c)
    typeTr = "Equilateral triangle"
  else if ( a == b || b == c || c == a)
    typeTr = "Isosceles triangle"
  else
    typeTr = "Scalene triangle";
  console.log("Type of triangle is "+typeTr+" and square is "+square);
  }
else
  console.log("Incorrect data input. "+typeTr);

function pifagor(a, b, c) {
  if ((a*a == b*b + c*c) || (a*a + b*b == c*c) || (b*b == c*c + a*a))
    return true;
  return false;
}
