import {Calendar} from 'components/Calendar/Calendar';
import {ShopItemClass} from 'components/ShopItemClass/ShopItemClass';
import {ShopItemFunc} from 'components/ShopItemFunc/ShopItemFunc';
import moment from 'moment';

import '../../styles/root.scss';

const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull:
        "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
    price: 399,
    currency: '£',
} as const;

export function App({type = 'calendar'}: {type?: 'calendar' | 'class' | 'func'}) {
    if (type === 'calendar') {
        const now = moment();
        return <Calendar date={now} />;
    }

    return (
        <div className="container">
            <div className="background-element"></div>
            <div className="highlight-window">
                <div className="highlight-overlay"></div>
            </div>
            <div className="window">
                {type === 'class' ? <ShopItemClass item={item} /> : <ShopItemFunc item={item} />}
            </div>
        </div>
    );
}
