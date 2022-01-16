
"use stract";

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
      olive_oil: "olive oil",
      dry_yeast: "dry yeast"
    },
    recipe: {
      basic_bread: "basic bread",
      speedy_bread: "speedy bread",
      pizza: "pizza",
      pizza_heavy: "pizza heavy",
      pizza_crispy: "pizza crispy",
      yogurt: "yogurt"
    },
    unit: {
      kilo: "k",
      milli: "m",
      gram: "g",
      litre: "l",
      loaf: "loaf"
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
      olive_oil: "オリーブオイル",
      dry_yeast: "ドライイースト"
    },
    recipe: {
      basic_bread: "食パン",
      speedy_bread: "早焼きパン",
      pizza: "ピザ",
      pizza_heavy: "ヘビーピザ",
      pizza_crispy: "クリスピーピザ",
      yogurt: "ヨーグルト"
    },
    unit: {
      kilo: "キロ",
      milli: "ミリ",
      gram: "グラム",
      litre: "リットル",
      loaf: "斤"
    }
  }
};

const i18n = VueI18n.createI18n({
  locale: "ja",
  fallbackLocale: "en",
  messages
});

const myData = {
  unit_table: {
    "litre": ["water"],
    "gram": ["strong_flour", "weak_flour", "suger", "salt", "skim_milk", "butter", "olive_oil", "dry_yeast"]
  },
  recipes: {
              "basic_bread": {
                "name": "basic_bread",
                "id": "1",
                "time": "4",
                "icon": "🍞",
                "ingredients": [
                  {
                    "name": "water",
                    "quantity_10": "175",
                    "quantity_15": "220",
                    "quantity_20": "290"
                  },
                  {
                    "name": "strong_flour",
                    "quantity_10": "250",
                    "quantity_15": "320",
                    "quantity_20": "410"
                  },
                  {
                    "name": "suger",
                    "quantity_10": "18",
                    "quantity_15": "25",
                    "quantity_20": "30"
                  },
                  {
                    "name": "salt",
                    "quantity_10": "4",
                    "quantity_15": "6",
                    "quantity_20": "8"
                  },
                  {
                    "name": "skim_milk",
                    "quantity_10": "6",
                    "quantity_15": "8",
                    "quantity_20": "10"
                  },
                  {
                    "name": "butter",
                    "quantity_10": "18",
                    "quantity_15": "25",
                    "quantity_20": "30"
                  },
                  {
                    "name": "dry_yeast",
                    "quantity_10": "2.7",
                    "quantity_15": "2.8",
                    "quantity_20": "2.8"
                  }
                ]
              },
              "speedy_bread": {
                "name": "speedy_bread",
                "id": "2",
                "time": "2",
                "icon": "🍞",
                "ingredients": [
                  {
                    "name": "water",
                    "quantity_10": "175",
                    "quantity_15": "220",
                    "quantity_20": "290"
                  },
                  {
                    "name": "strong_flour",
                    "quantity_10": "250",
                    "quantity_15": "320",
                    "quantity_20": "410"
                  },
                  {
                    "name": "suger",
                    "quantity_10": "18",
                    "quantity_15": "25",
                    "quantity_20": "30"
                  },
                  {
                    "name": "salt",
                    "quantity_10": "4",
                    "quantity_15": "6",
                    "quantity_20": "8"
                  },
                  {
                    "name": "skim_milk",
                    "quantity_10": "6",
                    "quantity_15": "8",
                    "quantity_20": "10"
                  },
                  {
                    "name": "butter",
                    "quantity_10": "18",
                    "quantity_15": "25",
                    "quantity_20": "30"
                  },
                  {
                    "name": "dry_yeast",
                    "quantity_10": "2.7",
                    "quantity_15": "2.8",
                    "quantity_20": "2.8"
                  }
                ]
              },
              "pizza_heavy": {
                "name": "pizza_heavy",
                "id": "2",
                "time": "2",
                "icon": "🍕",
                "ingredients": [
                  {
                    "name": "water",
                    "quantity_30": "180"
                  },
                  {
                    "name": "olive_oil",
                    "quantity_30": "20"
                  },
                  {
                    "name": "strong_flour",
                    "quantity_30": "280"
                  },
                  {
                    "name": "suger",
                    "quantity_30": "8"
                  },
                  {
                    "name": "salt",
                    "quantity_30": "4"
                  },
                  {
                    "name": "skim_milk",
                    "quantity_30": "8"
                  },
                  {
                    "name": "dry_yeast",
                    "quantity_30": "3"
                  }
                ]
              }
            }
};

const app = Vue.createApp({
  data(){
    return myData;
  }
});

app.component('select-locale', {
  data() {
    return {
      selectedLocale: "ja",
      locales: [
        { text: "日本語", value: "ja" },
        { text: "English", value: "en" }
      ]
    }
  },
  methods:{
    selectLocale() {
      this.$i18n.locale = this.selectedLocale
    }
  },
  template: `
    <select v-model="selectedLocale" class="form-control">
      <option v-for="locale in locales" :value="locale.value" v-on:click="selectLocale">
        {{ locale.text }}
      </option>
    </select>`
});

app.use(i18n);
app.mount("#app");