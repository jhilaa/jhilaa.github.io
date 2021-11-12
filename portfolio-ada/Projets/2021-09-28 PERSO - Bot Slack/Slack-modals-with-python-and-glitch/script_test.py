import os, logging

logging.basicConfig(level=logging.DEBUG)

from slack_bolt import App

app = App(
    token=os.environ.get("SLACK_BOT_TOKEN"),
    signing_secret=os.environ.get("SLACK_SIGNING_SECRET"),
)


@app.middleware  # or app.use(log_request)
def log_request(logger, body, next):
    logger.debug(body)
    next()


# Step 5: Payload is sent to this endpoint, we extract the `trigger_id` and call views.open
@app.command("/ty")
def handle_command(body, ack, client, logger):
    logger.info(body)
    ack()

    res = client.views_open(
        trigger_id=body["trigger_id"],
        view={
            "type": "modal",
            "callback_id": "gratitude-modal",
            "title": {"type": "plain_text", "text": "Gratitude Box"},
            "submit": {"type": "plain_text", "text": "Submit"},
            "close": {"type": "plain_text", "text": "Cancel"},
            "blocks": [
                {
                    "type": "input",
                    "block_id": "my_block",
                    "element": {"type": "plain_text_input", "action_id": "my_action"},
                    "label": {"type": "plain_text", "text": "Say something nice!"},
                },
                {
			"type": "input",
			"element": {
				"type": "checkboxes",
				"options": [
					{
						"text": {
							"type": "plain_text",
							"text": "Gary Danko",
							"emoji": true
						},
						"value": "value-0"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Chipotle",
							"emoji": true
						},
						"value": "value-1"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Slack Cafe",
							"emoji": true
						},
						"value": "value-2"
					}
				]
			},
			"label": {
				"type": "plain_text",
				"text": "Please select all restaurants you'd be willing to eat at:",
				"emoji": true
			}
		}
            ],
        },
    )
    logger.info(res)


# Step 4: The path that allows for your server to receive information from the modal sent in Slack
@app.view("gratitude-modal")
def view_submission(ack, body, client, logger):
    ack()
    logger.info(body["view"]["state"]["values"])
    # Extra Credit: Uncomment out this section
    thank_you_channel = "C02FTPH14SH"
    user_text = body["view"]["state"]["values"]["my_block"]["my_action"]["value"]
    client.chat_postMessage(channel=thank_you_channel, text=user_text)


if __name__ == "__main__":
    app.start(3000)
