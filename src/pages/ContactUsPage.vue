<template>
import { METHODS } from 'http';
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
            </label>
        </div>
        <div>
            <label for="">
                Description:
                <textarea
                v-model="formData.description"></textarea>
            </label>
        </div>

        <div>
            <button>Submit</button>
        </div>

        <div>
            Data:
            {{formData}}
            <!-- <div>
                FullName: {{fullName}}
            </div> -->
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
    name: 'ContactUsPage',
    data(){
        return{
            formData:{
                fullName: '',
                email: '',
                description: '',
            }
            
        }
    }
}
</script>

<style scoped>
label{
    display: block;
    padding-top: 20px
}
</style>

