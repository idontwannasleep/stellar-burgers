import { FC } from 'react';
import { AppHeaderUI } from '@ui';
import { getUser } from '../../services/slices/user';
import { useSelector } from '../../services/store';

export const AppHeader: FC = () => {
  const user = useSelector(getUser);
  const userName = user ? user.name : '';

  return (
    <>
      <AppHeaderUI userName={userName} />
    </>
  );
};
