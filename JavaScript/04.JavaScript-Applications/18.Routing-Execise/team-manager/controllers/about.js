import extendContext from '../utils/context.js';

export default {
    get: {
        about(context) {
            extendContext(context).then(function () {
                this.partial('./views/about/about.hbs');
            });
        },
    },
};
