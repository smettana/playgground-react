import React from 'react';
import { connect } from 'react-redux';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import { changeRole } from '../actions/actionCreator';

const _Footer = (props) => {
  const [state, setState] = React.useState({
    checkedA: props.roles.admin,
  });

  const handleChange = name => event => {
    console.log(props)
    const { changeRole } = props;
    setState({ ...state, [name]: event.target.checked });
    changeRole(event.target.checked);
  };

  
  return (

    <div className="footer">
      <div className="footer__wrapper">
        <div className="copy">
          All rights reserved 2019
        </div>
        <FormControlLabel
          control={
            <Switch checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" color="primary"/>
          }
          label={state.checkedA ? 'Admin' : 'Not admin'}
          
        />
      </div>
    </div>
  );
}

const Footer = connect(
  state => ({
      roles: state.roles
  }),
  {changeRole}
)(_Footer);

export default Footer;
