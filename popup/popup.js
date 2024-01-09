console.log('popup controller entrance');

document.querySelector('#btn').addEventListener('click', () => {
  console.log('sending message from popup button click');
  chrome.runtime.sendMessage({ message: `Popup message text at ${new Date()}`});

  chrome.tabs.query(
    {
      active: true,
      currentWindow: true
    },
    (tabs) => {
      chrome.tabs.sendMessage(tabs[0]?.id, { message: "popup.js chrome.tabs.sendMessage text" });
    }
  );
});

chrome.runtime.onMessage.addListener((msg) => {
  document.body.innerHTML += `<div>${msg.message}</div>`;
  console.log('writing to DOM in popup.js message callback');
});