import extendContext from '../utils/context.js';
import models from '../models/index.js';

export default {
    get: {
        create(context) {
            extendContext(context).then(function () {
                this.partial('./views/trek/create.hbs');
            });
        },
        details(context) {
            models.trek.details(context.params.trekId).then((response) => {
                context.trek = { ...response.data(), trekId: response.id };

                context.canCRUD = context.trek.organizer === sessionStorage.username;
                context.canLike = context.trek.organizer !== sessionStorage.username;
                extendContext(context).then(function () {
                    this.partial('./views/trek/details.hbs');
                });
            });
        },
        edit(context) {
            extendContext(context).then(function () {
                this.partial('./views/trek/edit.hbs');
            });
        },
        delete(context) {
            models.trek.delete(context.params.trekId).then((response) => {
                context.redirect('#/home');
            });
        },
        like(context) {
            console.log(context.params);

            models.trek.details(context.params.trekId).then((response) => {
                extendContext(context).then(function () {
                    const data = {
                        likes: response.data().likes + 1,
                    };

                    models.trek.edit(context.params.trekId, data).then(() => {
                        context.redirect(`#/details/${context.params.trekId}`);
                    });
                });
            });
        },
    },
    post: {
        create(context) {
            const data = {
                ...context.params,
                organizer: sessionStorage.username,
                likes: 0,
            };

            models.trek.create(data).then(() => {
                context.redirect('#/home');
            });
        },
        edit(context) {
            const id = context.params.trekId;
            const data = {};

            if (context.params.location) {
                data.location = context.params.location;
            }
            if (context.params.imageURL) {
                data.imageURL = context.params.imageURL;
            }
            if (context.params.description) {
                data.description = context.params.description;
            }
            if (context.params.dateTime) {
                data.dateTime = context.params.dateTime;
            }

            if (Object.keys(data).length === 0) {
                console.error('Need some data to make edit!');
            }

            models.trek.edit(id, data).then(() => {
                context.redirect(`#/details/${id}`);
            });
        },
    },
};
