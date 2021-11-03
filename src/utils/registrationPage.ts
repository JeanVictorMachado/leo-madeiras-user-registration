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

export const saveLocalStorage = ({
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
