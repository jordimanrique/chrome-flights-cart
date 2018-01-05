const storage = chrome.storage.local;
const manifest = chrome.runtime.getManifest();
const version = manifest.version;

let active = false;

$(document).ready(() => {
    $('#version').html(version);
    validateDataFromStorage();
});

function validateDataFromStorage() {
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

    active = user.active === 'on';
    $('#active-autofill').prop('checked', active);
}

$('#submit').click(() => {
    let data = {
        gender: $('input[name=gender]:checked').val(),
        name: $('#name').val(),
        email: $('#email').val(),
        active: $('#active-autofill:checked').val()
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