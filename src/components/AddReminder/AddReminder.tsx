import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { WithStyles, withStyles, createStyles, Theme } from '@material-ui/core/styles';
import AddReminderForm from '../Reminder/AddReminderForm'

const styles = (theme: Theme) => createStyles({
	addReminderFormContainer: {
		minHeight: '250px',
		marginTop: '10px',
		display: 'flex',
		flexDirection: 'column'
	},
	closeButton: {
		position: 'absolute',
		right: '10px',
		top: '10px'
	}
});

interface Props extends WithStyles<typeof styles>{
	isOpen: boolean,
	onClose: () => void
	onAddClick: ()=> void
}

const AddReminder = (props: Props) => {
		const { classes, isOpen, onClose, onAddClick } = props;
		return (
			<Dialog
				open={ isOpen }
				onClose={onClose}
				aria-labelledby='form-dialog-title'
				fullWidth={ true }
				maxWidth='md'
			>
				<DialogTitle id='form-dialog-title'>
					Add Reminder
					<IconButton aria-label='Close' className={ classes.closeButton } onClick={onClose}>
						<CloseIcon />
					</IconButton>
				</DialogTitle>
				<Divider light />
				<DialogContent className={ classes.addReminderFormContainer }>
					<AddReminderForm onAddClick={ onAddClick } closeHandler={onClose}/>
				</DialogContent>
			</Dialog>
		);
}

export default withStyles(styles)( AddReminder );
