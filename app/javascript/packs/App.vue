<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="sideNav">
            <v-toolbar dark class="purple darken-1">
                <v-spacer></v-spacer>
                <v-btn icon v-on:click="sideNav = !sideNav">
                    <v-icon>close</v-icon>
                </v-btn>
            </v-toolbar>
            <v-list>
                <v-list-tile avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>Profile photo</v-list-tile-title>
                        <v-list-tile-sub-title>Change your Google+ profile photo</v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar>
            <v-toolbar-side-icon class="hidden-sm-and-up"
                                 @click.native.stop="sideNav = !sideNav">

            </v-toolbar-side-icon>
            <v-toolbar-title>Vacation Fund Blog</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat>
                <v-icon left>local_post_office</v-icon>
                Posts
            </v-btn>
        </v-toolbar>
        <main>
            <router-view></router-view>
        </main>
        <v-footer class="pa-3">
            <v-spacer></v-spacer>
            <div>© {{ new Date().getFullYear() }}</div>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        data: () => ({
            drawer: true,
            sideNav: false
        }),
        props: {
            source: String
        }
    }
</script>

<style lang="stylus">
    //@import "~vuetify/src/stylus/settings/_colors.styl"
    @import '~vuetify/src/stylus/main'
</style>