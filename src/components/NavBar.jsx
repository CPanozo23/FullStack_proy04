import {NavLink} from "react-router-dom"

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-light">
            <div className="container-fluid">
                <NavLink className="nav-item nav-link text-white custom-logo mx-5" to="/">
                    <img src="./src/assets/laBarrera_large.png" alt="La Barrera Logo" />
                </NavLink> 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <NavLink className="nav-item nav-link text-primary" to="/">Home</NavLink>
                <NavLink className="nav-item nav-link text-primary" to="/menu">Menú</NavLink>
                <NavLink className="nav-item nav-link text-primary" to="/reservation">Reservaciones</NavLink>
                <NavLink className="nav-item nav-link text-primary" to="/blog">Blog</NavLink>
                </div>
                </div>
            </div>
            </nav>
    )
}
