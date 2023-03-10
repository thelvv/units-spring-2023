import { applyCategories } from '../applyCategories';
import { Product } from '../../types';

describe('test apply categories function', () => {
    it('should return empty array with empty input', () => {
        expect(applyCategories([], [])).toStrictEqual([]);
    });

    it('should return all products with no filters', () => {
        const productExample: Product = {
            id: 1,
            name: 'name',
            description: 'desc',
            price: 1,
            priceSymbol: '$',
            imgUrl: 'test',
            category: 'Электроника',
        };
        expect(
            applyCategories([productExample, productExample], [])
        ).toStrictEqual([productExample, productExample]);
    });

    it('should return only products which match with filters (1 filter)', () => {
        const productHome: Product = {
            id: 1,
            name: 'name',
            description: 'desc',
            price: 1,
            priceSymbol: '$',
            imgUrl: 'test',
            category: 'Для дома',
        };

        const productElectronics: Product = {
            id: 2,
            name: 'name',
            description: 'desc',
            price: 1,
            priceSymbol: '$',
            imgUrl: 'test',
            category: 'Электроника',
        };

        const productClothes: Product = {
            id: 3,
            name: 'name',
            description: 'desc',
            price: 1,
            priceSymbol: '$',
            imgUrl: 'test',
            category: 'Одежда',
        };

        expect(
            applyCategories(
                [productElectronics, productHome, productClothes],
                ['Электроника']
            )
        ).toStrictEqual([productElectronics]);
    });

    it('should return only products which match with filters (2 filters)', () => {
        const productHome: Product = {
            id: 1,
            name: 'name',
            description: 'desc',
            price: 1,
            priceSymbol: '$',
            imgUrl: 'test',
            category: 'Для дома',
        };

        const productElectronics: Product = {
            id: 2,
            name: 'name',
            description: 'desc',
            price: 1,
            priceSymbol: '$',
            imgUrl: 'test',
            category: 'Электроника',
        };

        const productClothes: Product = {
            id: 3,
            name: 'name',
            description: 'desc',
            price: 1,
            priceSymbol: '$',
            imgUrl: 'test',
            category: 'Одежда',
        };

        expect(
            applyCategories(
                [productElectronics, productHome, productClothes],
                ['Электроника', 'Одежда']
            )
        ).toStrictEqual([productElectronics, productClothes]);
    });

    it('should return only products which match with filters (3 filters)', () => {
        const productHome: Product = {
            id: 1,
            name: 'name',
            description: 'desc',
            price: 1,
            priceSymbol: '$',
            imgUrl: 'test',
            category: 'Для дома',
        };

        const productElectronics: Product = {
            id: 2,
            name: 'name',
            description: 'desc',
            price: 1,
            priceSymbol: '$',
            imgUrl: 'test',
            category: 'Электроника',
        };

        const productClothes: Product = {
            id: 3,
            name: 'name',
            description: 'desc',
            price: 1,
            priceSymbol: '$',
            imgUrl: 'test',
            category: 'Одежда',
        };

        expect(
            applyCategories(
                [productElectronics, productHome, productClothes],
                ['Электроника', 'Для дома', 'Одежда']
            )
        ).toStrictEqual([productElectronics, productHome, productClothes]);
    });
});
