import React from 'react';
import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withRouter } from 'react-router'
//Icons
import { FiGrid } from 'react-icons/fi';
import { FiUsers } from 'react-icons/fi';
import { FiSettings } from 'react-icons/fi';
import { FiClipboard } from 'react-icons/fi';
import { FiList } from 'react-icons/fi';
import { TitleConsumer } from '../../Context/TitleContext';

const styles = {
    fontSize: {
        fontSize: '22px'
    }
}

const options = [
    {
        name: 'Dashboard',
        icon: <FiGrid style={styles.fontSize} />,
        path: '/'
    },
    {
        name: 'Applicants',
        icon: <FiUsers style={styles.fontSize} />,
        path: '/applicants'
    },
    {
        name: 'Settings',
        icon: <FiSettings style={styles.fontSize} />,
        path: '/settings'
    },
    {
        name: 'Template',
        icon: <FiClipboard style={styles.fontSize} />,
        path: '/template'
    },
    {
        name: 'Topics',
        icon: <FiList style={styles.fontSize} />,
        path: 'topics'
    }
]

class DrawerDataList extends React.Component {

    state = {
        selectedItem: this.props.history.location.pathname,
    };

    handleListItemClick = (_, option, ) => {
        this.setState({ selectedItem: option.path });
        this.props.history.push(option.path)
    };

    componentDidMount() {
        const newTitle = options.filter(o => o.path === this.props.history.location.pathname)[0].name;
        this.props.changeTitle(newTitle);
    }

    render() {
        return (

            <React.Fragment>
                <List>
                    {options.map((option, index) => (
                        <TitleConsumer key={index}>
                            {
                                context => (
                                    <ListItem selected={this.state.selectedItem === option.path} button onClick={event => this.handleListItemClick(event, option, context)}>
                                        <ListItemIcon>
                                            {
                                                option.icon
                                            }
                                        </ListItemIcon>
                                        <ListItemText primary={option.name} />
                                    </ListItem>
                                )
                            }
                        </TitleConsumer>

                    ))}
                </List>
            </React.Fragment>

        )
    }
}

export default withRouter(DrawerDataList);