<template>
    <div>
      <button @click="increase">Increase</button>
    </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'IncreaseCount',
    methods: mapActions ([
      'increase'
    ])
  }
</script>