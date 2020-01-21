import store from './store'
global.browser = require('webextension-polyfill')

alert(`Hello. Current state of foo is ${store.getters.foo}!`);

class Controller {
    constructor() {
        this.badgeInfo = {
            text: "4",
            color: "red"
        }
        this.contextMenuKVPairs = {
            'key1': 'value1',
            'key2': 'value2'
        }
        this.authenticated = true
    }
    start() {
        this.buildBadge();
        this.buildContextMenu();
        this.authenticate();
        this.authCheck();
    }
    //dummy badge functionality
    buildBadge() {
        chrome.browserAction.setBadgeText({ text: this.badgeInfo.text });
        chrome.browserAction.setBadgeBackgroundColor({ color: this.badgeInfo.color });
    }
    //dummy context menu functionality(on right click)
    buildContextMenu() {
        for (let key of Object.keys(this.contextMenuKVPairs)) {
            chrome.contextMenus.create({
                id: key,
                title: this.contextMenuKVPairs[key],
                type: 'normal',
                contexts: ['selection'],
            });
        };
    }
    //auth placeholder
    authenticate() {
        chrome.storage.sync.set({ authenticated: this.authenticated }, function () {
            console.log('User signed in.');
        });
    }
    //showing omnibox and main pop-up page only when user is authenticated
    authCheck() {
        chrome.storage.sync.get(['authenticated'], (data) => {
            //
            if (data.authenticated) {
                chrome.browserAction.setPopup({ popup: './popup/popup.html' });
                //dummy omnibox functionality
                chrome.omnibox.onInputEntered.addListener(function (text) {
                    var newURL = 'https://www.google.com/search?q=' + encodeURIComponent(text);
                    chrome.tabs.create({ url: newURL });
                });
            } else {
                chrome.browserAction.setPopup({ popup: './popup/guest.html' });
            }
        });
    }
}
//registering controller in browser window object as a global var for future reference
window.controllerSession = new Controller()
window.controllerSession.start()




