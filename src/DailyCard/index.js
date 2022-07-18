export const DayliCard = ({ dailyCard }) => {
    const { dt, weather, temp: { day } } = dailyCard;
    const { main, icon } = weather[0];
    const currentDate = new Date(dt * 1000);
    const currentDay = currentDate.toString().split(' ')[0]

    return (
        <div className="DailyCard">
            <div>{ currentDay }</div>
            <img
                className="Icon"
                src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                alt="icon"
            />
            <div className="TemperatureIcon">{ day.toFixed() }</div>
            <div>{ main }</div>
        </div>
    );
}