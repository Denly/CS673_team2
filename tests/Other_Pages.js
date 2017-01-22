describe('Chimp Mocha', function() {
  describe('Page title', function () {
    it('should be set by the Meteor method @watch', function () {
      browser.url('http://localhost:3000/Discover');
      expect(browser.getTitle()).to.equal('MeetCute');
    });
	it('should be set by the Meteor method @watch', function () {
      browser.url('http://localhost:3000/Profile');
      expect(browser.getTitle()).to.equal('MeetCute');
    });
  });
});
