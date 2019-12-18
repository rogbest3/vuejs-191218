<template>
	<div>				 <!-- 루트 -->
		<Nav/>			 <!-- 노드 -->	
		<JumboTron/>
		<Footer/>
	</div>
</template>
<script>
			//	.. : @
// getScript
import Nav from '@/components/Nav.vue'
import JumboTron from '@/components/JumboTron.vue'
import Footer from '@/components/Footer.vue'

// return
export default {	// 클로져
	name : 'home',
	components : {
		Nav, JumboTron, Footer 	// Nav : Nav 가 Nav로 생략됨
	},
	data(){
		return {
			msg : '홈화면으로 들어옴'
		}
	}
}
</script>
<style scoped>

</style>