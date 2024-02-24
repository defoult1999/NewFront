<template>
    <form @submit.prevent="submitHandler()" novalidate>
        <h2 style="color: #41268C; font-size: 35px">Вход</h2>
        <div class="inputBox">
            <label class="custom-field">
                <input style="width: 440px;" type="text" v-model.trim="phone" @blur="v$.phone.$touch()" :class="{'is-invalid': v$.phone.$error, 'valid': !v$.phone.$error}">
                <span class="placeholder">Email</span>
                <span class="text-danger" v-if="!v$.phone.$model && v$.phone.$dirty">Это поле обязательно</span>
            </label>
            <label class="custom-field">
                <input style="width: 440px;" type="password" v-model.trim="password" @blur="v$.password.$touch()" :class="{'is-invalid': v$.password.$error, 'valid': !v$.password.$error}">
                <span class="placeholder">Пароль</span>
                <span class="text-danger" v-if="!v$.password.$model && v$.password.$dirty">Это поле обязательно</span>
                <span class="text-danger" v-if="v$.password.minLength.$invalid">Пароль должен быть больше 6</span>
            </label>
        </div>
        <div class="submitBtn">
            <button type="submit">Войти</button>
        </div> 
        <div class="btnToReg">
            <h6>Нет аккаунта? <router-link to="/registration/regphone">Зарегистрироваться</router-link></h6>  
        </div>
    </form>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, minLength} from '@vuelidate/validators'
import axios from 'axios';

export default {
  setup: () => ({ v$: useVuelidate() }),
  data: () => ({
    phone: '',
    password: '',
  }),
  validations() {
    return{
      phone: {required},
      password: {required, minLength: minLength(6) },
    }
  },
  methods: {
    async submitHandler() {
      this.v$.$touch()

        await axios.post('api/auth/login/', { 
            phone: this.phone,
            password: this.password,
        }).then(
            response => {
                console.log(response)
                localStorage.setItem('token' , response.data.token)
                this.$router.push('/applications')
            }
        ).catch(
            error => {
                console.log(error.response)
            }
        )
    }
  },
}
</script>

<style scoped>
.inputBox {
    display: flex;
    flex-direction: column;
}
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
.btnToReg {
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
    cursor: pointer;
    border-radius: 10px;
    font-size: 16px;
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
</style>