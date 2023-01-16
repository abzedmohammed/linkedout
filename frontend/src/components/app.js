import { h } from 'preact';
import { Router } from 'preact-router';
import { useState, useEffect } from 'preact/hooks';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';

const url = process.env.PREACT_APP_LINKEDOUT_BACKEND

export default function App(){
	const [profile, setprofile] = useState({})
	const [posts, setposts] = useState([])
	const [connects, setconnects] = useState([])

	useEffect(() => {
		fetch(url + '/connections').then(res => res.json()).then(data => setconnects(data))
		fetch(url + '/profile').then(res => res.json()).then(data => setprofile(data))
		fetch(url + '/posts').then(res => res.json()).then(data => setposts(data))
	}, [])

	return(
		<div id="app">
		<Header />
		<main>
			<Router>
				<Home profile={profile} posts={posts} connects={connects} path="/" />
			</Router>
		</main>
	</div>
	)
};


