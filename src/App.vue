<template>
  <main>
    <div id="container">
      <router-view>
      </router-view>
    </div>
  </main>
</template>

<script>


export default {
  name: 'App',
  components: {},
}
</script>

<style>
:root {
  --v_bg1: #26de81;
  --v_bg2: #F6F7F8;
  --v_bg3: #EDEEEF;
  --v_primary: #409EFF
}

* {
  margin: 0;
  box-sizing: border-box;
}

@media (max-width: 450px) {
  main {
    background-image: url("assets/bg.jpeg");
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }

  #container {
    background: var(--v_bg3);
    width: 80vw;
    height: 50vh;
    border-radius: 15px;
    box-shadow: 4px 4px 16px gray;
    min-width: 370px;
    min-height: 500px;
    margin: auto;
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
  }
}

@media (min-width: 451px) {
  main {
    background-image: url("assets/bg.jpeg");
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #container {
    background: var(--v_bg3);
    border-radius: 16px;
    box-shadow: 4px 4px 16px gray;
    width: 32vw;
    height: 80vh;
    min-width: 400px;
    min-height: 600px;
    margin: auto;
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    width: 100%;
    height: 100%;
  }
}
</style>
