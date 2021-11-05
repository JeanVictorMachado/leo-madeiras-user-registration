import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../../utils/tests/helpers';
import Button from '../../../components/Button';

describe('<Button />', () => {
  it('validating background color', () => {
    renderWithTheme(
      <Button type="button" width="100%">
        Cadastrar
      </Button>
    );

    expect(screen.getByRole('button', { name: /Cadastrar/i })).toHaveStyle({
      height: '36px',
      'background-color': '#FFCE0D'
    });
  });

  it('validating if it changes its dimensions', () => {
    renderWithTheme(
      <Button type="button" width="100%" height="50px">
        Cadastrar
      </Button>
    );

    expect(screen.getByRole('button', { name: /Cadastrar/i })).toHaveStyle({
      height: '50px',
      width: '100%'
    });
  });
});
