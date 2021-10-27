/**
 * 向页面注入脚本
 * @param {String} jsPath 脚本在你插件目录下的路径
 */
function injectCustomJs(jsPath) {
  let script = document.createElement('script')
  script.setAttribute('type', 'text/javascript')
  // 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
  // 因为这个JS资源是在你的扩展插件的存放位置，这样相当于就是让网页去访问你的扩展脚本资源
  script.src = chrome.extension.getURL(jsPath)
  document.head.appendChild(script)
}

// document.body.style.backgroundColor = 'orange';
console.log(a)
