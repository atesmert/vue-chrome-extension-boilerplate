<template>
<div class="test">
    <h1 class="title">Tests</h1>
    <a>{{testValue}}</a>
    <a @click="testAlert" class="button is-small">test alert</a>
    <div>This is a dummy API response: </div>
    <div>{{APIresponse}}</div>
</div>
</template>

<script>
export default {
    components: {
    },
    data(){
        return {
            testValue:'inject text to alert',
            APIresponse: null,
        }
    },
    methods:{
        testAlert(){
            alert('Hello World!');
        },
    },
    mounted () {
        this.axios
        .get('https://jsonplaceholder.typicode.com/posts?userId=1')
        .then(response => (this.APIresponse = response))
    }
}
</script>

<style lang="scss" scoped>
    .test{
        padding:3em;
    }
</style>

