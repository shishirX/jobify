import Logo from '../components/logo';
import Main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';

const Landing = () => {
	return (
		<Wrapper>
			<nav>
				<Logo />
			</nav>
			<div className='container page'>
				<div className='info'>
					<h1>
						Job <span>Tracking</span> App
					</h1>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Assumenda aliquam sunt velit ipsa corrupti, ab
						illo commodi facilis temporibus nihil laudantium
						recusandae exercitationem voluptates adipisci sed
						distinctio hic numquam cum mollitia error, qui quia
						rerum ea harum. Assumenda sequi quasi expedita, illum
						modi explicabo eveniet ex fuga tempore voluptatibus id.
					</p>
					<Link to={'/auth'} className='btn btn-hero'>
						Login / Register
					</Link>
				</div>
				<img src={Main} alt='Job Hunt' className='img main-img' />
			</div>
		</Wrapper>
	);
};

export default Landing;
