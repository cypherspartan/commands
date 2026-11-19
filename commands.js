window.STREAM_COMMANDS = [
  {
    "name": "!lurk",
    "category": "Chat",
    "description": "Let chat know you're stepping away while still supporting the stream.",
    "usage": "!lurk",
    "platforms": [
      "Twitch",
      "Kick",
      "YouTube",
      "Rumble"
    ],
    "permission": "Everyone",
    "cooldown": "Set in Streamer.bot"
  },
  {
    "name": "!unlurk",
    "category": "Chat",
    "description": "Let chat know you're back from lurking.",
    "usage": "!unlurk",
    "platforms": [
      "Twitch",
      "Kick",
      "YouTube",
      "Rumble"
    ],
    "permission": "Everyone",
    "cooldown": "Set in Streamer.bot"
  },
  {
    "name": "!so",
    "category": "Chat",
    "description": "Shout out another creator in chat.",
    "usage": "!so @username",
    "platforms": [
      "Twitch",
      "Kick",
      "YouTube",
      "Rumble"
    ],
    "permission": "Everyone or configured role",
    "cooldown": "Set in Streamer.bot"
  },
  {
    "name": "!gamble",
    "category": "Points",
    "description": "Wager some of your platform-specific points.",
    "usage": "!gamble <amount>",
    "platforms": [
      "Twitch",
      "Kick",
      "YouTube"
    ],
    "permission": "Everyone",
    "cooldown": "Set in Streamer.bot"
  },
  {
    "name": "!slots",
    "category": "Games",
    "description": "Play the chat slots game using your points.",
    "usage": "!slots <amount>",
    "platforms": [
      "Twitch",
      "Kick",
      "YouTube"
    ],
    "permission": "Everyone",
    "cooldown": "Set in Streamer.bot"
  },
  {
    "name": "!givepoints",
    "category": "Points",
    "description": "Give points to another viewer, subject to your configured permissions and limits.",
    "usage": "!givepoints @username <amount>",
    "platforms": [
      "Twitch",
      "Kick",
      "YouTube"
    ],
    "permission": "Configured role",
    "cooldown": "Set in Streamer.bot"
  },
  {
    "name": "!highlight",
    "category": "Stream",
    "description": "Mark a moment in the stream and optionally give it a title.",
    "usage": "!highlight 1min title",
    "platforms": [
      "Twitch",
      "YouTube",
      "Kick"
    ],
    "permission": "Configured role",
    "cooldown": "Set in Streamer.bot"
  },
  {
    "name": "!sprites",
    "category": "Fortnite",
    "description": "Check your Fortnite sprite collection. Use the owned or missing subcommand.",
    "usage": "!sprites owned  \u2022  !sprites missing",
    "platforms": [
      "Twitch",
      "Kick",
      "YouTube"
    ],
    "permission": "Everyone",
    "cooldown": "Set in Streamer.bot"
  },
  {
    "name": "!drop",
    "category": "Fortnite",
    "description": "Choose a Fortnite map mode for a drop location.",
    "usage": "!drop br",
    "platforms": [
      "Twitch",
      "Kick",
      "YouTube"
    ],
    "permission": "Everyone",
    "cooldown": "Set in Streamer.bot"
  }
];
