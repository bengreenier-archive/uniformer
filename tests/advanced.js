// Generated by CoffeeScript 1.6.3
var uniformer;

uniformer = require('../lib/uniformer');

exports.advanced = {
  setUp: function(done) {
    return done();
  },
  'full-config': function(test) {
    test.expect(1);
    test.deepEqual(uniformer({
      file: 'full-config.json'
    }), {
      _uniformer: {
        _config: {
          supported: ['config'],
          debug: 'console'
        }
      },
      "super": {
        parent: {
          key: 'value',
          arr: ['entry', 'entry', 'entry'],
          num: 1
        }
      }
    });
    return test.done();
  },
  'full-config str': function(test) {
    test.expect(1);
    test.deepEqual(uniformer('full-config.json'), {
      _uniformer: {
        _config: {
          supported: ['config'],
          debug: 'console'
        }
      },
      "super": {
        parent: {
          key: 'value',
          arr: ['entry', 'entry', 'entry'],
          num: 1
        }
      }
    });
    return test.done();
  }
};