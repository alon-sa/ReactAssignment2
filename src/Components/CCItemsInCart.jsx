import React, { Component } from 'react';
import CCItem from './CCItem';

export default class CCItemsInCart extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div>
                <h3>Items in cart:</h3>
                {
                    this.props.itemsInCart.map((item) =>
                        <CCItem key={item.id} item={item} removeFromCart={this.props.removeFromCart} inCart={true} />
                    )

                }
    <h4>Total price: {this.props.totalPrice}$</h4>
            </div>

        )
    }
}