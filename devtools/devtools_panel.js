console.log('devtools_panel.js entrance');

chrome.devtools.network.onRequestFinished.addListener(
  (request) => {
    document.body.innerHTML +=
      `<div>${request.request.url}</div>`;
  }
);