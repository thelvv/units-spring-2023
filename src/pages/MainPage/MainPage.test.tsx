import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MainPage } from './MainPage';
import { getNextSortBy } from '../../utils/getNextSortBy';
jest.mock('../../hooks/useCurrentTime');
jest.mock('../../utils/getPrice');
jest.mock('../../utils/getNextSortBy');

afterEach(jest.clearAllMocks);
describe('MainPage render', () => {
    it('should render correctly', () => {
        const rendered = render(<MainPage />);

        expect(rendered.asFragment()).toMatchSnapshot();
    });

    it('Should sort after button click', () => {
        const rendered = render(<MainPage />);
        const sortButton = rendered.getByTestId('sort-button');
        fireEvent.click(sortButton);
        expect(rendered).toMatchSnapshot();
    });

    it('Should call function getNextSortBy after sort button click', () => {
        const rendered = render(<MainPage />);
        const sortButton = rendered.getByTestId('sort-button');
        expect(getNextSortBy).toHaveBeenCalledTimes(0);
        fireEvent.click(sortButton);
        expect(getNextSortBy).toHaveBeenCalledTimes(1);
    });

    const categories = ['Электроника', 'Для дома', 'Одежда'];
    test.each(categories)('should filter by %category category', (category) => {
        const rendered = render(<MainPage />);
        const rendered_category = rendered
            .getAllByText(category)
            .filter((item) => item.classList.contains('categories__badge'))[0];
        fireEvent.click(rendered_category);

        expect(rendered).toMatchSnapshot();
    });

    test.each(categories)(
        'should get a new class after being clicked',
        (category) => {
            const rendered = render(<MainPage />);
            const rendered_category = rendered
                .getAllByText(category)
                .filter((item) => item.classList.contains('categories__badge'))[0];
            fireEvent.click(rendered_category);

            expect(rendered_category).toHaveClass('categories__badge_selected');
        }
    );
});
