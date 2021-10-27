document.getElementById('open_resource').addEventListener('click', function () {
  chrome.devtools.inspectedWindow.eval(
    'window.location.href',
    function (result, isException) {
      chrome.devtools.panels.openResource(result, 20, function () {
        console.log('资源打开成功！')
      })
    }
  )
})

// 审查元素
document.getElementById('test_inspect').addEventListener('click', function () {
  chrome.devtools.inspectedWindow.eval(
    'inspect(document.images[0])',
    function (result, isException) { }
  )
})

// 获取所有资源
document
  .getElementById('get_all_resources')
  .addEventListener('click', function () {
    chrome.devtools.inspectedWindow.getResources(function (resources) {
      alert(JSON.stringify(resources))
    })
  })