import React, { Component } from 'react';
import './style.css';

class OrderDetail extends Component {

  render() {
    console.log(this.props)
    const { orderData, onClickBack } = this.props;
    return (
      <div>
        <img src={orderData.imageUrl} className='orders__item-image' alt={orderData.name} />
        <h2>{orderData.name}</h2>
        <p className='orders__item-description'>
          {orderData.description}
        </p>
        <button onClick={() => onClickBack(orderData.name)}>Назад</button>
      </div>
    )
  }
}

export default OrderDetail;