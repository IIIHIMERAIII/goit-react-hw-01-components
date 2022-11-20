import user from "./json/user.json";
import data from './json/data.json';
import friends from "./json/friends.json";
import transactions from "./json/transactions.json";
import { Profile } from "./jsx/profile";
import { Statistics } from "./jsx/statistics";
import { FriendList } from "./jsx/friend-list";
import { TransactionHistory } from "./jsx/transactions";

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
      <Statistics stats={data} />
      <ul class="friend-list">
        <FriendList 
          friends={friends}
        />
      </ul>
      <table class="transaction-history">
    <thead>
    <tr>
      <th class="table-title">Type</th>
      <th class="table-title">Amount</th>
      <th class="table-title">Currency</th>
    </tr>
        </thead>
          <tbody class="table-body">
            <TransactionHistory
              items={transactions} />
          </tbody>
      </table>
    </div>
  ); 
};
