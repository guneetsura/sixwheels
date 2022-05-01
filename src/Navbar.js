export default function Navbar() {
    return(
        <nav id="menu">
			<h2>Menu</h2>
			<ul>
				<li><a href="index.html">Home</a></li>

				<li><a href="cars.html">Cars</a></li>

				<li>
					<a href="#" class="dropdown-toggle">About</a>

					<ul>
						<li class="active"><a href="about.html">About Us</a></li>
						<li><a href="index.html#news">News</a></li>
					</ul>
				</li>
				<li><a href="contact.html">Contact Us</a></li>
			</ul>
		</nav>)
}