# SpaceX Capsules Web App

A web application to explore SpaceX capsules information.

## Summary

This web application provides information about SpaceX capsules. It allows users to filter capsules by their status and type. Users can click on a capsule to view detailed information, including missions, landings, reuse count, and status.

## Folder Structure

The project folder structure is as follows:

- `public`: Contains the public assets and HTML template file.
- `src`: Source code files for the application.
  - `assets`: Static assets like images, fonts, and icons.
  - `components`: React components used in the application.
    - `Body.jsx`: The main component responsible for displaying the capsules.
    - `Capsule.jsx`: A component to display detailed capsule information in a popup.
    - `Header.jsx`: The header component.
  - `utils`: Utility functions and hooks.
    - `useCapsules.js`: A custom hook to fetch capsule data based on filters.
- `App.css`: Application-specific CSS styles.
- `App.jsx`: The main application component.
- `index.css`: Global CSS styles.
- `main.jsx`: The entry point for the application.
- `.eslintrc.cjs`: ESLint configuration file.
- `.gitignore`: Git ignore file to exclude certain files and folders from version control.
- `README.md`: This file.
- `index.html`: The main HTML template.
- `package-lock.json`: Auto-generated file to manage package dependencies.
- `package.json`: Configuration file for NPM dependencies and scripts.
- `postcss.config.js`: Configuration for PostCSS.
- `tailwind.config.js`: Configuration for Tailwind CSS.
- `vite.config.js`: Configuration for the Vite development server.

## Deployed Link

The application is deployed on Netlify and can be accessed at [https://spacex-arijit-react.netlify.app/](https://spacex-arijit-react.netlify.app/).

## Libraries Used

This project is built using various libraries and tools, including:

- React: A JavaScript library for building user interfaces.
- Tailwind CSS: A utility-first CSS framework.
- Vite: A fast development build tool.
- ESLint: A linting tool for identifying and fixing code errors.
- Netlify: A hosting and automation service for web projects.

## Usage

To run the project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies with `npm install`.
4. Start the development server with `npm run dev`.

The application should be accessible at `http://localhost:3000`.

## License

This project is open source and available under the [MIT License](LICENSE).

---

Feel free to contribute or report issues. Enjoy exploring SpaceX capsules data!
