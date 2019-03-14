<template>
    <div>
        <div>
            <label for="">
                Full Name:
                <input
                    type="text"
                    class="contact-input"
                    v-model="formData.fullName"
                >
            </label>
        </div>
        <div>
            <label for="">
                Email:
                <input type="text"
                v-model="formData.email">

                <div class="error" v-if="isEmailValid == false">
                    email invalid
                </div>
            </label>
        </div>
        <div>
            <label for="">
                Description:
                <textarea
                    v-model="formData.description">
                </textarea>
            </label>
        </div>

        <div>
            <button @click="submitData">
                Submit
            </button>
        </div>

        <div>
            Data:
            {{formData}}
        </div>
   
    </div>
</template>

<script type="text/javascript">
import axios from 'axios'

export default {
    name: 'ContactUsPage',
    data(){
        return{
            formData:{
                fullName: '',
                email: '',
                description: '',
            },
            count: 0
        }
    },

    methods: {
        
        submitData () {
            if(this.isInputValid == false){
                alert("Please fix data")
                return
            }
            alert(JSON.stringify(this.formData))
            axios.post('/api/contact-us', this.formData)
            alert("data submiteed")
        }
    },
    computed: {
        // getData(){
        //     this.count++
        //     return JSON.stringify(this.formData)
        // },
        isInputValid(){
            const data = this.formData
            if(!data.fullName || !data.email || !data.description || !this.isEmailValid){
                return false
            }
            return true
        },
        isEmailValid(){
            return this.formData.email.indexOf("@") > 0
        }

    }
}
</script>

<style scoped>
label{
    display: block;
    padding-top: 20px;
}

.error{
    display: block;
    color: red;
}
</style>

