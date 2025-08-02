# Animal Shelter React Application

## Overview

This is a front-end React application for an animal shelter, allowing users to filter and adopt pets from a mock API. Users can select an animal type (All, Cats, Dogs, Micropigs), fetch a list of available pets, and mark pets as adopted. The application uses React 18, Vite for the development server, Tailwind CSS for styling, and json-server for a mock API.

## Features

- **Filter Pets**: Select an animal type from a dropdown to filter pets (e.g., Cats, Dogs, Micropigs).
- **Fetch Pets**: Click the "Find pets" button to retrieve pets from the mock API based on the selected type.
- **Adopt Pets**: Click the "Adopt" button on a pet card to mark it as adopted (non-reversible in the UI, resets on page refresh).
- **Responsive Design**: Displays pet cards in a grid layout using Tailwind CSS, responsive across screen sizes.
- **No Persistence**: Adoption status is not saved to the API, so refreshing the page resets all pets to available.

## Project Structure

```
animal-shelter/
├── src/
│   ├── components/
│   │   ├── Filters.jsx
│   │   ├── PetBrowser.jsx
│   │   └── Pet.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
├── db.json
└── README.md
```

- **index.html**: Entry point for the application, loads the Vite-bundled `main.jsx`.
- **src/main.jsx**: Renders the `App` component using React 18's `createRoot`.
- **src/App.jsx**: Main component managing state, fetch logic, and rendering `Filters` and `PetBrowser`.
- **src/components/Filters.jsx**: Handles animal type selection and "Find pets" button.
- **src/components/PetBrowser.jsx**: Displays a grid of pet cards using the `Pet` component.
- **src/components/Pet.jsx**: Renders individual pet cards with name, type, age, weight, gender, and adoption button.
- **src/App.css**: Includes Tailwind CSS directives.
- **vite.config.js**: Configures Vite with React and Tailwind CSS plugins.
- **package.json**: Defines dependencies and scripts.
- **db.json**: Mock API data for json-server.

## Prerequisites

- **Node.js**: Version 18 or later.
- **npm**: Version 8 or later.
- A modern web browser (e.g., Chrome, Firefox).

## Setup Instructions

1. **Clone or Create the Project**:
   - If you have a setup script (`setup_project.sh`), run it to create the project structure:
     ```bash
     chmod +x setup_project.sh
     ./setup_project.sh
     ```
   - Alternatively, manually create the `animal-shelter/` directory and add the files listed above.

2. **Install Dependencies**:
   - Navigate to the project directory:
     ```bash
     cd animal-shelter
     ```
   - Install dependencies:
     ```bash
     npm install
     ```

3. **Verify db.json**:
   - Ensure `db.json` exists in the project root with sample pet data, e.g.:
     ```json
     {
       "pets": [
         { "id": 1, "name": "Whiskers", "type": "cat", "age": 2, "weight": 10, "gender": "female", "isAdopted": false },
         { "id": 2, "name": "Rex", "type": "dog", "age": 3, "weight": 25, "gender": "male", "isAdopted": false },
         { "id": 3, "name": "Pinky", "type": "micropig", "age": 1, "weight": 15, "gender": "female", "isAdopted": false }
       ]
     }
     ```

4. **Run the JSON Server**:
   - Start the mock API:
     ```bash
     npm run server
     ```
   - Verify the API is accessible at `http://localhost:3001/pets` in a browser.

5. **Run the Development Server**:
   - In a separate terminal, start the Vite development server:
     ```bash
     npm start
     ```
   - Open `http://localhost:5173` in a browser to view the application.

## Usage

1. **Filter Pets**:
   - Use the dropdown to select an animal type (All, Cats, Dogs, Micropigs).
   - Click the "Find pets" button to fetch and display pets of the selected type.

2. **Adopt Pets**:
   - Each pet card displays the pet’s name, type, age, weight, and gender (♂ for male, ♀ for female).
   - Click the "Adopt" button to mark a pet as adopted. The button becomes disabled and changes to "Adopted".
   - Adoption status resets on page refresh (no persistence).

3. **Troubleshooting**:
   - If the page is blank, check the browser console (F12 → Console) for