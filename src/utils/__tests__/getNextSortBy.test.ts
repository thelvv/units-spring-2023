import { getNextSortBy } from '../getNextSortBy';
import type { SortBy } from '../../types';

describe('test get next sort by function', () => {
    it.each([
        ['по умолчанию', 'по возрастанию цены'],
        ['по возрастанию цены', 'по убыванию цены'],
        ['по убыванию цены', 'по умолчанию'],
    ])('should be %after after %before sort type', (before, after) => {
        expect(getNextSortBy(before as SortBy)).toBe(after as SortBy);
    });
});
