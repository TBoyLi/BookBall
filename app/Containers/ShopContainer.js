import React from 'react';
import {connect} from 'react-redux';
import Shop from '../Components/Shop';

export default class ShopContainer extends React.Component {

    render() {
        return (
            <Shop {...this.props} />
        )
    }
}

// export default connect((state) => {
//     const {ShopContainer} = state;
//     return {
//         ShopReducer
//     }
// })(ShopContainer);
