import(chrome.runtime.getURL('../utils/fetch-page.js'));

console.log('content-scripts controller entrance');

// DOM Content Injection
document.body.innerHTML += `
  <div id="root">
    <h1>content script injected area</h1>
    <button id="btn">send message</button>
    <br /><br />
    <div id="log"></div>
  </div>
`;

// element event listener setups
document.querySelector('#btn').addEventListener('click', () => {
  console.log(`sending message from ${document.location.href} content-script button click`);
  chrome.runtime.sendMessage({ message: `content sript message at ${new Date()} at domain ${document.location.href}` });
});

// browser event listener setups
chrome.runtime.onMessage.addListener((msg) => {
  document.querySelector('#log').innerHTML += `<div>${msg.message}</div><br/>`;
  console.log('writing to DOM in content-script.js message callback');
});

// start ad-hoc scripting
const psuedoScript = document.createElement('script');
psuedoScript.src = chrome.runtime.getURL('../utils/fetch-page.js');
document.body.appendChild(psuedoScript);