<img src="https://raw.githubusercontent.com/jkomyno/jkomyno.github.io/source/images/banner.jpg" alt="jkomyno banner" align="center" />
<br />

<div align="center">
  <!-- Dependency Status -->
  <a href="https://david-dm.org/jkomyno/jkomyno.github.io">
    <img src="https://david-dm.org/jkomyno/jkomyno.github.io.svg" alt="Dependency Status" />
  </a>
  <!-- devDependency Status -->
  <a href="https://david-dm.org/jkomyno/jkomyno.github.io#info=devDependencies">
    <img src="https://david-dm.org/jkomyno/jkomyno.github.io/dev-status.svg" alt="devDependency Status" />
  </a>
  <!-- Build Status -->
  <a href="https://travis-ci.org/jkomyno/jkomyno.github.io">
    <img src="https://travis-ci.org/jkomyno/jkomyno.github.io.svg?branch=source" alt="Build Status" />
  </a>
</div>

<div align="center">
  <sub>Created by <a href="https://github.com/jkomyno">Alberto Schiabel</a> with ❤️.</sub>
</div>

## Description

This is my personal web page, built with ReactJS, Bulma and SCSS.

## Features

- **Completely written in modern Typescript**: this ensure type safety, and overall offers a better developer experience
- **Based on create-react-app**: this is the de-facto way to go to create a new ReactJS web application
- **Adopts new ReactJS 16 features**:
  - [React.Portal](https://reactjs.org/docs/portals.html) has been used to display the navbar outside of the root `<div />`
  - [React.Context](https://reactjs.org/docs/context.html) has been used to share common data with multiple containers,
  without forcing nested prop passing
- **Based on Bulma**: this new CSS framework is quickly expanding in popularity, and it allows to import and override only the needed SASS packages, with absolute ease. Take a look at [override.scss](https://github.com/jkomyno/jkomyno.github.io/blob/source/src/override.scss)
- **Modularity**: every different section resides in a different [page component](https://github.com/jkomyno/jkomyno.github.io/tree/source/src/pages), the layout structure is defined in a set of [separated classes](https://github.com/jkomyno/jkomyno.github.io/tree/source/src/layouts) and the custom [UI elements](https://github.com/jkomyno/jkomyno.github.io/tree/source/src/components) are extremely composable and reusable
- **Offline-first**: this website has been designed primarily to be viewed on vertical and mobile devices, and then adapted for desktop monitors
- **SVG components**: every image rendered in this website is a React Component that renders an SVG
- **Automatic deploy** to [https://jkomyno.github.io](https://jkomyno.github.io), thanks to [Travis CI](https://travis-ci.org/) and [Github Pages](https://pages.github.com/). Take a look at [deploy.sh](deploy.sh)

### Scripts

The following scripts are the main ones defined in [package.json](package.json), and as always, they can be executed via `npm run $SCRIPT_NAME` or `yarn $SCRIPT_NAME`.

    "start-js": "react-scripts-ts start",
    "start": "npm-run-all -p watch-css start-js",
    "build-js": "react-scripts-ts build",
    "build": "npm-run-all build-css build-js",
    "postbuild": "npm run clear-css",
    "test": "react-scripts-ts test --env=jsdom",
    "eject": "react-scripts-ts eject",
    "build-css": "node-sass-chokidar src/ -o src/ --output-style compressed",
    "watch-css": "node-sass-chokidar src/ -o src/ -w --source-map true --source-map-contents sass",
    "predeploy": "npm run build",
    "deploy": "bash ./deploy.sh",
    "clear-css": "find ./src -name *.css -type f -delete"

#### `start`

> spawns the app in development mode at `http://localhost:3000` and enables Hot Reload for Typescript and SCSS files

-   `start-js` - executes the original `start` script from `create-react-app`, which enabled Hot Reload
-   `watch-css` - transpiles .scss files into .css files every time they are edited and saved

#### `build`

> traspiles .ts files and .scss files into .js and .css files, creating the proper bundles in the `build/` folder

-   `build-js` - executes the original `build` script from `create-react-app`
-   `build-css` - transpiles .scss files into .css minified files
-   `clear-css` - deletes every .css file, leaving only the original .scss sources
-   `postbuild` - after executing the `build` script, every composed CSS will be deleted. This is useful to avoid garbage in the deploy process

#### `deploy`

> manually deploys the React application to Github Pages. This requires and environment variable named `$GITHUB_TOKEN` that
must have a valid Github personal token assigned. This is the same exact script that gets executed by Travis CI after a successful build.

## Contributing

Since this is my personal home page, I won't accept any Pull Request, unless:

- you find a typo somewhere
- you want to help creating UI tests with Jest

If you want to contribute but you don't know where to start from, ★ stars are more than helpful.

## Related packages

- [react-matrix-text](https://github.com/jkomyno/react-matrix-text) ReactJS component that splits and renders a text in a given number of columns.
