const db = firebase.firestore();

export default {
    create(data) {
        return db.collection('teams').add(data);
    },
    edit(id, data) {
        return db.collection('teams').doc(id).update(data);
    },
    getAll() {
        return db.collection('teams').get();
    },
    details(id) {
        return db.collection('teams').doc(id).get();
    },
    delete(id) {
        return db.collection('teams').doc(id).delete();
    },
};
