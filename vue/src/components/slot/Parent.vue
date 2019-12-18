<template>
	<div>
		<BaseModal>
			<template slot="header">
			<h1>모달 제목</h1>
			<button>닫기</button>
			</template>
			<p slot="content">모달의 컨텐츠입니다.</p>
		</BaseModal>
	</div>
</template>
<script>
import BaseModal from "@/components/slot/BaseModal.vue"
export default {
	name : 'parent',
	components : {
		BaseModal
	}
}
</script>
<style scoped>

</style>