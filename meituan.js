var a = 1;

var obj = {
  i: 10,
  b: () => console.log(this.i, this),
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

obj.d();