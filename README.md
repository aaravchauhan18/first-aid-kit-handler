# First Aid Kit Handler

First Aid Kit Handler is a web application that allows you to perform CRUD operations on medicines. You can manage your first aid kit by adding, editing, and deleting medicines.

## Features

- Add new medicine: Easily add new medicines to your first aid kit with details such as name, description, quantity, and expiry date.
- Edit medicine: Update the details of existing medicines to keep your first aid kit information up-to-date.
- Delete medicine: Remove medicines that are no longer needed.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **React Router**: Navigation library for React applications.
- **Axios**: HTTP client for making API requests.
- **Bootstrap**: CSS framework for styling the application.
- **Node.js and Express**: Backend framework for handling API requests.
- **MongoDB**: Database for storing medicine information.

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/aaravchauhan18/first-aid-kit-handler.git

2. Go to the project directory

    ```bash
    cd first-aid-kit-handler

3. Install Dependencies

    ```bash
    npm i

4. Start the Application:

    ```bash
    npm start

This will start the development server and open the application in your default web browser.

## Usage

Navigate to the home page to view the list of medicines in your first aid kit.

Click on "Add Medicine" to add a new medicine to the first aid kit.

Click on "Edit" next to a medicine to update its details.

Click on "Delete" to remove a medicine from the first aid kit.

## API Endpoints

The application communicates with a backend API to perform CRUD operations. The API endpoints include:

GET /api/getall: Retrieve all medicines.

GET /api/getone/:id: Retrieve details of a specific medicine.

POST /api/create: Add a new medicine.

PUT /api/update/:id: Update details of a specific medicine.

DELETE /api/delete/:id: Delete a specific medicine.


## License

This project is licensed under the MIT License.

Feel free to contribute and improve this project. Happy coding!

Make sure to replace placeholder URLs and details with your actual project information.
