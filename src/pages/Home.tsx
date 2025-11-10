import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/local');
  };

  return (
    <div>
      <button onClick={handleNavigation}>Go to Local</button>
    </div>
  );
};

export default Home;
