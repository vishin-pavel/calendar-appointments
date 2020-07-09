import { connect } from 'react-redux';
import CalendarDay from './CalendarDay';
import { openAgenda } from '../../redux/actions';
import {getRemindersForDay} from "../../redux/selectors";

interface Props {
	dateObj?:{date:Date}
}

interface State {

}

interface DateObj {
	date: Date
}

const mapStateToProps = (state: State, ownProps: Props) => {
	return {
		...state,
		...ownProps,
		reminders: getRemindersForDay(ownProps.dateObj.date, state),
	};
}

const mapDispatchToProps = (dispatch: any)=> {
	return {
		onDayClick: (dateObj: DateObj) => {
			dispatch( openAgenda( dateObj ) )
		}
	}
}

const CalendarDayContainer = connect( mapStateToProps, mapDispatchToProps )( CalendarDay );

export default CalendarDayContainer;
