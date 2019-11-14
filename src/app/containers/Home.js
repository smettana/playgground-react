import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';

import ItemCard from '../components/ItemCard';
import DeleteButtonBlock from '../components/DeleteButtonBlock';

import { deleteProduct, deleteAllProducts } from '../actions/actionCreator';
// import {DATA} from '../../data';
class Home extends Component {
    state = {
        items:[],
    }

    componentDidMount (){
        // let data;
        // if(localStorage.getItem('masks')){
        //     data = JSON.parse(localStorage.getItem('masks'));
        //     this.setState({
        //         items:data
        //     });
        // }else{
        //     data = DATA;
        //     this.setState({
        //         items:data
        //     });
        //     localStorage.setItem('masks', JSON.stringify(DATA));
        // }
        
    }

    totalItems = (items) =>{
        const itemsQuantity = items.length;
        return itemsQuantity
    }

    totalPrice = (items) => {
        let counter = 0;
        items.forEach(({price})=>{
            counter += price
        });
        return counter
    }

    averagePrice = (items) => {
        let counter = 0;
        const itemsQuantity = items.length;
        let averagePrice = 0
        items.forEach(({price})=>{
            counter += price
        });
        averagePrice = items.length === 0 ? 0 :counter / itemsQuantity;
        return averagePrice.toFixed(2);
    }

    // deleteItem = (e) =>{
    //     let itemId = +e.currentTarget.getAttribute('data-id');
    //     const { deleteProduct } = this.props;

    //     deleteProduct(itemId);
    //     // let items = this.state.items;

    //     // items = items.filter((item)=>{
    //     //     return item.id !== itemId
    //     // });

    //     // this.setState({
    //     //     items
    //     // });
    //     // localStorage.setItem('masks', JSON.stringify(items));

    // }  

    deleteAllItems = () => {
        // this.setState({
        //     items:[]
        // });
        // localStorage.setItem('masks', JSON.stringify([]));
        const { deleteAllProducts } = this.props;

        deleteAllProducts();
    }

    render(){
        const {products, roles, deleteProduct} = this.props;
        const totalItems = products.length ? this.totalItems(products) : 0;
        const totalPrice = products.length ? this.totalPrice(products) : 0;
        const averagePrice = products.length ? this.averagePrice(products) : 0;
        const {admin} = roles;

        return(
            <Fragment>
                <div className="items-warpper">
                    {
                        products.map(({title, id, descr, img, price})=>{
                            return (
                                <ItemCard 
                                    title={title} 
                                    id={id} 
                                    descr={descr} 
                                    img={img} 
                                    price={price} 
                                    key={id} 
                                    deleteProduct={deleteProduct}
                                    admin={admin}
                                />
                            )
                        })
                    }
                </div>
                <div className="сounting">
                    <div className="total-items">
                        <p>Total count: {totalItems}</p>
                    </div>
                    <div className="total-price">
                        <p>Total price: {totalPrice}</p>
                    </div>
                    <div className="average-price">
                        <p>Average price: {averagePrice}</p>
                    </div>

                </div>
                {roles.admin ? <DeleteButtonBlock deleteAllItems={this.deleteAllItems} /> : null}
            </Fragment>
        );
    }
}

export default connect(state => ({
    products: state.products,
    roles: state.roles
}), {deleteProduct, deleteAllProducts})(Home);