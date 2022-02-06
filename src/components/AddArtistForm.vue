<template>
<div>
        <input type="text" v-model="nameFilter" v-on:keyup="checkName(), hideForm()" />
    <button v-on:click="showForm()">Add Artist</button>

  <form @submit.prevent v-if="formIndicator" >
    <br />
    <input type="text" name="artName" placeholder="Artist Name" autocomplete="off" v-model="artName" />
    <br />
    <input type="text" name="about" placeholder="About Artist" autocomplete="off" v-model="about" />
    <br />
    <input type="text"  name="url" placeholder="Image URL" autocomplete="off" v-model="url" />
    <br />
    <button v-on:click="addArtist(artName, about, url)" type="submit">Add</button>
    <div v-for="(artist, index) in artistList" :key="artist.id" class="each-artists" >
        {{artist.artistName}}
        {{artist.aboutArtist}}
        <img :src=artist.artistUrl>
        <br/>
        <button v-on:click="removeArtist(index)">Delete Artist</button>
    </div>
  </form>
      <div v-if="this.nameFilter.length>0">{{this.artistSearch.artistName}}<br/>{{this.artistSearch.aboutArtist}}<br/><img :src=this.artistSearch.artistUrl></div>
  </div>
</template>
<script>
import mymixin from "./mymixin";
export default {
    mixins: [mymixin],
    data() {
        return {
            nameFilter: '',
            artistSearch: {},
            artName: null,
            about: null,
            url: null,
            idForArtist: 3,
            artistList: [
                {
                    'id': 1,
                    'artistName': "artist one",
                    'aboutArtist': "great musician",
                    'artistUrl': "https://randomuser.me/api/portraits/med/women/1.jpg "
                },
                {
                    'id': 2,
                    'artistName': "second artist",
                    'aboutArtist': "talented composer",
                    'artistUrl': "https://randomuser.me/api/portraits/med/men/1.jpg"
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
        },
        removeArtist(index) {
            this.artistList.splice(index, 1)
        },
        checkName() {
            console.log("checking name")
            for(var i=0; i<this.artistList.length; i++) {
                if(this.nameFilter[i]==this.artistList[i].artistName[i]) {
                        this.artistSearch = this.artistList[i]  
                }
            }
        }
    },
};
</script>
<style>

</style>
