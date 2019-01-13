import React from 'react';
import { connect } from 'react-redux';
import {
    Grid
} from '@material-ui/core';
import MainContentPanels from '../MainContentPanels/mainContentPanels';

class LandingPage extends React.Component {
    
    
    render() {
        return (
            <Grid
                container
            >
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                        <MainContentPanels></MainContentPanels>
                    </Grid>
                    <Grid item xs={1}></Grid>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    classes: state.classes,
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)((LandingPage));