//Need to chage collection with correct name
const db = firebase.firestore().collection('softwiki');

export default {
    create(data) {
        return db.add(data);
    },
    edit(id, data) {
        return db.doc(id).update(data);
    },
    getAll() {
        return db.get();
    },
    details(id) {
        return db.doc(id).get();
    },
    delete(id) {
        return db.doc(id).delete();
    },
};
