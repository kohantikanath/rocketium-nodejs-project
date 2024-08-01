# Hello! This is a Node.js Express API Project

## About the Project:
This project is all about creating a Node.js API built with Express, featuring data serving, filtering, and sorting capabilities. It's designed to demonstrate basic backend functionality and API design principles.

## 🚀 Features
- Express server setup
- API endpoint for serving JSON data
- Data filtering and sorting functionality
- Environment variable configuration
- Automated data fetching script

### 1. Express Server:
- Utilizes Express.js for efficient routing and middleware support
- Implements RESTful API principles for intuitive endpoint design

### 2. Data Management:
- Includes data filtering and sorting capabilities for enhanced query flexibility
- Features an automated script for fetching and updating data

## 📋 Prerequisites

- Node.js (v12.0.0 or higher)
- npm (usually comes with Node.js)

## 🛠 Installation Instructions
Follow these steps to set up and run the project locally:

1. Clone the repository:
```bash
git clone https://github.com/yourusername/nodejs-project.git
cd nodejs-project
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
- Copy `.env.example` to `.env`
- Modify `.env` with your specific configuration

4. Start the server:
```bash
npm start
```

For development with auto-restart:
```bash
npm run dev
```

To fetch/update data:
```bash
npm run get-data
```

## 📁 Project Structure
```
nodejs-project/
├── node_modules/
├── src/
│   ├── controllers/
│   │   └── index.js
│   ├── data/
│   │   ├── dummyData.json
│   │   └── fetchData.js
│   ├── routes/
│   │   └── api.js
│   └── server.js
├── .env
├── .env.example
├── .gitignore
├── LICENSE
├── package-lock.json
├── package.json
└── README.md
```
### 🔐 Environment Variables

- This project uses dotenv for managing environment variables. To set up:
    - Copy `.env.example` to `.env`
    - Edit `.env` and add your specific configuration variables:

### ⚠️ Never commit your `.env` file to version control!

## 🔄 Nodemon

- Nodemon is a utility that monitors for any changes in your source and automatically restarts your server. This is used in the development script:

```json
"dev": "nodemon src/server.js"
```

## Dependencies
- **express**: Fast, unopinionated, minimalist web framework for Node.js
- **axios**: Promise based HTTP client for the browser and Node.js
- **dotenv**: Loads environment variables from a .env file
- **nodemon**: Utility that monitors for any changes in your source and automatically restarts your server

## API Endpoints
- `GET /api/data`: Retrieve data
  - Query Parameters:
    - `filter`: Filter data (e.g., `?filter=field:value`)
    - `sort`: Sort data (e.g., `?sort=field:desc`)

## License
This project is [ISC](https://opensource.org/licenses/ISC) licensed.

## Acknowledgements
- [Express.js](https://expressjs.com/)
- [Axios](https://axios-http.com/)
- [Dotenv](https://github.com/motdotla/dotenv)
- [Nodemon](https://nodemon.io/)

