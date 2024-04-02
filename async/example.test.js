import { it, expect } from 'vitest';
import { generateKey } from './example';

it('Should have a defined value', (done) => {
  generateKey('aref', (key) => {
    try {
      expect(key).toBeDefined();
      done();
    } catch (err) {
      done(err);
    }
  });
});
