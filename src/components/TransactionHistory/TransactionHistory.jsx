import PropTypes from 'prop-types';
import { Container, Name, Title, Value } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Container>
      <thead>
        <Title>
          <Name>Type</Name>
          <Name>Amount</Name>
          <Name>Currency</Name>
        </Title>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Title key={id}>
            <Value>{type}</Value>
            <Value>{amount}</Value>
            <Value>{currency}</Value>
          </Title>
        ))}
      </tbody>
    </Container>
  );
};


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
};