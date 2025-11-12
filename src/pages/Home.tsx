import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/local')}>Go to Local</button>
      <button onClick={() => navigate('/operator')}>Go to Operator</button>
    </div>
  );
};

export default Home;
