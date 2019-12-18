import Vue from "vue"
import Router from "vue-router"
import Home from "@/components/Home.vue"
import Cart from "@/components/Cart.vue"
import JumboTron from "@/components/JumboTron.vue"
import Footer from "@/components/Footer.vue"
import Calculator from "@/components/Calculator.vue"
import Seqsum from "@/components/Seqsum.vue"
import Account from "@/components/Account.vue"
import Todo from "@/components/Todo.vue"

Vue.use(Router)
export default new Router({
	mode : 'history',
	routes : [		// name - 인스턴스 , component - class => Cart cart
		{ path : '/', name : 'home', component : Home },	//  / - default
		{ path : '/cart', name : 'cart', component : Cart },
		{ path : '/jumboTron', name : 'jumboTron', component : JumboTron },
		{ path : '/footer', name : 'footer', component : Footer },
		{ path : '/calculator', name : 'calculator', component : Calculator},
		{ path : '/seqsum', name : 'seqsum', component : Seqsum },
		{ path : '/account', name : 'account', component : Account },
		{ path : '/todo', name : 'todo', component : Todo }
	]
})