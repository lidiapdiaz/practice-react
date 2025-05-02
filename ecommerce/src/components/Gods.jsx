export default function Gods({ gods }) {

  return (
    <main>
      <ul>
        {gods.map(god => (
          <li key={god.id}>
            <img
              src={god.url}
              alt={god.name}
              width={200}
            />
            <div >
              <h3>{god.name}</h3>
              <p>{god.mithology}</p>
            </div>
            <div>
              <button>
                Add to party
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}