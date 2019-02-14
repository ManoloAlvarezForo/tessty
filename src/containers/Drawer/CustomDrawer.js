import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MiniDrawer from './MiniDrawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withRouter } from 'react-router';
import CustomToolBar from './CustomToolBar';
import { ToolBarOptionsConsumer, ToolBarOptionsProvider } from '../../Context/ToolBarOptionsContext';

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
    },
    beforeRoot: {
        width: '100%',
        height: '100%',
        overflow: 'hidden'
    }
});

class CustomDrawer extends React.Component {
    state = {
        toolbarTitle: 'Non title',
        setTitle: (title) => this._changeTitle(title),
        additional: '',
        setAdditionalComponent: (component) => this._setAdditionalComponent(component)
    };

    // static getDerivedStateFromProps(_, state) {
    //     return (state.additional) ? { additional: '' } : null;
    // }

    _changeTitle = (newTitle) => {
        this.setState({
            toolbarTitle: newTitle
        })
    }

    _setAdditionalComponent = component => {
        this.setState({
            additional: component
        })
    }

    render() {
        const { classes } = this.props;
        const Body = this.props.body;

        return (
            <ToolBarOptionsProvider value={this.state}>
                <div className={[classes.beforeRoot, "app-wrapper-web"].join(' ')}>
                    <div className={[classes.root, '_3dqpi'].join(' ')}>
                        <CssBaseline />
                        <MiniDrawer changeTitle={this.state.setTitle} />
                        <div className={classes.mainContent}>
                            <CustomToolBar title={this.state.toolbarTitle} additional={this.state.additional} />
                            <main className={classes.content}>
                                <ToolBarOptionsConsumer>
                                    {
                                        context => (
                                            <Body context={context} changeTitle={this.state.setTitle} />
                                        )
                                    }
                                </ToolBarOptionsConsumer>
                            </main>
                        </div>
                    </div>
                </div>
            </ToolBarOptionsProvider>
        );
    }
}

CustomDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles, { withTheme: true })(CustomDrawer));
