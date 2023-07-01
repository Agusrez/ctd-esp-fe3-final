import { Link } from 'react-router-dom';
import { myRoutes } from '../Routes/utilties/myRoutes';
import { useThemeStates } from '../Context/ThemeContext/ThemeContext';
import { useFavState } from '../Context/FavsContext/FavContex';

const Card = ({ item }) => {
  const { theme } = useThemeStates();
  const { favsState, favsDispatch } = useFavState();

  const { name, username, id } = item;

  const addFav = () => {
    const findFav = favsState.favs.find((favs) => favs.id === item.id);
    if (!findFav) {
      favsDispatch({ type: 'ADD_FAV', payload: item });
    } else {
      alert('Ya está agregado');
    }
  };

  return (
    <div className="containerCards">
      <Link
        to={`${myRoutes.detail}${item.id}`}
        className="card"
        style={{
          background: theme.background,
          color: theme.font,
          borderRadius: '20px',
          height: '400px',
          width: '250px',
        }}
      >

        <img
          src="./images/doctor.jpg"
          alt=""
          style={{ width: '195px', borderRadius: '15px' }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h3>{name}</h3>
          <h5>user: {username}</h5>
          <h5>user-id: {id}</h5>
        </div>
      </Link>

      <button
        onClick={addFav}
        className="favButton"
        style={{
          width: '70px',
          background: theme.background,
          color: theme.font,
        }}
      >
        Add fav
      </button>
    </div>
  );
};

export default Card;
