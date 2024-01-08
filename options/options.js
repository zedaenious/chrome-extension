console.log('hello from the options page service worker content script');

document. querySelector('#btn').addEventListener('click', (msg) => {
  chrome.runtime.sendMessage({ text: `Message from the options button at ${new Date()}`});
});

chrome.runtime.onMessage.addListener((msg) => {
  document.body.innerHTML += `<div>${msg.text}</div>`;
})