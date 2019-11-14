import React, { Component } from 'react';
import { connect } from 'react-redux';


import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// import {DATA} from '../../data';

import { addProduct } from '../actions/actionCreator';


class Add extends Component {
    state = {
        productInfo: {
            title: '',
            descr: '',
            price: 0,
            img: 'http://ihtiandr.od.ua/image/cache/catalog/img/bs/mask/mamba_clear-220x220.jpg',
        },
        priceErrorInfo: {
            priceError: false,
            helperTextPrice : ''
        },
        titleErrorInfo: {
            titleError: false,
            helperTextTitle : ''
        },
        descrErrorInfo: {
            descrError: false,
            helperTextDescr : ''
        },
        productAdded: false
    }

    handleChange = (e) => {
        let info = e.target.name === 'price' ? {...this.state.productInfo, [e.target.name]:+e.target.value} : {...this.state.productInfo, [e.target.name]:e.target.value}

        switch (e.target.name){
            case 'price':
                if(e.target.value.match(/^\d+$/) || e.target.value === ''){
                    this.setState({
                        productInfo:info,
                        priceErrorInfo:{
                            priceError: false,
                            helperTextPrice : ''
                        }
                    });
                }else{
                    this.setState({
                        productInfo:info,
                        priceErrorInfo:{
                            priceError: true,
                            helperTextPrice : 'Please enter only numbers'
                        }
                    });
                }
                break;
            case'title':
                if(e.target.value.match(/^[а-яА-ЯёЁa-zA-Z_ ]+$/) || e.target.value === ''){
                    this.setState({
                        productInfo:info,
                        titleErrorInfo:{
                            titleError: false,
                            helperTextTitle : ''
                        }
                    });
                }else{
                    this.setState({
                        productInfo:info,
                        titleErrorInfo:{
                            titleError: true,
                            helperTextTitle : 'Please enter only letters'
                        }
                    });
                }
                break;
            case'descr':
                if(e.target.value.match(/^[а-яА-ЯёЁa-zA-Z_ ]+$/) || e.target.value === ''){
                    this.setState({
                        productInfo:info,
                        descrErrorInfo:{
                            descrError: false,
                            helperTextDescr : ''
                        }
                    });
                }else{
                    this.setState({
                        productInfo:info,
                        descrErrorInfo:{
                            descrError: true,
                            helperTextDescr : 'Please enter only letters'
                        }
                    });
                }
                break;
        }
    }

    addProduct = () =>{
        const state = this.state;
        const price = `${state.productInfo.price}`;
        const title = state.productInfo.title;
        const descr = state.productInfo.descr;
        const src = state.productInfo.img;
        const id = +new Date();

        const { addProduct } = this.props;
        // const data = JSON.parse(localStorage.getItem('masks')) ? JSON.parse(localStorage.getItem('masks')) : DATA;



        if(!title.match(/^[а-яА-ЯёЁa-zA-Z_ ]+$/) || title === ''){
            console.log(1);
            this.setState({
                titleErrorInfo:{
                    titleError: true,
                    helperTextTitle : 'Please enter only letters'
                }
            });
            return
        }

        if(!descr.match(/^[а-яА-ЯёЁa-zA-Z_ ]+$/) || descr === ''){
            console.log(2);
            this.setState({
                descrErrorInfo:{
                    descrError: true,
                    helperTextDescr : 'Please enter only letters'
                }
            });
            return
        }

        if(!price.match(/^\d+$/)|| price === ''){
            console.log(3);
            this.setState({
                priceErrorInfo:{
                    priceError: true,
                    helperTextPrice : 'Please enter only numbers'
                }
            });
            return
        }

        addProduct(id, title, descr, +price, src);

        this.setState({
            productInfo: {
                title: '',
                descr: '',
                price: '',
                img: 'http://ihtiandr.od.ua/image/cache/catalog/img/apnoicus-220x220.jpg'
            },
            priceErrorInfo: {
                priceError: false,
                helperTextPrice : ''
            },
            titleErrorInfo: {
                titleError: false,
                helperTextTitle : ''
            },
            descrErrorInfo: {
                descrError: false,
                helperTextDescr : ''
            },
            productAdded: true
        });

        // localStorage.setItem('masks', JSON.stringify([...data, info]));
        // addProduct(info);
    }


    render() {
        const {productInfo, priceErrorInfo, titleErrorInfo, descrErrorInfo} = this.state;
        const {title, descr ,price} = productInfo;
        const { priceError, helperTextPrice} = priceErrorInfo;
        const { titleError, helperTextTitle} = titleErrorInfo;
        const { descrError, helperTextDescr} = descrErrorInfo;
        const {roles}=this.props;
        console.log(roles)

        return (
            <div className="form-wrapper">
                <form action="">
                    <div className="form-item">
                        <TextField
                            error={titleError}
                            id="outlined-basic"
                            className="input-field"
                            label="Title"
                            margin="normal"
                            variant="outlined"
                            name="title"
                            helperText={helperTextTitle}
                            value={title}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-item">
                        <TextField
                            error={descrError}
                            id="outlined-multiline-static"
                            label="Description"
                            multiline
                            rows="4"
                            className="textarea-field"
                            margin="normal"
                            variant="outlined"
                            name="descr"
                            helperText={helperTextDescr}
                            value={descr}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-item">
                        <TextField
                            error={priceError}
                            id="outlined-basic"
                            className="input-field"
                            label="Price"
                            margin="normal"
                            variant="outlined"
                            name="price"
                            helperText={helperTextPrice}
                            value={price}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-item button-block">
                        <Button variant="contained" color="primary" className='' onClick={this.addProduct}>
                            Add product
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(state => ({ roles: state.roles}), {addProduct})(Add);
