<template>
  <div id="app">
    Artist Form <br/>
    <!-- <HelloWorld /> -->
    <input type="text" v-model="id" />
    <button v-on:click="showForm()">Add Artist</button>
    <div v-if="formIndicator"><AddArtistForm /></div>
    <!-- {{this.artistsList[0]}} -->
    
  </div>
</template>
<script>
import HelloWorld from "./components/HelloWorld";
import AddArtistForm from "./components/AddArtistForm.vue";
import mymixin from "./components/mymixin";

export default {
  name: "app",
  mixins: [mymixin],
    //   data() {
    //     return {
    //         artName: null,
    //         about: null,
    //         url: null
    //     }
    // },
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
