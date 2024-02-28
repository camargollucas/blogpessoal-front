import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { toastAlerta } from '../../util/toastAlerta';
import { HouseSimple, PlusSquare, List, SignOut, User, GameController } from '@phosphor-icons/react';
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
            <div className='nav-item'>
          
            <HouseSimple size={18}></HouseSimple><Link to='/home' className='hover:underline'>Home</Link>

            <List size={18}></List><Link to='/postagens' className=' hover:underline'>Postagens</Link>

            <List size={18}></List><Link to='/temas' className=' hover:underline'>Temas</Link>

            <PlusSquare size={18}></PlusSquare><Link to='/cadastroTema' className=' hover:underline'>Cadastrar tema</Link>

            <User size={18}></User><Link to='/perfil' className=' hover:underline'>Perfil</Link>

            <GameController size={18}></GameController><Link to='/pokedex' className=' hover:underline'>Pokédex</Link>

            <SignOut size={18}></SignOut><Link to='' onClick={logout} className=' hover:underline'>Sair</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{navbarComponent}</>;
}

export default Navbar;