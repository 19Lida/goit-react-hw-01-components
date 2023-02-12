import Profile from './Profile/Profile';
import users from '../user.json';
export const App = () => {
  console.log(users, '<<<from APPPP');
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={users.username}
        tag={users.tag}
        location={users.location}
        avatar={users.avatar}
        stats={users.stats}
      />
    </div>
  );
};
