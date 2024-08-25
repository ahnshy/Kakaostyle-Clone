<template>
  <div class="ContentsView">
    <Intro/>
    <ZigzagDesc/>
    <History/>
    <Services/>
  </div>
</template>

<script>
import {reactive} from "vue";
import Intro from "@/components/contents/First.vue";
import ZigzagDesc from "@/components/contents/ZigzagDesc.vue";
import History from "@/components/contents/History.vue";
import Services from "@/components/contents/Services.vue";

export default {
  name: "ContentsView",
  components: {Services, History, ZigzagDesc, Intro},
  setup() {
    const state = reactive({
    })

    return {state}
  }
}
</script>

<style scoped>

</style>
