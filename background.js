console.log('background controller entrance');

chrome.runtime.onMessage.addListener((msg) => {
  console.log(`Message: ${msg.message} @ ${new Date()}.`);
});