import Vue from 'vue'
import Router from 'vue-router'
import Home from '../Home.vue'
import Meetups from '../Meetup/Meetups.vue'
import CreateMeetups from '../Meetup/CreateMeetup.vue'
import Profile from '../User/Profile.vue'
import SignUp from '../User/SignUp.vue'
import SignIn from '../User/SignIn.vue'



Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Hello',
			component: Home
		},
		{
			path: '/meetups',
			name: 'Meetups',
			component: Meetups
		},
		{
			path: '/meetup/new',
			name: 'CreateMeetups',
			component: CreateMeetups
		},
		{
			path: '/profile',
			name: 'Profile',
			component: Profile
		},
		{
			path: '/signup',
			name: 'SignUp',
			component: SignUp
		},
		{
			path: '/signin',
			name: 'SignIn',
			component: SignIn
		}

	]
})