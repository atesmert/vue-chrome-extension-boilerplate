<template>
<div class="home">
	<h1 class="title">Home</h1>
	<div :key="testStateVariable">testStateVariable: {{testStateVariable}}</div>
	<a @click="changeState" class="button is-small">change testStateVariable</a>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
	computed: {
		...mapState("testState", {
			testStateVariable: "testStateVariable"
		})
	},
	methods: {
		...mapActions("testState", {
			changeTestState: "changeTestState"
		}),
		changeState() {
			this.changeTestState(this.testStateVariable+1);
		}
	},
	mounted(){
    	console.log(this.testStateVariable);
  	}
};
</script>

<style lang="scss" scoped>
    .home{
        padding:3em;
    }
</style>