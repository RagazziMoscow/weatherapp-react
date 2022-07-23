import { DailyCard } from '../DailyCard';

export const DailyCards = ({ daily }) => {
    return (
        <div className='DayliCards'>
            {daily.map(dailyCard => <DailyCard dailyCard={dailyCard} key={dailyCard.dt} />)}
        </div>
    );
};
