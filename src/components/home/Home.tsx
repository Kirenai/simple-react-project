import { useHistory } from "react-router-dom";

type HomeProps = {
  isLogin: boolean;
}

const Home: React.FC<HomeProps> = ({ isLogin }) => {
  const history = useHistory();
  if (!isLogin) {
    history.push('/login');
  }

  return (
    <div className="container mx-auto">
      <h1>Home</h1>
    </div>
  )
}

export default Home;
