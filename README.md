# Quantaleap Documentation

Repository for Quantaleap's public documentation site. The official site for our latest news, blog posts, and documentation for our platform tools.

## How To Run Tests

In order to make sure your changes have not broken anything, you can run the following commands before pushing your changes to gitHub.

```sh
npm install
npm test
```

### How to Run Locally

1. Clone this repository: `git clone "https://github.com/quantaleap/quantaleap-docs.git"`
2. Run the commands :
    - `npm install`
    - `npm run docusaurus:build`
    - `npm run docusaurus:serve`
3. The site will be running locally on `http://localhost:3000`

### How To Contribute

1. Clone this repository
2. Create your documentation branch: `git checkout -b branch-name`
3. Make changes to the documentation in markdown
4. Commit your changes using the command `git commit -m 'commit message'`
5. Push your changes to GitHub `git push origin branch-name`
6. Create new Pull Request
