Vue.component('search', {
  template:'\
<form class="form-inline">\
<div class="input-group input-group-lg"">\
<input v-model="search" class="form-control py-2 border-right-0 border" type="search" id="example-search-input" placeholder="Search your craves">\
<span class="input-group-append">\
<div class="input-group-text bg-transparent">\
<i class="fa fa-search" @click="searchButton()" style="cursor:pointer"></i>\
</div>\
</span>\
</div>\
</form>'
});

Vue.component('cuismodal',{
  props: ['obj'],
  template:'<div>\
  <button>Close</button>\
  <h1>{{obj.food_name}}</h1>\
  <img :src="obj.food_image"/>\
  <p>{{obj.food_desc}}</p>\
  <h3>Ingredients</h3>\
  <ul>\
  <li v-for="o in obj.food_ingredients">{{o.list}} - {{o.quantity}}</li>\
  </ul>\
  <h3>How to make {{obj.food_name}}</h3>\
  <ol>\
  <li v-for="o in obj.food_recipes">{{o.list}}</li>\
  </ol>\
  </div>'
});

Vue.component('cuisedit', {
  props:['obj2'],
  template:'<div>\
  <button>Close</button>\
  <p>Food Name:</p>\
  <input type="text" v-bind:value="obj2.food_name" />\
  <p>Food Image URL:</p>\
  <input type="text" v-bind:value="obj2.food_image" />\
  <p>Food Description:</p>\
  <input type="text" v-bind:value="obj2.food_desc" />\
  <p>Food Origin:</p>\
  <input type="text" v-bind:value="obj2.food_origin" />\
  <p>Google Map URL:</p>\
  <input type="text" v-bind:value="obj2.food_url" />\
  <p>Food Ingredients:</p>\
  <span v-for="oj in obj2.food_ingredients">\
  <input type="text" v-bind:value="oj.list" />\
  <input type="text" v-bind:value="oj.quantity" />\
  <br/>\
  </span>\
  <p>Food Recipes:</p>\
  <span v-for="oj in obj2.food_recipes">\
  <input type="text" v-bind:value="oj.list" />\
  <br/>\
  </span>\
  <button @click="$emit(\'some-change\',obj2.id,\'input\',$event.target.value)">Update</button>\
  </div>'
});

