import React, { Component, Fragment } from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import './style.css';
import OrderDetail from '../OrderDetail/index'

class Orders extends Component {
  state = {
    ordersList: [{
      id: 1,
      name: 'Iphone',
      brand: "Apple",
      model: "iphone 8 plus",
      memory: "256",
      madeYear: "2018",
      color: "white",
      price: "66856",
      imageUrl: "https://d3n4pjass4bd0n.cloudfront.net/images/thumbnails/500/500/detailed/146/smartfon-apple-iphone-8-plus-special-edition-product-256-gb-ram-3-gb-red.jpg",
      description: "Смартфон iPhone 8 Plus обладает хорошей камерой на 12+12 Мп и батареей емкостью 2691 мАч. Оперативной памяти на 3 ГБ хватает для стабильной работы системы, объем встроенной памяти составляет 256 ГБ.",
    },
    {
      id: 2,
      name: 'Mi',
      brand: "Xiaomi",
      model: "Mi 9",
      memory: "64",
      madeYear: "2019",
      color: "blue",
      price: "30000",
      imageUrl: "https://d3n4pjass4bd0n.cloudfront.net/images/thumbnails/500/500/detailed/167/smartfon-xiaomi-mi-9-64-gb-ram-6-gb-dual-sim-blue.jpg",
      description: "Смартфон Xiaomi Mi 9 обладает хорошей камерой на 48+13+16 Мп. Объем встроенной памяти составляет 64 Gb. Оперативной памяти на 6 Gb хватает для стабильной работы системы. Под крышкой скрывается аккумулятор ёмкостью 3300 мАч. Функция быстрой зарядки пригодится пользователям, которые ценят свое время",
    },
    {
      id: 3,
      name: 'samsung',
      brand: "samsung",
      model: "M10",
      memory: "32",
      madeYear: "2019",
      color: "black",
      price: "10690",
      imageUrl: "https://d3n4pjass4bd0n.cloudfront.net/images/thumbnails/500/500/detailed/165/smartfon-samsung-galaxy-m10-32-gb-ram-3-gb-dual-sim-black-4.jpg",
      description: "Смартфон Samsung Galaxy M10 обладает хорошей камерой на 13+5 Мп. Объем встроенной памяти составляет 32 Gb. Оперативной памяти на 3 Gb хватает для стабильной работы системы. Под крышкой скрывается аккумулятор ёмкостью 3400 мАч. Поддержка диапазона 4G даст вам возможность пользоваться быстрым интернетом",
    },
    {
      id: 4,
      name: 'samsung',
      brand: "samsung",
      model: "J6",
      memory: "32",
      madeYear: "2019",
      color: "black",
      price: "10690",
      imageUrl: "https://d3n4pjass4bd0n.cloudfront.net/images/thumbnails/500/500/detailed/159/smartfon-samsung-galaxy-j6-plus-j610f-32-gb-ram-3-gb-dual-sim-red-1.jpg",
      description: "Смартфон Samsung Galaxy J6 Plus обладает хорошей камерой на 13 Мп. Объем встроенной памяти составляет 32 Gb. Оперативной памяти на 3 Gb хватает для стабильной работы системы. Под крышкой скрывается аккумулятор ёмкостью 3300 мАч. Поддержка диапазона 4G даст вам возможность пользоваться быстрым интернетом",
    },
    {
      id: 5,
      name: 'samsung',
      brand: "samsung",
      model: "A9",
      memory: "128",
      madeYear: "2019",
      color: "red",
      price: "25190",
      imageUrl: "https://d3n4pjass4bd0n.cloudfront.net/images/thumbnails/500/500/detailed/162/smartfon-samsung-galaxy-a9-2018-sm-a920f-128-gb-ram-6-gb-dual-sim-black-1.jpg",
      description: "Смартфон Samsung Galaxy A9 (2018) обладает хорошей камерой на 24+8+10+5 Мп. Объем встроенной памяти составляет 128 Gb. Оперативной памяти на 6 Gb хватает для стабильной работы системы. Под крышкой скрывается аккумулятор ёмкостью 3800 мАч. Функция быстрой зарядки пригодится пользователям, которые ценят свое время. Поддержка диапазона 4G даст вам возможность пользоваться быстрым интернетом",
    },
    {
      id: 6,
      name: 'Huawei',
      brand: "Huawei",
      model: "P20 Pro",
      memory: "128",
      madeYear: "2019",
      color: "black",
      price: "45990",
      imageUrl: "https://d3n4pjass4bd0n.cloudfront.net/images/thumbnails/500/500/detailed/150/smartfon-huawei-p20-pro-128-gb-ram-6-gb-dual-sim-twilight.jpg",
      description: "Смартфон P20 Pro обладает хорошей камерой на 40+20+8 Мп и батареей емкостью 4000 мАч. Оперативной памяти на 6 ГБ хватает для стабильной работы системы, объем встроенной памяти составляет 128 ГБ.",
    },
    {
      id: 7,
      name: 'sony',
      brand: "sony",
      model: "xperia L1",
      memory: "16",
      madeYear: "2018",
      color: "black",
      price: "10270",
      imageUrl: "https://www.regard.ru/photo/shop/262775.jpg",
      description: "смартфон на платформе Android, экран 5.5, разрешение 1280x720, камера 13 МП, автофокус, F/2.2, память 16 Гб, слот для карты памяти, 3G, 4G LTE, LTE-A, Wi-Fi, Bluetooth, NFC, GPS, ГЛОНАСС, объем оперативной памяти 2 Гб, аккумулятор 2620 мАч",
    },
    {
      id: 8,
      name: 'asus',
      brand: "asus",
      model: "ROG Phone ZS600KL",
      memory: "128",
      madeYear: "2019",
      color: "black",
      price: "63690",
      imageUrl: "https://www.regard.ru/photo/shop/30775.jpg",
      description: "смартфон с Android 8.1, поддержка двух SIM-карт, экран 6, разрешение 2160x1080, двойная камера 12 МП/8 МП, память 128 Гб, без слота для карт памяти, 3G, 4G LTE, LTE-A, Wi-Fi, Bluetooth, NFC, GPS, ГЛОНАСС, объем опер. памяти 8 Гб, аккумулятор 4000 мАч",
    },
    {
      id: 9,
      name: 'HTC',
      brand: "HTC",
      model: "U Ultra",
      memory: "128",
      madeYear: "2018",
      color: "black",
      price: "35730",
      imageUrl: "https://www.regard.ru/photo/shop/30895.jpg",
      description: "смартфон, Android 7.0, поддержка двух SIM-карт, экран 5.7, 2560x1440, второй экран: 2.05, 160x1040, камера 12 МП, память 128 Гб, 3G, 4G LTE, LTE-A, Wi-Fi, Bluetooth, NFC, GPS, ГЛОНАСС, объем оперативной памяти 4 Гб, аккумулятор 3000 мАч",
    },
    {
      id: 10,
      name: 'Meizu',
      brand: "Meizu",
      model: "15",
      memory: "64",
      madeYear: "2018",
      color: "black",
      price: "24200",
      imageUrl: "https://www.regard.ru/photo/shop/287817.jpg",
      description: "смартфон на платформе Android, поддержка двух SIM-карт, экран 5.46, разрешение 1920x1080, двойная камера 12/20 МП, F/1.8, память 64 Гб, без слота для карт памяти, 3G, 4G LTE, Wi-Fi, Bluetooth, GPS, ГЛОНАСС, объем опер. памяти 4 Гб, аккумулятор 3000 мАч",
    }],
    title: 'Order List',
    isNeedShowDetail: false,
    clickedOrderData: {},
    storeOrderList: [],
  }

