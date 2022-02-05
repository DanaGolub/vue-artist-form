<template>
  <div id="app">
    Parent
    <HelloWorld />
    <input type="text" v-model="id" />
    <button v-on:click="addArtist()">Add Artist</button>
    <div v-if="formIndicator"><AddArtistForm /></div>
    {{ formIndicator }}
  </div>
</template>
<script>
import HelloWorld from "./components/HelloWorld";
import AddArtistForm from "./components/AddArtistForm.vue";
import mymixin from "./components/mymixin";

export default {
  name: "app",
  mixins: [mymixin],
  components: {
    HelloWorld,
    AddArtistForm,
  },
};
</script>
<style>
#app {
  color: #565656;
}
</style>
