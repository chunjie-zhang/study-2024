chrome.contextMenus.create({
  type: "normal", // normal" "checkbox"多选 "radio"单选 "separator" 分割线
  title: "张春节的测试菜单", // 菜单标题
  id: 'zcj',
  contexts: ["all", 'page', 'selection'], // 菜单可以右键出现的区域， "all" "page" "frame" "selection" "link" "editable" "image""video""audio""launcher""browser_action""page_action""action"
})

chrome.contextMenus.create({
  type: "checkbox", // normal" "checkbox"多选 "radio"单选 "separator" 分割线
  title: "张春节的测试菜单1", // 菜单标题
  id: 'zcj1',
  contexts: ["all", 'page', 'selection'], // 菜单可以右键出现的区域， "all" "page" "frame" "selection" "link" "editable" "image""video""audio""launcher""browser_action""page_action""action"
})

chrome.contextMenus.create({
  type: "separator", // normal" "checkbox"多选 "radio"单选 "separator" 分割线
  title: "张春节的测试菜单2", // 菜单标题
  id: 'zcj2',
  contexts: ["all", 'page', 'selection'], // 菜单可以右键出现的区域， "all" "page" "frame" "selection" "link" "editable" "image""video""audio""launcher""browser_action""page_action""action"
})

chrome.contextMenus.create({
  type: "radio", // normal" "checkbox"多选 "radio"单选 "separator" 分割线
  title: "张春节的测试菜单3", // 菜单标题
  id: 'zcj3',
  contexts: ["all", 'page', 'selection'], // 菜单可以右键出现的区域， "all" "page" "frame" "selection" "link" "editable" "image""video""audio""launcher""browser_action""page_action""action"
})

chrome.contextMenus.create({
  type: "radio", // normal" "checkbox"多选 "radio"单选 "separator" 分割线
  title: "张春节的测试菜单4", // 菜单标题
  id: 'zcj4',
  contexts: ["all", 'page', 'selection'], // 菜单可以右键出现的区域， "all" "page" "frame" "selection" "link" "editable" "image""video""audio""launcher""browser_action""page_action""action"
})

chrome.contextMenus.create({
  type: "radio", // normal" "checkbox"多选 "radio"单选 "separator" 分割线
  title: "张春节的测试菜单5", // 菜单标题
  parentId: 'zcj',
  id: 'zcj5',
  contexts: ["all", 'page', 'selection'], // 菜单可以右键出现的区域， "all" "page" "frame" "selection" "link" "editable" "image""video""audio""launcher""browser_action""page_action""action"
})

chrome.contextMenus.onClicked.addListener((params) => {
  console.log('======', params);
  if(params.menuItemId === 'zcj5') {
      chrome.tabs.create({
        url: 'https://fanyi.baidu.com/mtpe-individual/multimodal?query=' + params.selectionText,
      })
  } else if(params.menuItemId === 'zcj1') {
    chrome.contextMenus.update('zcj', {
      title: '我被张春节的测试菜单1改变了'
    })
  }
})

// // 动态声明
const loader = async () => {
  let tab = await chrome.tabs.query({active: true, currentWindow: true})
  console.log('=======', tab);

  // // 动态声明
chrome.scripting
  .registerContentScripts([{
    id: "session-script", // 在 API 调用中指定的内容脚本的 ID。不得以“_”开头因为它已预留为生成的脚本 ID 的前缀。
    js: ["contentXss/content.js"],
    matches: ["https://*.jd.com/*"],
    persistAcrossSessions: false,
  }])
  .then(() => console.log("=========registration complete"))
  .catch((err) => console.warn("========unexpected error", err))
}
loader()

// 通知
chrome.notifications.create('13123',{
    type: 'basic',
    title: '消息通知',
    iconUrl: './img/image.png',
    message: '好的呢'
  },
  (params) => {
    console.log('======notifications', params);
  },
)

// 页面发送消息
chrome.runtime.sendMessage({message: "bgjs的js发送的消息"}, (res) => {
  console.log('======backgroundjs', res);
})

// 监听通信
chrome.runtime.onMessage.addListener((res, sender, sendResponse) => {
  console.log('=====onMessage', res, sender, sendResponse);
  sendResponse('bg我收到了')
})

// 页面发送消息
const loader2 = async () => {
  // 页面发送消息
chrome.runtime.sendMessage({message: "bgjs的js发送的消息"}, (res) => {
  console.log('======backgroundjs', res);
})
  let tab = await chrome.tabs.query({active: true, currentWindow: true})
  console.log('=======', tab);
  chrome.tabs.sendMessage(tab[0].id, {message: "backgroundjs发送的消息"}, {}, (res) => {
    console.log('======content-script-sendMessage22', res);
  })
}

setTimeout(() => {
  loader2()
}, 5000)

chrome.action.setBadgeBackgroundColor({color:'#3780Fa'})
chrome.action.setBadgeText({
    text: '99+'
})

// 监听通信-打开popup弹窗
chrome.runtime.onMessage.addListener(async(res, sender, sendResponse) => {
 if(res.type === 'openPopup') {
  // chrome.scripting.executeScript({
  //   target: {tabId: tab[0].id},
  //   function: function() {
  //     var script = document.createElement('script');
  //     script.src = 'https://jm-static.jd.com/shop-common-components/shop-common-components.iife.js'; // 在线链接的JavaScript文件
  //     document.head.appendChild(script);
  //   }
  // });
  // chrome.action.openPopup(
  //   {
  //   },
  //   () => {
  //     console.log('=====打开插件');
  //   }
  // )
  await chrome.sidePanel.open({ tabId: sender.tab.id });
  await chrome.sidePanel.setOptions({
    tabId: sender.tab.id,
    path: 'html/sidepanel/sidepanel.html',
    enabled: true
  });
 }

})


const GOOGLE_ORIGIN = '.jd.com';

// 监听图标点击
chrome.action.onClicked.addListener((tab) => {
  chrome.sidePanel.open(
    {
    },
    (res) => {
      console.log('======sidePanel', res);
    }
  )
})

chrome.contextMenus.create({
  id: 'openSidePanel',
  title: '打开侧边栏',
  contexts: ['all']
});

chrome.contextMenus.create({
  id: 'closeSidePanel',
  title: '关闭侧边栏',
  contexts: ['all']
});

// 打开侧边栏
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'openSidePanel') {
    chrome.sidePanel.setOptions({
      tabId: tab.id,
      enabled: true
    });
    chrome.sidePanel.open({ windowId: tab.windowId });
  } else if (info.menuItemId === 'closeSidePanel'){
    chrome.sidePanel.setOptions({
      tabId: tab.id,
      enabled: false
    });
  }
});

// 键盘快捷键打开
chrome.commands.onCommand.addListener(async (command) => {
  let tab = await chrome.tabs.query({active: true, currentWindow: true})
  console.log(`========Command: ${command}`, tab);
  if(command === 'run-sidePanel') {
    chrome.sidePanel.open( {
      windowId: tab[0].windowId
    },
    (res) => {
      console.log('======sidePanel', res);
    });
  }
});