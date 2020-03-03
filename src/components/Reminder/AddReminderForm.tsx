import React, {useState} from 'react';
import {CirclePicker} from 'react-color';
import {MuiPickersUtilsProvider, TimePicker, DatePicker} from 'material-ui-pickers';
import {TextField, Button} from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns';
import {withStyles, createStyles} from '@material-ui/core/styles';
import {useForm} from 'react-hook-form'

const styles = (theme) => createStyles({
    form: {
        marginBottom: "10px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        justifyContent: "center",
        [theme.breakpoints.down("xs")]: {
            gridTemplateColumns: "1fr",
        },
    },
    colorPickerWrapper: {
        display: "inline-flex",
        margin: "10px",
    },
    reminderText: {},
    colorPickerReflection: {
        content: `''`,
        height: "100%",
        width: "10px",
        position: "absolute",
        borderRadius: "3px 0 0 3px",
        left: 0,
        top: 0,
    }
});

interface AddReminderFormProps {
    onAddClick: Function
    closeHandler: Function
    classes:any
}

const AddReminderForm: React.FC<AddReminderFormProps> = ({onAddClick, closeHandler, ...props}) => {
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = data => {
        onAddClick({
            id:'',
            color:color,
            start: startDateTime,
            end: endDateTime,
            text:text
        })
        closeHandler();
    };
    const {classes} = props;
    const [startDateTime, setStartDateTime] = useState(new Date());
    const [endDateTime, setEndDateTime] = useState(new Date());
    const [text, setText] = useState('');
    const [color, setColor] = useState('#eee');

    // Hack to add ref to DatePicker's input
    const TextFieldWithRef = (ref) => (props) => <TextField inputRef={ref} {...props} />;

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <form
                className={classes.form}
                onSubmit={handleSubmit(onSubmit)}
            >
                <DatePicker
                    id={"newReminderStartDate"}
                    name={"newReminderStartDate"}
                    margin="normal"
                    label="Start date"
                    value={startDateTime}
                    onChange={date => setStartDateTime(date)}
                    style={{margin: 10}}
                    TextFieldComponent={TextFieldWithRef(register)}
                />
                <TimePicker
                    id={"newReminderStartTime"}
                    name={"newReminderStartTime"}
                    margin="normal"
                    label="Start time"
                    value={startDateTime}
                    onChange={date => setStartDateTime(date)}
                    style={{margin: 10}}
                    TextFieldComponent={TextFieldWithRef(register)}
                />
                <DatePicker
                    id={"newReminderEndDate"}
                    name={"newReminderEndDate"}
                    margin="normal"
                    label="End date"
                    value={endDateTime}
                    onChange={date => setEndDateTime(date)}
                    style={{margin: 10}}
                    TextFieldComponent={TextFieldWithRef(register)}
                />
                <TimePicker
                    id={"newReminderEndTime"}
                    name={"newReminderEndTime"}
                    margin="normal"
                    label="End time"
                    value={endDateTime}
                    onChange={date => setEndDateTime(date)}
                    style={{margin: 10}}
                    TextFieldComponent={TextFieldWithRef(register)}
                />
                <TextField
                    className={classes.reminderText}
                    id={"newReminderText"}
                    name={"newReminderText"}
                    multiline
                    label="Text"
                    rows="4"
                    variant={"outlined"}
                    placeholder={"Do something great"}
                    value={text}
                    onChange={e => setText(e.target.value)}
                    style={{
                        margin: 10,
                        borderColor: color
                    }}
                    InputProps={{
                        startAdornment: <div className={classes.colorPickerReflection}
                                             style={{backgroundColor: color}}>{``}</div>,
                    }}
                    inputRef={register({required: true, maxLength: 30})}
                    error={!!errors.newReminderText}
                    helperText={`${text.length} characters (max 30)`}
                />
                <div className={classes.colorPickerWrapper}>
                    <CirclePicker
                        color={color}
                        onChange={(color) => {
                            setColor(color.hex)
                        }}
                    />
                    <label htmlFor="newReminderColor" style={{display: "none"}}>Color</label>
                    <input id={"newReminderColor"}
                           name={"newReminderColor"}
                           ref={register}
                           type="text"
                           style={{display: "none"}}
                           defaultValue={color}/>
                </div>
                <div>
                    <Button
                        variant={"contained"}
                        color={"primary"}
                        type={"submit"}
                        style={{margin: 10}}
                    > Add </Button>
                </div>
            </form>
        </MuiPickersUtilsProvider>
    );
};

AddReminderForm.propTypes = {};

export default withStyles(styles)(AddReminderForm);