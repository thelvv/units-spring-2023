import { getNextSortBy } from '../getNextSortBy';
import { Product } from '../../types';
import { productComparator } from '../productComparator';

describe('test product comparator function', () => {
    it('should return -1 for product with higher price with sort ascending', () => {
        const lProduct: Product = {
            id: 1,
            name: 'name',
            description: 'desc',
            price: 1,
            priceSymbol: '$',
            imgUrl: 'test',
            category: 'Для дома',
        };

        const rProduct: Product = {
            id: 1,
            name: 'name',
            description: 'desc',
            price: 2,
            priceSymbol: '$',
            imgUrl: 'test',
            category: 'Для дома',
        };

        expect(
            productComparator('по возрастанию цены')(lProduct, rProduct)
        ).toBe(-1);
    });

    it('should return 1 for product with lower price with sort descending', () => {
        const lProduct: Product = {
            id: 1,
            name: 'name',
            description: 'desc',
            price: 1,
            priceSymbol: '$',
            imgUrl: 'test',
            category: 'Для дома',
        };

        const rProduct: Product = {
            id: 1,
            name: 'name',
            description: 'desc',
            price: 2,
            priceSymbol: '$',
            imgUrl: 'test',
            category: 'Для дома',
        };

        expect(productComparator('по убыванию цены')(lProduct, rProduct)).toBe(
            1
        );
    });

    it('should return -1 for product with lower price with different currencies and sort descending', () => {
        const lProduct: Product = {
            id: 1,
            name: 'name',
            description: 'desc',
            price: 100,
            priceSymbol: '₽',
            imgUrl: 'test',
            category: 'Для дома',
        };

        const rProduct: Product = {
            id: 1,
            name: 'name',
            description: 'desc',
            price: 1,
            priceSymbol: '$',
            imgUrl: 'test',
            category: 'Для дома',
        };

        expect(productComparator('по убыванию цены')(lProduct, rProduct)).toBe(
            -1
        );
    });

    it('should return 1 for product with lower price with different currencies 2 and sort descending', () => {
        const lProduct: Product = {
            id: 1,
            name: 'name',
            description: 'desc',
            price: 150,
            priceSymbol: '₽',
            imgUrl: 'test',
            category: 'Для дома',
        };

        const rProduct: Product = {
            id: 1,
            name: 'name',
            description: 'desc',
            price: 1,
            priceSymbol: '$',
            imgUrl: 'test',
            category: 'Для дома',
        };

        expect(
            productComparator('по возрастанию цены')(lProduct, rProduct)
        ).toBe(1);
    });

    it('should return 0 in case of prices equality', () => {
        const lProduct: Product = {
            id: 1,
            name: 'name',
            description: 'desc',
            price: 150,
            priceSymbol: '₽',
            imgUrl: 'test',
            category: 'Для дома',
        };

        const rProduct: Product = {
            id: 1,
            name: 'name',
            description: 'desc',
            price: 150,
            priceSymbol: '₽',
            imgUrl: 'test',
            category: 'Для дома',
        };

        expect(productComparator('по убыванию цены')(lProduct, rProduct)).toBe(
            0
        );
    });

    it('should return 0 in case of default sort', () => {
        const lProduct: Product = {
            id: 1,
            name: 'name',
            description: 'desc',
            price: 150,
            priceSymbol: '₽',
            imgUrl: 'test',
            category: 'Для дома',
        };

        const rProduct: Product = {
            id: 1,
            name: 'name',
            description: 'desc',
            price: 150,
            priceSymbol: '₽',
            imgUrl: 'test',
            category: 'Для дома',
        };

        expect(productComparator('по умолчанию')(lProduct, rProduct)).toBe(0);
    });
});
