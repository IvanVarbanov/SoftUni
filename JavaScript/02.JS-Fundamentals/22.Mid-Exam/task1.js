function factory(array = []) {
    let biscitsPerWorker = array.shift();
    let numOfWorkers = array.shift();
    let compare = array.shift();

    let mounthProduction =
        20 * Math.trunc(biscitsPerWorker * numOfWorkers) + 10 * Math.trunc(biscitsPerWorker * 0.75 * numOfWorkers);
    let diff = Math.abs(mounthProduction - compare);
    let diffInProcents = ((diff / compare) * 100).toFixed(2);

    console.log(`You have produced ${mounthProduction} biscuits for the past month.`);

    if (mounthProduction > compare) {
        console.log(`You produce ${diffInProcents} percent more biscuits.`);
    } else {
        console.log(`You produce ${diffInProcents} percent less biscuits.`);
    }
}

factory(["78", "8", "16000"]);
