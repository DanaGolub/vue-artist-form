<template>
  <div id="app">
    Artist Directory <br/>
    <AddArtistForm />
    {{nameFilter}}

    
  </div>
</template>
<script>
import HelloWorld from "./components/HelloWorld";
import AddArtistForm from "./components/AddArtistForm.vue";
import mymixin from "./components/mymixin";

export default {
  name: "app",
  mixins: [mymixin],
      data() {
        return {
        }
    },
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
