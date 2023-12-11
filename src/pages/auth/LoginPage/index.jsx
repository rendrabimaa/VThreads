import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import useInput from '../../../hooks/useInput';
import { asyncSetAuthUser } from '../../../store/authUser/actions';
import AuthInput from '../../../components/AuthInput';
import AuthButton from '../../../components/AuthButton';
import AuthLayout from '../../../layouts/AuthLayout';
import { asyncPreloadProcess } from '../../../store/isPreload/action';

function LoginPage() {
  const authUser = useSelector((states) => states.authUser);
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
    }

    loadUser();
  }, [authUser, dispatch, navigate])

  const handleLogin = async () => {
    await dispatch(asyncSetAuthUser({ email, password }));
    navigate('/');
  };

  return (
    <AuthLayout>
      <h4 className='font-bold text-xl mb-4'>
        Login
      </h4>
      <AuthInput label="Email" type="email" name="email" value={email} onHandleChange={onEmailChange} placeholder="Input your Email here ..." />
      <AuthInput label="Password" type="password" name="password" value={password} onHandleChange={onPasswordChange} placeholder="Input your Password here ..." />
      <AuthButton handleClick={handleLogin}>Login Now</AuthButton>
      <p className='text-sm'>Don't have Account ? <Link to='/auth/register' className='text-blue-900 underline'>Register</Link> Here</p>
    </AuthLayout>
  );
}

export default LoginPage;
