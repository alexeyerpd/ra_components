import * as React from 'react';

import '../ShopItemFunc/ShopItemFunc.scss';

interface ShopItemClassProps {
    item: {
        brand: string;
        title: string;
        description: string;
        descriptionFull: string;
        price: number;
        currency: string;
    };
}

export class ShopItemClass extends React.Component<ShopItemClassProps> {
    override render() {
        const {brand, currency, description, descriptionFull, price, title} = this.props.item;
        return (
            <div className="main-content">
                <h2>{brand}</h2>
                <h1>{title}</h1>
                <h3>{description}</h3>
                <div className="description">{descriptionFull}</div>
                <div className="highlight-window mobile">
                    <div className="highlight-overlay"></div>
                </div>
                <div className="divider"></div>
                <div className="purchase-info">
                    <div className="price">
                        {currency}
                        {price.toFixed(2)}
                    </div>
                    <button>Добавить в корзину</button>
                </div>
            </div>
        );
    }
}
