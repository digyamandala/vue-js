<template>
    <div class="navbar-container">
        <ul class="navbar-ul">
            <li class="navbar-li logo">
                <router-link to="/">
                    ShopSpot
                </router-link>
            </li>
            <li class="navbar-li">
                <router-link to="/products">
                    Products
                </router-link>
            </li>
            <li class="navbar-li">
                <router-link to="/categories">
                    Categories
                </router-link>
            </li>
            <li class="navbar-li">
                <router-link to="/members">
                    Members
                </router-link>
            </li>
        </ul>
    </div>

    <!-- <div>
        <h1>hahaha</h1>
    </div> -->
</template>

<style>

.logo{
    margin-right: 40px;
    margin-left: 10px;
}

.navbar-container{
    background-color: whitesmoke;

}
.navbar-ul{
    list-style-type: none;
    margin-top: 0;
    padding: 0;
}
.navbar-li{
    padding: 8px 12px;
    display: inline-block;
    transition: all 0.2s;
}
.navbar-li>a{
    padding: 8px 12px;
    text-decoration: none;
    color: black;
}
.navbar-li:hover{
    background-color: rgb(212,212,212);
}

</style>


