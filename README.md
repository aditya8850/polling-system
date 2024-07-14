# Polling System API
This is an API-based polling system implemented using Node.js, Express, MongoDB, and Socket.IO.

## Features
##### Create questions with options
##### Add votes to options
##### Real-time updates using Socket.IO
##### Scalable folder structure
###### Error handling

## Folder Structure
```bash
project-root/
│
├── src/
│   ├── config/
│   │   └── db.config.js
│   │
│   ├── controllers/
│   │   ├── option controller/
│   │   │    └── option.controller.js
│   │   │
│   │   └── question controller/
│   │        └── question.controller.js
│   │
│   ├── models/
│   │   ├── option model/
│   │   │    ├── option.model.js
│   │   │    └── option.schema.js
│   │   │
│   │   └── question model/
│   │        ├── question.model.js
│   │        └── question.schema.js
│   │
│   └── routes/
│       ├── options.routes.js
│       └── questions.routes.js
│
├── app.js
├── package.json
└── README.md
```
## Setup Instructions
1. Clone the repo to your local machine
```bash git clone https://github.com/arshali2774/Polling_System_API_CN ```
2. Navigate to the project dir
```bash cd Polling_System_API_CN ```
3. Install Dependencies
```bash npm i ```
4. Start the server
```bash node app.js```

## Usage
Use Postman or any API testing tool to interact with the endpoints. Socket.IO is integrated for real-time updates. Clients will receive updates when questions, options, or votes are created.

## API Endpoints:
[Postman Api Collection](https://cn5555.postman.co/workspace/New-Team-Workspace~6f759a9f-6e91-4878-b312-f4d3830c23d9/collection/34577317-8fe32469-4475-4d8c-8717-25a83b2587d1?action=share&creator=34577317)
