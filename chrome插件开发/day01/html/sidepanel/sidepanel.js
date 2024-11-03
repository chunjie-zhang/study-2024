console.log('==========打开sidepanel页');

const sendDom = document.getElementById('send');
sendDom.addEventListener('click', () => {
  chrome.runtime.sendMessage({message: "sidepanel发送的消息"}, (res) => {
    console.log('======sendMessage-收到bg的消息了', res);
  })
})

// 页面监听消息
chrome.runtime.onMessage.addListener((res, sender, sendResponse) => {
  console.log('=====sidepanel', res, sender, sendResponse);
  sendResponse('============sidepanel收到消息')
})