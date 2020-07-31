var a = 1;
var rr = 12;
var obj2 = {
  rr: 10,
  b: () => console.log(this.rr, this),
  c: function () {
    console.log(a);
    let a = 2;
  },
  d: function () {
    console.log(0);
    setTimeout(_ => console.log(1));
    new Promise(resolve => {
      console.log(2);
    }).then(_ => {
      console.log(3);
    });
    console.log(4)
  }
}

let tt = obj2.b;
tt()