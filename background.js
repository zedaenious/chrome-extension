import './utils/fetch-page.js';

console.log('background controller entrance');

// general logger for persistent background worker
chrome.runtime.onMessage.addListener((msg) => {
  console.log(`Message: ${msg.message} @ ${new Date()}.`);
});

export default {};