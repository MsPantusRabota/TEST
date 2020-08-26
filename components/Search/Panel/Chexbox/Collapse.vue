<template>
    <b-form-group class="mb-2">
      <template v-slot:label>
            <b-form-checkbox
            v-model="allSelected"
            :value="id"       
            :indeterminate="indeterminate"
            aria-describedby="flavours"
            aria-controls="flavours"
            @change="toggleAll">
                {{ name }}
                <b-button variant="white" class="link-danger p-0" v-b-toggle="id">
                        <b-icon-chevron-down  font-scale = "0.9"></b-icon-chevron-down>
                </b-button>
            </b-form-checkbox>
        </template>
        <!--  ПОТОМКИ -->
         <b-collapse :id="id">
            <b-form-checkbox-group
                class="ml-4 mb-2"
                name="flavors"
                v-for="data in flavours"
                :key="data.id">
                <b-form-checkbox  
                    v-if="data.children.length === 0"
                    v-model="selected"
                    :value="data.id.toString()">
                        {{ data.name}}
                </b-form-checkbox>
                  <collapseRod
                    :model="selected"
                    :name="data.name" 
                    :childrenAll="data.childrenAll"
                    :id="data.id.toString()"  
                    :GetName="GetName" 
                    :flavours="data.children" 
                    v-if="data.children.length != 0"/>
            </b-form-checkbox-group>
         </b-collapse>
       <!--  ПОТОМКИ -->
    </b-form-group>
</template>

<script>
import collapseRod from "./Collapse copy"
  export default {
    components:{
      collapseRod
    },
    name: "VueChexbox",
    // GetName - Узнать почему неопределенно
    props:["flavours", "id", "childrenAll", "GetName", "name"],
    data() {
      return {
        selected: [],
        allSelected: [],
        indeterminate: false,
        chexboxSelected: false, // Для VUEX 
      }
    },
    methods: {
      toggleAll(checked) {
        console.log(checked);
        this.selected = checked ? this.childrenAll.slice() : [];
      },
    },
    watch: {
      selected(newVal, oldVal) { 
        console.log("Изменения родитель selected");
        if (newVal.length === 0) { // Родитель пустой
          // console.log("Родитель пуст");
          this.indeterminate = false;
          this.allSelected = [];
          
        } else if (newVal.length === this.childrenAll.length) { // Родитель Полный
          this.indeterminate = false;
          this.allSelected = this.id;
        } else { // Выбран потомок
          this.indeterminate = true;
          this.allSelected = this.id;
        }
      }
    }
  }
</script>