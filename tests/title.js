

describe('Chimp Mocha', function() {
  beforeEach( function() {
    browser.url('http://localhost:3000');
    /*const Meteor = server.execute(() => {
      const {Meteor} = require('meteor/meteor')
      //console.log(Meteor);
      /*Meteor.loginWithFacebook({}, function(err){
        if (err) {
          throw new Meteor.Error("Facebook login failed");
        }
      });

      return Meteor;
    });*/
    //client.url('http://localhost:3000');
  });



  describe('Log in', function () {


    //call();
    //call();
  });

  describe('Page title', function () {
    call();
  });



});


function call(){
  it('should be loaded by browser as MeetCute;) with @watch', function () {
    browser.url('http://localhost:3000');
    browser.execute(()=>{
      console.log("yooo");
      Meteor.loginWithFacebook({}, function(err){
        if (err) {
          throw new Meteor.Error("Facebook login failed");
        }
      });
    })
    expect(browser.getTitle()).to.equal('MeetCute;)');
  });
}
