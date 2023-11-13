# Resume Website

This project is a modern React website designed with Material Design 3. It serves as a personal resume website, featuring a navigation bar on the left and markdown-rendered content on the right.

## Features

- Material Design 3 aesthetics
- Responsive navigation bar
- Markdown content rendering
- Clean and modern UI

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js
- npm
```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo
```sh
git clone https://github.com/your_username_/Project-Name.git
```
2. Install NPM packages
```sh
npm install
```

### Development

To start the development server:

```sh
npm start
```

This will run the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

To build the app for production to the `build` folder:

```sh
npm run build
```

## Structure

The project's file structure is as follows:

- `package.json` - Contains the list of project dependencies and build scripts.
- `public/index.html` - The entry HTML file that includes links to stylesheets and scripts.
- `src/index.js` - The JavaScript entry point for React, setting up the theme and rendering the App component.
- `src/App.js` - The main React component that sets up the layout of the website.
- `src/components/Navbar.js` - The navigation bar component.
- `src/components/Content.js` - The component responsible for rendering the markdown content.
- `src/styles/main.css` - The main stylesheet for the website.
- `src/utils/markdownParser.js` - A utility to parse markdown content (not shown in snippets).
- `src/resume.md` - The markdown file containing the resume content.
- `README.md` - This file, containing documentation for the project.
- `.gitignore` - Specifies intentionally untracked files to ignore.

## Dependencies

- React
- Material-UI
- Emotion
- markdown-to-jsx
- React Router DOM

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - [@your_twitter](https://twitter.com/your_twitter) - email@example.com

Project Link: [https://github.com/your_username_/resume-website](https://github.com/your_username_/resume-website)

