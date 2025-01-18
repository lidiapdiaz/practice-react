import './TwitterFollowCard.css'

export default function TwitterFollowCard() {
  return (
    <article className='tw-followCard'>
    <header className='tw-followCard-header'>
        <img
        className='tw-followCard-avatar'
        src="https://unavatar.io/soundcloud/gorillaz" 
        alt="foto avatar" />
        <div className='tw-followCard-info'>
            <strong>Lidia Piñeiro Diaz</strong>
            <span className='tw-followCard-infoUsername'>@lidiapdiaz</span>
        </div>
    </header>
    <aside>
        <button className='tw-followCard-button'>Seguir</button>
    </aside>  
   </article>
  )
}
