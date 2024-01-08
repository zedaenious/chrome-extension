console.log('check check this is a msg from the popup service worker content script');

const time = new Date();

document.querySelector('#btn').addEventListener('click', (msg) => {
  chrome.runtime.sendMessage({ text: `Popup message text at ${new Date()}`});
});

chrome.runtime.onMessage.addListener((msg) => {
  document.body.innerHTML += `<div>${msg.text}</div>`;
});