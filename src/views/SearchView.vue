<script setup>
import ArtistItem from '../components/ArtistItem.vue'
</script>

<template>
  <div class="grid-container">
    <div class="search">
      <h1 class="artistName">Seach For Your Favourite Artists</h1>
      <input v-model="search" class="searchbox" placeholder="Search Artist..." />
      <button @click="searchArtists()">Search</button>
    </div>
    <div v-if="!isLoading && !isError" class="waiting">
      <span class="waiting-message">Please search for an artist...</span>
    </div>
    <div v-else-if="!isLoading && isError" class="waiting">
      <span class="waiting-message">{{ errMsg }}</span>
    </div>
    <div v-else class="artists">
      <ArtistItem
        v-for="artist in artists"
        :key="artist.artistId"
        :artistName="artist.artistName"
        :genre="artist.primaryGenreName"
        :artistId="artist.artistId"
      >
      </ArtistItem>
    </div>
  </div>
</template>

<script>
import { getArtists } from '@/services/searchService'
import ArtistItem from '../components/ArtistItem.vue'

export default {
  data() {
    return {
      search: '',
      artists: [],
      isLoading: false,
      isError: false,
      errMsg: '',
    }
  },
  methods: {
    async searchArtists() {
      try {
        this.isError = false
        const response = await getArtists({ artistName: this.search })
        this.artists = response.data.results
        if (response.data.resultCount == 0) {
          this.isLoading = false
        } else {
          this.isLoading = true
        }
      } catch (error) {
        this.isError = true
        this.isLoading = false
        this.errMsg = error.response.data.error
      }
    },
  },
}
</script>

<style>
@media (min-width: 1024px) {
  .search {
    /* min-height: 100vh; */
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 15px;
    /* background-color: darkolivegreen; */
  }
  .artists {
    background-color: hsla(160, 100%, 37%, 1);
    padding: 10px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    overflow: auto;
  }
  .waiting {
    background-color: hsla(160, 100%, 37%, 1);
    padding: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* overflow: auto; */
  }
  .waiting-message {
    font-size: large;
    font-weight: 600;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    /* background: yellow; */
    width: 100%;
    height: 100vh;
  }
}
</style>
