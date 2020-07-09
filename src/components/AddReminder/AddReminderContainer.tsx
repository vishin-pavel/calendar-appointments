import { connect } from 'react-redux';
import AddReminder from './AddReminder';
import {addReminder, closeAddReminder} from '../../redux/actions';

interface State {
	addReminderStatus: {
		isOpen: boolean
	}
}

const mapStateToProps = (state:State) => {
	return { 
		isOpen: state.addReminderStatus.isOpen
	};
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		onClose: () => {
			dispatch( closeAddReminder() );
		},
		onAddClick: (reminder) => {
			dispatch( addReminder(reminder))
		}
	}
}

const AddReminderContainer = connect( mapStateToProps, mapDispatchToProps )( AddReminder );

export default AddReminderContainer;
