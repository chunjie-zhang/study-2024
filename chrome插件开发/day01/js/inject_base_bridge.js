
function inject(){
  const injectPath = "js/indect_base.js";
  const script = document.create("script");
  script.setAttribute("type", "text/javascript");
  
  // 重点是这句
  
  script.src = chrome.runtime.getURL(injectPath);
  
  document.body.appendChild(script);
  
  }