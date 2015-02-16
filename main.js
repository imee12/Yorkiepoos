$(document).ready(function () {
  page.init();
});

var page = {
  init: function (){
    page.initEvents();

  },

  initStyling: function () {

  },

  initEvents: function () {

    //// click start starts game///
    page.gigi = new Pup;
    page.chewy = new Pup;
    page.myPoos = new Pups;


  console.log(gigi);
  console.log(chewy);
  console.log(myPoos);
  var test = chewy.attributes.photo;
  console.log(test);

  $(".puppics").html('<img src="' + chewy.attributes.photo + '" >');
  $(".puppics").append('<img src="' + gigi.attributes.photo + '" >')

  myPoos.toJSON();
 _.each(myPoos, function (currentItem){
   console.log(myPoos.currentItem);


  //$("body").append('<h1>'  +  )

 });

//$(".collection").html('<img src="' + myPoos.attributes.photo + '" >')
},
};
