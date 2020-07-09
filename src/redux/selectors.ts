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
    let filteredReminders =  reminders.filter((reminder) => moment(reminder.start).isSame(day, 'day'));
    filteredReminders.sort((a, b)=> moment(a.start).isAfter(b.start)?1:-1);
    return filteredReminders;
}