import {CHANGE_ROLE} from '../../constants';

import { load } from 'redux-localstorage-simple';

let INFO = load({namespace: 'shop-info'});

if(!INFO || !INFO.roles){
    INFO = {
        admin: true
    }
}else{
    let adminRole = INFO.roles.admin
    INFO = {
        admin: adminRole
    }
}
// const DEFAULT_ROLE = {
//     admin:true
// }


const roles = (state=INFO, {type, adminRole}) => {
    switch (type){
        case CHANGE_ROLE: 
            let roles = {...state};
            roles.admin = adminRole
            return roles;
        default:
            return state;    
    }
}

export default roles;