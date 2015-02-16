var Pup = Backbone.Model.extend({
 urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/yorkiepoo',
  idAttribute: "_id",
  defaults: {
    photo: 'images/york1.jpg'
  },
  initialize: function () {
    console.log("A pup is born!");
  }
});

var pookie = new Pup({name: "Pookie"});
console.log(pookie);
$(".puppic").append(pookie.name);

var gigi = new Pup({name: "Gigi", lastname: "money", photo: 'images/gigi.jpeg'})
console.log(gigi);

var bubblegum = new Pup({name: "Bubblegum", photo: 'images/bubblegum.jpeg', description: "adorbs"})
console.log(bubblegum);

var chewy = new Pup({name: "Chewy", photo: 'images/chewy.jpeg', favetoy: "squeakie"})
console.log(chewy);



var jellybean = new Pup({name: "Jellybean", photo: 'images/jelly.jpeg', hobbies: "running"});
console.log(jellybean);
