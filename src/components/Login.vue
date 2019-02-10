<template>
    <div class="indigo lighten-2 white--text text-xs-center login-container" >
        <div class="section-header">
          <h1> Login </h1>
        </div>
		<v-form
		ref="form"
		lazy-validation>
			<v-container>
				<v-layout row wrap>
					<v-flex xs6 offset-sm3>
						<v-text-field
						  v-model="email"
                          class="form-field-container"
						  label="E-mail"
                          solo>
						</v-text-field>
					</v-flex>
					<v-flex xs6 offset-sm3>
						<v-text-field
						  v-model="password"
                          class="form-field-container"
						  label="Password"
						  :type="'password'"
                          solo>
						</v-text-field>
					</v-flex>
					<v-flex v-if="register" xs6 offset-sm3>
						<v-text-field
						  v-model="passwordConfirm"
                          class="form-field-container"
						  label="Password Confirmation"
						  :type="'password'"
                          solo>
						</v-text-field>
					</v-flex>
					<v-flex v-if="register" xs6 offset-sm3>
						<v-text-field
						  v-model="secretKey"
                          class="form-field-container"
						  label="Registration Key"
						  :type="'password'"
                          solo>
						</v-text-field>
					</v-flex>
					<v-flex xs6 offset-sm3>
                        <v-btn
                            :color="'info'"
                            :small="true"
                            @click="register=!register" > 
                                <span v-if="register">
                                    Back to Sign In
                                </span>
                                <span v-else>
                                    Sign Up
                                </span>
                        </v-btn>
					</v-flex>
					<v-flex xs6 offset-sm3>
                        <v-btn
                            :color="'info'"
                            @click="submit" > 
                                Submit
                        </v-btn>
					</v-flex>
				</v-layout>
			</v-container>
        </v-form>
    </div>
</template>
<script>

import axios from 'axios';

export default {
  name: 'Login',
  components: {},
  methods: {
      submit() {
          this.register ? this.signUp() : this.signIn();
      },
      signUp() {
          axios.post('/users/register', {username: 'test', password: 'wtf'} )
              .then( res => {
                  // TODO Notification
                  console.log('we made it');
              }).catch( ( err ) => {
                  console.log( err )
                  console.log( err.message )
                  console.log( err.error );
                  console.log( err.responseText );
              })
      },
      signIn() {
          console.log('sign in');
      },
      },
  data: () => ({
      email: "",
      password: "",
      register: false,
      secretKey: "",
      passwordConfirm: "",
  })
}
</script>
<style scoped>
  .login-container {
      border: 3px solid #971111;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: #DDD;
      padding-top: 85px;
  }
  .form-field-container {
      color: black;
      margin: 1%;
      background-color: white;
  }
  .section-header{
      font-size: 1.5em;
      font-weight: 300;
      font-family: Monsterrat, sans-serif;
  }
</style>
