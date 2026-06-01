const sendMessage = require("../telegram");

function duaaReminder() {
    const message =
        `[${new Date().toLocaleTimeString()}] <3 Pray Time`;

    console.log(message);

    sendMessage(message);
}

module.exports = duaaReminder;
