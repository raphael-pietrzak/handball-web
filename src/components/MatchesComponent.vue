<template>
  <div class="matches-container">
    <h1>Upcoming Handball Matches</h1>
    <ul v-if="matches.length">
      <li v-for="match in matches" :key="match.id" class="match-item">
        {{ match.team1 }} vs {{ match.team2 }} - {{ formatDate(match.match_date) }}
      </li>
    </ul>
    <p v-else>No matches available</p>
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