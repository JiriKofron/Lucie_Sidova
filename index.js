const app = new Vue({
    el: '#app',
    data: {
        isActive: true,
        button: {
            text: 'Zavřít'}
    },
    methods: {
        toggleMenu: function () {
            console.log('clicked!');
            this.isActive = !this.isActive;
            app.button.text = this.isActive ? 'Zavřít' : 'Menu'
        }
    }
})