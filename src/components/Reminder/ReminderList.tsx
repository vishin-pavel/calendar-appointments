import React from 'react';
import {List} from '@material-ui/core'
import PropTypes from 'prop-types';
import Reminder from "./Reminder";

interface ReminderListProps {
    reminders: { id: string, text: string, start: Date, end: Date, color: string }[]
    ofSmall: boolean
}

const ReminderList: React.FC<ReminderListProps> = ({reminders,ofSmall}) => {
    return (
        <List>
            {reminders.map((reminder) =>
                <Reminder
                    key={reminder.id}
                    id={reminder.id}
                    start={reminder.start}
                    end={reminder.end}
                    color={reminder.color}
                    text={reminder.text}
                    small = {ofSmall}
                />
            )}
        </List>
    );
};

ReminderList.propTypes = {};

export default ReminderList;