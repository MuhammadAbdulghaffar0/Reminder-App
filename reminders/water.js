const sendMessage = require("../telegram");

function waterReminder() {
    const message =
        `[${new Date().toLocaleTimeString()}] Drink Water`;

    console.log(message);

    sendMessage(message);
}



module.exports = waterReminder;

