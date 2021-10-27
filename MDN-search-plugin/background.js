// chrome.contextMenus.create({
// 	title: "测试右键菜单",
// 	onclick: function(){alert('您点击了右键菜单！');}
// });

// chrome.contextMenus.removeAll(() => {
//   chrome.contextMenus.create(
//     {
//       type: 'normal',
//       title: '使用MDN搜索 %s',
//       id: 'MDN-search',
//       contexts: ['all']
//     },
//     function () {
//       console.log('contextMenus are create.')
//     }
//   )
// })

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create(
    {
      type: 'normal',
      title: '使用MDN搜索 %s',
      id: 'MDN-search',
      contexts: ['all']
    },
    function () {
      console.log('contextMenus are create.')
    }
  )
})

chrome.contextMenus.onClicked.addListener(info => {
  chrome.tabs.create({
    url:
      'https://developer.mozilla.org/zh-CN/search?q=' +
      encodeURI(info.selectionText)
  })
})

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content-script.js']
  });
});
