import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { saveLocalStorage } from '../../utils/registrationPage';
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
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [oldName, setOldName] = useState('');
  const [oldCpf, setOldCpf] = useState('');
  const [oldPhone, setOldPhone] = useState('');
  const [oldEmail, setOldEmail] = useState('');
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

    const dataProps = {
      data,
      history,
      reset,
      resetFields,
      setSudmitFormSuccess
    };

    saveLocalStorage(dataProps);

    setCpfExist('Esse CPF já existe');
  };

  return (
    <S.Wrapper>
      <Heading />

      <S.Content>
        <S.TitleContainer>
          <h2>Faça seu cadastro</h2>
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
          </form>
        </S.FormContainer>
      </S.Content>
    </S.Wrapper>
  );
};

export default Registration;
