console.log('=======注入张春节的chrome脚本');

// 创建script
const loadScript = (url) => new Promise((resolve, reject) => {
  const script = document.createElement('script');
  script.onload = resolve;
  script.onerror = reject;
  script.src = url;
  script.setAttribute('ignore', 'true');
  document.body.appendChild(script);
});

const div = document.createElement('button');
div.className = "zcj_container"
const innerHtml = `<img src="https://jsd.cdn.zzko.cn/gh/chunjie-zhang/picx-images-hosting@master/study-note/image.3uuuk9ap03.webp" class="zcj_img">`
div.innerHTML = innerHtml;

const div1 = document.createElement('button');
div1.className = "zcj_container1"
div1.innerHTML = 'zcj插件测试';

document.body.appendChild(div)
document.body.appendChild(div1)
  // 加载动态js-不可使用，会被阻止
// loadScript('https://jm-static.jd.com/shop-common-components/shop-common-components.iife.js')

const img = document.querySelector('.zcj_img');
img.addEventListener('click', () => {
  console.log('=======点击了zcj插件', chrome.runtime)
  // 页面发送消息给bg打开popup
  chrome.runtime.sendMessage({type: 'openPopup', message: "页面发送消息给bg打开popup"}, (res) => {
    console.log('======content-script-sendMessage', res);
  })
})

const img1 = document.querySelector('.zcj_container1');
img1.addEventListener('click', () => {
  console.log('=======点击了zcj插件1', chrome.runtime)
  // 页面发送消息给bg打开popup
  chrome.runtime.sendMessage({type: 'openPopup', message: "页面发送消息给bg打开popup"}, (res) => {
    console.log('======content-script-sendMessage111', res);
  })
})

// 页面发送消息
chrome.runtime.sendMessage({message: "注入的js发送的消息"}, (res) => {
  console.log('======content-script-sendMessage', res);
})

// 页面监听消息
chrome.runtime.onMessage.addListener((res, sender, sendResponse) => {
  console.log('=====content-script-onMessage', res, sender, sendResponse);
  sendResponse('============注入js收到了给你bgjs消息')
})