  componentWillMount() {
    this.setState({
      storeOrderList: this.state.ordersList,
    })
  }

  onClickOrder = (order) => {
    console.log(order);
    this.setState({
      title: order.name,
      isNeedShowDetail: true,
      clickedOrderData: order,
    })
  }

  onClickBack = (orderName) => {
    this.setState({
      isNeedShowDetail: false,
      clickedOrderData: {},
      title: 'Orders List'
    })
    console.log(orderName);
  }

  searchOrder = (inputValue) => {
    const { storeOrderList } = this.state;
    if (inputValue === '') {
      this.setState({
        ordersList: storeOrderList
      })
    } else {
      let searchedOrders = [];
      const regex = new RegExp(`\\b${inputValue}`, 'gi')
      storeOrderList.map(order => {
        if (regex.test(order.name)) {
          searchedOrders.push(order);
        }
        return false
      })
      this.setState({
        ordersList: searchedOrders
      })
      console.log(searchedOrders)
    }
  }

  onChangeSearch = (event) => {
    this.searchOrder(event.target.value)
  }

  render() {
    const { ordersList, title, isNeedShowDetail, clickedOrderData } = this.state;
    console.log(this.state)
    return (
      <section className='orders'>
        <div className='container section-container'>
          <h1 className='orders__title'>{title}</h1>
          {
            !isNeedShowDetail ? (
              <Fragment>
                <input onChange={this.onChangeSearch} className='orders__search' />
                <ul className='orders__list'>
                  {
                    ordersList.map((order) => {
                      return (
                        <li key={order.id} className='orders__item'>
                          <img src={order.imageUrl} className='orders__item-image' alt={order.name} />
                          <h3 className='orders__item-name' onClick={() => this.onClickOrder(order)}>{order.name}</h3>
                          <p className='orders__item-description'></p>
                            <LinesEllipsis
                              text={order.description}
                              maxLine='1'
                              ellipsis='...'
                              trimRight
                              basedOn='letters'
                            />
                        </li>
                      )
                    })
                  }
                </ul>
              </Fragment>
            ) : (
                <OrderDetail orderData={clickedOrderData} onClickBack={this.onClickBack} />
              )
          }
        </div>
      </section>
    )
  }
}

export default Orders;