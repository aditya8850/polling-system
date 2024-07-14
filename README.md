#Polling System API
This is an API-based polling system implemented using Node.js, Express, MongoDB, and Socket.IO.

##Features
#####Create questions with options
#####Add votes to options
#####Real-time updates using Socket.IO
#####Scalable folder structure
######Error handling

##Folder Structure
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
