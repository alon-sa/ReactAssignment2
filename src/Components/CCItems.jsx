import React, { Component } from 'react';
import CCItem from './CCItem';

export default class CCItems extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div className="row">
                {
                    this.props.itemsInShop.map((item) =>
                        <CCItem key={item.id} item={item} addToCart={this.props.addToCart} inCart={false} />
                    )
                }
            </div>
        )
    }
}