function songs(array = []) {
    let numberOfSongs = array.shift();
    let songList = [];

    class Song {
        constructor(typeSong, name, time) {
            this.typeSong = typeSong; //вида песен
            this.name = name;
            this.time = time;
        }
    }

    for (let i = 0; i < numberOfSongs; i++) {
        let songData = array.shift().split("_");

        let typeSong, name, time;
        [typeSong, name, time] = [songData[0], songData[1], songData[2]];

        songList.push(new Song(typeSong, name, time));
    }

    let typeList = array.shift();

    for (const key of songList) {
        if (key.typeSong == typeList) {
            console.log(key.name);
        } else if (typeList == "all") {
            console.log(key.name);
        }
    }
}

songs([3, "favourite_DownTown_3:14", "favourite_Kiss_4:16", "favourite_Smooth Criminal_4:01", "favourite"]);
console.log();
songs([
    4,
    "favourite_DownTown_3:14",
    "listenLater_Andalouse_3:24",
    "favourite_In To The Night_3:58",
    "favourite_Live It Up_3:48",
    "listenLater"
]);
console.log();
songs([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
