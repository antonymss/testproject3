import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {Button, TextField} from "@material-ui/core";

export interface IFormInput {
    title: string;
    post: string;
}
const schema = yup.object().shape({
    title: yup.string().required(),
    post: yup.string().required(),
});

export const CreatePost = () => {
    const { register, formState: { errors }, handleSubmit } = useForm<IFormInput>({
        resolver: yupResolver(schema)
    });
    const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                type="text"
                label="Заголовок"
                margin="normal"
                variant="outlined"
                {...register("title", { required: true })}
            />
            <p>{errors.title && "Head name is required"}</p>
            {/*<p>{errors.head?.message}</p>*/}
            <TextField
                type="text"
                label="Текст поста"
                margin="normal"
                variant="outlined"
                {...register("post", { required: true })}
            />
            {/*{errors.text && "Text name is required"}*/}
            <p>{errors.post?.message}</p>
            <Button type="submit" variant="contained" color="primary">
                Создать пост
            </Button>
        </form>
    );
}