import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { saveUsers, editUser } from '../../services/registrationPage';
import * as yup from 'yup';

import Heading from '../../components/Heading';
import Input from '../../components/Input';
import Button from '../../components/Button';

import * as S from './styles';

export interface InputsProps {
  name: string;
  cpf: string;
  phone: string;
  email: string;
}

interface RouteParamProps {
  id: string;
}

const schema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  cpf: yup.string().required('CPF é obrigatório'),
  phone: yup.string().required('Telefone é obrigatório'),
  email: yup
    .string()
    .email('Formato de email invalido')
    .required('Email é obrigatório')
});

const Registration = () => {
  //const [emailExist, setEmailExist] = useState<string | null>('');
  const [cpfExist, setCpfExist] = useState<string | null>('');
  const [sudmitFormSuccess, setSudmitFormSuccess] = useState(false);
  const [editUserSuccess, setEditUserSuccess] = useState(false);
  const [name, setName] = useState<string | undefined>('');
  const [cpf, setCpf] = useState<string | undefined>('');
  const [phone, setPhone] = useState<string | undefined>('');
  const [email, setEmail] = useState<string | undefined>('');
  const [oldName, setOldName] = useState('');
  const [oldCpf, setOldCpf] = useState('');
  const [oldPhone, setOldPhone] = useState('');
  const [oldEmail, setOldEmail] = useState('');
  const routeParam: RouteParamProps = useParams();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<InputsProps>({
    resolver: yupResolver(schema)
  });

  const resetFields = () => {
    setName('');
    setCpf('');
    setPhone('');
    setEmail('');
    setCpfExist('');
  };

  const onSubmit: SubmitHandler<InputsProps> = (data) => {
    setOldName(data.name);
    setOldCpf(data.cpf);
    setOldPhone(data.phone);
    setOldEmail(data.email);

    const saveProps = {
      data,
      history,
      reset,
      resetFields,
      setSudmitFormSuccess
    };

    const editProps = {
      data,
      history,
      setEditUserSuccess
    };

    if (routeParam?.id) {
      editUser(editProps);
    } else {
      saveUsers(saveProps);
    }

    setCpfExist('Esse CPF já existe');
  };

  useEffect(() => {
    const usersInfos = localStorage.getItem('@userInfos:');
    const users = JSON.parse(String(usersInfos)) as InputsProps[];
    const user = users?.find((user) => user.cpf === routeParam?.id);

    if (routeParam?.id) {
      reset();
      setName(user?.name);
      setCpf(user?.cpf);
      setPhone(user?.phone);
      setEmail(user?.email);
    }
  }, []);

  return (
    <S.Wrapper>
      <Heading />

      <S.Content>
        <S.TitleContainer>
          {routeParam?.id ? (
            <h2>Editar cadastro</h2>
          ) : (
            <h2>Faça seu cadastro</h2>
          )}
        </S.TitleContainer>

        <S.FormContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Nome:"
              fieldName="name"
              register={register}
              value={name}
              onChange={({ target }) => setName(target.value)}
              error={(name === oldName || name === '') && errors.name?.message}
              mask={''}
            />
            <Input
              label="CPF:"
              fieldName="cpf"
              register={register}
              value={cpf}
              disabled={routeParam?.id ? true : false}
              onChange={({ target }) => setCpf(target.value)}
              error={cpf === oldCpf && (errors.cpf?.message || cpfExist)}
              mask={'999.999.999.99'}
              isMask={true}
            />
            <Input
              label="Telefone:"
              fieldName="phone"
              register={register}
              value={phone}
              onChange={({ target }) => setPhone(target.value)}
              error={phone === oldPhone && errors.phone?.message}
              mask={'(99) 99999-9999'}
              isMask={true}
            />
            <Input
              label="Email:"
              fieldName="email"
              register={register}
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              error={email === oldEmail && errors.email?.message}
              mask={''}
            />
            <Button type="submit">Cadastrar</Button>
            {sudmitFormSuccess && <p>Cadastro realizado com sucesso!</p>}
            {editUserSuccess && <p>Usuário atualizado com sucesso!</p>}
          </form>
        </S.FormContainer>
      </S.Content>
    </S.Wrapper>
  );
};

export default Registration;
