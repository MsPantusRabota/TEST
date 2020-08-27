<template>
  <b-form-checkbox @change="checxboxGo(dataset.id)" v-model="selected"  :indeterminate="this.dataset.Indeterminate" :id="dataset.id.toString()">{{ dataset.name }}
      <slot></slot>
  </b-form-checkbox>
</template>

<script>
export default {
    props:["dataset"],
    data() {
        return {
            selected: this.dataset.CheckedType,
        }
    },
    methods: {
        checxboxGo(id){
            this.$store.commit("Catalog/Chexbox/SetChecboxCheckedType", { data: this.dataset, value: this.selected});
            console.groupCollapsed("ДАнные при клике");
                console.warn("Selected " + this.selected);
                console.warn("CheckedType " + this.dataset.CheckedType);
            console.groupEnd();
            this.$store.dispatch("ChexboxCheckAll");
        }
    },
}
</script>

<style>

</style>