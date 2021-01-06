const app = new Vue({
  el: '#app',
  data: {
    isActive: true,
    button: {
      text: 'Menu',
    },
  },
  methods: {
    toggleMenu: function () {
      this.isActive = !this.isActive;
      app.button.text = this.isActive ? 'Menu' : 'Zavřít';
    },
  },
});

Vue.component('services-tile', {
  data() {
    return {
      isActive: true,
      text: '+',
    };
  },
  props: ['header', 'message'],
  methods: {
    toggleExpand: function () {
      this.isActive = !this.isActive;
      this.text = this.isActive ? '+' : '-';
    },
  },
  template: `<article class="services__tile" v-on:click="toggleExpand()">
    <div class="services__tile__h3container">
    <h3>{{header}}</h3> <span>{{text}}</span>
    <hr>
  </div>
    <p v-bind:style="{'display' : (isActive ? 'none' : 'block')}">
    {{message}}
    </p>
  </article>`,
});

const services = new Vue({
  el: '#services',
  data: {
    // isActive: true,
    //     text: "+",
    items: [
      {
        header: 'Psychoterapie',
        message:
          'V psychoterapii využívám různé metody. Podporuji klienta/klientku k nalezení vlastní cesty tak, aby byli schopni se po této cestě sami vydat a úspěšně překonávali a řešili překážky, které na ni potkají. Kromě klasického rozhovoru nabízím i řadu neverbálních technik či metody práce s tělem. Pomohu Vám utřídit si myšlenky i pocity, a porozumět souvislostem dané situace.',
      },
      {
        header: 'Biosyntéza',
        message:
          'Šrámy na duši se projevují i na těle. Během terapie využívám dynamický a procesuální přístup; vycházím z vnitřních signálů a somatických projevů klienta/klientky, na které navazuji a specifickými technikami je rozvíjím.Biosyntéza je celostní přístup v somatické psychoterapii, založený Davidem Boadellou, jedním z průkopníků a hlavních představitelů práce s tělem v   psychoterapii. Biosyntéza klade důraz na integraci základních životních procesů, a to tělesného (pohybového) spolu s prožitkovým (emocionálním) a mentálním.',
      },
      {
        header: 'Somatický koučink',
        message:
          'Koučování je technikou podpory lidí v jejich osobním růstu a při uskutečňování změn. Při koučinku podporuji klientovu/klientčinu odvahu, hledáme společně vnitřní zdroje a motivaci ke změně. Pomocí koučovacích otázek nastavuji jiný úhel pohledu na věc a společně odstraňujeme bariéry z cesty klientova/klientčina snažení. Individuální somatické koučování ® je unikátní přístup, který používá kromě běžných koučovacích technik, oslovujících hlavně intelektuální úroveň, také práci se zdroji klienta na emocionální a tělesné úrovni. Tato metoda pracuje se všemi rovinami klientova života, díky tomu je komplexnější a dává změnám větší trvanlivost. Jako rozvojová technika poskytuje klientům komplexní a trvalé změny na hlubší úrovni. Lidské tělo je neoddělitelnou součástí všech životních změn, a proto dává smysl pozvat ho už do procesu jejich plánování.',
      },
      {
        header: 'Poradenství',
        message:
          'Poradenství je odborná a specializovaná činnost zaměřená na pomoc lidem v nesnázích krátkodobého i dlouhodobého charakteru. Cílem v poradenské činnosti je dosáhnout změny. V rámci poradenství nabízím různá doporučení a edukaci v tématech, která klienta/klientku zajímají a ve kterých si nevědí rady.',
      },
      {
        header: 'Krizová intervence',
        message:
          'Člověk se někdy může ocitnout v obtížné životní situaci a potřebuje akutní, jednorázovou či krátkodobou pomoc (1 až 5 setkání). Jedná se o pomoc v takové životní situaci, kde vlastní zdroje pro zvládání zátěže už nedostačují. Může se jednat o stavy vzniklé na základě náhlé nebo těžké životní události, traumatu, zvýšeného stresu nebo při propuknutí akutních psychických potíží. Krizová intervence se zaměřuje na zklidnění této situace a zvládnutí základních potíží. V krizové intervenci se zaměřuji na problém, ohnisko, spouštěč, podporu a řešení, a to v reálném čase &quot;tady a teď&quot;. Jejím hlavním cílem je stabilizace, uklidnění, podpora a alespoň částečné navrácení kontroly nad sebou samým a nad svým životem.',
      },
    ],
  },
});

const form = new Vue({
  el: '#form',
  data() {
    return {
      errors: [],
      contact: {
        name: '',
        email: '',
        message: '',
      },
      isHidden: true,
    };
  },
  methods: {
    submitForm: async function () {
      console.log(this.contact.name, this.contact.email, this.contact.message);
      try {
        let response = await axios.post(
          'http://localhost:4000/submit',
          this.contact
        );
        console.log(response);
        this.contact = '';
        this.isHidden = false;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
