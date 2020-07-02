import extendContext from '../utils/context.js';
import models from '../models/index.js';

export default {
    get: {
        create(context) {
            extendContext(context).then(function () {
                this.partial('./views/article/create.hbs');
            });
        },
        details(context) {
            models.article.details(context.params.articleId).then((response) => {
                extendContext(context).then(function () {
                    context.article = { ...response.data(), id: response.id };

                    context.isAuthor = context.article.creator === sessionStorage.username;

                    this.partial('./views/article/details.hbs');
                });
            });
        },
        edit(context) {
            extendContext(context).then(function () {
                this.partial('./views/article/edit.hbs');
            });
        },
        delete(context) {
            models.article.delete(context.params.articleId).then((response) => {
                context.redirect('#/home');
            });
        },
    },
    post: {
        create(context) {
            const data = {
                ...context.params,
                creator: sessionStorage.username,
            };

            models.article.create(data).then(() => {
                context.redirect('#/home');
            });
        },
        edit(context) {
            const id = context.params.articleId;
            const data = {};

            if (context.params.title) {
                data.title = context.params.title;
            }

            if (context.params.category) {
                data.category = context.params.category;
            }

            if (context.params.content) {
                data.content = context.params.content;
            }

            if (Object.keys(data).length === 0) {
                console.error('Need some data to make edit!');
            } else {
                models.article.edit(id, data).then(() => {
                    context.redirect(`#/details/${id}`);
                });
            }
        },
    },
};
