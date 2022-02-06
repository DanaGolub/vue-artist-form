<template>
  <form @submit.prevent>
    <br />
    <input type="text" name="artName" placeholder="Artist Name" autocomplete="off" v-model="artName" />
    <br />
    <input type="text" name="about" placeholder="About Artist" autocomplete="off" v-model="about" />
    <br />
    <input type="text"  name="url" placeholder="Image URL" autocomplete="off" v-model="url" />
    <br />
    <button v-on:click="addArtist(artName, about, url)" type="submit">Add</button>
    <div v-for="artist in artistList" :key="artist.id" class="each-artists">
        {{artist.artistName}}
        {{artist.aboutArtist}}
        {{artist.artistUrl}}
        <br/>

    </div>
  </form>
</template>
<script>
import mymixin from "./mymixin";
export default {
    mixins: [mymixin],
    data() {
        return {
            artName: null,
            about: null,
            url: null,
            idForArtist: 3,
            artistList: [
                {
                    'id': 1,
                    'artistName': "bestArtist",
                    'aboutArtist': "lalala",
                    'artistUrl': "asddfgh"
                },
                {
                    'id': 2,
                    'artistName': "aaaaaa",
                    'aboutArtist': "bbbbbb",
                    'artistUrl': "cccccc"
                }
            ]
        }
    },
    methods: {
        addArtist() {
            this.artistList.push({
                id: this.idForArtist,
                artistName: this.artName,
                aboutArtist: this.about,
                artistUrl: this.url
            })
            this.artName = '',
            this.about = '',
            this.url = '',
            this.idForArtist++
        }
    }
};
</script>
<style>

</style>
