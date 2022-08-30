<template>
    <div>
      <button @click="decrease">Decrease</button>
    </div>
</template>

<script>
  import { mapActions } from 'vuex';
  
  export default {
    name: 'DecreaseCount',
    methods: mapActions ([
      'decrease'
    ])
  }
</script>