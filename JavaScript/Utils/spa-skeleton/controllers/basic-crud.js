import extendContext from '../utils/context.js';
import models from '../models/index.js';

export default {
    get: {
        catalog(context) {
            models.team.getAll().then((response) => {
                context.teams = response.docs.map((x) => {
                    return { ...x.data(), _id: x.id };
                });

                extendContext(context).then(function () {
                    this.partial('./views/team/all.hbs');
                });
            });
        },
        create(context) {
            extendContext(context).then(function () {
                this.partial('./views/team/create.hbs');
            });
        },
        details(context) {
            models.team.details(context.params.teamId).then((response) => {
                extendContext(context).then(function () {
                    context.team = { ...response.data(), teamId: response.id };

                    context.isAuthor = context.team.creator === sessionStorage.username;
                    context.isOnTeam = context.team.members.includes(sessionStorage.username);

                    this.partial('./views/team/details.hbs');
                });
            });
        },
        editTeam(context) {
            extendContext(context).then(function () {
                this.partial('./views/team/edit.hbs');
            });
        },
        joinTeam(context) {
            models.team.details(context.params.teamId).then((response) => {
                extendContext(context).then(function () {
                    const data = {
                        members: [...response.data().members, context.username],
                    };

                    models.team.edit(context.params.teamId, data).then(() => {
                        context.redirect(`#/catalog/${context.params.teamId}`);
                    });
                });
            });
        },
        leaveTeam(context) {
            models.team.details(context.params.teamId).then((response) => {
                extendContext(context).then(function () {
                    const data = {
                        members: [...response.data().members].filter((x) => x !== context.username),
                    };

                    models.team.edit(context.params.teamId, data).then(() => {
                        context.redirect(`#/catalog/${context.params.teamId}`);
                    });
                });
            });
        },
        delete(context) {
            models.trek.delete(context.params.trekId).then((response) => {
                context.redirect('#/home');
            });
        },
    },
    post: {
        create(context) {
            const data = {
                ...context.params,
                creator: sessionStorage.username,
                members: [sessionStorage.username],
            };

            models.team.create(data).then(() => {
                context.redirect('#/catalog');
            });
        },
        editTeam(context) {
            const id = context.params.teamId;
            const data = {};

            if (context.params.name) {
                data.name = context.params.name;
            }

            if (context.params.comment) {
                data.comment = context.params.comment;
            }

            if (Object.keys(data).length === 0) {
                console.error('Need some data to make edit!');
            }

            models.team.edit(id, data).then(() => {
                context.redirect(`#/catalog/${id}`);
            });
        },
    },
};
