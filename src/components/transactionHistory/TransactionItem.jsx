import propTypes from 'prop-types';
import {
  TransactionRow,
  TransactionType,
  GeneralTableCells,
} from './TransactionHistory.styled';

export const TransactionItem = ({type, amount, currency}) => {
  return (
    <TransactionRow>
      <TransactionType>{type}</TransactionType>
      <GeneralTableCells>{amount}</GeneralTableCells>
      <GeneralTableCells>{currency}</GeneralTableCells>
    </TransactionRow>
  )
}

TransactionItem.propTypes = {
  type: propTypes.string.isRequired,
  amount: propTypes.string.isRequired,
  currency: propTypes.string.isRequired,
};