# README

## Setup

1. Clone the repo.
2. `cd` into the project directory.
3. Run `gem install bundler jekyll`.
4. To start server run `bundle exec jekyll s --watch`.
5. In browser, go to `localhost:4000`.


## Adding Articles

1. Create a new file in `_posts`.
2. Rename it to `YYYY-MM-DD-<post-name>.markdown`.
3. Add the following to the top of the page

    ---
    layout: post
    title:  "Post Name"
    date:   2019-01-31 14:19:36
    categories: categories separated by 
    image:  "woke_icons3"
    origin:  "Engadget"
    abcd: "https://www.engadget.com/"
    ---
    This is test post 1.
