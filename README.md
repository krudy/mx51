# mx51
A simple ordering application using react and electron

## Installation

I am using [yarn](https://yarnpkg.com/) as my package manager

```bash
npm install --global yarn
```

You can install dependencies running

```bash
yarn
```

## Scripts

```bash
"scripts": {
    "start": "webpack-dev-server --mode development",
    "electron-start": "electron ."
  },
```

You will have to run `yarn start` and then `yarn electron-start` to run the project

## What I would change
Given time restraints I wasn't able to add all the features in as I would have liked

* The biggest one is I couldn't implement the rest api using electron. I started work on it in the `post-request` branch
* I would have cleaned up the styles
* Added in unit testing.
* Split the code and made proper components
