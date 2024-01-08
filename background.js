console.log('hello from the background service worker!');

chrome.runtime.onMessage.addListener(msg => console.log(msg.text));