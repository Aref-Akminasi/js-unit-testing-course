import { it, expect, vi } from 'vitest';
import { sendDataRequest } from './http';
import { HttpError } from './errors';

const testResponseData = { testKey: 'testData' };

const testFetch = vi.fn((url, options) => {
  return new Promise((res, rej) => {
    if (typeof options.body !== 'string') {
      rej('not a string');
    }
    const testResponse = {
      ok: true,
      json() {
        return new Promise((res, rej) => {
          res(testResponseData);
        });
      },
    };
    res(testResponse);
  });
});

vi.stubGlobal('fetch', testFetch);

it('should return any avaliable response data', () => {
  const testData = { key: 'test' };
  return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
});

it('should convert the provided data to JSON before sending the request', async () => {
  const testData = { key: 'test' };

  let errorMessage;

  try {
    await sendDataRequest(testData);
  } catch (error) {
    errorMessage = error;
  }

  expect(errorMessage).not.toBe('not a string');
  //Be carueful with using not rejects, not.rejects.toBe() will still expects it to reject but not with this value
  //return expect(sendDataRequest(testData)).not.rejects.toBe('not a string');
});

it('should throw a new HttpError if response is not ok', () => {
  testFetch.mockImplementationOnce((url, options) => {
    return new Promise((res, rej) => {
      if (typeof options.body !== 'string') {
        rej('not a string');
      }
      const testResponse = {
        ok: false,
        json() {
          return new Promise((res, rej) => {
            res(testResponseData);
          });
        },
      };
      res(testResponse);
    });
  });
  const testData = { key: 'test' };
  return expect(sendDataRequest(testData)).rejects.instanceOf(HttpError);
});
