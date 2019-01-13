import React from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

class NotFoundPage extends React.Component {
    render() {
        return (
            <Typography>
                Not found page.
            </Typography>
        );
    }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(NotFoundPage);