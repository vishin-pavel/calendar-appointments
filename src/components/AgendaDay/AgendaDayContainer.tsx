import { connect } from 'react-redux';
import AgendaDay from './AgendaDay';
import { closeAgenda } from '../../redux/actions';
import {getRemindersForDay} from "../../redux/selectors";

interface Props {}

interface State {
	agendaStatus: {
		isOpen: boolean,
		date: Date
	}
}

const mapStateToProps = ( state: State, ownProps: Props ) => {
	const { agendaStatus } = state;

	return {
		agendaStatus,
		reminders: getRemindersForDay(agendaStatus.date, state)
	};
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		onClose: () => {
			dispatch( closeAgenda() );
		}
	}
}

const AgendaDayContainer = connect( mapStateToProps, mapDispatchToProps )( AgendaDay );

export default AgendaDayContainer;
