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
});

Vue.component('services-tile', {
    data() {
        return {
            isActive: true,
            text: "+",
        }
    },
    props: ['header', 'message'],
    methods: {
        toggleExpand: function(){
            this.isActive = !this.isActive;
            this.text = this.isActive ? '+' : '-'
        }
    },
    template: `<article class="services__tile" v-on:click="toggleExpand()">
    <div class="services__tile__h3container">
    <h3>{{header}}</h3> <span>{{text}}</span>
    <hr>
  </div>
    <p v-bind:style="{'display' : (isActive ? 'none' : 'block')}" >
      {{message}}
    </p>
  </article>`
})

const services = new Vue({
    el: '#services',
    data: {
    // isActive: true,
    //     text: "+",
        items: [
            {header: 'Psychoterapie', message: 'V psychoterapii využívám různé metody, abyste našli svou vlastní cestu a byli schopní úspěšně řešit překážky, na které narazíte. Kromě klasického rozhovoru nabízím i řadu neverbálních technik, jako je kresba, hudba, tanec, které Vám pomohou utřídit si myšlenky i pocity, a porozumět souvislostem dané situace.' },
            {header: 'Biosyntéza', message: 'Šrámy na duši se občas mohou projevit i na těle. Během terapie vycházím jak z vnitřních signálů, tak z tělesných projevů klienta, na které navazuji a speciálními technikami rozvíjím integraci somatických (tělesných) s prožitkovými (emocionálními).' },
            {header: 'Somatický koučink', message: 'Ráda využívám tento unikátní přístup, ve kterém budeme společně pracovat se všemi rovinami Vašeho života. Lidské tělo je neoddělitelnou součástí všech životních změn, a proto dává smysl pozvat ho už do procesu jejich plánování. Budu podporovat Vaší odvahu a motivaci ke uskutečňování změn, o kterých již tak dlouze přemýšlíte a váháte nad jejich uskutečněním. Budete sami překvapení výsledky.' },
            {header: 'Poradenství', message: 'Poradenství je odborná a specializovaná činnost zaměřená na pomoc lidem v nesnázích krátkodobého i dlouhodobého charakteru. Cílem v poradenské činnosti je dosáhnout změny. Pro poradenství je typické to, že poradce/poradkyně poskytuje doporučení tomu, kdo má možnost volby (může, případně nemusí akceptovat doporučení poradce/poradkyně).' },
            {header: 'Krizová intervence', message: 'Nacházíte se v obtížné životní situaci a cítíte, že nevíte kudy kam? Nabízím akutní jednorázovou, případně krátkodobou pomoc. Společně se zaměříme na akutní problém a nalezneme vhodné řešení „tady a teď“. Intervence je určena pro náhlé nebo těžké životní události nebo při propuknutí akutních psychických potíží.' }
        ],
    }
});

const form = new Vue({
    el:'#form',
    data() {
        return {
            errors: [],
            contact: {
                name: "",
                email: "",
                message: ""
                },
            isHidden: true,    
            }
    }, 
    methods: {
        
        submitForm: async function(){
            console.log(this.contact.name, this.contact.email, this.contact.message);
            try{
                let response = await axios.post('http://localhost:4000/submit', this.contact);
                console.log(response);
                this.contact = "";
                this.isHidden = false
            } catch(err){
                console.log(err);
            }
        },

}
});