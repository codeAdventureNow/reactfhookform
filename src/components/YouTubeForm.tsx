import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

type FormValues = {
  username: string;
  email: string;
  channel: string;
};

const YouTubeForm = () => {
  const form = useForm<FormValues>();

  const { register, control, handleSubmit } = form;

  const onSubmit = (data: FormValues) => {
    console.log('form submitted', data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          id='username'
          {...(register('username'),
          {
            required: {
              value: true,
              message: 'Username is required',
            },
          })}
        />

        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          {...(register('email'),
          {
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: 'Invalid email format',
            },
          })}
        />

        <label htmlFor='channel'>Channel</label>
        <input type='text' id='channel' {...register('channel')} />

        <input type='submit' />
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default YouTubeForm;
