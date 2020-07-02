import extendContext from '../utils/context.js';
import models from '../models/index.js';

export default {
    get: {
        home(context) {
            models.article.getAll().then((response) => {
                context.article = response.docs.map((x) => {
                    return { ...x.data(), id: x.id };
                });

                context.sortedArticles = {};

                [...context.article].forEach((x) => {
                    if (context.sortedArticles[x.category]) {
                        context.sortedArticles[x.category].push(x);
                        if (sessionStorage.username) {
                            context.sortedArticles[x.category] = context.sortedArticles[x.category].sort((x, y) =>
                                x.title.localeCompare(y.title)
                            );
                        }
                    } else {
                        context.sortedArticles[x.category] = [x];
                    }
                });

                extendContext(context).then(function () {
                    this.partial('./views/home/home.hbs');
                });
            });
        },
    },
};
