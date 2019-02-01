import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MiniDrawer from './MiniDrawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withRouter } from 'react-router';

const styles = theme => ({
    root: {
        display: 'flex',
        overflow: 'hidden'
    },
    mainContent: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100vh',
        overflow: 'hidden'
    },
    content: {
        flexGrow: 1,
        // padding: '0 24px',
        overflow: 'hidden'
    }
});

class CustomDrawer extends React.Component {
    state = {
        toolbarTitle: 'Non title',
        setTitle: (title) => this.changeTitle(title)
    };

    changeTitle = (newTitle) => {
        this.setState({
            toolbarTitle: newTitle
        })
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <CssBaseline />
                <MiniDrawer changeTitle={this.state.setTitle} />
                <div className={classes.mainContent}>
                    <main className={classes.content}>
                        {
                            this.props.body
                        }
                    </main>
                </div>
            </div>
        );
    }
}

CustomDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles, { withTheme: true })(CustomDrawer));
