<template>
  <b-form-checkbox v-model="selected" :value="dataset.id">{{ dataset.name }}</b-form-checkbox>
</template>

<script>
export default {
        created(){
      this.$store.commit("check/SetKovloCreated");
      console.log("Кол созданиии" + this.$store.getters["check/GetKovloCreated"]);
    },
    updated(){
      this.$store.commit("check/SetKovloUpdated");
       console.log("Кол изменении" + this.$store.getters["check/GetKovloUpdated"]);
    },
    props:["dataset"],
    data() {
        return {
            selected: [],
        }
    },
}
</script>

<style>

</style>