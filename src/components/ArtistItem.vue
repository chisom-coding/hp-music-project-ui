<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineProps(['artistName', 'genre', 'artistId'])
</script>

<template>
  <div class="container">
    <div class="card">
      <img
        src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
        alt="Simple User Profile"
        width="50"
        height="50"
      />
      <div class="artist-details">
        <span class="artist-name">{{ artistName }}</span>
        <span class="genre-name">{{ genre }}</span>
      </div>
    </div>
    <RouterLink class="view-btn" :to="{ name: 'artists', params: { artistId: artistId } }">
      View Discography
    </RouterLink>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .container {
    background: white;
    padding: 5px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 5px;
  }
  .card {
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding-right: 10px;
  }
  .artist-details {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .artist-name {
    color: blue;
    font-weight: 700;
    font-size: large;
    display: flex;
    align-items: flex-start;
  }
  .genre-name {
    color: hsla(160, 100%, 37%, 1);
    font-weight: 700;
    font-size: small;
  }
  .view-btn {
    display: flex;
    align-self: center;
  }
}
</style>
