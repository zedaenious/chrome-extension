console.log('options controller entrance');

document. querySelector('#btn').addEventListener('click', () => {
  console.log('sending message from options button click');
  chrome.runtime.sendMessage({ message: `Message from the options button at ${new Date()}`});
});

chrome.runtime.onMessage.addListener((msg) => {
  document.body.innerHTML += `<div>${msg.message}</div>`;
  console.log('writing to DOM in options.js message callback');
});