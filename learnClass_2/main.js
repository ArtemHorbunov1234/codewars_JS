class Song {
    constructor(title, artist) {
        this.title = title;
        this.artist = artist;
        this.listeners = new Set();
    }

    howMany(names) {
        let filterName = names.map((name) => name.toLowerCase());
        filterName = [...new Set(filterName)];
        const uniqueListeners = filterName
            .map((name) => name.toLowerCase())
            .filter((name) => !this.listeners.has(name));

        uniqueListeners.forEach((name) => this.listeners.add(name));

        return uniqueListeners.length;
    }
}

let mountMoose = new Song('Mount Moose', 'The Snazzy Moose');
console.log(mountMoose.howMany(['John', 'carl']));
console.log(mountMoose.howMany(['Fred']));
console.log(mountMoose.howMany(['Jack', 'jacK']));
