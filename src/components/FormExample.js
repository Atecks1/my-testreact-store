import React from 'react';
import { useForm } from 'react-hook-form';
import './FormExample.css'; 

const FormExample = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-example">
      <div className="form-group">
        <label htmlFor="name">Имя:</label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'Имя обязательно для заполнения' })}
        />
        {errors.name && <p className="error-message">{errors.name.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          {...register('email', {
            required: 'Email обязателен для заполнения',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Неверный формат email',
            },
          })}
        />
        {errors.email && <p className="error-message">{errors.email.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="message">Сообщение:</label>
        <textarea
          id="message"
          {...register('message', { required: 'Сообщение обязательно для заполнения' })}
        />
        {errors.message && <p className="error-message">{errors.message.message}</p>}
      </div>

      <button type="submit">Отправить</button>
    </form>
  );
};

export default FormExample;