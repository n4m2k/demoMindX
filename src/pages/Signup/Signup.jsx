import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { register } from '../../components/Auth/userSlice';
import SignupForm from './SignupForm';
// import { useSnackbar } from '@mui/base';
import { useSnackbar } from 'notistack';



const Signup = (props) => {
    const { enqueueSnackbar } = useSnackbar()
    const dispatch = useDispatch()

    const handleSubmit = async (values) => {
        try {
            values.username = values.email
            const action = register(values)
            const resultAction = await dispatch(action)
            unwrapResult(resultAction)
            const { closeDialog } = props
            if (closeDialog) {
                closeDialog()
            }
            enqueueSnackbar('Register successfully!!!', { variant: 'success' })

        } catch (error) {
            enqueueSnackbar(error.message, { variant: 'error' })
        }
    }
    return (
        <div>
            <SignupForm onSubmit={handleSubmit}></SignupForm>
        </div>
    )
}

export default Signup