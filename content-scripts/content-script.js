console.log('content-scripts controller entrance');

document.body.innerHTML += `
  <div id="root">
    <h1>content script injected area</h1>
    <button id="btn">send message</button>
    <br /><br />
    <div id="log"></div>
  </div>
`;

document.querySelector('#btn').addEventListener('click', () => {
  console.log(`sending message from ${document.location.href} content-script button click`);
  chrome.runtime.sendMessage({ message: `content sript message at ${new Date()} at domain ${document.location.href}` });
});

chrome.runtime.onMessage.addListener((msg) => {
  document.querySelector('#log').innerHTML += `<div>${msg.message}</div><br/>`;
  console.log('writing to DOM in content-script.js message callback');
});