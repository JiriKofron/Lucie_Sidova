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
      zIndex: 10,
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
    <div class="services__tile__h3container__laptop">
    <h3>{{header}}</h3> <span>{{text}}</span>
    </div>
    <hr v-bind:style="{'display' : (isActive ? 'block' : 'none')}">
  </div>
    <div class="services__tile__details" v-bind:style="{'display' : (isActive ? 'none' : 'block')}" v-html="message">
    </div>
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
          '<strong>V psychoterapii využívám různé metody.</strong> <ul><li>Podporuji klienta/klientku k nalezení vlastní cesty tak, aby byli schopni se po této cestě sami vydat a úspěšně překonávali a řešili překážky, které na ni potkají.</li><li>Kromě klasického rozhovoru nabízím i řadu neverbálních technik či metody práce s tělem.</li> <li>Pomohu Vám utřídit si myšlenky i pocity, a porozumět souvislostem dané situace.</li>',
      },
      {
        header: 'Biosyntéza',
        message:
          '<p>Šrámy na duši se projevují i na těle.</p> <p>Během terapie využívám dynamický a procesuální přístup; vycházím z vnitřních signálů a somatických projevů klienta/klientky, na které navazuji a specifickými technikami je rozvíjím. </p> <p>Biosyntéza je celostní přístup v somatické psychoterapii, založený Davidem Boadellou, jedním z průkopníků a hlavních představitelů práce s tělem v   psychoterapii.</p><p> Biosyntéza klade důraz na integraci základních životních procesů, a to tělesného (pohybového) spolu s prožitkovým (emocionálním) a mentálním.</p><p><Zdroj: <a href="https://www.biosynteza.cz" target="_blank">www.biosynteza.cz</a></p>',
      },
      {
        header: 'Somatický koučink',
        message:
          '<p>Koučování je technikou podpory lidí v jejich osobním růstu a při uskutečňování změn. <ul><li>Při koučinku podporuji klientovu/klientčinu odvahu, hledáme společně vnitřní zdroje a motivaci ke změně.</li> <li>Pomocí koučovacích otázek nastavuji jiný úhel pohledu na věc a společně odstraňujeme bariéry z cesty klientova/klientčina snažení.</li></ul> <p>Individuální somatické koučování ® je unikátní přístup, který používá kromě běžných koučovacích technik, oslovujících hlavně intelektuální úroveň, také práci se zdroji klienta na emocionální a tělesné úrovni. Tato metoda pracuje se všemi rovinami klientova života, díky tomu je komplexnější a dává změnám větší trvanlivost.</p><p> Jako rozvojová technika poskytuje klientům komplexní a trvalé změny na hlubší úrovni. Lidské tělo je neoddělitelnou součástí všech životních změn, a proto dává smysl pozvat ho už do procesu jejich plánování.</p><p><Zdroj: <a href="https://somatickekoucovani.cz" target="_blank">somatickekoucovani.cz</a></p>',
      },
      {
        header: 'Poradenství',
        message:
          '<p>Poradenství je odborná a specializovaná činnost zaměřená na pomoc lidem v nesnázích krátkodobého i dlouhodobého charakteru.</p> <p>Cílem v poradenské činnosti je dosáhnout změny.</p> <p>V rámci poradenství nabízím různá doporučení a edukaci v tématech, která klienta/klientku zajímají a ve kterých si nevědí rady.</p>',
      },
      {
        header: 'Krizová intervence',
        message:
          '<p>Člověk se někdy může ocitnout v obtížné životní situaci a potřebuje akutní, jednorázovou či krátkodobou pomoc (1 až 5 setkání). Jedná se o pomoc v takové životní situaci, kde vlastní zdroje pro zvládání zátěže už nedostačují. Může se jednat o stavy vzniklé na základě náhlé nebo těžké životní události, traumatu, zvýšeného stresu nebo při propuknutí akutních psychických potíží.</p><p> Krizová intervence se zaměřuje na zklidnění této situace a zvládnutí základních potíží.</p> <p>V krizové intervenci se zaměřuji na problém, ohnisko, spouštěč, podporu a řešení, a to v reálném čase &quot;tady a teď&quot;.<p> <p>Jejím hlavním cílem je stabilizace, uklidnění, podpora a alespoň částečné navrácení kontroly nad sebou samým a nad svým životem.</p>',
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
        phone: '',
        message: '',
      },
      isHidden: true,
      text: 'Odeslat',
    };
  },
  methods: {
    submitForm: async function () {
      console.log(
        this.contact.name,
        this.contact.email,
        this.contact.phone,
        this.contact.message
      );
      try {
        async function createInbox() {
          return await axios
            .post(
              `https://api.mailslurp.com/createInbox?apiKey=f807843bd23c67e2aa6e368c7f3d0d23eb8f674942b2d7932858d274a2d9b0f5`
            )
            .then((res) => res.data);
        }
        const inbox = await createInbox();
        let response = await axios({
          method: 'POST',
          url:
            'https://api.mailslurp.com/sendEmail?apiKey=f807843bd23c67e2aa6e368c7f3d0d23eb8f674942b2d7932858d274a2d9b0f5',
          data: {
            senderId: inbox.id,
            to: 'coffi@seznam.cz',
            subject: 'Zpráva z webu luciesidova.cz',
            body: `Od:${this.contact.name}
            Email: ${this.contact.email}
            Telefon: ${this.contact.phone}
            Zpráva: ${this.contact.message}`,
          },
          charset: 'utf8',
          html: true,
        });
        console.log(response);
        this.contact = '';
        this.isHidden = false;
      } catch (err) {
        console.log(err);
      }
    },
    buttonClicked: function () {
      this.text = 'Posílám...';
      if (this.isHidden === true) {
        this.text = 'Odeslat';
      } else {
        this.text = 'Posílám...';
      }
    },
  },
});
