'use strict';


class Bookmark {
    constructor(url, description) {
        this.url = url;
        this.description = description;
    }
 
    display() {
        console.log(this.url + " " + this.description);
    }

}

module.exports = Bookmark