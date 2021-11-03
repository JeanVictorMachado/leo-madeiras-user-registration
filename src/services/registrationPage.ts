import { UnpackNestedValue, UseFormReset } from 'react-hook-form';
import { InputsProps } from '../pages/Registration';
import { History } from 'history';

interface SaveLocalStorageProps {
  data: UnpackNestedValue<InputsProps>;
  history: History;
  reset: UseFormReset<InputsProps>;
  resetFields: () => void;
  setSudmitFormSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

interface EditLocalStorageProps {
  data: UnpackNestedValue<InputsProps>;
  history: History;
  setEditUserSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

export const saveUsers = ({
  data,
  reset,
  history,
  resetFields,
  setSudmitFormSuccess
}: SaveLocalStorageProps) => {
  const usersInfos = localStorage.getItem('@userInfos:');
  const users = JSON.parse(String(usersInfos)) as InputsProps[];
  const cpfExist = users?.filter(
    (user) => user.cpf === data.cpf.replace(/[^\d]+/g, '')
  );

  data.cpf = data.cpf.replace(/[^\d]+/g, '');
  data.phone = data.phone.replace(/[^\d]+/g, '');

  if (cpfExist === undefined) {
    reset();
    resetFields();

    localStorage.setItem('@userInfos:', JSON.stringify([data]));

    setSudmitFormSuccess(true);

    setTimeout(() => {
      setSudmitFormSuccess(false);
      history.push('/list-users');
    }, 1500);

    return;
  }

  if (cpfExist?.length === 0) {
    reset();
    resetFields();

    localStorage.setItem('@userInfos:', JSON.stringify([...users, data]));

    setSudmitFormSuccess(true);

    setTimeout(() => {
      setSudmitFormSuccess(false);
      history.push('/list-users');
    }, 1500);

    return;
  }
};

export const editUser = ({
  data,
  history,
  setEditUserSuccess
}: EditLocalStorageProps) => {
  const usersInfos = localStorage.getItem('@userInfos:');
  const users = JSON.parse(String(usersInfos)) as InputsProps[];
  const userExist = users?.filter(
    (user) => user.cpf !== data.cpf.replace(/[^\d]+/g, '')
  );

  data.cpf = data.cpf.replace(/[^\d]+/g, '');
  data.phone = data.phone.replace(/[^\d]+/g, '');

  localStorage.setItem('@userInfos:', JSON.stringify([...userExist, data]));

  setEditUserSuccess(true);

  setTimeout(() => {
    setEditUserSuccess(false);
    history.push('/list-users');
  }, 1500);

  return;
};
