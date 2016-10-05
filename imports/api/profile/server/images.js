//An Image class that takes a document in its constructor

Image = function (doc) {
  _.extend(this, doc);
};

_.extend(Image.prototype, {
  getImgUrl: function () {
    //** generate url here**//
    console.log("generate url here");
  }
});

// Define a Collection Images that uses Image as its document
Images = new Mongo.Collection("Images", {
  transform: function (doc) { return new Image(doc); }
});

Images.schema = new SimpleSchema({
  serviceId: {type: String},
  service: {type: String},
});
