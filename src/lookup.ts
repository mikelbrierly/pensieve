// import { search } from "./lib/search";

export {};

chrome.contextMenus.create({
  title: "Look up %s with pensieve",
  contexts: ["selection"],
  id: "123453533",
});

const textSelection = (info: any) => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const tabId: any = tabs[0].id;
    chrome.tabs.sendMessage(tabId, { selectedText: info.selectionText });
  });
};

chrome.contextMenus.onClicked.addListener(textSelection);
