import { describe, it, expect, vi } from 'vitest';
import { generateReportData } from './data';
describe('generateReportData()', () => {
  it('should execute logFn if provided', () => {
    const logger = vi.fn(); //keeps track of any function executions and arguments that were provided (We are mocking here)
    logger.mockImplementationOnce(() => {}); //after excuting it will switch back to an empty function
    generateReportData(logger);
    expect(logger).toBeCalled();
  });
});
