// define a mixin object
export default {
    // This is called once the object is built.
    created: function () {
        this.formIndicator = false
        // console.log(this.artistsList)
    },
    // This is the method.
    methods: {
        showForm: function () {
            this.formIndicator = !this.formIndicator
            // console.log(this.formIndicator)
        },
        // addArtist: function (artName, about, url) {
        //     console.log()
        //     this.artistName = artName
        //     this.artAbout = about
        //     this.artUrl = url;
        //     // console.log(this.artistsList)
        //     // return {artistObj: 
        //     //     this.artistsList.push({
        //     //     artist: this.artistName,
        //     //     artAbout: this.artAbout,
        //     //     artUrl: this.artUrl
        //     // })}
        //     (this.artistsList).push({a: artName, b: about, c: url})
        //     console.log(this.artistsList)
        // }
    },
    data () {
        return {
        mixinMsg:'Hello from mixin',
        formIndicator: Boolean,
        artistName: String,
        artAbout: String,
        artUrl: String,
        artistObj: {},
        artistsList: []
      
        }
    }
}
