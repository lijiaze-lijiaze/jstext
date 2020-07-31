const data = [
    { id: 56, parentId: 62 },
    { id: 81, parentId: 80 },
    { id: 74, parentId: null },
    { id: 76, parentId: 80 },
    { id: 63, parentId: 62 },
    { id: 80, parentId: 86 },
    { id: 87, parentId: 86 },
    { id: 62, parentId: 74 },
    { id: 86, parentId: 74 },
  ];
  const idMapping = data.reduce((acc, el, i) => {
    console.log(el.id,i)
    acc[el.id] = i;
    return acc;
  }, {});
  console.log(idMapping)
  let root;
data.forEach(el => {
  // 判断根节点
  if (el.parentId === null) {
    root = el;
    return;
  }
  // 用映射表找到父元素
  const parentEl = data[idMapping[el.parentId]];
  console.log('+++++++++++++++',parentEl)
  // 把当前元素添加到父元素的`children`数组中
  parentEl.children = [...(parentEl.children || []), el];
  console.log('---------------',parentEl)
});
console.log(root)