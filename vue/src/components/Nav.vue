<template>
<div>
	<nav class="navbar navbar-default">
		<div class="container-fluid">
			<div class="navbar-header">
				<a href="#" class="navbar-brand">비트캠프</a>
			</div>
			<ul class="nav navbar-nav">
				<li class="active"><router-link to="/">Home</router-link></li>
				<li><router-link to="/cart">장바구니</router-link></li>
				<li><router-link to="/calculator">계산기</router-link></li>
				<li><router-link to="/seqsum">두 수 사이의 합</router-link></li>
				<li><router-link to="/account">계좌 개설</router-link></li>
				<li><router-link to="/todo">할일목록</router-link></li>
				<li>회원가입</li>
				<li>로그인</li>
			</ul>
		</div>
	</nav>	
</div>
</template>
<script>
export default {	// 클로져
	
}
</script>
<style scoped>

</style>