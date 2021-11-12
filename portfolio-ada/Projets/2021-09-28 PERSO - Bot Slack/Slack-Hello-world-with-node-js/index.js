var SlackBot = require("slackbots");
var channel = "général";
var token = "xoxb-2534061744534-2552383082532-6fmRtn0DcPXzM3gjicQVmEQ6";

var bot = new SlackBot({
  token: token,
  name: "slacky",
});

bot.on("start", function () {
  bot.postMessageToChannel(channel, "Hello world!");
  //chat.postEphemeral
  console.log("Hello world!");
});

//a “message” according to the Slack API isn’t necessarily a message of text sent. A “message” is more like a generic event that could be basically anything
bot.on("message", function (data) {
  if (data.type !== "message") {
    return;
  }
  // this event was a text message sent
  handleMessage(data.text);
});

function handleMessage(message) {
  switch (message) {
    case "hi":
    case "hello":
      sendGreeting();
      break;
    default:
      return;
  }
}

function sendGreeting() {
  var greeting = getGreeting();
  bot.postMessageToChannel(channel, greeting);
  //chat.command(token, channel, "ty");
  //https://slack.com/api/chat.command?token=%22xoxb-2534061744534-2562447340676-1JYxQwqHhagYCMplYKwvsTiQ%22&channel=%22g%C3%A9n%C3%A9ral%22&command=%22/y%22
}

function getGreeting() {
  var greetings = [
    "hello!",
    "hi there!",
    "cheerio!",
    "how do you do!",
    "¡hola!",
  ];
  //return "/ty";

  return greetings[Math.floor(Math.random() * greetings.length)];
}
