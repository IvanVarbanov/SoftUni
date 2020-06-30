import extendContext from '../utils/context.js';
import models from '../models/index.js';

export default {
    get: {
        all(context) {
            models.furniture.getAll().then((response) => {
                context.furnitures = response.docs.map((d) => {
                    return { ...d.data(), id: d.id };
                });

                extendContext(context).then(function () {
                    this.partial('./views/furniture/all.hbs');
                });
            });
        },
        create(context) {
            extendContext(context).then(function () {
                this.partial('./views/furniture/create.hbs');
            });
        },
        details(context) {
            models.furniture.details(context.params.furnitureID).then((response) => {
                context.furniture = response.data();
                extendContext(context).then(function () {
                    this.partial('./views/furniture/details.hbs');
                });
            });
        },
        delete(context) {
            models.furniture.delete(context.params.furnitureID).then((response) => {
                context.redirect('#/mine-furtniture');
            });
        },
        mine(context) {
            models.furniture.getAll().then((response) => {
                context.furnitures = response.docs
                    .map((d) => {
                        return { ...d.data(), id: d.id };
                    })
                    .filter((x) => x.userID === localStorage.userID);

                extendContext(context).then(function () {
                    this.partial('./views/furniture/mine.hbs');
                });
            });
        },
    },

    post: {
        create(context) {
            const data = {
                ...context.params,
                userID: localStorage.userID,
            };

            models.furniture.create(data).then(() => {
                context.redirect('#/all-furtniture');
            });
        },
    },
};
