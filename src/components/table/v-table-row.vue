<template>
  <div class="v-table-row">
    <div class="row row__name">{{row_data.name}}</div>
    <div class="row row__earned">{{row_data.points_earned}}</div>
    <div class="row row__spent">{{row_data.points_spent}}</div>
    <div class="row row__date">{{row_data.registration_date}}</div>

  </div>
</template>

<script>
export default {
  name: "v-table-row",
  props: {
    row_data:{
      type: Object,
      default: ()=> {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .v-table-row {
    display: flex;
    justify-content: space-around;
  }

  .row {
    flex-basis: 25%;
    padding: 8px 16px;
    text-align: left;
  }

</style>