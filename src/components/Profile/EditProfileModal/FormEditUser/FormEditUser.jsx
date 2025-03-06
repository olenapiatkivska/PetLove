import { useDispatch } from 'react-redux';
import { useAuth } from '../../../../hooks/useAuth.js';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { editUser } from '../../../../redux/auth/operations.js';
import sprite from '../../../../assets/icons/icons.svg';
import css from './FormEditUser.module.css';

const FormEditUser = ({ setImageUrl, setShowEditForm }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const preset_key = import.meta.env.VITE_PRESET_KEY;
  const cloudURL = import.meta.env.VITE_CLOUDINARY_URL;

  const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup
      .string()
      .matches(
        /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
        'Invalid email format',
      )
      .required('Email is required'),
    avatar: yup
      .string()
      .matches(
        /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
        'Invalid avatar URL',
      )
      .required('Avatar URL is required'),
    phone: yup
      .string()
      .matches(/^\+38\d{10}$/, 'Phone must be in format +38XXXXXXXXXX')
      .required('Phone number is required'),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    dispatch(editUser(data));
    setShowEditForm(false);
  };

  const handleUploadAvatar = async e => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', preset_key);

    try {
      const response = await fetch(cloudURL, {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) throw new Error('Upload failed');

      const data = await response.json();

      setValue('avatar', data.secure_url);
      setImageUrl(data.secure_url);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <form className={css.formEditUser} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.avatarFileWrapp}>
          <label>
            <input
              className={css.avatarUrlInput}
              type="text"
              {...register('avatar')}
              defaultValue={user?.avatar || 'Avatar URL'}
            />
            {errors.name && <span>{errors.avatar?.message}</span>}
          </label>

          <label className={css.avatarFileLabel}>
            <input
              className={css.avatarFileInput}
              type="file"
              name="avatarFile"
              onChange={handleUploadAvatar}
            />
            <svg width={18} height={18}>
              <use href={`${sprite}#icon-upload-cloud`}></use>
            </svg>
          </label>
        </div>

        <input
          className={css.formEditUInput}
          type="text"
          {...register('name')}
          defaultValue={user.name}
        />
        {errors.name && <span>{errors.name?.message}</span>}

        <input
          className={css.formEditUInput}
          type="email"
          {...register('email')}
          defaultValue={user.email}
        />
        {errors.email && <span>{errors.email?.message}</span>}

        <input
          className={css.formEditUInput}
          type="tel"
          {...register('phone')}
          defaultValue={user?.phone || '+380'}
        />
        {errors.phone && <span>{errors.phone?.message}</span>}

        <button className={css.formEditBtn} type="submit">
          Save
        </button>
      </form>
    </>
  );
};

export default FormEditUser;
