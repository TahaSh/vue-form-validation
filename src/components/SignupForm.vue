<template>
  <div class="signup-form">
    <div class="field">
      <label class="label">Username</label>
      <input
        v-model="username"
        type="text"
        class="text-input"
      >
      <span
        v-if="$v.$dirty && $v.username.$invalid"
        class="error-message"
      >
        {{ usernameErrorMessage }}
      </span>
    </div>
    <div class="field">
      <label class="label">Email</label>
      <input
        v-model="email"
        type="text"
        class="text-input"
      >
      <span
        v-if="$v.$dirty && $v.email.$invalid"
        class="error-message"
      >
        {{ emailErrorMessage }}
      </span>
    </div>
    <div class="field">
      <label class="label">Password</label>
      <input
        v-model="password"
        type="password"
        class="text-input"
      >
      <span
        v-if="$v.$dirty && $v.password.$invalid"
        class="error-message"
      >
        {{ passwordErrorMessage }}
      </span>
    </div>
    <div class="field">
      <label class="label">Confirm Password</label>
      <input
        v-model="passwordConfirmation"
        type="password"
        class="text-input"
      >
      <span
        v-if="$v.$dirty && $v.passwordConfirmation.$invalid"
        class="error-message"
      >
        {{ passwordConfirmationErrorMessage }}
      </span>
    </div>
    <button
      class="button"
      @click="submit"
    >
      Sign Up
    </button>
  </div>
</template>

<script>
import {
  required,
  email,
  sameAs
} from 'vuelidate/lib/validators'

export default {
  name: 'SignupForm',
  data () {
    return {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  },

  validations: {
    username: {
      required,
      validChars: (value) => {
        return (/^[a-zA-Z0-9_]+$/ig).test(value)
      }
    },
    email: {
      required,
      email
    },
    password: { required },
    passwordConfirmation: {
      required,
      sameAsPassword: sameAs('password')
    }
  },

  computed: {
    usernameErrorMessage () {
      if (!this.$v.username.required) {
        return 'Username is required'
      } else if (!this.$v.username.validChars) {
        return 'Username can only contain letters, numbers, and underscores'
      }
    },

    emailErrorMessage () {
      if (!this.$v.email.required) {
        return 'Email is required'
      } else if (!this.$v.email.email) {
        return 'Please enter a valid email'
      }
    },

    passwordErrorMessage () {
      if (!this.$v.password.required) {
        return 'Password is required'
      }
    },

    passwordConfirmationErrorMessage () {
      if (!this.$v.passwordConfirmation.required) {
        return 'Confirm Password is required'
      } else if (!this.$v.passwordConfirmation.sameAsPassword) {
        return 'Please enter the same password as above'
      }
    }
  },

  methods: {
    submit () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$emit('submit')
      }
    }
  }
}
</script>

<style scoped>
.signup-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.field {
  display: flex;
  flex-direction: column;
  width: 400px;
}

.label {
  color: #555;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
}

.text-input {
  border: none;
  box-shadow: 0 0 1px 0 rgba(0,0,0,0.3) inset;
  outline: none;
  padding: 5px;
  font-size: 14px;
  color: #444444;
  border-radius: 2px;
  transition: box-shadow 0.2s;
  margin-top: 3px;
}

.text-input:focus {
  box-shadow: 0 0 1px 0 rgba(0,0,0,0.4) inset;
}

.field + .field {
  margin-top: 15px;
}

.button {
  align-self: flex-end;
  margin: 20px 40px 0;
  border-radius: 4px;
  box-shadow: none;
  border: none;
  background: rgba(0,160,140,0.8);
  color: #FFFFFF;
  font-weight: bold;
  text-transform: uppercase;
  padding: 7px 20px;
  font-size: 15px;
  font-weight: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
  outline: none;
}

.button:hover {
  background: rgba(0,160,140,1);
}

.error-message {
  color: #B22222;
  font-size: 13px;
  margin: 5px 0 0 5px;
}
</style>
