import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProductCard } from './ProductCard';

afterEach(jest.clearAllMocks);
describe('Product Card test', () => {
    it('should render correctly', () => {
        const rendered = render(
            <ProductCard
                id={1}
                name={'test'}
                category={'Одежда'}
                description={'test'}
                price={100}
                priceSymbol={'₽'}
                imgUrl={'test'}
            />
        );

        expect(rendered.asFragment()).toMatchSnapshot();
    });

    it('should render image', () => {
        const rendered = render(
            <ProductCard
                id={1}
                name={'test'}
                category={'Одежда'}
                description={'test'}
                price={100}
                priceSymbol={'₽'}
                imgUrl={'test'}
            />
        );

        expect(rendered.getByTestId('product-card__image')).toBeInTheDocument();
    });

    it('should not render image', () => {
        const rendered = render(
            <ProductCard
                id={1}
                name={'test'}
                category={'Одежда'}
                description={'test'}
                price={100}
                priceSymbol={'₽'}
            />
        );

        expect(
            rendered.queryByTestId('product-card__image')
        ).not.toBeInTheDocument();
    });
});
