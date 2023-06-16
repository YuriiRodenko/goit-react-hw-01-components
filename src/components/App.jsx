import user from './profile/user.json';
import { Profile } from './profile/Profile';

import data from './statistics/data.json';
import { Statistics } from './statistics/Statistics';

import friends from './friendList/friends.json';
import { FriendsList } from './friendList/FriendList';

import transactions from './transactionHistory/transactions.json';
import { TransactionHistory } from './transactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
        backgroundColor: '#F0F8FF',
        margin: '0px',
        paddingTop: '10px',
        paddingBottom: '10px',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  )
}
