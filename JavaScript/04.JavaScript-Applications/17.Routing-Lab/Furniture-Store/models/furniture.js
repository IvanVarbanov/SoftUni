const db = firebase.firestore();

export default {
    create(data) {
        return db.collection('furnitures').add(data);
    },
    getAll() {
        return db.collection('furnitures').get();
    },
    details(id) {
        return db.collection('furnitures').doc(id).get();
    },
    delete(id) {
        return db.collection('furnitures').doc(id).delete();
    },
};
