import React from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import { useState } from 'react';
function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();
	const login = (event) => {
		event.preventDefault();
		event.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push('/');
			})
			.catch((e) => alert(e.message));
	};

	const register = (event) => {
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {})
			.catch((e) => alert(e.message));
	};

	return (
		<div className="login">
			<Link to={'/'}>
				<img
					className="login__logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
					alt=""
				/>
			</Link>
			<div className="login__container">
				<h1>Sign In</h1>
				<form>
					<h5>E-mail</h5>
					<input
						value={email}
						onChange={(event) => setEmail(event.target.value)}
						type={'email'}
					/>
					<h5>Password</h5>
					<input
						value={password}
						onChange={(event) => setPassword(event.target.value)}
						type={'password'}
					/>
					<button onClick={login} className="login__signInButton" type="submit">
						Sign In
					</button>
				</form>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim minus
					nisi doloremque. Earum debitis nulla expedita voluptate nisi beatae
					alias porro quis, magni natus eum quas, facilis provident
					necessitatibus reprehenderit.
				</p>
				<button
					onClick={register}
					className="login__registerButton"
					type="submit"
				>
					Create your Amazon account
				</button>
			</div>
		</div>
	);
}

export default Login;
