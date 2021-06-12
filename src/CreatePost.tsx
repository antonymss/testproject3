import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {Button, TextField} from "@material-ui/core";
import {ActionType, addPostAC} from "./App";

type FormData = {
    title: string
    text: string
};

export const CreatePost = ({dispatch}: { dispatch: (action: ActionType) => void }) => {
    const {register, formState: {errors}, handleSubmit, reset} = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        dispatch(addPostAC(data.title, data.text))

        reset()
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                type="text"
                label="Заголовок"
                margin="normal"
                variant="outlined"
                {...register("title", {required: true})}
            />
            <p>{errors.title && "Head is required"}</p>

            <TextField
                type="text"
                label="Текст поста"
                margin="normal"
                variant="outlined"
                {...register("text", {required: true})
                }
            />
            <p>{errors.text && "Text is required"}</p>

            <Button type={'submit'} variant="contained" color="primary">
                Создать пост
            </Button>

        </form>

    );
}