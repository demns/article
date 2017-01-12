var React = require('react'); 

class Login extends React.Component { 
	render() { 
		return <div>
			<header class="site-header">
      			<h1 class="site-header__logo">News</h1>
      		</header>
		    <div class="site-content">
		        <h2 class="page-title">Login</h2>
		        <div class="login-form">
			        <form>
			            <div class="input-wrapper">
			            	<input id="username" class="input" type='text' name='username' required='' placeholder='Your username'/>
			            </div>
			            <div class="input-wrapper">
			            	<input id="password" class="input" type='password' name='password' required='' placeholder='Password'/>
			            </div>
			          	<input class="button" type='submit' value='Login'/>
			        </form>
		        </div>
		      	<p>
		      		<a class="registration-link" href='/registration'>Registration</a>
		      	</p>
		    </div>
		</div>; 
	} 
} 

module.exports = Login;