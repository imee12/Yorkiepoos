


var Pups = Backbone.Collection.extend({
  url: 'http://tiy-fee-rest.herokuapp.com/collections/yorkiepoo',
  model: Pup
});

var myPoos = new Pups ();
// myPoos.add(pookie);
// myPoos.add(gigi);
// console.log(myPoos);
//
// myPoos.add(jellybean);
// console.log(myPoos);

//myPoos.add(chewy);
//console.log(myPoos);

//gigi.save();



gigi.destroy();
//gigi.save();

// chewy.destroy({success: function(model, response) {
//
// }});
