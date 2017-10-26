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
                    <v-form v-model="valid" ref="form">
                        <v-text-field
                                label="Name"
                                v-model="name"
                                :rules="nameRules"
                                :counter="40"
                                prepend-icon="event"
                                required
                        ></v-text-field>

                        <v-dialog
                                persistent
                                v-model="modal"
                                lazy
                                full-width
                        >
                            <v-text-field
                                    slot="activator"
                                    label="Picker in dialog"
                                    v-model="date"
                                    prepend-icon="event"
                                    readonly
                                    :rules = 'dateRules'
                            ></v-text-field>
                            <v-date-picker
                                    v-model="date"
                                    scrollable
                                    actions
                                    year-icon>
                                <template slot-scope="{ save, cancel }">
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                                        <v-btn flat color="primary" @click="save">OK</v-btn>
                                    </v-card-actions>
                                </template>
                            </v-date-picker>
                        </v-dialog>

                        <v-text-field
                                name="description"
                                v-model="description"
                                label="Label Text"
                                multi-line
                                :rules="descriptionRules"
                                prepend-icon="event"

                        ></v-text-field>


                        <v-btn  @click="submit"
                                :disabled="valid == false"
                                :color=" valid == false ? null: 'primary'"
                        >Submit</v-btn>
                        <v-btn @click="clear" flat>Reset</v-btn>
                    </v-form>
                </div>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
	export default {
		data () {
			return {
				valid: false,
				name: '',
				nameRules: [
					(v) => !!v || 'Name is required',
					(v) => v.length <= 40 || 'Name must be less than 40 characters'
				],
                date: null,
                dateRules: [ (v) => !!v || 'Please input a date' ],
                modal: false,
                description: '',
                descriptionRules: [
					(v) => !!v || 'Description is required',
					(v) => v.length >= 10 || 'Description should be atleast 10 characters',
                ]
			}
		},
		methods: {
			submit(){
				console.log('submit')
			},
			clear(){
				this.$refs.form.reset()
			}
		}
	}
</script>