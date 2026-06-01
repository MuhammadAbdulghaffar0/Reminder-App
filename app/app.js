const waterReminder = require('./reminders/water');
const duaaReminder = require('./reminders/duaa');
const prayerReminder = require('./reminders/prayer');

process.env.BOT_TOKEN
process.env.CHAT_ID

const WATER_INTERVAL =
process.env.WATER_INTERVAL || 10000;

const DUAA_INTERVAL =
process.env.DUAA_INTERVAL || 20000;

const PRAYER_INTERVAL =
process.env.PRAYER_INTERVAL || 30000;

console.log("🚀 Reminder App Started");

setInterval(waterReminder, WATER_INTERVAL);

setInterval(duaaReminder, DUAA_INTERVAL);

setInterval(prayerReminder, PRAYER_INTERVAL);
