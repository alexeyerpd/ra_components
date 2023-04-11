import type {Moment} from 'moment';

import {getCalendar, splitMonth} from './utils';

import './Calendar.scss';

interface CalendarProps {
    date: Moment;
}

export function Calendar({date}: CalendarProps) {
    const calendar = splitMonth(getCalendar(date));

    const day = date.format('dddd');
    const num = date.date();
    const month = date.locale('ru').format('MMMM');
    const year = date.year();

    return (
        <div className="ui-datepicker">
            <div className="ui-datepicker-material-header">
                <div className="ui-datepicker-material-day">{day}</div>
                <div className="ui-datepicker-material-date">
                    <div className="ui-datepicker-material-day-num">{num}</div>
                    <div className="ui-datepicker-material-month">{month}</div>
                    <div className="ui-datepicker-material-year">{year}</div>
                </div>
            </div>
            <div className="ui-datepicker-header">
                <div className="ui-datepicker-title">
                    <span className="ui-datepicker-month">{month}</span>&nbsp;
                    <span className="ui-datepicker-year">{year}</span>
                </div>
            </div>
            <table className="ui-datepicker-calendar">
                <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col className="ui-datepicker-week-end" />
                    <col className="ui-datepicker-week-end" />
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col" title="Понедельник">
                            Пн
                        </th>
                        <th scope="col" title="Вторник">
                            Вт
                        </th>
                        <th scope="col" title="Среда">
                            Ср
                        </th>
                        <th scope="col" title="Четверг">
                            Чт
                        </th>
                        <th scope="col" title="Пятница">
                            Пт
                        </th>
                        <th scope="col" title="Суббота">
                            Сб
                        </th>
                        <th scope="col" title="Воскресенье">
                            Вс
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {calendar.map((week, ind) => {
                        return (
                            <tr key={ind}>
                                {week.map((day) => (
                                    <td key={day.value} className={day.class}>
                                        {day.value}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
