import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useInput from '../../../hooks/useInput';
import { asyncRegisterUser } from '../../../store/users/actions';
import AuthInput from '../../../components/AuthInput';
import AuthButton from '../../../components/AuthButton';
import AuthLayout from '../../../layouts/AuthLayout';
import i18n from '../../../i18n';
import { toggleLanguage } from '../../../store/language/action';

function RegisterPage() {
  const { t } = useTranslation();
  const language = useSelector((state) => state.translation.language);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, onEmailChange] = useInput();
  const [name, onNameChange] = useInput();
  const [password, onPasswordChange] = useInput();

  const handleRegister = () => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/auth/login');
  };

  const toggleLg = async () => {
    await dispatch(toggleLanguage());
    i18n.changeLanguage(language);
  };

  return (
    <AuthLayout>
      <div className="flex justify-between items-center">
        <h4 className="font-bold text-xl mb-4">
          {t('titleRegisterPage')}
        </h4>
        <button type="button" onClick={toggleLg} className="bg-slate-600 py-2 px-4 rounded-lg text-white font-semibold">{language}</button>
      </div>
      <AuthInput label={`${t('labelEmail')}`} type="email" name="email" value={email} onHandleChange={onEmailChange} placeholder={`${t('placeholderEmailInput')}`} onChange={onEmailChange} />
      <AuthInput label={`${t('labelName')}`} type="text" name="name" value={name} onHandleChange={onNameChange} placeholder={`${t('placeholderNameInput')}`} onChange={onNameChange} />
      <AuthInput label={`${t('labelPassword')}`} type="password" name="password" value={password} onHandleChange={onPasswordChange} placeholder={`${t('placeholderPasswordInput')}`} onChange={onPasswordChange} />
      <AuthButton handleClick={handleRegister}>{t('buttonRegister')}</AuthButton>
      <p className="text-sm">
        {`${t('haveAnAccount')}`}
        <Link to="/auth/login" className="text-blue-900 underline">{t('titleLoginPage')}</Link>
        {' '}
        {t('hereText')}
      </p>
    </AuthLayout>
  );
}

export default RegisterPage;
