const storage = chrome.storage.local;

$('#submit').click(() => {
    let data = {
        gender: $('input[name=gender]:checked').val(),
        name: $('#name').val(),
        email: $('#email').val()
    };
    storage.set({'results': data}, () => {
        sendMessage({
            type: 'COMMAND',
            payload: 'change-userDefault'
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