import React from 'react';
import {connect} from 'react-redux';
import More from '../Components/More';

class MoreContainer extends React.Component {

    render() {
        return (
            <More {...this.props} />
        )
    }
}

export default connect((state) => {
    const {MoreContainer} = state;
    return {
        MoreReducer
    }
})(MoreContainer);
