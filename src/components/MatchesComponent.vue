<template>
  <div class="matches-container">
    <h1>Handball - Match à venir</h1>
    <DataView :value="products">
      <template #list="slotProps">
        <section class="flex flex-row gap-5" v-for="match in slotProps.items" :key="match.id">
          <span class="font-bold text-2xl">{{ match.team1 }}</span>
          <span class="font-bold text-6xl">{{ match.score }}</span>
          <span class="font-bold text-2xl">{{ match.team2 }}</span>
        </section>
      </template>
      <template #empty>
        <div class="flex justify-content-center h-15rem align-items-center">
          <span class="font-medium text-6xl">Pas de match à venir !</span>
        </div>
      </template>
    </DataView>
  </div>
</template>

<script>

import api from '../api/api';

export default {
  data() {
    return {
      matches: []
    };
  },
  created() {
    api.getMatches().then(response => {
      this.matches = response.data;
    });
  },
};


</script>

<style scoped>
.matches-container {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.match-item {
  margin: 10px 0;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
}

h1 {
  color: #333;
}

p {
  color: #999;
}
</style>