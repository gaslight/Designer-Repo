# README

## Setup

1. Clone the repo.
2. `cd` into the project directory.
3. Run `gem install jekyll bundler ` to install Jekyll and bundler gems.
4. To start server run `bundle exec jekyll s --watch` .
5. In browser, go to `localhost:4000`.


## GDR-bot

The GDR bot has been added to this branch. It's functional standalone, but we're
trying to get it up and running alongside the repo so as to streamline things.

Currently the bot is running in npm. If you want to get it to run separately

1. Make a new directory. `mkdir <new root name>`.
2. cd into the new root.
3. Run `npm install discord.js`.
4. Copy GDR-bot.js from the assets folder into the new root directory.
5. Run `node GDR-bot` in the terminal.
