const app5 = new Vue({
    el: '#app-5',
    data: {
        msg: 'Hello Vue.js.'
    },
    methods: {
        reverseMsg: function() {
            this.msg = 
                this.msg.split('').reverse().join('')
        }
    }
})
