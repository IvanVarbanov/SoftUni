import extendContext from '../utils/context.js';

export default {
    get: {
        home(context) {
            extendContext(context).then(function () {
                this.partial('./views/home/home.hbs');
            });
        },
    },
};
