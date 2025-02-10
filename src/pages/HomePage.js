import { Link, useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()

  const navigateHandler = () => {
    navigate('/products')
  }

  return <>
    <h1>My Home Page</h1>
    <p>Go to <Link to='/products'>the list of Products</Link></p>
    <button onClick={navigateHandler}>Products</button>
  </>;
};

export default HomePage;
