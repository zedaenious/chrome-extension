console.log('popup controller entrance');

document.querySelector('#btn').addEventListener('click', (msg) => {
  chrome.runtime.sendMessage({ text: `Popup message text at ${new Date()}`});

  chrome.tabs.query(
    {
      active: true,
      currentWindow: true
    },
    (tabs) => {
      chrome.tabs.sendMessage(tabs[0]?.id, { text: "chrome.tabs.sendmessage" });
    }
  );
});