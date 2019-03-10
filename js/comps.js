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
  template:
'<transition name="fade">\
  <div class="wrapper">\
    <div class="modal-dialog modal-dialog-scrollable" role="document">\
      <div class="modal-content">\
          <span class="modal-header">\
            <h1>{{obj.food_name}}</h1>\
          </span>\
          <img :src="obj.food_image" class="img-thumbnail"/>\
          <p class="p-4">{{obj.food_desc}}</p>\
          <h3 class="mx-3">Ingredients</h3>\
          <ul class="mx-3">\
          <li v-for="o in obj.food_ingredients">{{o.list}} - {{o.quantity}}</li>\
          </ul>\
          <h3 class="mx-3">How to make {{obj.food_name}}</h3>\
          <ol>\
          <li class="p-3" v-for="o in obj.food_recipes">{{o.list}}</li>\
          </ol>\
          <span class="modal-footer">\
          <button class="btn" @click="$emit(\'closemodal\')">Close</button>\
          </span>\
        </div>\
      </div>\
    </div>\
  </transition>'
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

