console.log('***** Music Collection *****')

//Creating a variable
let collection = [];

//Creating a function
function addToCollection(title, artist, yearPublished) {
  let album = {
    title: title,
    artist : artist,
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
