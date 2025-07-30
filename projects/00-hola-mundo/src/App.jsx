import './App.css';

import { XFollowCardComponent } from './XFollowCardComponent.jsx';

export function App () {

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  },
]

  return (
    <section className='App'>{
      users.map(({ userName, name, isFollowing }) =>
      <XFollowCardComponent
      key={userName}
      userName={userName}
      initialIsFollowing={isFollowing}
      >
        {name}
      </XFollowCardComponent>
      )
    }
    </section>

  );
}