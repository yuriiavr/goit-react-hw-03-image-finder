import user from './Backend/user.json';
import data from './Backend/data.json';
import friends from './Backend/friends.json';
import transactions from './Backend/transactions.json';
import {Profile} from './Profile/Profile';
import {Statistics} from './Statistics/Statistics';
import {FriendList} from './FriendList/FriendList';
import {TransactionHistory} from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile 
        key={user.username}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
