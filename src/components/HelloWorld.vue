<template>
  <form class="card auth-card" @submit.prevent="submitHandler()" novalidate>
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <pre>
          {{ this.v$.confirm.sameAs }}
        </pre>
        <input
            id="email"
            type="email"
            style="outline: none;"
            @blur="v$.email.$touch()"
            v-model.trim="email"
            :class="{'is-invalid': v$.email.$error}"
        >
        <label for="email">Email</label>
        <small v-if="!v$.email.$model && v$.email.$dirty">Поле обязательно для заполнения</small>
        <small v-if="v$.email.$error && v$.email.$model">Введите корректный email</small>
      </div>
      <div class="input-field">
        <input
            id="password"
            type="password"
            class="validate"
            @blur="v$.password.$touch()"
            v-model.trim="password"
            :class="{'is-invalid': v$.password.$error}"
        >
        <label for="password">Пароль</label>
        <small v-if="!v$.password.$model && v$.password.$dirty">Поле обязательно для заполнения</small>
        <small v-if="v$.password.minLength.$invalid">Пароль должен быть больше 6</small>
      </div>
      <div class="input-field">
        <input
            id="confirm"
            type="password"
            class="validate"
            @blur="v$.confirm.$touch()"
            v-model.trim="confirm"
            :class="{'is-invalid': v$.confirm.$error}"
        >
        <label for="confirm">Пароль</label>
        <small v-if="v$.confirm.sameAs.$invalid && v$.confirm.$dirty">Пароли не совпадают</small>
      </div>
      <div class="input-field">
        <input
            id="name"
            type="text"
            class="validate"
            @blur="v$.name.$touch()"
            v-model.trim="name"
            :class="{'is-invalid': v$.name.$error}"
        >
        <label for="name">Имя</label>
        <small v-if="!v$.name.$model && v$.name.$dirty">Поле обязательно для заполнения</small>
        <small v-if="this.v$.name.alpha.$invalid">Имя не должно содержать цифры и другие символы</small>
      </div>
      <p>
        <label>
          <input type="checkbox" />
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
        >
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <a href="/">Войти!</a>
      </p>
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
  }),
  validations() {
    return{
      email: {required, email},
      password: {required, minLength: minLength(6) },
      name: {required, alpha},
      confirm: {sameAs: sameAs(this.password)},
    }
  },
  methods: {
    submitHandler() {
      this.v$.$touch(),
      console.log(this.v$.name)
    }
  },
}
</script>


<style scoped>
.auth-card {
  /* height: 100%;
  width: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.is-invalid {
  border-color: red;
}
</style>
