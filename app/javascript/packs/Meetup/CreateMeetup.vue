<template>
    <v-layout row>
        <v-flex md6 offset-md3>
            <v-card>
                <v-card-title primary-title class="justify-center">
                    <div>
                        <h3 class="headline">Create a Meetup</h3>
                    </div>
                </v-card-title>
                <div>
                    <form>
                        <v-text-field
                                v-model="name_of_event"
                                label="Event Name"
                                v-validate="'required|min:5'"
                                error-messages="errors.collect('name_of_event')"
                                data-vv-name="event[name]"
                                required
                        >

                        </v-text-field>
                        <v-btn @click="submit">submit</v-btn>
                    </form>
                </div>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
	export default {
		data() {
			return {
				name_of_event: null,
				date_of_event: null,
				description_of_event: null

			}
		},
		$validates: true,
		methods: {
			submit() {
				this.$validator.validateAll()
			}
		}
	}
</script>