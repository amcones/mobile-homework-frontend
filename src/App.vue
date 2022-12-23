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
* {
  margin: 0;
  box-sizing: border-box;
}

:root {
  --v_bg1: #26de81;
  --v_bg2: #F6F7F8;
  --v_bg3: #EDEEEF;
  --v_primary: #1c1c1c
}

main {
  background: var(--v_bg1);
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
}
</style>
