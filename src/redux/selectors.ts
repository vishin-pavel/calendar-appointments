const getRemindersFromState = (state) => {
    return state.reminders
}
export const remindersForDay = (day: Date, state) =>{
    const reminders = getRemindersFromState(state);
    reminders.fiter()
}