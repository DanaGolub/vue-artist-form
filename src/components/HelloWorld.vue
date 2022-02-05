<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1>
    <h2>{{ mixinMsg }}</h2>
    <button v-on:click="showMixinAlert()">Show alert</button>
    <ul>
      <li v-for="item in footwear">
        ID {{ item.id }}: {{ item.brand }} - {{ item.shoe }}
      </li>
    </ul>
    <h1 v-if="fullname">{{ fullname }}</h1>
        <input type='text' v-model='id'>
        <button v-on:click="getShoe(id)">Enter id</button> -->
<!-- /////////////////////////////////////////////////////// -->


  </div>
  
</template>

<script>
import mymixin from "./mymixin";

export default {
  name: "HelloWorld",
  mixins: [mymixin],
  data() {
    return {
      msg: "Hello from HelloWorld component.",
      id: null
    };
  },
};
</script>
