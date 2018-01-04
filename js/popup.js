const storage = chrome.storage.local;
const manifest = chrome.runtime.getManifest();
const version = manifest.version;

$(document).ready(() => {
    $('#version').html(version);
    validateUserFromStorage();
});

function validateUserFromStorage() {
    storage.get(['results'], (items) => {
        fillPopup(items.results);
    });
}

function fillPopup(user) {
    if (user) {
        if (user.gender === 'mr') {
            $('#male').prop( "checked", true );
        } else {
            $('#female').prop( "checked", true );
        }
        $('#name').val(user.name);
        $('#email').val(user.email);
    }
}

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
    window.close();
});

function sendMessage(message) {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        let lastTabId = tabs[0].id;
        if (lastTabId) {
            chrome.tabs.sendMessage(lastTabId, message);
        }
    });
}