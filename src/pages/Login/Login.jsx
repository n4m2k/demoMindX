import React from 'react'
import LoginForm from './LoginForm'
import { useDispatch } from 'react-redux'
import { login } from '../../components/Auth/userSlice';
import { unwrapResult } from '@reduxjs/toolkit';
// import { useSnackbar } from '@mui/base';
import { useSnackbar } from 'notistack';

const Login = (props) => {
    const { enqueueSnackbar } = useSnackbar()
    const dispatch = useDispatch()
    const handleSubmit = async (values) => {
        try {
            const action = login(values)
            const resultAction = await dispatch(action)
            unwrapResult(resultAction)

            const { closeDialog } = props
            if (closeDialog) {
                closeDialog()
            }
        } catch (error) {
            enqueueSnackbar(error.message, { variant: 'error' })
        }
    }

    return (
        <div>
            <LoginForm onSubmit={handleSubmit}></LoginForm>
        </div>
    )
}

export default Login