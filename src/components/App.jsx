import user from "./user/user.json";
import data from './statistics/data.json';
import friends from "./friendList/friends.json";
import transactions from "./transactions/transactions.json";
import { Profile } from "./user/profile";
import { Statistics } from "./statistics/statistics";
import { FriendList } from "./friendList/friendList";
import { TransactionHistory } from "./transactions/transactions.jsx";

export const App = () => {
  return (
    <div class="container">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
    />
      <Statistics title="Upload Stats" stats={data} />
      <Statistics stats={data} />
        <FriendList 
          friends={friends}
        />
      <TransactionHistory
          items={transactions} />
    </div>
  ); 
};
