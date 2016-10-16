//An Image class that takes a document in its constructor

Image = function (doc) {
  _.extend(this, doc);
};

_.extend(Image.prototype, {
  url: function () {
    //** generate url here**//
    var url = "";
    switch (this.service) {
      case "filepicker":
        url = "https://www.filestackapi.com/api/file/" + this.serviceId;
        break;
      case "facebook":
        url = "https://graph.facebook.com/v2.7/" + this.serviceId;
        break;
      default:
        console.error('service: '+ this.service + ' does not match any url');
        break;
      }
    return url;
  }
});

// Define a Collection Images that uses Image as its document
Images = new Mongo.Collection("Images", {
  transform: function (doc) { return new Image(doc); }
});

Images.schema = new SimpleSchema({
  userId: {type: String, regEx: SimpleSchema.RegEx.Id},
  serviceId: {type: String},
  service: {type: String},
  type: {type: String},
  createdAt: {type: Date},
});
