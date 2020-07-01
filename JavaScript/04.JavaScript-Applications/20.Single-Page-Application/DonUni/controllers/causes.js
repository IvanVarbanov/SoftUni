import extendContext from '../utils/context.js';
import models from '../models/index.js';

export default {
    get: {
        dashboard(context) {
            models.causes.getAll().then((response) => {
                context.causes = response.docs.map((x) => {
                    return { ...x.data(), id: x.id };
                });

                extendContext(context).then(function () {
                    this.partial('./views/causes/dashboard.hbs');
                });
            });
        },
        details(context) {
            models.causes.details(context.params.causeId).then((response) => {
                extendContext(context).then(function () {
                    context.cause = { ...response.data(), id: response.id };

                    context.isAuthor = context.cause.creator === sessionStorage.username;

                    this.partial('./views/causes/details.hbs');
                });
            });
        },
        create(context) {
            extendContext(context).then(function () {
                this.partial('./views/causes/create.hbs');
            });
        },
        delete(context) {
            models.causes.delete(context.params.causeId).then((response) => {
                context.redirect('#/dashboard');
            });
        },
    },
    post: {
        create(context) {
            const data = {
                ...context.params,
                creator: sessionStorage.username,
                donors: [],
                collectedFunds: 0,
            };

            models.causes.create(data).then(() => {
                context.redirect('#/dashboard');
            });
        },
        donate(context) {
            models.causes.details(context.params.causeId).then((response) => {
                extendContext(context).then(function () {
                    let donors = [...response.data().donors];
                    if (!donors.includes(context.username)) {
                        donors.push(context.username);
                    }
                    const data = {
                        donors: donors,
                        collectedFunds: response.data().collectedFunds + Number(context.params.currentDonation),
                    };

                    models.causes.edit(context.params.causeId, data).then(() => {
                        context.redirect(`#/details/${context.params.causeId}`);
                    });
                });
            });
        },
    },
};
