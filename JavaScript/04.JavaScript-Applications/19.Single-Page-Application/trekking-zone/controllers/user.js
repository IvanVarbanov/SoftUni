import extendContext from '../utils/context.js';
import models from '../models/index.js';

export default {
    get: {
        registration(context) {
            extendContext(context).then(function () {
                this.partial('./views/user/registration.hbs');
            });
        },
        login(context) {
            extendContext(context).then(function () {
                this.partial('./views/user/login.hbs');
            });
        },
        logout(context) {
            models.user
                .logout()
                .then(function () {
                    context.redirect('#/home');
                })
                .catch(function (error) {
                    console.error(error);
                });
        },
        profile(context) {
            extendContext(context).then(function () {
                models.trek.getAll().then((response) => {
                    context.treks = response.docs
                        .map((d) => {
                            return { location: d.data().location, organizer: d.data().organizer };
                        })
                        .filter((x) => x.organizer === sessionStorage.username);

                    console.log(context.treks);

                    this.partial('./views/user/profile.hbs');
                });
            });
        },
    },

    post: {
        registration(context) {
            const { email, password, repeatPassword } = context.params;
            if (password === repeatPassword) {
                models.user
                    .register(email, password)
                    .then(function () {
                        context.redirect('#/home');
                    })
                    .catch(function (error) {
                        // Handle Errors here.
                        let errorCode = error.code;
                        let errorMessage = error.message;
                        console.log(errorCode);
                        console.log(errorMessage);
                        // ...
                    });
            } else {
                console.error('Passwords need to be the same!');
            }
        },
        login(context) {
            const { email, password } = context.params;
            models.user
                .login(email, password)
                .then(function () {
                    context.redirect('#/home');
                })
                .catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode);
                    console.log(errorMessage);
                    // ...
                });
        },
    },
};
