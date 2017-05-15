<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>SoundPlace – Hear the world’s sounds</title>

	<!-- FONTS -->
	<script src="https://use.fontawesome.com/65fd0293d1.js"></script>
	<link href='https://fonts.googleapis.com/css?family=Roboto:400,400italic,500,500italic,700,700italic,900,900italic,300italic,300' rel='stylesheet'>

	<!-- STYLES -->
	<link rel="stylesheet" href="css/reset.css">
	<link rel="shortcut icon" href="img/favicon.ico" sizes="32x32">
	<link rel="stylesheet" href="css/style.css">

</head>
<body class="inner-page login-page">
	
	<div class="upper-wrapper">

		<!-- HEADER -->
		<header>
			<div class="logo">
				<a href="index.html">
					<img src="img/logo.png" alt="">
					<span>Sound</span>Place
				</a>
			</div>
		</header>

		<!-- MAIN -->
		<main>
			
			<section class="wrapper">
				<div class="wrapper-content">
					<h1 class="inner-title">Log in to SoundPlace</h1>
					<div class="form-container">
						<form class="inner-form" method="POST">
							<div class="form-group email">
								<input type="email" name="email" placeholder="Your email">
							</div>
							<div class="form-group password">
								<input type="password" name="password" placeholder="Password">
								<p>
									<a href="#">Forgot password?</a>
								</p>
							</div>
							<button class="inner-btn" type="submit">Log in</button>
							<div class="checkbox">
								<label>
									<input type="checkbox">
									Remember me
								</label>
							</div>
							<p class="lead">
								Don't have a BeatStars account yet? 
								<a href="signup.html">Create your account now</a>
							</p>
						</form>
						<?php
						  $email = $_POST['email'];
						  $pass = $_POST['password'];
						  $connection = mysqli_connect('localhost' , 'root' , '' , 'SoundPlace_BD');
						  $q1 = $connection -> query("SELECT Email FROM Users WHERE Email = '$email' ");
						  $q2 = $connection -> query("SELECT Password FROM Users WHERE Password = '$pass'");
						  $res1 = mysqli_fetch_array($q1);
						  $res2 = mysqli_fetch_array($q2);
						  if ($email == $res1[0] && $pass == $res2[0]) {
						  	echo "<script>";
						  	echo 'document.location.href = "http://localhost/soundplace/profile.html"';
						  	echo "</script>";
			  }
						?>
					</div>
					<div class="social-btns">
						<div class="divider">
							<span>Or</span>
						</div>
						<ul class="social-btns-list">
							<li>
								<button class="inner-btn vk-btn" type="button">
									<i class="fa fa-vk"></i>
									Log in with VK
								</button>
							</li>
							<li>
								<button class="inner-btn facebook-btn" type="button">
									<i class="fa fa-facebook"></i>
									Log in with Facebook
								</button>
							</li>
							<li>
								<button class="inner-btn twitter-btn" type="button">
									<i class="fa fa-twitter"></i>
									Log in with Twitter
								</button>
							</li>
							<li>
								<button class="inner-btn google-btn" type="button">
									<i class="fa fa-google-plus"></i>
									Log in with Google
								</button>
							</li>
						</ul>
					</div>
				</div>
			</section>

		</main>

	</div>

	<!-- FOOTER -->
	<footer>
		<div class="ft-container">
			<ul class="ft-list">
				<li>
					<p>About us</p>
					<ul class="ft-list-content">
						<li>
							<a href="#">
								<i class="fa fa-caret-right"></i>Who we are
							</a>
						</li>
						<li>
							<a href="#">
								<i class="fa fa-caret-right"></i>Contact us
							</a>
						</li>
					</ul>
				</li>
				<li>
					<p>Support</p>
					<ul class="ft-list-content">
						<li>
							<a href="#">
								<i class="fa fa-caret-right"></i>Term of services
							</a>
						</li>
						<li>		
							<a href="#">
								<i class="fa fa-caret-right"></i>Privacy
							</a>
						</li>
					</ul>
				</li>
				<li>
					<p>Contact us</p>
					<ul class="ft-list-content">
						<li>
							<a href="mailto:soundplace@gmail.com">
								<i class="fa fa-envelope-o"></i>soundplace@gmail.com
							</a>
						</li>
						<li>
							<a href="tel:+380001010000">
								<i class="fa fa-phone-square"></i>+38 (000) 101 0000
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<div class="ft-copy">
			<p>
				&copy; 2017 Designed and Developed by 
				<a href="index.html" target="_blank">SoundPlace</a>
			</p>
		</div>
	</footer>

	<!-- SCRIPTS -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<script type="text/javascript" src="js/script.js"></script>

</body>
</html>
