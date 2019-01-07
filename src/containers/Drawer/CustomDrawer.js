import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MiniDrawer from './MiniDrawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { TitleProvider, TitleConsumer } from '../../Context/TitleContext';
import { withRouter } from 'react-router'

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
            <TitleProvider value={this.state}>
                <div className={classes.root}>
                    <CssBaseline />
                    <MiniDrawer changeTitle={this.state.setTitle} />
                    <div className={classes.mainContent}>
                        <AppBar position="static">
                            <Toolbar>
                                <TitleConsumer>
                                    {
                                        context => (<Typography variant="h6" color="inherit" noWrap>
                                            {
                                                context.toolbarTitle
                                            }
                                        </Typography>)
                                    }
                                </TitleConsumer>
                            </Toolbar>
                        </AppBar>
                        <main className={classes.content}>
                            {
                                this.props.body
                            }
                        </main>
                    </div>
                </div>
            </TitleProvider>
        );
    }
}

CustomDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles, { withTheme: true })(CustomDrawer));
