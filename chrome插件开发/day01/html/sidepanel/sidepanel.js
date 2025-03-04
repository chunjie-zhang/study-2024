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


const cookieDom = document.getElementById('cookie');
const cookieTxtDom = document.getElementById('cookie-text');
cookieDom.addEventListener('click', async () => {
  let tabs = await chrome.tabs.query({active: true, currentWindow: true})
  const url = new URL(tabs[0].url)
  console.log('=======', url, chrome.cookies);
  chrome.cookies.getAll({
    domain: 'jd.com'
  }, (cookies) => {
    console.log('======cookies', cookies);
    cookieTxtDom.innerHtml = cookies.map(c => c.name+"="+c.value).join(';')
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