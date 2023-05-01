import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { PropTypes } from 'prop-types'
import './style.css'

const useStyles = makeStyles({
    root: {
        alignSelf: 'start',
        minWidth: '309px',
        maxHeight: '42px',
        padding: '12px',
        border: '1px solid #E1E3E8',
        borderRadius: '8px',
        backgroundColor: '#F8F9FA',
        color: '#949AA4',
        fontSize: '14px',
        outline: 'none',
        '&:focus': {
            border: '1px solid #0066AD'
        },
    },
    errorStyle: {
        width: '325px',
        minWidth: '309px',
        maxHeight: '42px',
        padding: '12px',
        border: '1px solid #E4002B',
        borderRadius: '8px',
        backgroundColor: '#FFE5EA',
        color: '#770016',
        fontSize: '14px',
        outline: 'none',
    },
  });

export default function TextBoxComp (props) {
    // console.log('props', props)
    const classes = useStyles()
    const error = props.error
    const disabled = props.disabled
    const placeholder = props.placeholder
    const [value, setValue] = useState('')

    let textBox;
    if (disabled) {
        textBox = <input
                    placeholder='Disabled'
                    type='text'
                    className={`${classes.root} textBox-normal`}
                    disabled
                    />
    } else if (error) {
        textBox = <div className='textBox-error'>
            <input
                placeholder={placeholder || 'Danger input'}
                type='text'
                value={value}
                onChange={e => setValue(e.target.value)}
                className={`${classes.errorStyle} textBox-error`}
            />
            <span className='helperText-error'>
                <b>Oh snape!</b> There was an error.</span>
        </div>
    } else {
        textBox = <input
                    placeholder={placeholder || 'Simple Empty'}
                    type='text'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    className={`${classes.root} textBox-normal`}
                    />
    }
    return (
        <>
            {textBox}
        </>
    )
}

TextBoxComp.propTypes={
    valueSB: PropTypes.string
}
