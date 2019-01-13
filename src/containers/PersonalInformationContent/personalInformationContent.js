import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PhotoCard from '../PersonalInformationContent/photoCard';
import { Grid } from '@material-ui/core';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '90%',
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class PersonalInformationContent extends React.Component {
  
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (

      <Grid container>
        <Grid item xs={4}>
          <Grid container direction="row" justify="center" alignContent="stretch" alignItems="stretch">
           <Grid item xs={12}>
            <PhotoCard></PhotoCard>
           </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                  required
                  fullWidth
                  id="standard-name"
                  label="Full name"
                  className={classes.textField}
                  onChange={this.handleChange('name')}
                  margin="normal"
                />
            </Grid>
            <Grid item xs={12}>
              <TextField
                  required
                  fullWidth
                  id="standard-name"
                  label="LinkedIn profile link"
                  className={classes.textField}
                  onChange={this.handleChange('name')}
                  margin="normal"
                />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
        <Grid container>
            <Grid item xs={12}>
              <TextField
                  fullWidth
                  id="standard-name"
                  label="City, country"
                  className={classes.textField}
                  onChange={this.handleChange('name')}
                  margin="normal"
                />
            </Grid>
            <Grid item xs={12}>
              <TextField
                  required
                  fullWidth
                  id="standard-name"
                  label="Phone number"
                  className={classes.textField}
                  onChange={this.handleChange('name')}
                  margin="normal"
                />
            </Grid>
            <Grid item xs={12}>
              <TextField
                  required
                  fullWidth
                  id="standard-name"
                  label="Email"
                  className={classes.textField}
                  onChange={this.handleChange('name')}
                  margin="normal"
                />
            </Grid>
            <Grid item xs={12}>
              <TextField
                  fullWidth
                  id="standard-name"
                  label="Skype"
                  className={classes.textField}
                  onChange={this.handleChange('name')}
                  margin="normal"
                />
            </Grid>
            <Grid item xs={12}>
              <TextField
                  fullWidth
                  style={{ margin: 8 }}
                  id="standard-name"
                  label="Project name"
                  className={classes.textField}
                  onChange={this.handleChange('name')}
                  margin="normal"
                />
            </Grid>
        </Grid>

        
      </Grid>

      </Grid>
    );
  }
}

PersonalInformationContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PersonalInformationContent);
