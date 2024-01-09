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
  console.log('sending message from content-script button click');
  chrome.runtime.sendMessage({ message: `content sript message at ${new Date()}` });
});