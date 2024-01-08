console.log('options controller entrance');

document. querySelector('#btn').addEventListener('click', () => {
  chrome.runtime.sendMessage({ message: `Message from the options button at ${new Date()}`});
});

chrome.runtime.onMessage.addListener((response) => {
  console.log(response);
  document.body.innerHTML += `<div>${response.message}</div><br/>`;
})