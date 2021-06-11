import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {Button, TextField} from "@material-ui/core";
import {ActionType, addPostAC} from "./App";

export type postType = {
    title: string
    text: string
}


export const CreatePost = ({dispatch}: { dispatch: (action: ActionType) => void }) => {
    const {register, formState: {errors}, handleSubmit} = useForm<postType>();

    const onSubmit: SubmitHandler<postType> = (data,e: any) => {
        dispatch(addPostAC(data.title, data.text))

        e.target.reset()
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