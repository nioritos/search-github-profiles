import { useState } from 'react'
import { SearchProfile } from './api/api';
import './app.css';
import ProfileCard from './components/ProfileCard';
import InputArea from './components/InputArea';

function App() {
  const [profileGit, setProfileGit] = useState('')
  const [profile, setProfile] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const onChangeProps = (v) => {

    setProfile(v.target.value);
  };

  const onClickProps = () => {
    activateSearchProfileFunction(profile);
  };

  const activateSearchProfileFunction = async (profile) => {
    setIsLoading(true)
    const response = await SearchProfile(profile);
    setProfileGit(response);
  }


  return (
    <div className="App">
      <div className="container">
        <div className="input-area">
          <InputArea onChange={onChangeProps} onClick={onClickProps} />
        </div>
        <div className="profile-area">
          <ProfileCard user={profileGit} />
          {/* {isLoading ? (
          ) : null} */}
        </div>
      </div>
    </div>
  )
}

export default App
