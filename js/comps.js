Vue.component('ingredientList', {
	props:["ingNum", "ingField"],
	template:"<tr>\
							<td>{{ingNum}}.</td>\
							<td>{{ingField}}</td>\
						</tr>"
})