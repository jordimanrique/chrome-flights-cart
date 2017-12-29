const storage = chrome.storage.local;

// storage.get(['results'], (items) => {
//     const data = items.results;
//     console.log('GET STORAGE');
//     console.log(data);
// });
//
// chrome.storage.onChanged.addListener((changes) => {
//
//     if (changes.results) {
//         const data = changes.results.newValue;
//         console.log('CHANGES STORAGE');
//         console.log(data);
//     }
// });


$('#users').submit(() => {
    let data = {
        name: $('#name').val(),
        email: $('#email').val()
    };
    storage.set({'results': data}, () => {
        sendMessage({
            type: 'COMMAND',
            payload: 'show-users'
        });
    });
});

function sendMessage(message) {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        let lastTabId = tabs[0].id;
        if (lastTabId) {
            chrome.tabs.sendMessage(lastTabId, message);
        }
    });
}