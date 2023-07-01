import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';



const Detail = () => {
  const [dentista, setDentista] = useState('');

  const paramsId = useParams();

  const urlId = `https://jsonplaceholder.typicode.com/users/${paramsId.id}`;

  useEffect(() => {
    axios(urlId).then((res) => setDentista(res.data));
  }, []);

  return (
    <>
      {console.log(dentista)}
      <h1>Detail Dentist</h1>
      <h1>dentista</h1>
      <div style ={{ display: 'flex', justifyContent: 'center' }} >
      <img
          src="../images/doctor.jpg"
          alt=""
          style={{ width: '195px', borderRadius: '15px' }}
        />
      </div>
      <h3>Nombre: {dentista.name}</h3>
      <h3>Apellido: {dentista.username}</h3>
      <h3>Email: {dentista.email}</h3>
      <h3>Website: {dentista.website}</h3>
    </>
  );
};

export default Detail;
