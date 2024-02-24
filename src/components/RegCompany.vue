<template>
    <h2 style="color: #41268C; font-size: 35px">Регистрация</h2>
    <form @submit.prevent="submitHandler()" novalidate>
        <div class="inputBox">
            <label class="custom-field">
                <input style="width: 440px;" type="text" v-model.trim="company" @blur="v$.company.$touch()" :class="{'is-invalid': v$.company.$error, 'valid': !v$.company.$error}">
                <span class="placeholder">Компания</span>
                <span class="text-danger" v-if="!v$.company.$model && v$.company.$dirty">Это поле обязательно</span>
                <span class="text-danger" v-if="this.v$.company.alpha.$invalid">Название компании не должно содержать цифры и другие символы</span>
            </label>
        </div>
        <div class="submitBtn">
            <button type="submit">Дальше</button>
        </div> 
        <div class="btnToLogin">
            <h6>Уже есть аккаунт? <router-link to="/login">Войти</router-link></h6>  
        </div>
    </form>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'
import axios from 'axios';

const alpha = helpers.regex(/^[a-zA-Zа-яА-Я]*$/)

export default {
  setup: () => ({ v$: useVuelidate() }),
  data: () => ({
    company: '',
  }),
  validations() {
    return{
      company: {required, alpha},
    }
  },
  methods: {
    async submitHandler() {
      this.v$.$touch()

        await axios.post('api/auth/reg/', { 
            phone: localStorage.getItem('phone'),
            first_name: localStorage.getItem('name'),
            last_name: localStorage.getItem('secondName'),
            role: 'Меннеджер',
            password: localStorage.getItem('password'),
            company_name: this.company
        }).then(
            response => {
                console.log(response)
                this.$router.push('/login')
            }
        ).catch(
            error => {
                console.log(error.response.data.errors)
            }
        )
    }
  },
}
</script>

<style scoped>
.is-invalid {
    border: 2px solid #FF8C0A;
}
.valid{
    border: 2px solid #131863;
}
.text-danger {
    position: absolute;
    left: 12px;
    top: calc(85% + 10px);
    font-size: 10px;
    color: #FF8C0A;
}
.inputBox {
    display: flex;
    flex-direction: column;
}
.custom-field {
    position: relative;
    font-size: 14px;
    padding-top: 20px;
    margin-bottom: 5px;
    margin-left: 10px;
}
.submitBtn {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 5px;
}
.btnToLogin {
    display: flex;
    justify-content: center;
    font-size: 16px;
}
.submitBtn button {
    width: 180px;
    height: 40px;
    outline: none;
    background: linear-gradient(to right,#AD20CF, #4C26CE);
    color: #fff;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;
    transition: box-shadow 100ms;
    transition: font-size 100ms;
}
.submitBtn button:hover {
    box-shadow: 0 0 5px 3px rgba(0, 25, 136, 0.393);
}
.submitBtn button:active {
    font-size: 14px;
}
.custom-field input {
    /* border: 2px; */
    -webkit-appearance: none;
    -ms-appearance: none;
    -moz-appearance: none;
    appearance: none;
    /* background: none; */
    padding: 12px;
    border-radius: 10px;
    outline: none;
    font-size: 14px;
}
.custom-field .placeholder {
    position: absolute;
    left: 12px;
    /* top: calc(50% + 10px); */
    transform: translateY(-50%);
    top: 20px;
    background: #fff;
    color: #131863;
}
/* .custom-field input:valid,
.custom-field input:focus {
    border-color: #222;
    transition-delay: 0.1s;
}
.custom-field input + .placeholder {
    padding: 0 5px;
}
.custom-field input:valid + .placeholder,
.custom-field input:focus + .placeholder {
    top: 20px;
    background: #fff;
    color: #222;
} */
</style>