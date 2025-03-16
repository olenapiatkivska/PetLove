import css from './CreationForm.module.css';
import sprite from '../../../assets/icons/icons.svg';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { addPet } from '../../../redux/auth/operations.js';
import { useEffect, useState } from 'react';
import SexButtons from './SexButtons/SexButtons.jsx';
import PetAvatar from './PetAvatar/PetAvatar.jsx';
import BirthdayInput from './BirthdayInput/BirthdayInput.jsx';
import TypeAnimal from './TypeAnimal/TypeAnimal.jsx';

const addPetSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  name: Yup.string().required("Pet's name is required"),
  imgURL: Yup.string()
    .matches(
      /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
      'Invalid image URL format',
    )
    .required('Image URL is required'),
  species: Yup.string().required('Species is required'),
  birthday: Yup.string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format')
    .required('Birthday is required'),
  sex: Yup.string().required('Sex is required'),
});

const CreationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const preset_key = import.meta.env.VITE_PRESET_KEY;
  const cloudURL = import.meta.env.VITE_CLOUDINARY_URL;
  const [sexPet, setSexPet] = useState('unknown');
  const [petType, setPetType] = useState(null);
  const [birthDate, setBirthDate] = useState(null);
  const [petImageURL, setPetImageURL] = useState('');

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(addPetSchema) });

  const onSubmit = data => {
    dispatch(addPet(data));
    navigate('/profile');
  };

  useEffect(() => {
    if (sexPet !== 'unknown') {
      setValue('sex', sexPet);
    }
    if (petType) {
      setValue('species', petType);
    }
    if (birthDate) {
      setValue('birthday', birthDate);
    }
  }, [setValue, sexPet, petType, birthDate]);

  const handleUploadAvatar = e => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', preset_key);

    fetch(cloudURL, { method: 'POST', body: formData })
      .then(res => {
        if (!res.ok) throw new Error('Upload failed');
        return res.json();
      })
      .then(data => setValue('imgURL', data.secure_url))
      .catch(error => console.log('Upload error:', error.message));

    const fileURL = URL.createObjectURL(file);
    setPetImageURL(fileURL);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SexButtons setSexPet={setSexPet} sexPet={sexPet} />
        <input type="text" {...register('sex')} hidden />
        {errors.sex && (
          <span className={css.errorsCreationForm}>{errors.sex?.message}</span>
        )}

        <PetAvatar petImageURL={petImageURL} />

        <div className={css.avatarFileWrapp}>
          <label>
            <input
              className={css.avatarUrlInput}
              type="text"
              {...register('imgURL')}
              placeholder="Enter URL"
            />
            {errors.imgURL && (
              <p className={css.errorsCreationFormAvatar}>
                {errors.imgURL?.message}
              </p>
            )}
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
          className={css.creationFormInputTitle}
          type="text"
          {...register('title')}
          placeholder="Title"
        />
        {errors.title && (
          <p className={css.errorsCreationForm}>{errors.title?.message}</p>
        )}

        <input
          className={css.creationFormInputName}
          type="text"
          {...register('name')}
          placeholder="Pet's Name"
        />
        {errors.name && (
          <p className={css.errorsCreationForm}>{errors.name?.message}</p>
        )}

        <div className={css.birthdayTypeWrap}>
          <div>
            <BirthdayInput birthDate={birthDate} setBirthDate={setBirthDate} />
            {errors.birthday && (
              <p className={css.errorsCreationForm}>
                {errors.birthday?.message}
              </p>
            )}
            <input
              className={css.inputHidden}
              type="text"
              {...register('birthday')}
              hidden
            />
          </div>
          <div>
            <TypeAnimal petType={petType} setPetType={setPetType} />
            {errors.species && (
              <p className={css.errorsCreationForm}>
                {errors.species?.message}
              </p>
            )}
            <input
              className={css.inputHidden}
              type="text"
              {...register('species')}
              hidden
            />
          </div>
        </div>

        <div className={css.creationFormBtnWrap}>
          <NavLink className={css.creationFormBack} to={'/profile'}>
            Back
          </NavLink>
          <button className={css.creationFormSubmit} type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default CreationForm;
