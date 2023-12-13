import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../../../i18n';
import useInput from '../../../hooks/useInput';
import { asyncSetAuthUser } from '../../../store/authUser/actions';
import AuthInput from '../../../components/AuthInput';
import AuthButton from '../../../components/AuthButton';
import AuthLayout from '../../../layouts/AuthLayout';
import { asyncPreloadProcess } from '../../../store/isPreload/action';
import { toggleLanguage } from '../../../store/language/action';

function LoginPage() {
  const { t } = useTranslation();
  const authUser = useSelector((states) => states.authUser);
  const language = useSelector((state) => state.translation.language);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, onEmailChange] = useInput();
  const [password, onPasswordChange] = useInput();

  useEffect(() => {
    const loadUser = async () => {
      await dispatch(asyncPreloadProcess());
      if (authUser) {
        navigate('/');
      }
    };

    loadUser();
  }, [authUser, dispatch, navigate]);

  const handleLogin = async () => {
    await dispatch(asyncSetAuthUser({ email, password }));
    navigate('/');
  };

  const toggleLg = async () => {
    await dispatch(toggleLanguage());
    i18n.changeLanguage(language);
  };

  return (
    <AuthLayout>
      <div className="flex justify-between items-center">
        <h4 className="font-bold text-xl mb-4">
          {t('titleLoginPage')}
        </h4>
        <button type="button" onClick={toggleLg} className="bg-slate-600 py-2 px-4 rounded-lg text-white font-semibold">{language}</button>
      </div>
      <AuthInput label={`${t('labelEmail')}`} type="email" name="email" value={email} onHandleChange={onEmailChange} placeholder={`${t('placeholderEmailInput')}`} />
      <AuthInput label={`${t('labelPassword')}`} type="password" name="password" value={password} onHandleChange={onPasswordChange} placeholder={`${t('placeholderPasswordInput')}`} />
      <AuthButton handleClick={handleLogin}>{t('buttonLogin')}</AuthButton>
      <p className="text-sm">
        {t('dontHaveAccount')}
        {' '}
        <Link to="/auth/register" className="text-blue-900 underline">
          {' '}
          {t('titleRegisterPage')}
        </Link>
        {' '}
        {t('hereText')}
      </p>
    </AuthLayout>
  );
}

export default LoginPage;
