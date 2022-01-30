
"use stract";

const messages = {
  en: {
    message: {
      app_name: "Home bakery recipe",
      cooking_time: "cooking time",
      menu_id: "menu ID",
      quantity: "quantity",
      eta: "ETA",
      invested: "invested",
      not_invested: "not invested",
    },
    ingredient: {
      ingredient: "ingredient",
      water: "water",
      bread_flour: "bread flour",
      cake_flour: "cake flour",
      whole_wheat_flour: "whole wheat flour",
      egg: "egg",
      rice: "rice",
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
      whole_wheat_bread: "whole wheat bread",
      soft_bread: "soft bread",
      sweet_bread: "sweet bread",
      french_bread_like_bread: "french bread like bread",
      rice_bread: "rice bread",
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
      milli_litre: "ml",
      loaf: "loaf"
    },
    date: {
      today: "today",
      tomorrow: "tomorrow"
    }
  },
  ja: {
    message: {
      app_name: "ホームベーカリーレシピ",
      cooking_time: "調理時間",
      menu_id: "メニューID",
      quantity: "量",
      eta: "完成予想時刻",
      invested: "投入完了",
      not_invested: "投入未完了",
    },
    ingredient: {
      ingredient: "材料",
      water: "水",
      bread_flour: "強力粉",
      cake_flour: "薄力粉",
      whole_wheat_flour: "全粒粉",
      egg: "たまご",
      rice: "米",
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
      whole_wheat_bread: "全粒粉パン",
      soft_bread: "ソフトパン",
      sweet_bread: "スイートパン",
      french_bread_like_bread: "フランスパン風パン",
      rice_bread: "ごはんパン",
      pizza: "ピザ",
      pizza_heavy: "ヘビーピザ",
      pizza_crispy: "クリスピーピザ",
      yogurt: "ヨーグルト"
    },
    unit: {
      kilo: "キロ",
      milli: "ミリ",
      gram: "g",
      litre: "リットル",
      milli_litre: "ml",
      loaf: "斤"
    },
    date: {
      today: "今日",
      tomorrow: "明日"
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
  recipes: [
              {
                "name": "basic_bread",
                "id": "1",
                "time": "4:00",
                "icon": "🍞",
                "ingredients": [
                  {
                    "name": "water",
                    "quantity": {
                      "1": "175",
                      "1.5": "220",
                      "2": "290"
                    }
                  },
                  {
                    "name": "bread_flour",
                    "quantity": {
                      "1": "250",
                      "1.5": "320",
                      "2": "410"
                    }
                  },
                  {
                    "name": "suger",
                    "quantity": {
                      "1": "18",
                      "1.5": "25",
                      "2": "30"
                    }
                  },
                  {
                    "name": "salt",
                    "quantity": {
                      "1": "4",
                      "1.5": "6",
                      "2": "8"
                    }
                  },
                  {
                    "name": "skim_milk",
                    "quantity": {
                      "1": "6",
                      "1.5": "8",
                      "2": "10"
                    }
                  },
                  {
                    "name": "butter",
                    "quantity": {
                      "1": "18",
                      "1.5": "25",
                      "2": "30"
                    }
                  },
                  {
                    "name": "dry_yeast",
                    "quantity": {
                      "1": "2.7",
                      "1.5": "2.8",
                      "2": "2.8"
                    }
                  }
                ]
              },
              {
                "name": "rice_bread",
                "id": "1",
                "time": "4:00",
                "icon": "🍞",
                "ingredients": [
                  {
                    "name": "water",
                    "quantity": {
                      "1": "120",
                      "1.5": "150"
                    }
                  },
                  {
                    "name": "rice",
                    "quantity": {
                      "1": "150",
                      "1.5": "185"
                    }
                  },
                  {
                    "name": "bread_flour",
                    "quantity": {
                      "1": "230",
                      "1.5": "285"
                    }
                  },
                  {
                    "name": "suger",
                    "quantity": {
                      "1": "18",
                      "1.5": "22"
                    }
                  },
                  {
                    "name": "salt",
                    "quantity": {
                      "1": "6",
                      "1.5": "7"
                    }
                  },
                  {
                    "name": "skim_milk",
                    "quantity": {
                      "1": "7",
                      "1.5": "9"
                    }
                  },
                  {
                    "name": "butter",
                    "quantity": {
                      "1": "17",
                      "1.5": "21"
                    }
                  },
                  {
                    "name": "dry_yeast",
                    "quantity": {
                      "1": "3",
                      "1.5": "3.2"
                    }
                  }
                ]
              },
              {
                "name": "speedy_bread",
                "id": "3",
                "time": "2:38",
                "icon": "🍞",
                "ingredients": [
                  {
                    "name": "water",
                    "quantity": {
                      "1": "180",
                      "1.5": "220",
                      "2": "290"
                    }
                  },
                  {
                    "name": "bread_flour",
                    "quantity": {
                      "1": "270",
                      "1.5": "350",
                      "2": "430"
                    }
                  },
                  {
                    "name": "suger",
                    "quantity": {
                      "1": "15",
                      "1.5": "20",
                      "2": "27"
                    }
                  },
                  {
                    "name": "salt",
                    "quantity": {
                      "1": "5",
                      "1.5": "6",
                      "2": "7"
                    }
                  },
                  {
                    "name": "skim_milk",
                    "quantity": {
                      "1": "8",
                      "1.5": "10",
                      "2": "13"
                    }
                  },
                  {
                    "name": "butter",
                    "quantity": {
                      "1": "13",
                      "1.5": "20",
                      "2": "23"
                    }
                  },
                  {
                    "name": "dry_yeast",
                    "quantity": {
                      "1": "4",
                      "1.5": "5",
                      "2": "6"
                    }
                  }
                ]
              },
              {
                "name": "soft_bread",
                "id": "4",
                "time": "4:57",
                "icon": "🍞",
                "ingredients": [
                  {
                    "name": "water",
                    "quantity": {
                      "1": "190",
                      "1.5": "300"
                    }
                  },
                  {
                    "name": "bread_flour",
                    "quantity": {
                      "1": "260",
                      "1.5": "390"
                    }
                  },
                  {
                    "name": "suger",
                    "quantity": {
                      "1": "18",
                      "1.5": "25"
                    }
                  },
                  {
                    "name": "salt",
                    "quantity": {
                      "1": "5",
                      "1.5": "6"
                    }
                  },
                  {
                    "name": "skim_milk",
                    "quantity": {
                      "1": "8",
                      "1.5": "11"
                    }
                  },
                  {
                    "name": "butter",
                    "quantity": {
                      "1": "22",
                      "1.5": "35"
                    }
                  },
                  {
                    "name": "dry_yeast",
                    "quantity": {
                      "1": "3",
                      "1.5": "4"
                    }
                  }
                ]
              },
              {
                "name": "french_bread_like_bread",
                "id": "5",
                "time": "6:06",
                "icon": "🥖",
                "ingredients": [
                  {
                    "name": "water",
                    "quantity": {
                      "1": "200",
                      "1.5": "260",
                      "2": "310"
                    }
                  },
                  {
                    "name": "bread_flour",
                    "quantity": {
                      "1": "260",
                      "1.5": "300",
                      "2": "370"
                    }
                  },
                  {
                    "name": "cake_flour",
                    "quantity": {
                      "1": "30",
                      "1.5": "80",
                      "2": "100"
                    }
                  },
                  {
                    "name": "suger",
                    "quantity": {
                      "1": "4",
                      "1.5": "6",
                      "2": "8"
                    }
                  },
                  {
                    "name": "salt",
                    "quantity": {
                      "1": "4.5",
                      "1.5": "5.5",
                      "2": "6.5"
                    }
                  },
                  {
                    "name": "skim_milk",
                    "quantity": {
                      "1": "6",
                      "1.5": "8",
                      "2": "10"
                    }
                  },
                  {
                    "name": "dry_yeast",
                    "quantity": {
                      "1": "3",
                      "1.5": "3.5",
                      "2": "4"
                    }
                  }
                ]
              },
              {
                "name": "sweet_bread",
                "id": "6",
                "time": "4:37",
                "icon": "🍞",
                "ingredients": [
                  {
                    "name": "water",
                    "quantity": {
                      "1": "80",
                      "1.5": "110"
                    }
                  },
                  {
                    "name": "egg",
                    "quantity": {
                      "1": "60",
                      "1.5": "80"
                    }
                  },
                  {
                    "name": "bread_flour",
                    "quantity": {
                      "1": "220",
                      "1.5": "285"
                    }
                  },
                  {
                    "name": "cake_flour",
                    "quantity": {
                      "1": "30",
                      "1.5": "35"
                    }
                  },
                  {
                    "name": "suger",
                    "quantity": {
                      "1": "40",
                      "1.5": "50"
                    }
                  },
                  {
                    "name": "salt",
                    "quantity": {
                      "1": "4",
                      "1.5": "6"
                    }
                  },
                  {
                    "name": "skim_milk",
                    "quantity": {
                      "1": "18",
                      "1.5": "22"
                    }
                  },
                  {
                    "name": "butter",
                    "quantity": {
                      "1": "45",
                      "1.5": "65"
                    }
                  },
                  {
                    "name": "dry_yeast",
                    "quantity": {
                      "1": "2.8",
                      "1.5": "3"
                    }
                  }
                ]
              },
              {
                "name": "whole_wheat_bread",
                "id": "7",
                "time": "4:41",
                "icon": "🍞",
                "ingredients": [
                  {
                    "name": "water",
                    "quantity": {
                      "1": "200",
                      "1.5": "300"
                    }
                  },
                  {
                    "name": "whole_wheat_flour",
                    "quantity": {
                      "1": "130",
                      "1.5": "175"
                    }
                  },
                  {
                    "name": "bread_flour",
                    "quantity": {
                      "1": "130",
                      "1.5": "195"
                    }
                  },
                  {
                    "name": "suger",
                    "quantity": {
                      "1": "17",
                      "1.5": "25"
                    }
                  },
                  {
                    "name": "salt",
                    "quantity": {
                      "1": "5",
                      "1.5": "6"
                    }
                  },
                  {
                    "name": "skim_milk",
                    "quantity": {
                      "1": "6",
                      "1.5": "9"
                    }
                  },
                  {
                    "name": "butter",
                    "quantity": {
                      "1": "17",
                      "1.5": "22"
                    }
                  },
                  {
                    "name": "dry_yeast",
                    "quantity": {
                      "1": "3",
                      "1.5": "4"
                    }
                  }
                ]
              },
              {
                "name": "pizza_heavy",
                "id": "18",
                "time": "1:25",
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
                    "name": "bread_flour",
                    "quantity": {
                      "3": "280"
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
              },
              {
                "name": "pizza_crispy",
                "id": "18",
                "time": "1:25",
                "icon": "🍕",
                "ingredients": [
                  {
                    "name": "water",
                    "quantity": {
                      "5": "200"
                    }
                  },
                  {
                    "name": "olive_oil",
                    "quantity": {
                      "5": "20"
                    }
                  },
                  {
                    "name": "bread_flour",
                    "quantity": {
                      "5": "200"
                    }
                  },
                  {
                    "name": "cake_flour",
                    "quantity": {
                      "5": "200"
                    }
                  },
                  {
                    "name": "salt",
                    "quantity": {
                      "5": "3"
                    }
                  },
                  {
                    "name": "dry_yeast",
                    "quantity": {
                      "5": "4"
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
    <select v-model="selectedLocale" @change="selectLocale()" class="form-control">
      <option v-for="locale in locales" :value="locale.value">
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
    <select
      v-model="selected_recipe"
      @change="select_recipe()"
      class="form-control"
    >
      <option v-for="recipe in recipes" :value="recipe.name">
        {{ recipe.icon }} {{ $t("recipe." + recipe.name) }}
      </option>
    </select>`
});

app.component("ingredients-list", {
  props: ["selected_recipe", "recipes"],
  data() {
    return {
      selected_quantity: "1",
      checkedIngredient: [],
      unit_table: {
        "milli_litre": ["water"],
        "gram": ["bread_flour", "cake_flour", "whole_wheat_flour", "egg", "rice",
                 "suger", "salt", "skim_milk", "butter", "olive_oil", "dry_yeast"]
      },
    }
  },
  beforeUpdate() {
    this.$nextTick(function () {
      if(this.getQuantityList.indexOf(this.selected_quantity) < 0){this.selected_quantity = this.getQuantityList[0]};
    })
  },
  computed: {
    getSelectedRecipe() {
      return this.recipes.filter(recipe=>{return this.selected_recipe == recipe.name;})[0];
    },
    getQuantityList() {
      recipe = this.recipes.filter(recipe=>{return this.selected_recipe == recipe.name;})[0];
      return Object.keys(recipe.ingredients[0].quantity).sort((a, b) => a - b);
    },
    getInsertStatus() {
      ingredients = this.recipes.filter(recipe=>{return this.selected_recipe == recipe.name;})[0].ingredients;
      return (this.checkedIngredient.length == ingredients.length) ? "invested" : "not_invested";
    }
  },
  methods: {
    select_unit(ingredient_name) {
      let this_unit = '';
      Object.keys(this.unit_table).forEach((unit)=>{
        if(this.unit_table[unit].some((e) => e == ingredient_name)) {this_unit = unit};
       });
      return this_unit;
    }
  },
  template: `
    <h3>{{ $t("ingredient.ingredient") }}</h3>
    <select v-model="selected_quantity" class="form-control">
      <option v-for="quantity in getQuantityList" :value="quantity">
        {{ quantity }}
      </option>
    </select>
    <dl v-for="ingredient in getSelectedRecipe.ingredients">
      <input type="checkbox" :value="ingredient.name" v-model="checkedIngredient" />
      <dt>{{ $t("ingredient." + ingredient.name) }}</dt>
      <dd>{{ ingredient.quantity[selected_quantity] }} {{ $t("unit." + select_unit(ingredient.name)) }}</dd>
    </dl>
    <p>{{ $t("message." + getInsertStatus) }}</p>`
});

app.component("recipe-info", {
  props: ["selected_recipe", "recipes"],
  computed: {
    getSelectedRecipe() {
      return this.recipes.filter(recipe=>{return this.selected_recipe == recipe.name;})[0];
    },
    getETA() {
      let now = new Date();
      let eta = new Date();
      eta.setHours(eta.getHours() + Number(this.getSelectedRecipe.time.split(":")[0]));
      eta.setMinutes(eta.getMinutes() + Number(this.getSelectedRecipe.time.split(":")[1]));
      let eta_day = (now.getDate() == eta.getDate()) ? "today" : "tomorrow";
      let eta_clock = [("0" + eta.getHours()).slice(-2), ":", ("0" + eta.getMinutes()).slice(-2)].join("");
      return [eta_day, eta_clock];
    }
  },
  template: `
    <dl>
      <dt>{{ $t("message.menu_id") }}</dt>
      <dd>{{ getSelectedRecipe.id }}</dd>
      <dt>{{ $t("message.cooking_time") }}</dt>
      <dd>{{ getSelectedRecipe.time }}</dd>
      <dt>{{ $t("message.eta") }}</dt>
      <dd>{{ $t("date." + getETA[0]) }} {{ getETA[1] }}</dd>
    </dl>`
})

app.use(i18n);
const vm = app.mount("#app");