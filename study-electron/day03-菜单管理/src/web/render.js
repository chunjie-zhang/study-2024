console.log(1111);

console.log('=====', window.api);

const callback = (val) => {
  console.log(val);
}

window.api.getMenuData(callback)