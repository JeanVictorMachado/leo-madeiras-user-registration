import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../../utils/tests/helpers';
import CardUser from '../../../components/CardUser';

const cardParams = {
  name: 'Jean Machado',
  cpf: '11111111111',
  phone: '43999999999',
  email: 'test@gmail.com'
};

const removeUser = () => [];

describe('<CardUser />', () => {
  it('should contain past data', () => {
    renderWithTheme(<CardUser removeUser={removeUser} {...cardParams} />);

    expect(screen.getByText(/Jean Machado/i)).toBeInTheDocument();
    expect(screen.getByText(/11111111111/i)).toBeInTheDocument();
    expect(screen.getByText(/43999999999/i)).toBeInTheDocument();
    expect(screen.getByText(/test@gmail.com/i)).toBeInTheDocument();
  });
});
