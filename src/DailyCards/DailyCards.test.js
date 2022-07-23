import { render, screen } from '@testing-library/react';
import { DailyCards } from '.';

describe('DailyCards', () => {
    const daily = [
        {
            dt: 1631782800,
            weather: [{
                main: 'Clouds',
                icon: '02d'
            }],
            temp: {
                day: 10
            }
        },
        {
            dt: 1631783800,
            weather: [{
                main: 'Clouds',
                icon: '02d'
            }],
            temp: {
                day: 15
            }
        },
        {
            dt: 1631784800,
            weather: [{
                main: 'Clouds',
                icon: '02d'
            }],
            temp: {
                day: 20
            }
        }
    ];
    const { container, getByTestId } = render(<DailyCards {...{ daily }} />);
    const cards = container.getElementsByClassName('DayliCards');

    test('renders DailyCards', () => {
        expect(cards.length).toEqual(1);
    });
});
