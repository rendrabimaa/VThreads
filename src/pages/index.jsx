import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AppShell from '../layouts/AppShell';
import { asyncPopulateThreads } from '../store/shared/action';
import ThreadItem from '../components/ThreadItem';
import Navbar from '../layouts/Navbar';

function MainPage() {
  const threads = useSelector((states) => states.threads);
  const users = useSelector((states) => states.users);
  const authUser = useSelector((states) => states.authUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetching = async () => {
      await dispatch(asyncPopulateThreads());
    };

    fetching();
  }, [dispatch]);

  const threadsList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
  }));

  return (
    <div className='w-full flex flex-col items-center'>
      <Navbar />
      <AppShell>
        <div className='mt-36'>
          {threadsList && threadsList.map((thread) => (
            <ThreadItem key={thread.id} {...thread} />
          ))}
        </div>
      </AppShell>
    </div>
  );
}

export default MainPage;
