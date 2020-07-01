import extendContext from '../utils/context.js';
import models from '../models/index.js';

// models.furniture.getAll().then((response) => {
//     context.furnitures = response.docs.map((d) => {
//         return { ...d.data(), id: d.id };
//     });

//     extendContext(context).then(function () {
//         this.partial('./views/furniture/all.hbs');
//     });
// });

export default {
    get: {
        home(context) {
            extendContext(context).then(function () {
                if (context.isLoggedIn) {
                    models.trek.getAll().then((response) => {
                        context.treks = response.docs
                            .map((d) => {
                                return { ...d.data(), id: d.id };
                            })
                            .sort((x, y) => y.likes - x.likes);

                        this.partial('./views/home/home.hbs');
                    });
                } else {
                    this.partial('./views/home/home.hbs');
                }
            });
        },
    },
};
