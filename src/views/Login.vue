<template>
  <div class="login">
    <div v-if="!loggedIn">
      <div>Login</div>
      <input ref="username" placeholder="Username" v-model="username" @input="removeError" /><br><br>
      <input type="password" ref="password" placeholder="Password" v-model="password" @input="removeError" /><br>
      <br>
      <button @click="login()">Login</button>
    </div>
    <div v-else>
      Logged In <br>
      <button @click="logOut()">Logout</button>
    </div>
  </div>
</template>

<script>
import helper from '@/assets/helper.js'

export default {
  name: 'LoginView',
  components: {

  },
  data: function () {
    return {
      loggedIn: false,
      username: "",
      password: "",
    }
  },
  mounted() {
    this.loggedIn = helper.isAuthenticated();
  },

  methods: {
    login: function () {
      if (this.username === "john.doe@test.com" && this.password === "test") {
        let loginData = { username: this.username, password: "cryptedPassword", timestamp: Date.now() };
        localStorage.loginData = JSON.stringify(loginData);
        this.loggedIn = true;
        this.username = "";
        this.password = "";
      } else {
        this.$refs.username.classList.add('error');
        this.$refs.password.classList.add('error');
      }
    },
    logOut() {
      this.loggedIn = false;
      localStorage.removeItem("loginData");
    },
    removeError: function () {
      this.$refs.username.classList.remove('error');
      this.$refs.password.classList.remove('error');
    },

  }

}
</script>

<style scoped>
.error {
  border-color: red;
  animation: shake 0.2s ease-in-out 0s 2;
}

@keyframes shake {
  0% {
    margin-left: 0rem;
  }

  25% {
    margin-left: 0.5rem;
  }

  75% {
    margin-left: -0.5rem;
  }

  100% {
    margin-left: 0rem;
  }
}
</style>