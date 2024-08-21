import PropTypes from 'prop-types'

// form

import {useFormContext,Controller} from 'react-hook-form'

// mui

import { TextField} from '@mui/material'
RFHTextField.propTypes={
    name:PropTypes.string,
    helperText:PropTypes.node
}

export default  function RFHTextField({name,helperText,...other}){

    const {control} = useFormContext()


    return(
        <Controller name={name} control={control} render={({field,fieldState:{error}})=>{
            return <TextField {...field} fullWidth error={!!error} helperText={error?error.message:helperText} {...other}/>
        }}/>
    )
 }