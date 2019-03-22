import {
  filterDebit,
  orderByValue,
  limitArray,
  orderByLatestDate,
} from '.';

import Mock from './__mocks__/Mock';

describe('filterDebit()', () => {
  it('should return 2 debits when both are debits', () => {
    expect(filterDebit(Mock.debitOnly)).toHaveLength(2);
  });

  it('should return 1 debit when it has a credit', () => {
    expect(filterDebit(Mock.mixed)).toHaveLength(1);
  });

  it('should return 0 debit when it has only credits', () => {
    expect(filterDebit(Mock.creditOnly)).toHaveLength(0);
  });
});

describe('orderByValue()', () => {
  it('should return an array of 3 values highest first', () => {
    expect(orderByValue(Mock.randomSortOrder)).toEqual(Mock.sortedOrder);
  });
});

describe('limitArray()', () => {
  it('should limit an array by the number passed to it e.g. 2', () => {
    expect(limitArray([1, 2, 3], 2)).toHaveLength(2);
  });

  it('should limit an array by the number passed to it e.g. 4', () => {
    expect(limitArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 4)).toHaveLength(4);
  });
});

describe('orderByLatestDate()', () => {
  it('should order dates by latest first', () => {
    expect(orderByLatestDate(Mock.unorderDates)).toEqual(Mock.orderedDates);
  });
});
