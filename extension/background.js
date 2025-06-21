chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      func: () => {
        console.log("Page loaded: " + location.href);
        console.log("User-Agent:", navigator.userAgent);
        console.log("Screen Resolution:", screen.width + "x" + screen.height);
      }
    });
  }
});
