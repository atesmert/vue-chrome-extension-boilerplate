<template>
<div class="the-footer">
    <div class="footer-part left-side">
        <router-link class="item" to="/">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#f5f5f5" width="16" height="16" viewBox="0 0 24 24"><path d="M5.495 2h16.505v-2h-17c-1.656 0-3 1.343-3 3v18c0 1.657 1.344 3 3 3h17v-20h-16.505c-1.376 0-1.376-2 0-2zm.505 4h7v7l2-2 2 2v-7h3v16h-14v-16z"/></svg>
            <span>Home</span>
        </router-link>

        <router-link class="item" to="/test">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#f5f5f5" width="16" height="16" viewBox="0 0 24 24"><path d="M14 4h2v16c0 2.209-1.791 4-4 4s-4-1.791-4-4v-16h2v3h3v12.823c0 .973-.328 1.692-1.014 2.175l.014.002c1.103 0 2-.897 2-2v-16zm2-4h-8c-.552 0-1 .448-1 1s.448 1 1 1h8c.553 0 1-.448 1-1s-.447-1-1-1z"/></svg>
            <span>Test Route</span>
        </router-link>
    </div>
    <div class="footer-part right-side">
        <!-- settings -->
        <router-link class="item" to="/settings"> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="#f5f5f5" width="16" height="16" viewBox="0 0 24 24"><path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/></svg>
        </router-link>
    </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Anonymous+Pro:400,700&display=swap');
svg,span{vertical-align: middle;}
a{
    color:#f5f5f5;
    font-family: 'Anonymous Pro', monospace;
    font-weight: bold;
}
.the-footer{
    padding:0.5em 1em;
    display:flex;
    flex-flow:row nowrap;

    background-color: #424242;
}
.footer-part{
    display:flex;
    flex-flow: row nowrap;
    .item{
        padding:0.5em;
    }
}
.left-side{
    margin-left:0;
    margin-right:auto;
}
.right-side{
    margin-left:auto;
    margin-right:0;
}
.router-link-exact-active{
    color: #fb7777;
    svg path{
        fill: #fb7777;
    }
}
.item:not(.router-link-exact-active):hover{
    svg path{
        fill: #bbbbbb;
    }
    span{
        color: #bbbbbb;
    }
}
</style>

