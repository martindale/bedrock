var helper = require('../helper');

describe('embeddedString', function() {
  beforeEach(function() {
    helper.waitForAngular();
  });

  it('should escape a string with carriage returns and line feeds', function() {
    expect(helper.run(function($injector) {
      var filter = $injector.get('embeddedStringFilter');
      return filter('\r\n');
    })).to.eventually.equal('\\r\\n');
  });
});
