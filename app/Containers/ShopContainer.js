import React from 'react';
import {connect} from 'react-redux';
import Shop from '../Components/Shop';

class ShopContainer extends React.Component {

    render() {
        return (
            <Shop {...this.props} />
        )
    }
}

export default connect((state) => {
    const {ShopContainer} = state;
    return {
        ShopReducer
    }
})(ShopContainer);
