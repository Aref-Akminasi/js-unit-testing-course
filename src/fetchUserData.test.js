import { it, expect, describe, beforeAll, vi } from 'vitest';
import { getUserFullName, userDataService } from './fetchUserData';

describe('getUserFullName()', () => {
  beforeAll(() => {
    userDataService.getUserById = vi.fn((id) =>
      Promise.resolve({
        firstName: 'John',
        lastName: 'Doe',
      })
    );
  });

  it('Should get a user', async () => {
    const myUser = 'John Doe';
    const result = await getUserFullName(1);
    expect(result).toEqual(myUser);
  });

  //Important example .rejects.toThrow()
  //The best practice is to mock a promise as a promise Promise.resolve
  it('should throw an error if no id is passed', () => {
    const fn = async () => {
      await getUserFullName();
    };
    return expect(fn).rejects.toThrow(/no id passed/);
  });
});
