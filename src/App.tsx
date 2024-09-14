import WebApp from '@twa-dev/sdk';
import { useState, useEffect } from 'react';
import './App.css';

interface UserData {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code: string;
  is_premium?: boolean;
}

function App() {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user as UserData);
    }
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">User Data</h1>
      <ul>
        <li>ID: {userData.id}</li>
        <li>First Name: {userData.first_name}</li>
        <li>Last Name: {userData.last_name || 'N/A'}</li>
        <li>Username: {userData.username || 'N/A'}</li>
        <li>Language Code: {userData.language_code}</li>
        <li>Is Premium: {userData.is_premium ? 'Yes' : 'No'}</li>
      </ul>
    </>
  );
}

export default App;
