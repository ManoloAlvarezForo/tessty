import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MiniDrawer from './MiniDrawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        display: 'flex',
        overflow: 'hidden'
    },
    mainContent: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
});

const WithDrawer = (WrapperComponent) => {

    class Main extends React.Component {
        state = {
            toolbarTitle: this.props.title || 'Non title'
        };

        render() {
            const { classes } = this.props;

            return (
                <div className={classes.root}>
                    <MiniDrawer />
                    <div className={classes.mainContent}>
                        <AppBar position="static">
                            <Toolbar>
                                <Typography variant="h6" color="inherit" noWrap>
                                    {
                                        this.state.toolbarTitle
                                    }
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <main className={classes.content}>
                            <WrapperComponent {...this.props} />
                        </main>
                    </div>

                </div>
            );
        }
    }

    Main.propTypes = {
        classes: PropTypes.object.isRequired,
        theme: PropTypes.object.isRequired,
    };

    return withStyles(styles, { withTheme: true })(Main);
}

export default WithDrawer;
