console.log('hello from the content-scripts controller');

document.body.innerHTML += `
  <div id="root">
    <h1>content script injected area</h1>
    <button id="btn">send message</button>
    <br /><br />
    <div id="log"></div>
  </div>
`;

chrome.runtime.onMessage.addListener((msg) => {
  document.querySelector('#log').innerHTML += `<div>${msg.text}</div>`;
});

document.querySelector('#btn').addEventListener('click', () => {
  chrome.runtime.sendMessage({ text: `content sript message at ${new Date()}`});
});