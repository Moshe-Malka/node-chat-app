var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Jen';
    var text = 'Some message';
    var message = generateMessage(from, text);
    expect(typeof message.createdAt).toBe('number');
    expect(message).toHaveProperty('from');
    expect(message).toHaveProperty('text');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
      var from = 'moshe';
      var longitude = 12;
      var latitude = 56;
      var url = 'https://ww.googlw.com/maps?q=12,56';
      var message = generateLocationMessage(from, latitude, longitude);

      expect(message).toHaveProperty('from');
      expect(message).toHaveProperty('url');
      expect(typeof message.createdAt).toBe('number');
      expect(typeof longitude).toBe('number');
      expect(typeof latitude).toBe('number');
      expect(typeof from).toBe('string');
  });
});
