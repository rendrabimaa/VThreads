import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import useInput from '../../../hooks/useInput';
import { asyncRegisterUser } from '../../../store/users/actions';
import AuthInput from '../../../components/AuthInput';
import AuthButton from '../../../components/AuthButton';
import AuthLayout from '../../../layouts/AuthLayout';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, onEmailChange] = useInput();
  const [name, onNameChange] = useInput();
  const [password, onPasswordChange] = useInput();

  const handleRegister = () => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/auth/login');
  };

  return (
    <AuthLayout>
      <h4 className='font-bold text-xl mb-4'>
        Register
      </h4>
      <AuthInput label="Email" type="email" name="email" value={email} onHandleChange={onEmailChange} placeholder="Input your Email here ..." onChange={onEmailChange} />
      <AuthInput label="Username" type="text" name="name" value={name} onHandleChange={onNameChange} placeholder="Input your Name here ..." onChange={onNameChange} />
      <AuthInput label="Password" type="password" name="password" value={password} onHandleChange={onPasswordChange} placeholder="Input your Password here ..." onChange={onPasswordChange} />
      <AuthButton handleClick={handleRegister}>Register Now</AuthButton>
      <p className='text-sm'>Have an Account ? <Link to='/auth/login' className='text-blue-900 underline'>Login</Link> Here</p>
    </AuthLayout>
  );
}

export default RegisterPage;
