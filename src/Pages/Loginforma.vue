<template>
    <div class="ramkalogin">
    <h1 CLASS="login"> LOG IN </h1>
    <input type="text" placeholder="Login" class="login1" v-model="login1" title="Enter your login here" >
    <input type="password" placeholder="Password" class="password" v-model="password" title="Enter your password here" >
    <router-link @click="buxorobus()"  class="login2" :to="{ name: 'bus' }" title="After entering your login and password, click the login button at the top" > Login</router-link>
  </div>


</template>
<script>
export default {
  name: "Loginforma",
  data() {
    return {
      loading: false,
      login1: "",
      password: "",
    }

  },
  methods: {
    buxorobus: function () {
      console.log({
        "login1": this.login1,
        "password": this.password,

      });
      this.login1 = "";
      this.password = "";


    },

  }
};
</script>
<style >
.ramkalogin {
  cursor: pointer;
  border-radius: 20px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  border: 1px grey solid;
  width: 350px;
  height: 350px;
}

.login {
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 10%;

}

.login1 {
  outline: none;
  border: 2px grey solid;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 35%;
  width: 85%;
  font-size: 20px;
}

.password {
  outline: none;
  border: 2px grey solid;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 55%;
  width: 85%;
  font-size: 20px;
}

.login2 {
  outline: none;
  text-decoration: none;
  text-align: center;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 75%;
  width: 90%;
  font-size: 28px;
  border-radius: 30px;
  background-color: green;
  color: white;
}

.login2:hover {
  background-color: #2bdc2b;
}


</style>