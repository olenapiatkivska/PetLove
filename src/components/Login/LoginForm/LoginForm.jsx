import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import sprite from '../../../assets/icons/icons.svg';
import { Link } from 'react-router-dom';
import { logIn } from '../../../redux/auth/operations.js';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleShowPassword = () => setShowPassword(prev => !prev);

  const schemaRegister = yup.object().shape({
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
      email: '',
      password: '',
    },
  });

  const onSubmit = data => {
    const { email, password } = data;
    dispatch(logIn({ email, password }));
  };
  return (
    <>
      <div className={css.loginFormContainer}>
        <div>
          <h1 className={css.registrationFormTitle}>Log in</h1>
          <p className={css.registrationFormText}>
            Welcome! Please enter your credentials to login to the platform:
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={css.inputRegistrationWrapper}>
            <label className={css.inputRegistrationLabel}>
              <input
                type="email"
                placeholder="Email"
                className={`
            ${css.inputRegistration} ${
                  errors.email
                    ? css.inputError
                    : touchedFields.email
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
              {!errors.email && touchedFields.email && (
                <span className={css.iconCheck}>
                  <svg width={18} height={18}>
                    <use href={`${sprite}#icon-check`} />
                  </svg>
                </span>
              )}
              {errors.email && (
                <p className={css.errorRegistration}>{errors.email.message}</p>
              )}
            </label>

            <label className={css.inputRegistrationLabel}>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className={`
            ${css.inputRegistration} ${
                  errors.password
                    ? css.inputError
                    : touchedFields.password
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
              {!errors.password && touchedFields.password && (
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

              <button
                className={css.passwordBtnEye}
                type="button"
                onClick={handleShowPassword}
              >
                <svg width={18} height={18}>
                  <use
                    href={
                      showPassword
                        ? `${sprite}#icon-eye`
                        : `${sprite}#icon-eye-off`
                    }
                  />
                </svg>
              </button>
            </label>
          </div>

          <button className={css.registerBtn} type="submit">
            Log In
          </button>
        </form>

        <p className={css.registrationLink}>
          Don&apos;t have an account?&nbsp;
          <Link className={css.registrationLinkLogin} to="/register">
            Register
          </Link>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
