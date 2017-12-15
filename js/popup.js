const storage = chrome.storage.local;
const manifest = chrome.runtime.getManifest();
const version = manifest.version;

let infoActive = false;

storage.get(['results', 'showInfoActive'], (items) => {
    const data = items.results.data;
    window.data = items.results;
    infoActive = items.showInfoActive;
    renderView(data, infoActive);
});

chrome.storage.onChanged.addListener((changes) => {

    if (changes.showInfoActive) {
        infoActive = changes.showInfoActive.newValue;
    }

    if (changes.results) {
        const data = changes.results.newValue.data;
        window.data = changes.results.newValue;
        renderView(data, infoActive);
    }
});
