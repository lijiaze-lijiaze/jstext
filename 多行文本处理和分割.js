//aaa 'dd'  f g;fd
//1    '2dd'   131 512
//     q  'w'   er,-

//[
    // ['aaa','dd','f','g;fd'],
    // [1,'2dd',131,512],
    // ['q','w','er','-']
//]

str.split('\n').map(row=>row.trim().split(/\s+/g))