# GRIT-react-components

This package contains React components and styles that will be common to applications and websites developed by Graduate and Research Information Technology at the University of Central Florida.

## Installation

Install this package using npm: `npm install --save ORC-RIS/grit-react-components`.

### Include CSS

Import the css file from `/dist/css/` into your react project.

### Using SASS files

If including the `style.scss` file from `/src` generates an error where fonts cannot be found, see `src/scss/theme.scss` to see how to change the path to fonts.

## Development

To develop this package locally, complete the following:

1. Clone this repository into your project's parent directory.
2. Enter the project directory and run `npm link ../grit-react-components`
3. Enter the `grit-react-components` directory and run `npm install`, then `npm link ../PROJECT_DIR/react`.

### Available Scripts

In the project directory, you can run:

#### `npm run compile`

Builds to the `dist` folder.

#### `npm run storybook`

Launches storybook.