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
  console.log('=====', div);
  div.innerHTML = innerHtml;

  document.body.appendChild(div)
    // 加载动态js-不可使用，会被阻止
  // loadScript('https://jm-static.jd.com/shop-common-components/shop-common-components.iife.js')

  const img = document.querySelector('.zcj_container');
  console.log('========', img);
  img.addEventListener('click', () => {
    console.log('=======点击了zcj插件')
    // 页面发送消息给bg打开popup
    chrome.runtime.sendMessage({type: 'openPopup', message: "页面发送消息给bg打开popup"}, (res) => {
      console.log('======content-script-sendMessage', res);
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