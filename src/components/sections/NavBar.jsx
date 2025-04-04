

const NavBar = () => {
    return (
        <nav className="flex container-fluid mx-auto justify-between items-center bg-white text-blue-950 text-xl font-semibold">
            <div className="flex justify-between items-center w-2/3 mx-auto">
            <div className="w-1/3">
                <a href=""> <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/D.E.M.O._Logo_2006.svg" alt="imagen logo" className="w-40" /></a>
            </div>

            <ul className="flex w-2/3 justify-between items-center">
                <li><a href="">Voluntariado</a></li>
                <li><a href="">Empresas</a></li>
                <li><a href="">Tu Línea de Apoyo Institucional</a></li>
                <li><a href="">FAQ</a></li>
                <li><a href="">Equipo</a></li>
                <li><a href="">Contacto</a></li>
                <li><a href=""><button className="bg-red-400 text-white px-6 py-4 rounded-md hover:bg-red-500 hover:text-gray-300 transition-all duration-300"><i class="fa-solid fa-heart"></i> Donar</button></a></li>
            </ul>
            </div>
        </nav>
    )
}
export default NavBar