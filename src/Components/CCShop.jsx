import React, { Component } from 'react';
import CCItemsInCart from './CCItemsInCart';
import CCItems from './CCItems';

export default class CCShop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsListInShop: this.props.itemsList,
            itemsInCart: this.props.itemsInCart,
            totalPrice: 0

        }

    }

    addToCart = (item) => {
        let cartList = this.state.itemsInCart;
        cartList.push(item);
        let shopList = this.state.itemsListInShop;
        shopList = shopList.filter((i) => i.id !== item.id);
        let newTotalPrice = this.state.totalPrice + item.price;
        this.setState({
            itemsListInShop: shopList,
            itemsInCart: cartList,
            totalPrice: newTotalPrice
        })
    }

    removeFromCart = (item) => {
        let shopList = this.state.itemsListInShop;
        shopList.push(item);
        let cartList = this.state.itemsInCart;
        cartList = cartList.filter((i) => i.id !== item.id)
        let newTotalPrice = this.state.totalPrice - item.price;
        this.setState({
            itemsListInShop: shopList,
            itemsInCart: cartList,
            totalPrice: newTotalPrice
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 p-3 mb-2">
                        <img id="eaglesLogo" src="../images/eaglesLogo.png" alt="Eagles logo" /><br />
                        <h1>Philadelphia Eagles shop</h1>
                    </div>
                    <div className="col-sm-4 p-3 mb-2"><CCItemsInCart itemsInCart={this.state.itemsInCart} removeFromCart={this.removeFromCart} totalPrice={this.state.totalPrice} /></div>
                    <div className="col-sm-8 p-3 mb-2"><CCItems itemsInShop={this.state.itemsListInShop} addToCart={this.addToCart} /></div>
                </div>
            </div>
        )
    }
}   