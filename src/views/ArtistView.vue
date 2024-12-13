<script setup>
import AlbumItem from '../components/AlbumItem.vue'
</script>

<template>
  <div class="grid-container">
    <div class="artist">
      <img
        src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
        alt="Simple User Profile"
        width="150"
        height="150"
        class="profilePicture"
      />
      <h1 class="artistName">
        {{ artist.artistName }}<span class="artistType">({{ artist.artistType }})</span>
      </h1>
      <span class="genre">{{ artist.primaryGenreName }}</span>
      <a :href="artist.artistLinkUrl" class="button">View Itunes Page</a>
    </div>
    <div class="album-container">
      <input v-model="search" class="searchbox" placeholder="Search Albums..." />
      <div v-if="artistAlbums" class="albums">
        <AlbumItem
          v-for="album in filteredAlbums"
          :key="album.collectionId"
          :collectionName="album.collectionName"
          :artwork="album.artworkUrl100"
          :collectionNameCensored="album.collectionCensoredName"
        >
        </AlbumItem>
      </div>
    </div>
  </div>
</template>

<script>
import { getAlbums } from '@/services/lookupService'

export default {
  data() {
    return {
      artist: {},
      artistAlbums: [],
      search: '',
    }
  },
  async mounted() {
    const artistId = this.$route.params.artistId
    const albums = await getAlbums({ artistId: artistId })
    this.artist = albums.data[0]
    this.artistAlbums = albums.data.slice(1)
  },
  computed: {
    filteredAlbums() {
      return this.artistAlbums.filter((album) =>
        album.collectionName.toLowerCase().includes(this.search.toLowerCase()),
      )
    },
  },
}
</script>

<style>
@media (min-width: 1024px) {
  .artist {
    /* min-height: 100vh; */
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 10px;
    /* background-color: rgb(101, 101, 220); */
  }
  .albums {
    padding: 10px;
    gap: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* background-color: #2196F3; */
    overflow: auto;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    /* background: yellow; */
    width: 100%;
    height: 100vh;
  }
  .album-container {
    overflow: auto;
    background-color: hsla(160, 100%, 37%, 1);
    display: flex;
    flex-direction: column;
  }
  .artistType {
    color: hsla(160, 100%, 37%, 1);
    font-size: small;
    font-weight: 500;
  }
  .artistName {
    color: hsla(160, 100%, 37%, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-wrap: pretty;
    font-weight: 700;
    font-size: x-large;
  }
  .genre {
    color: hsla(160, 100%, 37%, 1);
    font-size: large;
    font-weight: 700;
  }
  .button {
    background-color: aliceblue;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
  }
  .profilePicture {
    border-radius: 20px;
  }
  .searchbox {
    padding: 10px;
    width: 60%;
    display: flex;
    align-self: center;
    border-radius: 10px;
    margin-top: 15px;
  }
}
</style>
