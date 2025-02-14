function Navbar(props)
{
  return(
    <div>
      <nav className={props.darkMode?"dark":""}>
        <img src="/logo512.png" alt="Logo React" className="nav-img"/>
        <h3 className="nav-h3">React Facts</h3>

        <div className="toggler">
          <p className="toggler-light">Light</p>
          <div className="toggler-slider" onClick={props.toggle}>
            <div className="toggler-slider-circle"></div>
          </div>
          <p className="toggler-dark">Dark</p>
        </div>

        <h4 className="nav-h4 ">React Course - Project-1</h4>
      </nav>
    </div>
  )
}

export default Navbar;