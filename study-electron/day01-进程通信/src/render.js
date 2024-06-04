console.log('======', 111111);

window.a = 1;
console.log('======window', window);

console.log(window.api)
const callback = (val) => {
  console.log('====', val);
}
window.api.bus(callback)

window.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementsByClassName('btn')[0];
  btn.addEventListener('click', () => {
    window.api.saveFile();
    window.api.upload();
  })
  const input = document.getElementsByClassName('input')[0];
  const btn1 = document.getElementsByClassName('btn1')[0];
  btn1.addEventListener('click', () => {
    const txt = input.value;
    window.api.changeTitle(txt);
  })
})