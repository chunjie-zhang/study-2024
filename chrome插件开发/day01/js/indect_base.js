// 创建script
const loadScript = (url) => new Promise((resolve, reject) => {
  const script = document.createElement('script');
  script.onload = resolve;
  script.onerror = reject;
  script.src = url;
  script.setAttribute('ignore', 'true');
  document.body.appendChild(script);
});

loadScript('https://jm-static.jd.com/shop-common-components/shop-common-components.iife.js?a=1')