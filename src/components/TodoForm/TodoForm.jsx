import React from 'react'
import { useForm } from 'react-hook-form'
import InputField from '../FormControl/InputFueld/InputField'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const TodoForm = () => {
    const schema = yup.object({
        firstName: yup.string().required(),
        age: yup.number().positive().integer().required(),
    }).required();
    const form = useForm({
        defaultValue: {
            title: '',
        },
        resolver: yupResolver(schema)

    })

    const handleSubmit = (values) => {

    }
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="title" label="Todo" form={form} />

        </form>
    )
}

export default TodoForm