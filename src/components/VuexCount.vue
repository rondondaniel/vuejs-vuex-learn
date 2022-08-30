<template>
  <div class="count">
    <h1>{{ count }}</h1><br />
    <IncreaseCount /><br />
    <DecreaseCount /><br />
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import IncreaseCount from './IncreaseCount.vue';
  import DecreaseCount from './DecreaseCount.vue';

  export default {
    name: 'VuexCount',
    components: {
      IncreaseCount,
      DecreaseCount,
    },
    computed: mapState ([
        'count'
    ]),
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
