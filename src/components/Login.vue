<template>
  <div class="indigo lighten-2 white--text text-xs-center login-container" >
    <notification ref="notification"/>
    <div class="section-header">
      <h1> Login </h1>
    </div>
    <v-container>
      <v-layout row wrap>
        <v-flex xs6 offset-sm3>
          <v-form ref="form"
            lazy-validation
            v-model="valid">
            <v-text-field
              v-if="register"
              v-model="name"
              label="Name"
              :rules="nameRules"
              required>
            </v-text-field>
            <v-text-field
              v-if="register"
              v-model="email"
              :rules="emailRules"
              label="Email"
              required>
            </v-text-field>
            <v-text-field
              v-model="username"
              :rules="usernameRules"
              label="Username"
              required>
            </v-text-field>
            <v-text-field
              v-model="password"
              label="Password"
              :rules="passwordRules"
              :type="'password'">
            </v-text-field>
            <v-text-field
              v-model="passwordConfirmation"
              v-if="register"
              label="Password Confirmation"
              :rules="passwordConfirmationRules"
              :type="'password'">
            </v-text-field>
            <v-text-field
              v-model="authToken"
              v-if="register"
              label="Registration Key"
              :rules="authTokenRules"
              :type="'password'">
            </v-text-field>
            <v-btn
                :small="true"
                outline
                @click="register=!register" > 
                    <span v-if="register">
                        Back to Sign In
                    </span>
                    <span v-else>
                        Sign Up
                    </span>
            </v-btn>
            <v-btn
                outline
                @click="submit" > 
                    Submit
            </v-btn>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>

import axios from 'axios';
import notification from './common/hasNotifications.vue'

export default {
  name: 'Login',
  components: {
      notification: notification,
  },
  mounted() {
      if ( this.$route.params.unauthorized ) {
          this.$refs.notification.showFailure({ title: 'Redirect', message: 'Please login. Your session has expired.' });
      }
  },
  methods: {
    submit() {
      this.register ? this.signUp() : this.signIn();
    },
    resetForm() {
      this.registerFields.forEach( field => this[field] = "" );
    },
    validate () {
      if (this.$refs.form.validate()) {
          this.snackbar = true
      }

    },
    signUp() {
      this.validate();
      let data = {};
      this.registerFields.forEach( field => data[field] = this[field] );
      axios.post('/users/register', data )
          .then( res => {
              this.resetForm();
              this.register = false;
              this.$refs.notification.showSuccess({ title: 'Success', message: 'You have successfully registered' });
          }).catch( ( err ) => {
              this.$refs.notification.showFailure({ title: 'Failure', message: err.response.data.error });
          })
    },
    signIn() {
      let data = {};
      this.registerFields.forEach( field => data[field] = this[field] );
      axios.post('/login', data )
          .then( res => {
              localStorage.setItem( 'yabUsersName', res.data.user.name );
              localStorage.setItem( 'yabUsername', res.data.user.username );
              localStorage.setItem( 'yabUserEmail', res.data.user.email );
              localStorage.setItem( 'yabToken', res.data.token );
              this.$refs.notification.showSuccess({ title: 'Login Success', message: 'Logged In' });
              this.$router.push('/moderator');
          }).catch( ( err ) => {
              this.$refs.notification.showFailure({ title: 'Authentication Error', message: 'Your username or password is incorrect' });
          })
    },
  },
  computed: {
      usernameRules() {
          return this.register ?
              [ v => !!v || 'Username is required', v => /^[a-zA-Z\d-_]+$/.test(v) || 'Name can only have letters, numbers, underscore, and hyphen' ] :
              [ v => !!v || 'Username is required'];
      },
      passwordRules() {
          return this.register ?
            [ v => !!v || 'Username is required', v => v.length >= 6 || 'Password must be six characters or longer' ] :
            [];
      },
  },
  data: () => ({
      valid: true,
      name: "",
      nameRules: [
        v => !!v || 'Name is required',
        v => /^[a-zA-Z\s]+$/.test(v) || 'Name can only have letters'
      ],       
      email: "",
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      username: "",
      password: "",
      passwordConfirmation: "",
      passwordConfirmationRules: [
        v => !!v || 'Password confirmation is required',
      ],
      authToken: "",
      authTokenRules: [
        v => !!v || 'Registration key is required',
      ],
      register: false,
      registerFields:  ['name', 'email', 'username', 'password', 'passwordConfirmation', 'authToken'],
  })
}
</script>
<style scoped>
 #app {
	 position: absolute;
	 width: 100%;
	 top: 0;
	 bottom: 0;
 }
  .v-content {
      min-height: 100%;
  }
  .layout.column {
      min-height: 100%;
  }
  .v-input {
      margin-bottom: 2%;
  }
  .login-container {
      border: 3px solid #971111;
      background-color: #DDD;
      padding-top: 2%;
      height: 100%;
  }
  .section-header > h1 {
      font-size: 3em;
      font-weight: 300;
      font-family: Monsterrat, sans-serif;
  }
  input {
      background-color: #424242 !important;
  }
</style>
