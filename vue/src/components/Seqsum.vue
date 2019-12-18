<template>
	<div>
		<Nav/>
		첫번째 수 : <input id="f1" type="text" v-model="first"/><br>
		마지막 수 : <input id="l1" type="text" v-model="last"/><br>
		<button @click="total">계산</button><p>사이 합 : {{result}}</p>
		<Footer/>
	</div>
</template>
<script>
import Nav from "@/components/Nav.vue"
import Footer from "@/components/Footer.vue"
export default{
	name : 'seqsum',	// seqsum - 인스턴스, 이름을 주면 객체가 됨
	components : {
		Nav, Footer
	}, 
	data(){
		return {	
			first : '', 	// 멤버변수
			last : '',
			result : 0,
			first1 : 0,
			last1 : 0
		}
	}, 
	methods : {
		
		total(){
			// 단방향
	/* 		const first1 = parseInt(document.getElementById('f1').value)
			const last1 = parseInt(document.getElementById('l1').value)
			
			if(first1 < last1){
				start = first1
				end = last1
			}else{
				start = last1
				end = first1
			}
			*/
	//		alert(`첫번째 값 : ${first1}`)

			let _first = Number(this.first1)
			let _last = Number(this.last1)
			let arr = [_first, _last]
			
			arr.sort()
			let start = Number(arr[0]), end = Number(arr[1])

			let sum = 0
			for(let i = start; i < end + 1; i++)
				sum += i
			this.result = sum



/* 			let arr1 = [ parseInt(this.first),  parseInt(this.last)]
			let arr2 = []

			arr1.sort()
			for(let i = arr1[0]; i <= arr1[1]; i++)
				arr2.push(i)
			
			this.result = `${arr2.reduce( (a, b) => a + b)}` */
		}
	}
}
</script>
<style scoped>

</style>