import { useForm } from 'react-hook-form';
import { postAnnouncement } from '../api/announcement';

import style from "./admin.module.css";

export const AdminForm = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data: any) => {
        postAnnouncement(
            data.message,
            parseInt(data.duration)
        ).then(() => {
            alert('Announcement posted!\nCheck the Home Page!');
            reset()
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.adminForm}>
            <textarea {...register('message')} placeholder='Your announcement...' required />
            <input type="number" {...register('duration')} placeholder="Duration (hours)" required />
            <button type="submit">Post Announcement</button>
        </form>
        // The button is automatically type='submit' when in the <form> component.
        // Good to be explicit.
        // Will call the form's onSubmit automatically
    );
};