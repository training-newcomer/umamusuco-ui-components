<template>
  <div class="m-4">
    <ContentsLoaderSample />
    <ButtonSample />
    <DialogSample />
    <InputTextSample />
    <InputRadioSample />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonSample from "./components/buttons/ButtonSample.vue";
import DialogSample from "./components/modals/DialogSample.vue";
import InputTextSample from "./components/forms/InputTextSample.vue";
import InputRadioSample from "./components/forms/InputRadioSample.vue";
import ContentsLoaderSample from "./components/loader/ContentsLoaderSample.vue";
export default defineComponent({
  name: "App",
  components: {
    ButtonSample,
    DialogSample,
    InputTextSample,
    InputRadioSample,
    ContentsLoaderSample,
  },
});
</script>
<style scoped>
div {
  margin: 32px;
}
</style>
