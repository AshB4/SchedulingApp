import React from "react";
import {
    makeStyles,
    Checkbox,
} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    icon: {
        borderRadius: 4,
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px #CBD0D5, inset 0 -1px 0 #CBD0D5',
        backgroundColor: '#F8F9FA',
        'input:hover ~ &': {
            outline: '2px solid #F8A457',
            backgroundColor: '#FFFFFF',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: '#6B7280',
        },
    },
    checkedIcon: {
        backgroundColor: '#0066AD',
        boxShadow: 'inset 0 0 0 1px #0066AD',
        '&:before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundImage:
                "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
                " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
                "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#0066AD',
        },
    },
    container: {
        display: 'flex',
        alignSelf: 'center',
        alignItems: 'center',
        height: 20,
    },
    label: {
        fontSize: 14,
        marginRight: 8,
    }
})

export default function CheckboxComp (props) {
    const classes = useStyles()
    const checkLabel = props.label
    // To use this component in another component, use as:
    // function parentComponent() {
    //     const [ checked, setChecked ] = useState(false)

    //     function handleChangeA (event) {
    //       setChecked(event.target.checked)
    //     }

    //     return (
    //         <CheckboxComp
    //           checked={checked}
    //           onChange={handleChange}
    //         />
    //     );
    // }

    return (
        <div className={classes.container}>
            <Checkbox
                className={classes.root}
                disableRipple
                color="default"
                checkedIcon={<span className={`${classes.icon} ${classes.checkedIcon}`} />}
                icon={<span className={classes.icon} />}
                {...props}
            />
            <span className={classes.label}>{checkLabel}</span>
        </div>
    )
}
