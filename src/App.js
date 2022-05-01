import './assets/bootstrap/css/bootstrap.min.css';
import './App.css';
import img from './images/aboutus.png';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <div id="wrapper">
		<header id="header">
			<div class="inner">

				<a href="index.html" class="logo">
					<span class="fa fa-gear"></span> <span class="title">Six Wheels</span>
				</a>

				<nav>
					<ul>
						<li><a href="#menu">Menu</a></li>
					</ul>
				</nav>

			</div>
		</header>
    <Navbar />
		
		<div id="main">
			<div class="inner">
				<h1>About Us</h1>

				<div class="image main">
					<img src= { img } class="img-fluid" alt="" />
				</div>

				<p><i>Ever wondered if there was ever a website only dedicated to car freaks? This is just the place for
						you.</i></p>
				<p>We're Six Wheels. Dedicated to people who just want to visit a website to checkout all recent details
					for the latest cars that come up. With the six most popular brands in our country, we've made this
					website to display all the necessary details for people who are just here to get a look at the
					models. One thing to notice is that this website is completely ad-free. We do not earn any profits.
					This is a pure fan-webpage.</p>
				<p>One thing you will do here is <b>never regret</b>. This will be your only destination for exploring
					new Wheels.</p>
			</div>
		</div>
    <Footer/>
  </div>
  );
}

export default App;
