import React from "react"
import { PropTypes } from 'prop-types'
import { Button } from "@material-ui/core"

export function ButtonSimple({ color, label }) {

    return (
        <Button color={color} variant="contained">{label}</Button>
    )
}


ButtonSimple.propTypes = {
    color: PropTypes.oneOf(['primary', 'secondary', 'error', 'warning', 'info', 'success']),
    label: PropTypes.string.isRequired
}

ButtonSimple.defaultProps = {

}