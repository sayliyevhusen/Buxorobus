<template>
  <div class="ramka">
    <div class="ramkacha1">
      <router-link class="login" :to="{ name: 'loginforma' }" title="When you press this button, it will turn on the main window" > Logout</router-link>
      <h1 class="smartapp"> SmartApp </h1>
      <h1 class="bus"> AVTOBUS </h1>
    </div>
    <div class="ramka1">
      <div class="ramkacha2">
        <p class="statistika"> Statistika <span class="belgi"> > </span></p>
        <p class="bekatlar"> Bekatlar <span class="belgi"> > </span></p>
        <p class="avtobuslar"> Avtobuslar <span class="belgi"> > </span></p>
        <p class="kuchalar"> Ko'chalar <span class="belgi"> > </span></p>
        <p class="qrcodi"> Qr codi <span class="belgi"> > </span></p>
        <p class="hududlar"> Hududlar <span class="belgi"> > </span></p>


      </div>

      <div class="ramka3"></div>
    </div>
  </div>
</template>
<script>

</script>

<style scoped>
.statistika {
  position: absolute;
  background-color: #6060d9;
  color: #f8f3f3;
  width: 300px;
  height: 30px;
  font-size: 25px;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 2.5%;
}

.statistika:hover {
  background-color: #7979f1;
}

.bekatlar {
  position: absolute;
  background-color: #6060d9;
  color: #f8f3f3;
  width: 300px;
  height: 30px;
  font-size: 25px;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 7.5%;

}

.bekatlar:hover {
  background-color: #7979f1;
}

.avtobuslar {
  position: absolute;
  background-color: #6060d9;
  color: #f8f3f3;
  width: 300px;
  height: 30px;
  font-size: 25px;
  text-align: left;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 12.5%;
}

.avtobuslar:hover {
  background-color: #7979f1;
}

.kuchalar {
  position: absolute;
  background-color: #6060d9;
  color: #f8f3f3;
  width: 300px;
  height: 30px;
  font-size: 25px;
  text-align: left;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 17.5%;
}

.kuchalar:hover {
  background-color: #7979f1;
}

.qrcodi {
  position: absolute;
  background-color: #6060d9;
  color: #f8f3f3;
  width: 300px;
  height: 30px;
  font-size: 25px;
  text-align: left;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 22.5%;
}

.qrcodi:hover {
  background-color: #7979f1;
}

.hududlar {
  position: absolute;
  background-color: #6060d9;
  color: #f8f3f3;
  width: 300px;
  height: 30px;
  font-size: 25px;
  text-align: left;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 27.5%;
}

.hududlar:hover {
  background-color: #7979f1;
}


.belgi {
  position: absolute;
  transform: translate(-50%, -50%);
  left: 95%;
  top: 50%;
}

.bus {
  position: absolute;
  transform: translate(-50%, -50%);
  left: 16%;
  top: 50%;
  color: yellow;
  font-size: 45px;
}

.smartapp {
  position: absolute;
  color: #a0fc18;
  font-size: 45px;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;

}

.login {
  position: absolute;
  background-color: blue;
  font-size: 20px;
  border-radius: 10px;
  width: 150px;
  height: 28px;
  text-align: center;
  color: whitesmoke;
  text-decoration: none;
  transform: translate(-50%, -50%);
  left: 90%;
  top: 50%;
}

.login:hover {
  background-color: #6060d9;
}

.ramka {
  position: relative;
  cursor: pointer;
  display: block;
  width: 100vw;
  height: 100vh;
}

.ramkacha1 {
  position: relative;
  background-color: #7070a4;
  display: block;
  width: 100%;
  height: 60px;
}

.ramka1 {
  position: relative;
  display: block;
  width: 100%;
  height: calc(100% - 60px);
  border: 0px red solid;

}

.ramkacha2 {
  position: relative;
  display: inline-block;
  height: 100%;
  width: 300px;
  background-color: #b4b4d3;
}

.ramka3 {
  position: absolute;
  transform: translate(-50%, -50%);
  left: 61%;
  top: 50%;
  display: inline-block;
  height: 100%;
  border: 0px solid blue;
  width: calc(100% - 300px);
}
</style>