import {NavLink} from "react-router-dom"

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-light">
            <div className="container-fluid">
                <NavLink className="nav-item nav-link text-white custom-logo mx-5" to="/">
                    <img src="https://raw.githubusercontent.com/CPanozo23/FullStack_proy04/master/src/assets/laBarrera_large_sbg.png" alt="La Barrera Logo" />
                </NavLink> 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <NavLink className="nav-item nav-link text-primary mx-2 d-flex align-items-center" to="/">
                        <span class="material-symbols-outlined mx-1">home</span>
                        Home
                    </NavLink>
                    <NavLink className="nav-item nav-link text-primary mx-2 d-flex align-items-center" to="/menu">
                        <span class="material-symbols-outlined mx-1">menu_book</span>
                        Menú</NavLink>
                    <NavLink className="nav-item nav-link text-primary mx-2 d-flex align-items-center" to="/reservation">
                        <span class="material-symbols-outlined mx-1">restaurant</span>
                        Reservaciones
                    </NavLink>
                    <NavLink className="nav-item nav-link text-primary mx-2 d-flex align-items-center" to="/blog">
                        <span class="material-symbols-outlined mx-1">news</span>
                        Blog
                    </NavLink>
                    </div>
                    
                </div>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <NavLink className="nav-item nav-link text-primary d-flex align-items-center" to="/">
                        <span class="material-symbols-outlined mx-1">account_circle</span>
                        Iniciar Sesión
                    </NavLink>
                    </div>
                    
                </div>
                
            </div>
            </nav>
    )
}
