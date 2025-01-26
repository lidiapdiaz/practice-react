import './TwitterFollowCard.css'

export default function TwitterFollowCard({name, userName, userImage, isFollowing}) {
  return (
    <article className='tw-followCard'>
    <header className='tw-followCard-header'>
        <img
        className='tw-followCard-avatar'
        src={`https://unavatar.io/x/${userImage}`}
        alt="foto avatar" />
        <div className='tw-followCard-info'>
            <strong>{name}</strong>
            <span className='tw-followCard-infoUsername'>@{userName}</span>
        </div>
    </header>
    <aside>
        <button className='tw-followCard-button'>Seguir</button>
    </aside>  
   </article>
  )
}
