<template>
    <div>
        <h1 class="page-title">
            Members
        </h1>
        <br>

        <!-- <div v-for="i in items">
            <div>
                
                Product ID: {{i.id}} <br>
                Category ID: {{i.categoryId}} <br>
                Product Name: {{i.productName}} <br>
                <br>

            </div>
        </div> -->
        <div class="grid-container">
            <div class="grid-item">

                <img src="~assets/shopbag.png" alt="">
                <p>Name</p>

            </div>
            <div class="grid-item">

                <img src="~assets/shopbag.png" alt="">
                <p>Name</p>

            </div>
            <div class="grid-item">

                <img src="~assets/shopbag.png" alt="">
                <p>Name</p>

            </div>
        
        </div>
   

    </div>
</template>

<style>
.page-title{
    text-align: center;
    color: whitesmoke;
    text-shadow: 0 3px 1px rgb(30,30,30);
}
p>span{
    font-size: 15px;
}

.grid-container {
    display: grid;
    grid-gap: 50px;
    grid-template-columns: auto auto auto;
    padding: 10px;
}

.grid-item {
    background-color: rgba(255, 255, 255);
    box-shadow: 0 2px 3px black;
    padding: 20px;
    font-size: 30px;
    text-align: center;
    width: 33,3%;
    transition: all 0.2s;
}

.grid-item>p{
    font-size: 18px;
    margin: 2px;
}
.grid-item img{
    filter: grayscale(100%);
    width: 200px;
    transition: all 0.4s;
}
.grid-item:hover{
    box-shadow: 5px 12px 10px black;
    background-color: rgb(240,240,240);
    cursor: pointer;
}
.grid-item:hover img{
    filter: none;
}
</style>

<script type="text/javascript">
import axios from 'axios'
export default {
    name: 'ProductPage',
    data(){
        return{
            
            items: []
        }
    },
    created(){
        //the address of the JSON data
        axios.get('/products').then((resp) => {
            console.log(resp)
            this.items = resp.data
        })
    }
}
</script>

