# SPA skeleton with Sammy, Handlebars and Firebase

## NPM Dependencies

-   Handlebars
-   jQuery
-   Sammy

## Database

-   Firebase

    -   Create a web app and add 'Firebase SDK snippet' in './config/firebase.js'
    -   In Authentication > Sign-in method > Email/Password need to be Enabled
    -   Make database type 'Cloud Firestore'
    -   In Database > Rules add

        `// Allow read/write access on all documents to any user signed in to the application

        service cloud.firestore { match /databases/{database}/documents { match /{document=\*\*} { allow read, write: if request.auth != null; } } }`

## Server

-   Live server for vs code with default configuration
