const events = require("events");
const eventEmmiter = new events.EventEmitter();

const switchVoice = function (arg) {
  console.log(arg);
  console.log(`I am saying hellowwwww to ${arg.name} with ID: ${arg.id}`);
};

// Add or register an event listner
eventEmmiter.on("switch", switchVoice);

// fire the event using emit
// eventEmmiter.emit("switch");

// You can also pass arguments while raising the event, Like this:
eventEmmiter.emit("switch", { name: "Dilpreet Kaur", id: 2 });
