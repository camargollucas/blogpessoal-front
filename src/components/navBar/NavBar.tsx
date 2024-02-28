import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { toastAlerta } from '../../util/toastAlerta';
import './NavBar.css';

function Navbar() {
  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    toastAlerta('Usuário deslogado com sucesso', 'sucesso');
    navigate('/login');
  }

  let navbarComponent;

  if (usuario.token !== "") {
    navbarComponent = (
      <div className='navbar-container w-full bg-emerald-900 text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2xl font-bold uppercase'>Diário Pokémon</Link>
          <div className='flex gap-4 navbar-links'>
            <Link to='/postagens' className=' hover:underline'>Postagens</Link>
            <Link to='/temas' className=' hover:underline'>Temas</Link>
            <Link to='/cadastroTema' className=' hover:underline'>Cadastrar tema</Link>
            <Link to='/perfil' className=' hover:underline'>Perfil</Link>
            <Link to='/pokedex' className=' hover:underline'>Pokédex</Link>
            <Link to='' onClick={logout} className=' hover:underline'>Sair</Link>
          </div>
        </div>
      </div>
    );
  }

  return <>{navbarComponent}</>;
}

export default Navbar;