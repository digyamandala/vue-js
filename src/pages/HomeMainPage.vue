<template>
    <div class="main-content">
        <div class="img-logo">
            <router-link to="/">
                <img  src="~assets/shopbag.png" alt="blibli-logo">
            </router-link>
        </div>
        <h2>shop like you never shop before</h2>
        <h2>explore now!</h2>
    </div>
</template>



<style>

h2{
    text-decoration: none;
    color: whitesmoke;
    text-shadow: 0 1px 2px rgb(50,50,50);
    z-index: 0;
}
.img-logo{

    z-index: -1;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

h2{
    text-align: center;
}
</style>

<script>
export default {
    name: 'HomeMainPage'
}
</script>


