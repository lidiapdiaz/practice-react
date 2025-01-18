import './TwitterFollowCard.css'

<<<<<<< HEAD:Twitter-card/src/follow card/TwitterFollowCard.jsx
export default function TwitterFollowCard({name, userName, userImage, isFollowing}) {
=======
export default function TwitterFollowCard() {
>>>>>>> ee0fac3 (reorganizacion de los archivos):src/follow card/TwitterFollowCard.jsx
  return (
    <article className='tw-followCard'>
    <header className='tw-followCard-header'>
        <img
        className='tw-followCard-avatar'
<<<<<<< HEAD:Twitter-card/src/follow card/TwitterFollowCard.jsx
        src={`https://unavatar.io/x/${userImage}`}
        alt="foto avatar" />
        <div className='tw-followCard-info'>
            <strong>{name}</strong>
            <span className='tw-followCard-infoUsername'>@{userName}</span>
=======
        src="https://unavatar.io/soundcloud/gorillaz" 
        alt="foto avatar" />
        <div className='tw-followCard-info'>
            <strong>Lidia Piñeiro Diaz</strong>
            <span className='tw-followCard-infoUsername'>@lidiapdiaz</span>
>>>>>>> ee0fac3 (reorganizacion de los archivos):src/follow card/TwitterFollowCard.jsx
        </div>
    </header>
    <aside>
        <button className='tw-followCard-button'>Seguir</button>
    </aside>  
<<<<<<< HEAD:Twitter-card/src/follow card/TwitterFollowCard.jsx
  </article>
=======
   </article>
>>>>>>> ee0fac3 (reorganizacion de los archivos):src/follow card/TwitterFollowCard.jsx
  )
}
