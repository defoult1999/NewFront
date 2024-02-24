<template>
    <div>
        <VueDatePicker v-model="date" locale="ru" :enable-time-picker="false" :format="format"></VueDatePicker>
    </div>
    <div class="container">
        <div class="text-container">
            <input type="text" list="programmingLanguages" v-model="search" @keyup="textSearch($event)"/>
            <datalist id="programmingLanguages">
                <option v-for="item in list" :key="item.applicationId">{{ item.applicationTitle }}</option>
            </datalist>
        </div>
    </div>
    <button @click="getAdress()">dafadf</button>
</template>

<script setup>
    import { ref } from 'vue';

const date = ref(new Date());
// In case of a range picker, you'll receive [Date, Date]
const format = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}
</script>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import axios from 'axios'


export default {
  components: { VueDatePicker },
  data() {
    return {
      date: null,
      time: null,
      list: '',
      search: '',
      isHiden: true,
      timer: undefined
    };
  },
  created() {
    this.list = this.$store.state.applications
  },
  methods: {
    async getAdress() {
      await axios.post(`/api/orders/create/get-address-suggestions/`, {
        query: 'Кр'
      }, {
        headers: {
          'Authorization':'Token ' + localStorage.getItem('token'),
        }
      }).then(
        response => {
            console.log(response)
              }
      ).catch(
              error => {
                  console.log(error)
              }
          )

    },
    textSearch(){
        clearTimeout(this.timer)

        this.timer = setTimeout(() => {
          axios.post(`/api/orders/create/get-address-suggestions/`, {
            query: this.search
          }, {
            headers: {
              'Authorization':'Token ' + localStorage.getItem('token'),
            }
          }).then(
            response => {
                console.log(response)
                  }
          ).catch(
                  error => {
                      console.log(error)
                  }
              )
        }, 1000)
      }
  },
}
</script>

<style scoped>

</style>