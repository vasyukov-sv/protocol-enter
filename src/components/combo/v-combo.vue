<template>
  <div class="v-combo">
    <input class="v-combo__input" type="search" v-bind:placeholder="placeholder" v-model="starttime" v-on:click="showAutocompleteDropdown = true" v-on:keyup.enter.prevent="select(selectedIndex)" v-on:keydown.down.prevent="selectNext()" v-on:keydown.up.prevent="selectPrev()" v-on:keyup.8="handleBackspace()" />
    <ul class="o-date-list" v-if="showAutocompleteDropdown">
      <li class="o-date-list__item" v-for="time in times | filterBy starttime" v-on:click="select($index)" v-bind:class="{'o-date-list__item--selected': $index == selectedIndex}">{{ time }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "v-combo",
  props: {
    dict:{
      type: Array,
      default: ()=> {
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>