<template>
  <div id="app">
    <v-combo :dict="GROUPS"/>
    <v-combo :dict="STANDS"/>
    <v-table :users_data="USERS"/>
  </div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex'
import vTable from './components/table/v-table'
import vCombo from './components/combo/v-combo'

export default {
  name: 'App',
  components: {
    vTable, vCombo
  },
  data: () => {
    return {}
  },
  computed: {
    ...mapGetters([
      'USERS','GROUPS','STANDS'
    ])
  },

  methods: {
    ...mapActions([
      'GET_USERS_FROM_API','GET_GROUPS_FROM_API','GET_STANDS_FROM_API'
    ])
  },

  mounted() {
    this.GET_USERS_FROM_API();
    this.GET_GROUPS_FROM_API();
    this.GET_STANDS_FROM_API();
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
