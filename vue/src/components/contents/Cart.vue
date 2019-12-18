<template>
  <div class="hello">
    <Nav/>
    <ul>
      <li v-for="item of items" :key="item.name">
        <img style="width:100px;height:100px" :src="item.img">
        {{item.name}} : {{item.price}}원
        <input type="text" v-model="item.qty">개
      </li>
    </ul>
    <button @click="buy">구매</button>	
    <!-- <button v-on:click="buy">구매</button>	 v-on 약어 => @ 	-->
    <p>합계 : {{totalPrice}}원</p>
    
    <Footer/>
  </div>

</template>

<script>
import Nav from '@/components/cmm/Nav.vue'
import Footer from '@/components/cmm/Footer.vue'
export default {
  name: 'Cart',
  components : {
    Nav, Footer
  },
  data(){
		return { items :
      [ { name : '연필', price : 300, qty : 0, img:require(`@/assets/images/pencil.jpg`) },
        { name : '공책', price : 400, qty : 0, img:require(`@/assets/images/notebook.jpg`) },
        { name : '지우개', price : 500, qty : 0, img:require(`@/assets/images/eraser.jpg`) }
      ]
    }
	}, 
	methods : {
		buy(){
			alert(`구매버튼 클릭`)
		}
	},
	computed : {
		totalPrice(){	// 양방향 바인딩
			return this.items.reduce((sum, item)=>{
				return sum + (item.price * item.qty)
			}, 0)	// 0 - 결과 초기값 -> sum = 0 이됨
		}			// [ 0, 300, 400, 500 ] => 합계 : 1200
	}, 
	created(){	// 메서드 프로퍼트, 시작하자 마자 실행
		// alert(`객체 생성`)
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
