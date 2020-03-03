import React from 'react';
import moment from 'moment'
import {ListItem, Avatar, ListItemText} from '@material-ui/core'
import {withStyles, createStyles} from '@material-ui/core/styles';

const styles = (theme) => createStyles({

    small: {
        fontSize: "10px",
        height: "25%",
        padding: 0,
        "& .reminder-color-circle": {
            height: "20px",
            width: "20px",
        }
    },
    primaryText: {
        fontSize: "0.8rem",
    },
    secondaryText: {
        fontSize: "0.5rem",
    }
});

interface ReminderProps {
    id: string,
    text: string,
    start: Date,
    end: Date,
    color: string,
    classes: any,
    small: boolean
}

const Reminder: React.FC<ReminderProps> = ({start, end, color, text, small, ...props}) => {
    const {classes} = props;
    let listItemTextClasses = {};
    if (!!small) {
        listItemTextClasses = {
            primary: classes.primaryText,
            secondary: classes.secondaryText
        }
    }
    return (
        <ListItem className={small&&classes.small}>
            <Avatar style={{backgroundColor: color}} className={"reminder-color-circle"}>
            </Avatar>
            <ListItemText classes={listItemTextClasses} primary={text}
                          secondary={`${moment(start).format('hh:mm')} - ${moment(end).format('hh:mm')}`}/>
        </ListItem>
    );
};

export default withStyles(styles)(Reminder);