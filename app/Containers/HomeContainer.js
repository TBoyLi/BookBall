import React from 'react';
import {connect} from 'react-redux';
import Home from '../Components/Home';

export default class HomeContainer extends React.Component {

    render() {
        return (
            <Home {...this.props}/>
        )
    }
}

// export default connect((state) => {
//     const {HomeContainer} = state;
//     return {
//         HomeReducer
//     }
// })(HomeContainer);
