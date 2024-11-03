const sendDom = document.getElementById('send');
sendDom.addEventListener('click', () => {
  chrome.runtime.sendMessage({message: "popupjs发送的消息"}, (res) => {
    console.log('======sendMessage-收到bg的消息了', res);
  })
})

// 页面监听消息
chrome.runtime.onMessage.addListener((res, sender, sendResponse) => {
  console.log('=====popup', res, sender, sendResponse);
  sendResponse('============popup收到消息')
})