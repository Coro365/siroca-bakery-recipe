const messages = {
  en: {
    message: {
      app_name: "Home bakery recipe"
    },
    ingredient: {
      ingredient: "ingredient",
      water: "water",
      strong_flour: "strong flour",
      weak_flour: "weak flour",
      suger: "suger",
      salt: "salt",
      skim_milk: "skim milk",
      butter: "butter",
      dry_yeast: "dry yeast"
    }
  },
  ja: {
    message: {
      app_name: "ホームベーカリーレシピ"
    },
    ingredient: {
      ingredient: "材料",
      water: "水",
      strong_flour: "強力粉",
      weak_flour: "薄力粉",
      suger: "砂糖",
      salt: "塩",
      skim_milk: "スキムミルク",
      butter: "バター",
      dry_yeast: "ドライイースト"
    }
  }
};

const i18n = VueI18n.createI18n({
  locale: "ja",
  fallbackLocale: "en",
  messages
});

const myData = {
  selectedLocale: "ja",
  locales: [
    { text: "日本語", value: "ja" },
    { text: "English", value: "en" }
  ]
};

const app = Vue.createApp({
  data(){
    return myData;
  },
  methods:{
    selectLocale() {
      this.$i18n.locale = this.selectedLocale
    }
  }
});

app.use(i18n);
app.mount("#app");