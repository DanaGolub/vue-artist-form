
export default {

    created: function () {
        this.formIndicator = false

    },
    methods: {
        showForm: function () {
            this.formIndicator = !this.formIndicator
        },
        hideForm: function () {
            this.formIndicator = false;
        }
    },
    data () {
        return {
        mixinMsg:'Hello from mixin',
        formIndicator: Boolean,
        // nameFilter: ''
        }
    }
}
