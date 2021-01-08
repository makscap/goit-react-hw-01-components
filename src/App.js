// import Profile from './components/Profile/Profile';
import ProfileList from './components/ProfileList';
import user from './data/user.json';
import Section from './components/Section/Section';
// import ColorPicker from './components/ColorPicker/ColorPicker'
import statisticalData from './data/statistical-data.json';
import Statistical from './components/Statistical/Statistical';

import FriendList from './components/FriendList/FriendList';
import friends from './data/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './data/transactions.json';

// const colorPickerOpts = [
//      {label: 'red', color: '#212211'},
//      { label: 'green', color: '#555555'},
//      { label: 'yellow', color: '#838495'}];

export default function App() {
  return (
    <div>
      {/* <ColorPicker options={colorPickerOpts}/> */}
      <Section title="Top freelancers:">
        <ProfileList items={user} />
      </Section>
      <Statistical title="Upload stats:" options={statisticalData} />;
      <FriendList friends={friends} />,
      <TransactionHistory items={transactions} />
      {/* {user.map(someUser => (
     <Profile 
     key={someUser.id}
     name={someUser.name}
     tag={someUser.tag}
     location={someUser.location}
     imageUrl={someUser.avatar}
     followers={someUser.stats.followers}
     views={someUser.stats.views}
     likes={someUser.stats.likes}
     id={someUser.id} /> 
     ))} */}
    </div>
  );
}

/* <Profile 
name={user[0].name}
tag={user[0].tag}
location={user[0].location}
imageUrl={user[0].avatar}
followers={user[0].stats.followers}
views={user[0].stats.views}
likes={user[0].stats.likes}
id={user[0].id} /> 
     <Profile 
name={user[1].name}
tag={user[1].tag}
location={user[1].location}
imageUrl={user[1].avatar}
followers={user[1].stats.followers}
views={user[1].stats.views}
likes={user[1].stats.likes}
id={user[1].id} /> 
     <Profile 
name={user[2].name}
tag={user[2].tag}
location={user[2].location}
imageUrl={user[2].avatar}
followers={user[2].stats.followers}
views={user[2].stats.views}
likes={user[2].stats.likes}
id={user[2].id} />  */
