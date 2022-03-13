const Burger = ({ state, setter }) => {
  return (
    <button
      className={`hamburger ${state ? 'open' : 'closed'}`}
      onClick={() => setter(!state)}
      aria-label="Abrir-cerrar menu / Open-close menu "
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </button>
  )
}

export default Burger
