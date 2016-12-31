import React from 'react';
import {connect} from 'react-redux';
import Me from '../Components/Me';

export default class MeContainer extends React.Component {

    render() {
        return (
            <Me {...this.props} />
        )
    }
}

// export default connect((state) => {
//     const {MeContainer} = state;
//     return {
//         MeReducer
//     }
// })(MeContainer);
