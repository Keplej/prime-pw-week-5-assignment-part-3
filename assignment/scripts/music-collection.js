console.log('***** Music Collection *****')

//Creating a variable
let collection = [];

//Creating a function
function addToCollection(title, artist, yearPublished) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
  collection.push(album);
  return album;
}
//Adding music to test
console.log(addToCollection('Live from the Underground', 'Big K.R.I.T.', 2012));
console.log(addToCollection('It\'s Dark and Hell is Hot', 'DMX', 1998));
console.log(addToCollection('Evil Seeds Grow Naturally', 'Freddie Gibbs', 2013));
console.log(addToCollection('The Blue Print', 'Jay-Z', 2001));
console.log(addToCollection('A State of Trance 500', 'GAIA', 2011));
console.log(addToCollection('We Are The Streets', 'The LOX', 2000));

//Logging the collection array
console.log(collection);

//Adding a function of showCollection
function showCollection(arrayItem) {
  console.log(arrayItem.length);
  for (let i of arrayItem) {
  console.log(`${i.title} by ${i.artist}, published in ${i.yearPublished}`);//Don't forget to use the (in this case you used i) for the log
  }
}
//Testing the showCollection
showCollection(collection);

//Adding function for findByArtist (this is a for if loop)
function findByArtist(arrayArtist) {
  let artistFind = [];
  for (let find of collection) {
    if (arrayArtist === find.artist) {
      artistFind.push(find);//you are pushing this to the let
    }
  }
  return artistFind; //outside of the for
}

//Testing the findByArtist
console.log(findByArtist('GAIA'));
console.log(findByArtist('Nas'));
console.log(findByArtist('Jay-Z'));
