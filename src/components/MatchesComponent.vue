<template>
  <div class="matches-container">
    <h1>Handball - Match à venir</h1>
    <DataView :value="matches">
      <template #list="slotProps">
        <section class="flex flex-column" v-for="match in slotProps.items" :key="match.id">
          <span class="w-full">{{ formatDate(match.match_date) }}</span>
          <div class="flex flex-row w-full align-items-center justify-content-center">
            <span class="font-bold w-4 text-2xl">{{ match.team1 }}</span>
            <span class="font-bold text-4xl flex justify-content-center">{{ match.score }}</span>
            <span class="font-bold w-4 text-2xl">{{ match.team2 }}</span>
          </div>

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
  mounted() {
    api.getMatches().then(response => {
      this.matches = response.data;
    });
  },
  methods: {
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
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