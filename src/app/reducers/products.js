import {ADD_PRODUCT, DELETE_PRODUCT, DELETE_ALL_PRODUCTS} from '../../constants';

import { load } from 'redux-localstorage-simple';

let INFO = load({namespace: 'shop-info'});

if(!INFO || !INFO.products || !INFO.products.length){
    INFO = {
        products: [
            {
                'id':1,
                'title':'BS DIVER APNOICUS',
                'img':'http://ihtiandr.od.ua/image/cache/catalog/img/bs/mask/mamba_clear-220x220.jpg',
                'descr':'Ea minim pariatur fugiat dolor nulla exercitation. Duis fugiat laboris laborum ut minim et tempor non laborum eu aliquip.',
                'price' : 400
            },
            {
                'id':2,
                'title':'BS DIVER ASTRA',
                'img':'http://ihtiandr.od.ua/image/cache/catalog/img/bs/mask/mamba-220x220.jpg',
                'descr':'Ea minim pariatur fugiat dolor nulla exercitation. Duis fugiat laboris laborum ut minim et tempor non laborum eu aliquip.',
                'price' : 500
            },
            {
                'id':3,
                'title':'BS DIVER HUMMER',
                'img':'http://ihtiandr.od.ua/image/cache/catalog/img/bs/mask/mirolla_clear-220x220.jpg',
                'descr':'Ea minim pariatur fugiat dolor nulla exercitation. Duis fugiat laboris laborum ut minim et tempor non laborum eu aliquip.',
                'price' : 450
            },
            {
                'id':4,
                'title':'BS DIVER MATADOR',
                'img':'http://ihtiandr.od.ua/image/cache/catalog/img/bs/mask/mirola-220x220.jpg',
                'descr':'Ea minim pariatur fugiat dolor nulla exercitation. Duis fugiat laboris laborum ut minim et tempor non laborum eu aliquip.',
                'price' : 500.35
            },
            {
                'id':5,
                'title':'BS DIVER MIROMAX',
                'img':'http://ihtiandr.od.ua/image/cache/catalog/img/salvimar/mask/fluid_apnea-220x220.jpg',
                'descr':'Ea minim pariatur fugiat dolor nulla exercitation. Duis fugiat laboris laborum ut minim et tempor non laborum eu aliquip.',
                'price' : 600
            },
            {
                'id':6,
                'title':'BS DIVER SUPERVIZOR',
                'img':'http://ihtiandr.od.ua/image/cache/catalog/img/salvimar/mask/incredible_1-220x220.jpg',
                'descr':'Ea minim pariatur fugiat dolor nulla exercitation. Duis fugiat laboris laborum ut minim et tempor non laborum eu aliquip.',
                'price' : 700
            },
            {
                'id':7,
                'title':'CRESSI MOON KID',
                'img':'http://ihtiandr.od.ua/image/cache/catalog/img/salvimar/mask/incredible_2-220x220.jpg',
                'descr':'Ea minim pariatur fugiat dolor nulla exercitation. Duis fugiat laboris laborum ut minim et tempor non laborum eu aliquip.',
                'price' : 300
            },
            {
                'id':8,
                'title':'CRESSI NANO',
                'img':'http://ihtiandr.od.ua/image/cache/catalog/img/salvimar/mask/incredible-220x220.jpg',
                'descr':'Ea minim pariatur fugiat dolor nulla exercitation. Duis fugiat laboris laborum ut minim et tempor non laborum eu aliquip.',
                'price' : 400
            },
            {
                'id':9,
                'title':'CRESSI PIUMA EVOLUTION CRYSTAL ',
                'img':'http://ihtiandr.od.ua/image/cache/catalog/img/salvimar/mask/salvimar_maxale-220x220.jpg',
                'descr':'Ea minim pariatur fugiat dolor nulla exercitation. Duis fugiat laboris laborum ut minim et tempor non laborum eu aliquip.',
                'price' : 600
            }
        ],
    }
}
// const DATA = [
//     {
//         'id':1,
//         'title':'BS DIVER APNOICUS',
//         'img':'http://ihtiandr.od.ua/image/cache/catalog/img/bs/mask/mamba_clear-220x220.jpg',
//         'descr':'Ea minim pariatur fugiat dolor nulla exercitation. Duis fugiat laboris laborum ut minim et tempor non laborum eu aliquip.',
//         'price' : 400
//     },
//     {
//         'id':2,
//         'title':'BS DIVER ASTRA',
//         'img':'http://ihtiandr.od.ua/image/cache/catalog/img/bs/mask/mamba-220x220.jpg',
//         'descr':'Ea minim pariatur fugiat dolor nulla exercitation. Duis fugiat laboris laborum ut minim et tempor non laborum eu aliquip.',
//         'price' : 500
//     },
//     {
//         'id':3,
//         'title':'BS DIVER HUMMER',
//         'img':'http://ihtiandr.od.ua/image/cache/catalog/img/bs/mask/mirolla_clear-220x220.jpg',
//         'descr':'Ea minim pariatur fugiat dolor nulla exercitation. Duis fugiat laboris laborum ut minim et tempor non laborum eu aliquip.',
//         'price' : 450
//     },
//     {
//         'id':4,
//         'title':'BS DIVER MATADOR',
//         'img':'http://ihtiandr.od.ua/image/cache/catalog/img/bs/mask/mirola-220x220.jpg',
//         'descr':'Ea minim pariatur fugiat dolor nulla exercitation. Duis fugiat laboris laborum ut minim et tempor non laborum eu aliquip.',
//         'price' : 500.35
//     },
//     {
//         'id':5,
//         'title':'BS DIVER MIROMAX',
//         'img':'http://ihtiandr.od.ua/image/cache/catalog/img/salvimar/mask/fluid_apnea-220x220.jpg',
//         'descr':'Ea minim pariatur fugiat dolor nulla exercitation. Duis fugiat laboris laborum ut minim et tempor non laborum eu aliquip.',
//         'price' : 600
//     },
//     {
//         'id':6,
//         'title':'BS DIVER SUPERVIZOR',
//         'img':'http://ihtiandr.od.ua/image/cache/catalog/img/salvimar/mask/incredible_1-220x220.jpg',
//         'descr':'Ea minim pariatur fugiat dolor nulla exercitation. Duis fugiat laboris laborum ut minim et tempor non laborum eu aliquip.',
//         'price' : 700
//     },
//     {
//         'id':7,
//         'title':'CRESSI MOON KID',
//         'img':'http://ihtiandr.od.ua/image/cache/catalog/img/salvimar/mask/incredible_2-220x220.jpg',
//         'descr':'Ea minim pariatur fugiat dolor nulla exercitation. Duis fugiat laboris laborum ut minim et tempor non laborum eu aliquip.',
//         'price' : 300
//     },
//     {
//         'id':8,
//         'title':'CRESSI NANO',
//         'img':'http://ihtiandr.od.ua/image/cache/catalog/img/salvimar/mask/incredible-220x220.jpg',
//         'descr':'Ea minim pariatur fugiat dolor nulla exercitation. Duis fugiat laboris laborum ut minim et tempor non laborum eu aliquip.',
//         'price' : 400
//     },
//     {
//         'id':9,
//         'title':'CRESSI PIUMA EVOLUTION CRYSTAL ',
//         'img':'http://ihtiandr.od.ua/image/cache/catalog/img/salvimar/mask/salvimar_maxale-220x220.jpg',
//         'descr':'Ea minim pariatur fugiat dolor nulla exercitation. Duis fugiat laboris laborum ut minim et tempor non laborum eu aliquip.',
//         'price' : 600
//     }
// ];

const products = (state=INFO.products, {id, title, descr, price, img, type}) => {
    switch (type){
        case ADD_PRODUCT: 
            return [
                ...state, {
                    id,
                    title,
                    descr,
                    price,
                    img
                }
            ];
        case DELETE_PRODUCT: 
            return [...state].filter(item=>item.id !== id);
        case DELETE_ALL_PRODUCTS: 
            return [];
        default:
            return state;    
    }
}

export default products;