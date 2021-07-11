function a() {
  var x = 0;

  function b() {
    x++;
    console.log(x);
  }

  return b;
}

let f = a();
// .........

// ......

f();
f();
f();
f();
f();
