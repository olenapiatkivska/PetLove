// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { register as registerUser } from '../../../redux/auth/operations.js';
import sprite from '../../../assets/icons/icons.svg';
import css from './RegistrationForm.module.css';
import Container from '../../Container/Container.jsx';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  //   const [showPassword, setShowPassword] = useState(false);
  //   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();

  const schemaRegister = yup.object().shape({
    name: yup.string().required('Name is required'),

    email: yup
      .string()
      .matches(
        /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
        'Invalid email format',
      )
      .required('Email is required'),

    password: yup
      .string()
      .min(7, 'Password must be at least 7 characters')
      .required('Password is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(schemaRegister),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = data => {
    console.log('📩 Відправка на сервер через handleSubmit:', data);
    const { name, email, password } = data;
    dispatch(registerUser({ name, email, password }));
  };

  return (
    <>
      <Container>
        <div className={css.registrationFormContainer}>
          <div>
            <h1 className={css.registrationFormTitle}>Registration</h1>
            <p className={css.registrationFormText}>
              Thank you for your interest in our platform.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={css.inputRegistrationWrapper}>
              <label className={css.inputRegistrationLabel}>
                <input
                  type="text"
                  placeholder="Name"
                  className={`
            ${css.inputRegistration} ${
                    errors.name
                      ? css.inputError
                      : touchedFields.name
                      ? css.inputSuccess
                      : ''
                  }`}
                  {...register('name')}
                />
                {errors.name && (
                  <span className={css.iconCheck}>
                    <svg width={18} height={18}>
                      <use href={`${sprite}#icon-x-red`} />
                    </svg>
                  </span>
                )}
                {!errors.name && (
                  <span className={css.iconCheck}>
                    <svg width={18} height={18}>
                      <use href={`${sprite}#icon-check`} />
                    </svg>
                  </span>
                )}
                {errors.name && (
                  <p className={css.errorRegistration}>{errors.name.message}</p>
                )}
              </label>

              <label className={css.inputRegistrationLabel}>
                <input
                  type="email"
                  placeholder="Email"
                  className={`
            ${css.inputRegistration} ${
                    errors.name
                      ? css.inputError
                      : touchedFields.name
                      ? css.inputSuccess
                      : ''
                  }`}
                  {...register('email')}
                />
                {errors.email && (
                  <span className={css.iconCheck}>
                    <svg width={18} height={18}>
                      <use href={`${sprite}#icon-x-red`} />
                    </svg>
                  </span>
                )}
                {!errors.email && (
                  <span className={css.iconCheck}>
                    <svg width={18} height={18}>
                      <use href={`${sprite}#icon-check`} />
                    </svg>
                  </span>
                )}
                {errors.email && (
                  <p className={css.errorRegistration}>
                    {errors.email.message}
                  </p>
                )}
              </label>

              <label className={css.inputRegistrationLabel}>
                <input
                  type="password"
                  placeholder="Password"
                  className={`
            ${css.inputRegistration} ${
                    errors.name
                      ? css.inputError
                      : touchedFields.name
                      ? css.inputSuccess
                      : ''
                  }`}
                  {...register('password')}
                />
                {errors.password && (
                  <span className={css.iconCheck}>
                    <svg width={18} height={18}>
                      <use href={`${sprite}#icon-x-red`} />
                    </svg>
                  </span>
                )}
                {!errors.password && (
                  <span className={css.iconCheck}>
                    <svg width={18} height={18}>
                      <use href={`${sprite}#icon-check`} />
                    </svg>
                  </span>
                )}
                {errors.password && (
                  <p className={css.errorRegistration}>
                    {errors.password.message}
                  </p>
                )}
              </label>

              <label className={css.inputRegistrationLabel}>
                <input
                  type="password"
                  placeholder="Confirm password"
                  className={`
            ${css.inputRegistration} ${
                    errors.name
                      ? css.inputError
                      : touchedFields.name
                      ? css.inputSuccess
                      : ''
                  }`}
                  {...register('confirmPassword')}
                />
                {errors.confirmPassword && (
                  <span className={css.iconCheck}>
                    <svg width={18} height={18}>
                      <use href={`${sprite}#icon-x-red`} />
                    </svg>
                  </span>
                )}
                {!errors.confirmPassword && (
                  <span className={css.iconCheck}>
                    <svg width={18} height={18}>
                      <use href={`${sprite}#icon-check`} />
                    </svg>
                  </span>
                )}
                {errors.confirmPassword && (
                  <p className={css.errorRegistration}>
                    {errors.confirmPassword.message}
                  </p>
                )}
              </label>
            </div>

            <button className={css.registerBtn} type="submit">
              Register
            </button>
          </form>

          <p className={css.registrationLink}>
            Already have an account?
            <Link className={css.registrationLinkLogin} to="/login">
              Login
            </Link>
          </p>
        </div>
      </Container>
    </>
  );
};

export default RegistrationForm;
