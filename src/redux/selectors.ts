import moment from "moment";

const getRemindersFromState = (state) => {
    if (Array.isArray(state.reminders)) {
        return state.reminders
    } else {
        return []
    }
}
export const getRemindersForDay = (day: Date, state) => {
    const reminders = getRemindersFromState(state);
    return reminders.filter((reminder) => moment(reminder.start).isSame(day, 'day'))
}