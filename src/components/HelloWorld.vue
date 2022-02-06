<template>
  <div class="hello">
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
