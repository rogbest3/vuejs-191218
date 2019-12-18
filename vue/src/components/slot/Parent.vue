<template>
	<div>
		<BaseModal>		<!-- slot="header"에서 변경된 구문 #header="slotProps" -->
			<template #header="slotProps">
				<h1>모달 제목</h1>
				<button @click="slotProps.close">닫기</button>
			</template>
			<template #[slotName]>
				<p>모달의 컨텐츠입니다.</p>
			</template>
		</BaseModal>
	</div>
</template>
<script>
import BaseModal from "@/components/slot/BaseModal.vue"
export default {
	name : 'parent',
	components : {
		BaseModal
	}, 
	data(){
		return {
			slotName : 'content'
		}
	}
}
</script>
<style scoped>

</style>