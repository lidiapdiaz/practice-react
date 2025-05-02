import './gods.css'

export default function Gods({ gods }) {

  return (
    <main className="gods">
      <ul>
        {gods.map(god => (
          <li key={god.id}>
            <img
              src={god.url}
              alt={god.name}
            />
            <div >
              <h3>{god.name} <span> - {god.hp}&#9877;</span> </h3>
              <p>{god.mithology}</p>
            </div>
            <div>
              <button>
              add to party
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}