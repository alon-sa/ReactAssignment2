import React, { Component } from 'react';

export default class CCItem extends Component {
    // constructor(props) {
    //     super(props);

    // }
    render() {
        if (this.props.inCart) {
            return (
                <div className="card mb-3" style={{ Width: '14rem' }}>
                    <div className="card-header">{this.props.item.name}
                        <button type="button" class="close" aria-label="Close" onClick={() => this.props.removeFromCart(this.props.item)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{this.props.item.name} for {this.props.item.price}$</p>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="col-sm-6 p-3 mb-2">
                    <div className="card" style={{ width: '14rem' }}>
                        <img className="card-img-top" src={this.props.item.image} alt={this.props.item.name} />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.item.name}</h5>
                            <p className="card-text">{this.props.item.price}$</p>
                            <a href="#" className="btn btn-primary" onClick={() => this.props.addToCart(this.props.item)} >Add to cart</a>
                        </div>
                    </div>
                </div>
            )
        }

    }
}