const sendMessage = require("../telegram");

function duaaReminder() {
    const message =
        `[${new Date().toLocaleTimeString()}] 🤲 Read Duaa`;

    console.log(message);

    sendMessage(message);
}

module.exports = duaaReminder;
