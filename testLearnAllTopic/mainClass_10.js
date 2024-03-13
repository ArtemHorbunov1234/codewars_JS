class Song {
    constructor(title, artist) {
        this.title = title;
        this.artist = artist;
        this.arr = ['123'];
    }

    howMany(array) {
        const count = array
            .map((a) => {
                if (!this.arr.includes(a.toLowerCase())) {
                    this.arr.push(a.toLowerCase());
                    return a.toLowerCase();
                }
            })
            .filter((a) => a !== undefined);

        return count.length;
    }
}

const song = new Song('Artem', 'HG');
console.log(song.howMany(['123', '333', '22']));
