export default function (context) {
    //Uncoment this after add web app's Firebase configuration and Initialize Firebase in .../config/firebase.js
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            localStorage.setItem('userID', user.uid);
            localStorage.setItem('username', user.email);
            context.username = user.email;
            context.userID = user.uid;
            context.isLoggedIn = true;
        } else {
            // User is signed out.
            localStorage.removeItem('userID');
            localStorage.removeItem('username');
        }
    });

    return context.loadPartials({
        header: './views/common/header.hbs',
        footer: './views/common/footer.hbs',
    });
}
