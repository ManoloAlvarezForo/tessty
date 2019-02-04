import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 800,
        backgroundColor: theme.palette.background.paper,
        borderRadius: '5px'
    },
    inline: {
        display: 'inline',
    },
});

const ApplicantList = (props) => {
    const { classes, list } = props;
    return (
        <div style={{ padding: '10px 0', display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
            <List className={classes.root} >
                {
                    list.map((item, index) => {
                        return (
                            <div key={index} >
                                <ListItem onClick={() => props.selectedAction(item.id)} alignItems="flex-start" button style={{ borderRadius: '5px' }}>
                                    <ListItemAvatar>
                                        <Avatar src={item.avatar}>{item.avatar === "" && (item.name[0])}</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={`${item.name} ${item.lastName}`}
                                        secondary={
                                            <React.Fragment>
                                                <Typography component="span" className={classes.inline} color="textPrimary">
                                                    {item.phones.list.length === 0 ? `No Phones - ` : `${item.phones.list[0].number} - `}
                                                </Typography>
                                                {`${`${item.mails.list.length === 0 ? 'No Mails' : item.mails.list[0].mail} - `}${`${item.position === "" ? 'No Position' : item.position}`}`}
                                            </React.Fragment>
                                        }
                                    />

                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </div>
                        )
                    })
                }
            </List>
        </div>
    );
}

ApplicantList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ApplicantList);