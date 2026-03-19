import './main.css';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import SignIn from '../SignIn';

function Login() {
  return (
    <>
      <Navbar />
      <main>
        <SignIn />
      </main>
      <Footer />
    </>
  );
}
export default Login;