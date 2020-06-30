export default function (context) {
    //Uncoment this after add "web app's Firebase configuration" and "Initialize Firebase" in config/firebase.js
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            sessionStorage.setItem('userID', user.uid);
            sessionStorage.setItem('username', user.email);
            context.username = user.email;
            context.userID = user.uid;
            context.isloggedIn = true;
        } else {
            // User is signed out.
            sessionStorage.removeItem('userID');
            sessionStorage.removeItem('username');
        }
    });

    return context.loadPartials({
        header: './views/common/header.hbs',
        footer: './views/common/footer.hbs',
    });
}
