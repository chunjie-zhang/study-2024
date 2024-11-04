console.log('==========打开sidepanel页');

// 创建script
const loadScript = (url) => new Promise((resolve, reject) => {
  const script = document.createElement('script');
  script.onload = resolve;
  script.onerror = reject;
  script.src = url;
  script.setAttribute('ignore', 'true');
  document.body.appendChild(script);
});

const sendDom = document.getElementById('send');
const contentDom = document.getElementById('app');
sendDom.addEventListener('click', () => {
  chrome.runtime.sendMessage({message: "sidepanel发送的消息"}, (res) => {
    console.log('======sendMessage-收到bg的消息了', res);
    contentDom.innerHTML = res;
  })
})

// 页面监听消息
chrome.runtime.onMessage.addListener((res, sender, sendResponse) => {
  console.log('=====sidepanel', res, sender, sendResponse);
  sendResponse('============sidepanel收到消息')
  contentDom.innerHTML = '============sidepanel收到消息';
})

// 加载动态js-不可使用，会被阻止
// loadScript('https://jm-static.jd.com/shop-common-components/shop-common-components.iife.js')