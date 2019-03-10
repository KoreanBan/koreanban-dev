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
          <p class="px-4 py-4">{{obj.food_desc}}</p>\
          <span class="divider"></span>\
          <h3 class="m-3">Ingredients</h3>\
          <ul class="mx-3">\
          <li v-for="o in obj.food_ingredients">{{o.list}} - {{o.quantity}}</li>\
          </ul>\
          <span class="divider"></span>\
          <h3 class="m-3">How to make {{obj.food_name}}</h3>\
          <ol>\
          <li class="pr-5 pl-3 py-2" v-for="o in obj.food_recipes">{{o.list}}</li>\
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
  template:
  '<transition name="fade">\
    <form class="wrapper_admin">\
      <div class="form-group">\
        <label>Food Name:</label>\
        <input class="form-control" type="text" v-bind:value="obj2.food_name" v-on:change="$emit(\'change\', $event.target.value)"/>\
      </div>\
      <div class="form-group">\
        <label>Food Image URL:</label>\
        <input class="form-control" type="text" v-bind:value="obj2.food_image" v-on:change="$emit(\'change\', $event.target.value)"/>\
      </div>\
      <div class="form-group">\
        <label>Food Description:</label>\
        <input class="form-control" type="text" v-bind:value="obj2.food_desc" v-on:change="$emit(\'change\', $event.target.value)"/>\
      </div>\
      <div class="form-group">\
        <label>Food Origin:</label>\
        <input class="form-control" type="text" v-bind:value="obj2.food_origin" v-on:change="$emit(\'change\', $event.target.value)"/>\
      </div>\
      <div class="form-group">\
        <label>Google Map URL:</label>\
        <input class="form-control" type="text" v-bind:value="obj2.food_url" v-on:change="$emit(\'change\', $event.target.value)"/>\
      </div>\
      <div class="form-group">\
        <label>Food Ingredients:</label> <br/>\
        <span v-for="oj in obj2.food_ingredients">\
          <input type="text" v-bind:value="oj.list" v-on:change="$emit(\'change\', $event.target.value)"/>\
          <input type="text" v-bind:value="oj.quantity" v-on:change="$emit(\'change\', $event.target.value)"/>\
        <br/>\
        </span>\
      </div>\
      <div class="form-group">\
        <label>Food Recipes:</label>\
        <span v-for="oj in obj2.food_recipes">\
          <input class="form-control" type="text" v-bind:value="oj.list" v-on:change="$emit(\'change\', $event.target.value)"/>\
          <br/>\
        </span>\
      </div>\
      <span class="modal-footer">\
        <button class="btn" @click="$emit(\'some-change\')">Update</button>\
        <button class="btn">Close</button>\
      </span>\
    </form>\
  </transition>' 
});

