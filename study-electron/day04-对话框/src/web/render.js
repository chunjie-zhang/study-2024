console.log(1111);

console.log('=====', window.api);

const callback = (val) => {
  console.log(val);
}

window.addEventListener("DOMContentLoaded", () => {
  const savbeBtn = document.querySelector('.saveFile');
  savbeBtn.addEventListener("click", () => {
    const txt = document.querySelector(".saveFileTxt").value;
    window.api.saveFile(txt)
  })
})


window.api.getMenuData(callback)