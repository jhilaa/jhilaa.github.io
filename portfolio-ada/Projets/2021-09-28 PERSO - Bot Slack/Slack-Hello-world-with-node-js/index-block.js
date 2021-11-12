var SlackBot = require("slackbots");
var channel = "général";
var token = "xoxb-2534061744534-2552383082532-6fmRtn0DcPXzM3gjicQVmEQ6";

var bot = new SlackBot({
  token: token,
  name: "slacky",
});

bot.on("start", function () {
  bot.postMessageToChannel(channel, "Hello world!");
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
  console.log(message);
  switch (message) {
    case "hi":
    case "hello":
      //sendGreeting();
      getAttachment();
      break;
    default:
      return;
  }
}

//--------------

function getAttachment() {
  const fetch = require("node-fetch");
  const SLACK_BOT_TOKEN = token;
  //--
  const payload = {
    channel: channel,
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*My 1st Slack Message*`,
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `Random example message text`,
        },
      },
      {
        type: "context",
        elements: [
          {
            type: "image",
            image_url: `https://github.com/alejandrogonzalez3.png`,
            alt_text: "images",
          },
          {
            type: "mrkdwn",
            text: `*Author:* slacky`,
          },
        ],
      },
      {
        type: "context",
        elements: [
          {
            type: "image",
            image_url:
              "https://avatars0.githubusercontent.com/u/9919?s=280&v=4",
            alt_text: "images",
          },
          {
            type: "mrkdwn",
            text: "Footer example",
          },
        ],
      },
    ],
  };

  fetch("https://slack.com/api/chat.postMessage", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Content-Length": payload.length,
      Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
      Accept: "application/json",
    },
  })
    .then((res) => {
      console.log(res.json);
      if (!res.ok) {
        throw new Error(`Server error ${res.status}`);
      }
      return res.json();
    })
    .catch((error) => {
      console.log(error);
    });
}
