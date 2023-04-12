import moment, {Moment} from 'moment';

const dict = {
    COMMON: '',
    NOW: 'ui-datepicker-today',
    BEFORE: 'ui-datepicker-other-month',
    AFTER: 'ui-datepicker-other-month',
};

interface CalendarItem {
    class: string;
    value: number;
}

export function getCalendar(date: Moment) {
    const result = [];

    const startDate = moment(date).startOf('month');
    const endDate = moment(date).endOf('month');
    const currentDate = date.date();

    const decIterator = dayController(startDate, 'dec');
    const incIterator = dayController(endDate, 'inc');

    for (const curr of decIterator(1)) {
        result.push({class: dict.BEFORE, value: curr.date()});
    }
    result.reverse();

    for (let i = 2; i < date.daysInMonth(); i += 1) {
        result.push({
            class: currentDate === i ? dict.NOW : dict.COMMON,
            value: i,
        });
    }

    for (const curr of incIterator(0)) {
        result.push({class: dict.AFTER, value: curr.date()});
    }

    return result;
}

function dayController(initialDate: Moment, type: 'inc' | 'dec') {
    return function* (numDay: number) {
        const current = initialDate;
        yield current;

        while (true) {
            if (current.day() === numDay) {
                return;
            }

            current.add(type === 'inc' ? 1 : -1, 'days');
            yield current;
        }
    };
}

export function splitMonth(calendar: CalendarItem[]) {
    const result = [];

    let current: CalendarItem[] = [];
    for (let i = 0; i < calendar.length; i += 1) {
        const currentItem = calendar[i];

        if (!(i % 7)) {
            current = [] as CalendarItem[];
            result.push(current);
        }

        if (currentItem) {
            current.push(currentItem);
        }
    }

    return result;
}
