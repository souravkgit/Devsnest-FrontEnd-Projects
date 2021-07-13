var library = [{ title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];
var k;
var count = 0;
while (true) {
    count = 0;
    for (var i = 1; i < library.length; i++) {
        if (library[i].libraryID > library[i - 1].libraryID) {
            k = library[i]
            library[i] = library[i - 1]
            library[i - 1] = k
            count += 1
        }
    }
    if (count == 0) {
        break;
    }
}
console.log(library)