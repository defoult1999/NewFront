<template>
    <h2 style="color: #41268C; font-size: 35px">Регистрация</h2>
    <form @submit.prevent="submitHandler()" novalidate>
        
        <div class="inputBox">
            <div style="display: flex; flex-direction: row;">
                <label class="custom-field">
                    <input style="width: 200px;" type="text" v-model.trim="name" @blur="v$.name.$touch()" :class="{'is-invalid': v$.name.$error, 'valid': !v$.name.$error}">
                    <span class="placeholder">Имя</span>
                    <span class="text-danger" v-if="!v$.name.$model && v$.name.$dirty">Это поле обязательно</span>
                    <span class="text-danger" v-if="this.v$.name.alpha.$invalid">Имя не должно содержать цифры и другие символы</span>
                </label>
                <label class="custom-field">
                    <input style="width: 200px;" type="text" v-model.trim="secondName" @blur="v$.secondName.$touch()" :class="{'is-invalid': v$.secondName.$error, 'valid': !v$.secondName.$error}">
                    <span class="placeholder">Фамилия</span>
                    <span class="text-danger" v-if="!v$.secondName.$model && v$.secondName.$dirty">Это поле обязательно</span>
                    <span class="text-danger" v-if="this.v$.secondName.alpha.$invalid">Фамилия не должна содержать цифры и другие символы</span>
                </label>
            </div>
            <label class="custom-field">
                <input style="width: 440px;" type="text" v-model.trim="email" @blur="v$.email.$touch()" :class="{'is-invalid': v$.email.$error, 'valid': !v$.email.$error}">
                <span class="placeholder">Email</span>
                <span class="text-danger" v-if="!v$.email.$model && v$.email.$dirty">Это поле обязательно</span>
                <span class="text-danger" v-if="v$.email.$error && v$.email.$model">Введите корректный email</span>
            </label>
            <label class="custom-field">
                <input style="width: 440px;" type="password" v-model.trim="password" @blur="v$.password.$touch()" :class="{'is-invalid': v$.password.$error, 'valid': !v$.password.$error}">
                <span class="placeholder">Пароль</span>
                <span class="text-danger" v-if="!v$.password.$model && v$.password.$dirty">Это поле обязательно</span>
                <span class="text-danger" v-if="v$.password.minLength.$invalid">Пароль должен быть больше 6</span>
            </label>
            <label class="custom-field">
                <input style="width: 440px;" type="password" v-model.trim="confirm" @blur="v$.confirm.$touch()" :class="{'is-invalid': v$.confirm.$error, 'valid': !v$.confirm.$error}">
                <span class="placeholder">Подтвердите пароль</span>
                <span class="text-danger" v-if="!v$.confirm.$model && v$.confirm.$dirty">Это поле обязательно</span>
                <span class="text-danger" v-if="v$.confirm.sameAs.$invalid && v$.confirm.$dirty && v$.confirm.$model">Пароли не совпадают</span>
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
import { required, email, helpers, minLength, sameAs } from '@vuelidate/validators'

const alpha = helpers.regex(/^[a-zA-Zа-яА-Я]*$/)

export default {
  setup: () => ({ v$: useVuelidate() }),
  data: () => ({
    email: '',
    password: '',
    name: '',
    confirm: '',
    secondName: '',
  }),
  validations() {
    return{
      email: {required, email},
      password: {required, minLength: minLength(6) },
      name: {required, alpha},
      confirm: {sameAs: sameAs(this.password), required},
      secondName: {required, alpha}
    }
  },
  methods: {
    async submitHandler() {
      this.v$.$touch()

      if (!this.v$.$invalid) {
        localStorage.setItem('email' , this.email)
        localStorage.setItem('password' , this.password)
        localStorage.setItem('name' , this.name)
        localStorage.setItem('secondName' , this.secondName)
        this.$router.push('/registration/regcompany')
      } else {
        console.log('dsfd')
      }
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