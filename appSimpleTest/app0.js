/*function waterreminder() {
#console.log("Drink Water");
}

function prayerreminder() {
console.log("Check ray time");
}

function azkarreminder() {
console.log("Azkar reminder time");
}

setInterval(waterreminder, 8000);

setInterval(azkarreminder, 5000);

setInterval(prayerreminder, 10000);

#let us change this code now and make it with notifications <3

const notifier = require('node-notifier');

notifier.notify({
	title: 'Reminder',
	message: 'Drink Water'
});
console.log("Not Sent");
*/
const waterReminder = require('./reminders/water');
const duaaReminder = require('./reminders/duaa');
const PrayerReminder = require('./reminders/prayer');
console.log("🚀 App Started");

setInterval(waterReminder, 15000);

setInterval(duaaReminder, 20000);

setInterval(PrayerReminder, 30000);
