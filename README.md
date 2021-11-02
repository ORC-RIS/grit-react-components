# GRIT-react-components

This package contains React components and styles that will be common to applications and websites developed by Graduate and Research Information Technology at the University of Central Florida.

## Installation

Install the latest version of this package using npm: `npm install ORC-RIS/grit-react-components`.

You can also use tags to specify versions.

### Include CSS

Import the css file from `/dist/css/` into your React project.

### Using SASS files

If including the `style.scss` file from `/src` generates an error where fonts cannot be found, see `src/scss/theme.scss` to see how to change the path to fonts.

## Development

1. Clone this repository.
2. Switch to `develop` branch.
2. Enter the directory and run `npm run dev` to start storybook

### Available Scripts

In the project directory, you can run:

#### `npm run dev`

Launches storybook and a watcher to compile the files as you develop.

#### `npm run compile`

Builds to the `dist` folder.

#### `npm run storybook`

Launches storybook by itself without compiling.