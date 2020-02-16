console.log('load')

chrome.tabs.query({currentWindow: true}, tabs => {
  console.log(tabs)
  console.log(tabs.length)
})

// add contextMenus
chrome.runtime.onInstalled.addListener(() => {
  // chrome.contextMenus.create({
  //   id: 'share',
  //   type : 'normal',
  //   title : 'tab sort',
  //   contexts: ['page'],
  // })
})

// browserAction clicked
chrome.browserAction.onClicked.addListener(tab => {
  console.log('browserAction clicked')
  console.log(tab)

  chrome.tabs.onActivated.addListener(activeInfo => {
    console.log(activeInfo)
  })
})
