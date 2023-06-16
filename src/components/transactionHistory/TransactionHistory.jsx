import propTypes from 'prop-types';
import { TransactionItem } from './TransactionItem';
import {
  TransactionsTable,
  TableHead,
  TransactionRow,
  HeadTitles,
  TableBody,
} from './TransactionHistory.styled';


export const TransactionHistory = ({ items }) => {
  return (
    <TransactionsTable>
      <TableHead>
        <TransactionRow>
          <HeadTitles>Type</HeadTitles>
          <HeadTitles>Amount</HeadTitles>
          <HeadTitles>Currency</HeadTitles>
        </TransactionRow>
      </TableHead>

      <TableBody>
        {items.map(({id, type, amount, currency}) => {
          return (
            <TransactionItem
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          )
        })}
      </TableBody>
    </TransactionsTable>
  )
};

TransactionHistory.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      amount: propTypes.string.isRequired,
      currency: propTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
