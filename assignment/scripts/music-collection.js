console.log('***** Music Collection *****')

//Creating a variable
let collection = [];

//Creating a function
function addToCollection(title, artist, yearPublished) {
  let album = {
    title = title,
    artist = artist,
    yearPublished = yearPublished
  }
  collection.push(album);
}
