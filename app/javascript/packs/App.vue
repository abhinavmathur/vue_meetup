<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="sideNav">
            <v-toolbar>
                <v-spacer></v-spacer>
                <v-btn icon v-on:click="sideNav = !sideNav">
                    <v-icon>close</v-icon>
                </v-btn>
            </v-toolbar>
            <v-list class="pt-0" dense>
                <v-divider></v-divider>
                <v-list-tile v-for="item in menuItems" :key="item.title">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar>
            <v-toolbar-side-icon class="hidden-sm-and-up"
                                 @click.native.stop="sideNav = !sideNav">

            </v-toolbar-side-icon>
            <v-toolbar-title>Vue Meetup</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat v-for="item in menuItems" :key="item.title">
                <v-icon left>{{ item.icon }}</v-icon>
                {{ item.title }}
            </v-btn>
        </v-toolbar>
        <main>
            <v-content>
                <v-container-fluid>
                    <router-view></router-view>
                </v-container-fluid>
            </v-content>
        </main>
        <v-footer class="pa-3">
            <v-spacer></v-spacer>
            <div>© {{ new Date().getFullYear() }}</div>
        </v-footer>
    </v-app>
</template>

<script>
	export default {
		data: function(){
			return {
				drawer: true,
				sideNav: false,
				menuItems: [
					{ icon: 'supervisor_account', title: 'View Meetups' },
					{ icon: 'room', title: 'Organize Meetup' },
					{ icon: 'person', title: 'Profile' },
					{ icon: 'face', title: 'Sign Up' },
					{ icon: 'lock_open', title: 'Sign In' }

				]
			}
		},
		props: {
			source: String
		}
	}
</script>

<style lang="stylus">
    //@import "~vuetify/src/stylus/settings/_colors.styl"
    @import 'stylus/main.styl'
</style>