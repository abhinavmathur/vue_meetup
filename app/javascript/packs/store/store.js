import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		loadedMeetups: [
			{
				imageUrl: "http://via.placeholder.com/800x400",
				title: 'Meetup One',
				id: 'hello-world',
				date: '2017-10-17'
			},
			{
				imageUrl: "http://via.placeholder.com/700x400",
				title: 'Meetup Two',
				id: 'hello-world-trade-center',
				date: '2017-10-22'
			}
		],
		user: {
			id: 1,
			registeredMeetups: []
		}

	},
	mutations: {},
	actions: {},
	getters: {
		loadedMeetups(state){
			return state.loadedMeetups.sort((meetupA, meetupB) => {
				meetupA.date > meetupB.date;
			})
		},
		loadedMeetup(state) {
			return (meetupId) => {
				return state.loadedMeetups.find((meetup) => {
					return meetup.id === meetupId
				})
			}
		}
	}
});