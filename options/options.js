console.log('options controller entrance');

document. querySelector('#btn').addEventListener('click', () => {
  chrome.runtime.sendMessage({ message: `Message from the options button at ${new Date()}`});
});

chrome.runtime.onMessage.addListener((response, sender, sendResponse) => {
  console.log(response, sender, sendResponse);
  document.body.innerHTML += `
    <div>Message: ${response.message}</div><br/>
    <div>Sender: ${sender}</div><br/>
    <div>sendResponse: ${sendResponse()}</div><br/>
  `;
});