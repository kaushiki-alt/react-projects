import { useState } from 'react';
import SearchForm from './components/form/SearchForm';
import UserProfile from './components/user/UserProfile';
const App = () => {
  const [username, setUsername] = useState<string>('quincylarson')

  return (
    <main className='mx-auto max-w-6xl px-8 py-20'>
      <SearchForm user={username} setUser={setUsername} />
      <UserProfile user={username} />
    </main>
  );
};
export default App;