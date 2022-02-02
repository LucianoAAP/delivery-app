import React from 'react';
import useConfirmOrder from '../../hooks/useConfirmOrder';
import CheckoutAddressForm from '../CheckoutAddressForm';
import { ConfirmContainer,
  PaperDiv,
  ConfirmButton,
  H1,
  MapIcon } from './styles';

const CheckoutConfirm = () => {
  const { handleChange, sellers, disabledBtn, submitSale, bodyInfo } = useConfirmOrder();

  return (
    <ConfirmContainer>
      <H1>Detalhes e Endereço para Entrega</H1>
      <PaperDiv elevation={ 3 }>
        <MapIcon />
        <CheckoutAddressForm
          handleChange={ handleChange }
          sellers={ sellers }
          bodyInfo={ bodyInfo }
        />
        <ConfirmButton
          data-testid="customer_checkout__button-submit-order"
          type="button"
          onClick={ () => submitSale() }
          disabled={ disabledBtn }
        >
          FINALIZAR PEDIDO
        </ConfirmButton>
      </PaperDiv>
    </ConfirmContainer>
  );
};

export default CheckoutConfirm;
