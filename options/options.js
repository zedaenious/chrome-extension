console.log('options controller entrance');

document. querySelector('#btn').addEventListener('click', () => {
  console.log('sending message from options button click');
  chrome.runtime.sendMessage({ message: `Message from the options button at ${new Date()}`});
});

chrome.runtime.onMessage.addListener((response, a, b, c, d, e) => {
  console.log(response, a, b, c, d, e);
  document.body.innerHTML += `<div>Message: ${response.message}</div><br/>`;
});