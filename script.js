
"use stract";

const messages = {
  en: {
    message: {
      app_name: "Home bakery recipe",
      cooking_time: "cooking time",
      menu_id: "menu ID"
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
      app_name: "ホームベーカリーレシピ",
      cooking_time: "調理時間",
      menu_id: "メニューID"
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
  selected_recipe: "basic_bread",
  unit_table: {
    "litre": ["water"],
    "gram": ["strong_flour", "weak_flour", "suger", "salt", "skim_milk", "butter", "olive_oil", "dry_yeast"]
  },
recipes: [
              {
                "name": "basic_bread",
                "id": "1",
                "time": "4",
                "icon": "🍞",
                "ingredients": [
                  {
                    "name": "water",
                    "quantity": {
                      "1_0": "175",
                      "1_5": "220",
                      "2_0": "290"
                    }
                  },
                  {
                    "name": "strong_flour",
                    "quantity": {
                      "1_0": "250",
                      "1_5": "320",
                      "2_0": "410"
                    }
                  },
                  {
                    "name": "suger",
                    "quantity": {
                      "1_0": "18",
                      "1_5": "25",
                      "2_0": "30"
                    }
                  },
                  {
                    "name": "salt",
                    "quantity": {
                      "1_0": "4",
                      "1_5": "6",
                      "2_0": "8"
                    }
                  },
                  {
                    "name": "skim_milk",
                    "quantity": {
                      "1_0": "6",
                      "1_5": "8",
                      "2_0": "10"
                    }
                  },
                  {
                    "name": "butter",
                    "quantity": {
                      "1_0": "18",
                      "1_5": "25",
                      "2_0": "30"
                    }
                  },
                  {
                    "name": "dry_yeast",
                    "quantity": {
                      "1_0": "2.7",
                      "1_5": "2.8",
                      "2_0": "2.8"
                    }
                  }
                ]
              },
              {
                "name": "speedy_bread",
                "id": "2",
                "time": "2",
                "icon": "🍞",
                "ingredients": [
                  {
                    "name": "water",
                    "quantity": {
                      "1_0": "180",
                      "1_5": "220",
                      "2_0": "290"
                    }
                  },
                  {
                    "name": "strong_flour",
                    "quantity": {
                      "1_0": "270",
                      "1_5": "350",
                      "2_0": "430"
                    }
                  },
                  {
                    "name": "suger",
                    "quantity": {
                      "1_0": "15",
                      "1_5": "20",
                      "2_0": "27"
                    }
                  },
                  {
                    "name": "salt",
                    "quantity": {
                      "1_0": "5",
                      "1_5": "6",
                      "2_0": "7"
                    }
                  },
                  {
                    "name": "skim_milk",
                    "quantity": {
                      "1_0": "8",
                      "1_5": "10",
                      "2_0": "13"
                    }
                  },
                  {
                    "name": "butter",
                    "quantity": {
                      "1_0": "13",
                      "1_5": "20",
                      "2_0": "23"
                    }
                  },
                  {
                    "name": "dry_yeast",
                    "quantity": {
                      "1_0": "4",
                      "1_5": "5",
                      "2_0": "6"
                    }
                  }
                ]
              },
              {
                "name": "pizza_heavy",
                "id": "2",
                "time": "2",
                "icon": "🍕",
                "ingredients": [
                  {
                    "name": "water",
                    "quantity": {
                      "3": "180"
                    }
                  },
                  {
                    "name": "olive_oil",
                    "quantity": {
                      "3": "20"
                    }
                  },
                  {
                    "name": "strong_flour",
                    "quantity": {
                      "3": "200"
                    }
                  },
                  {
                    "name": "suger",
                    "quantity": {
                      "3": "8"
                    }
                  },
                  {
                    "name": "salt",
                    "quantity": {
                      "3": "4"
                    }
                  },
                  {
                    "name": "skim_milk",
                    "quantity": {
                      "3": "8"
                    }
                  },
                  {
                    "name": "dry_yeast",
                    "quantity": {
                      "3": "3"
                    }
                  }
                ]
              }
            ]
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

app.component("select-recipe", {
  props: ["recipes"],
  data() {
    return {
      selected_recipe: "basic_bread"
    }
  },
  methods: {
    select_recipe() {
      vm.selected_recipe = this.selected_recipe
    }
  },
  template: `
    <select v-model="selected_recipe" class="form-control">
      <option v-for="recipe in recipes" :value="recipe.name" @click="select_recipe">
        {{ recipe.icon }} {{ $t("recipe." + recipe.name) }}
      </option>
    </select>`
});

app.component("ingredients-list", {
  props: ["selected_recipe", "recipes"],
  computed: {
  // methods: {
    getSelectedRecipe() {
      return this.recipes.filter(recipe=>{return this.selected_recipe == recipe.name;})[0];
    },
  },
  template: `
    <h3>{{ $t("ingredient.ingredient") }}</h3>
    <dl v-for="ingredient in getSelectedRecipe.ingredients">
      <dt>{{ $t("ingredient." + ingredient.name) }}</dt>
      <dd>{{ ingredient.quantity }}</dd>
    </dl>`
});

app.use(i18n);
const vm = app.mount("#app");