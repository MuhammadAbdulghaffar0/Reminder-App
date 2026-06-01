const axios = require("axios");

async function sendMessage(message) {
    const token = process.env.BOT_TOKEN;
    const chatId = process.env.CHAT_ID;

    try {
        await axios.post(
            `https://api.telegram.org/bot${token}/sendMessage`,
            {
                chat_id: chatId,
                text: message
            }
        );

        console.log("Telegram Message Sent");
    } catch (error) {
        console.error("Telegram Error:", error.message);
    }
}

module.exports = sendMessage;
