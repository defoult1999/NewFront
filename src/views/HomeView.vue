<template>
  <div class="application-view">
    <div class="navbar-field">
        <div class="page_name">
          Заявки
        </div>
        <div class="navbar-field-item-2">
            <button class="CreateApplicationBtn" @click="CreateApplication()" style="display: flex; flex-direction: row; justify-content: flex-start; align-items: center; gap: 5px; padding-left: 15px; padding-right: 15px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
              <p>Создать заявку</p>
            </button>
        </div>
    </div>
    <div class="item itemOnhome_2">
      <div>
        <div class="cardStat">
          <div class="cardStatTitle cardStatItem">
            Общее количество заявок
          </div>
          <div class="cardStatCount cardStatItem">
            380
          </div>
          <div class="cardStatPercent cardStatItem">
            <button class="cardStatPercentBtn">20%</button>
          </div>
        </div>
      </div>
      <div>
        <div class="cardStat">
          <div class="cardStatTitle cardStatItem">
            Количество завершенных
          </div>
          <div class="cardStatCount cardStatItem">
            380
          </div>
          <div class="cardStatPercent cardStatItem">
            <button class="cardStatPercentBtn">20%</button>
          </div>
        </div>
      </div>
      <div>
        <div class="cardStat">
          <div class="cardStatTitle cardStatItem">
            Количество не взятых в работу
          </div>
          <div class="cardStatCount cardStatItem">
            380
          </div>
          <div class="cardStatPercent cardStatItem">

          </div>
        </div>
      </div>
    </div>
    <div class="item itemOnHome_3">
        <div class="filterButtonItem filterButtonItem_1">
          <div class="filterBtnPos">
            <button @click="showPopup()" class="filterBtn" style="display: flex; flex-direction: row; justify-content: flex-start; align-items: center; gap: 5px; padding-left: 15px; padding-right: 15px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-filter"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
              <p>Больше фильтров</p>
            </button>
            <FilterPopup class="FilterPopup" @popup-changed="showPopup" v-if="popupVisible" :popupVisible="popupVisible"></FilterPopup>
          </div>
        </div>
        <div class="filterButtonItem filterButtonItem_2">
          <div class="search-form">
            <div class="search-form-item">
              <input class="search-input" placeholder="Поиск" type="text">
              <button class="search-button">Все</button>
            </div>    
          </div>
        </div>
    </div>
    <div v-if="this.applics" class="item itemOnHome_4">
      <div class="application-title" style="margin-bottom: 10px;">
        <div class="application-title-item"><p>Id</p></div>
        <div class="application-title-item"><p>Компания</p></div>
        <div class="application-title-item"><p>Статус</p></div>
        <div class="application-title-item"><p>Направление</p></div>
        <div class="application-title-item"><p>Создатель</p></div>
        <div class="application-title-item"><p>Время создания</p></div>
        <div class="application-title-item"><p>Мастер</p></div>
        <div class="application-title-item"><p>Адрес</p></div> 
      </div>
      <div class="appCell">
        <ApplicationCell v-for="item in applics.data" :key="item.id" :applicationData="item"></ApplicationCell>
      </div>
    </div>
    <div v-if="this.applics" class="item itemOnHome_5">
      <div style="display: flex; justify-content:center; width:100%; height: 20px;">
        <PaginationComponent @page-changed="loadList" :applics="applics" :pageCount="pageCount"></PaginationComponent>
      </div>
    </div>
    <div v-if="!this.applics" class="emptyAppParent">
      <div class="emptyApp">
        <div class="emptyApp_1">
          <h1 style="font-size: 25px;">Заявок пока нет...</h1>
        </div>
        <div class="emptyApp_2">
          <button class="CreateApplicationBtn_2" @click="CreateApplication()">Создать заявку</button>
          {{ this.applics }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApplicationCell from '@/components/ApplicationCell.vue'
import axios from 'axios'
import PaginationComponent from '@/components/PaginationComponent.vue'
import FilterPopup from '@/components/FilterPopup.vue'

export default {
  data: () => ({
    applics: [],
    current_page: '1',
    pageCount: [],
    popupVisible: false,
  }),
  components: {
    ApplicationCell,
    PaginationComponent,
    FilterPopup
  },
  computed: {
    applications() {
      return this.$store.state.applications
    },
  },
  methods: {
    showPopup() {
      this.popupVisible = !this.popupVisible
    },
    CreateApplication() {
      this.$router.push('/designer')
    },
    async loadList(pageNumber) {
      this.$store.state.page_num = pageNumber
      await axios.get(`api/orders/list/?page=${pageNumber}`, {
        headers: {
          'Authorization':'Token ' + localStorage.getItem('token'),
          'Content-Type': 'application/json',
        }
      }).then(
        response => {
                  console.log(response)
                  console.log('Token ' + localStorage.getItem('token'))
                  this.applics = response.data
                  this.$store.state.pages_count = response.data.pages_count
                  this.pageCount = new Array(response.data.pages_count)
              }
      ).catch(
              error => {
                  console.log(error)
              }
          )

    }
  },
  async created() {
    if(this.applics === false){
      await this.loadList(this.current_page)
    }else{
      await this.loadList(this.$store.state.page_num)
    }
  },
}
</script>

<style scoped>
.application-view {
  display: grid;
  grid-template-rows: 8% 12% 11% 60% 9%;
  height: 100%;
  font-family: 'Roboto';
  font-weight: 400;
}
.itemOnHome_3 {
  height: 100%;
  display: grid;
  grid-template-columns:  2fr 1fr;
  margin-left: 30px;
  margin-right: 30px;
}
.itemOnHome_4 {
  margin-left: 30px;
  margin-right: 30px;
  /* height: 100%; */
  /* display: grid;
  grid-template-rows: 5% 95%; */
}
.item_2 {
  /* background-color: #e3e3e3; */
  /* height: 90%; */
  border-radius: 10px 0 0 0;
}
.application-title {
  display: grid;
  grid-template-columns:  0.3fr 1fr 1fr 1.5fr 1fr 1fr 1fr 1fr;
  /* margin-left: auto;
  margin-right: auto; */
  /* margin-top: 20px; */
  background-color: #f3f2f2; 
  border-radius: 7px; 
  /* height: 3%;  */
  /* width: 95%; */
  /* box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1); */
}
.application-title-item {
  padding-left: 20px;
  padding-right: 20px;
  display: flex; 
  align-items: center;
  /* justify-content: center; */
}
.application-title p {
  display: flex;
  font-size: 13px;
  font-weight: 400;
  height: 5px;
  /* justify-content: center; */
  align-items: center;
}
.filterButton{
  height:100%;
}
.filterBtn p {
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  padding-left: 7px;
  padding-right: 7px;
}
.filterBtn_item {
  background-color: #b7baf5;
  color: #434CE9;
  border-radius: 7px;
  padding-left: 7px;
  padding-right: 7px;
}
.filterBtn_item p {
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
}
.filterButtonItem {
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: center;
}
.filterButtonItem_2 {
  width: 100%;
}
.navbar-field {
    /* background-color: #e3e3e3;  */
    /* border-radius: 0px 0px 0px 10px; */
    height: 100%;
    /* padding-left:20px;
    padding-right: 20px; */
}
.CreateApplicationBtn {
    border: none; 
    outline: none; 
    margin-right: 30px; 
    background-color: #434CE9; 
    color: white;
    height: 75%; 
    /* width: 150px;  */
    border-radius: 10px;
    cursor: pointer;
}
.CreateApplicationBtn_2 {
    border: none; 
    outline: none; 
    margin-right: 30px; 
    background-color: #434CE9; 
    color: white;
    height: 30px; 
    width: 150px; 
    border-radius: 10px;
    cursor: pointer;
}
.emptyAppParent {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.emptyApp_2 {
  display: flex;
  justify-content: center;
}
.emptyApp_1 {
  display: flex;
  justify-content: center;
}
.navbar-field {
    display: grid;
    grid-template-columns: 1fr 1fr; 
    /* width: 100%; */
    /* height: 10%; */
    align-items: center;
}
.navbar-field-item-2 {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  height: 100%;
}
.search-form {
  margin-left: 30px;
  width: 100%;
  border: 2px solid #d1d1d1;
  border-radius: 10px;
}
.page_name {
  margin-left: 30px;
  font-weight: 700;
  font-size: 25px;
}
.search-form-item {
  width: auto;
  height: 35px;
  border-radius: 10px;
  background-color: white;
  display: grid;
  grid-template-columns: 85% 15%;
}
.search-input {
  border: none;
  outline: none;
  background-color: transparent;
  padding-left: 10px;
  height: 100%;

}
.search-button {
  height: 100%;
  background: none;
  outline: none;
  border: none;
}
.filterBtn {
  height: 40px;
  border-radius: 5px;
  border: none;
  /* box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1); */
  outline: none;
  background: none;
  border: 2px solid #d1d1d1;
  border-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.itemOnhome_2 {
  display: grid;
  padding-left: 30px;
  padding-right: 30px;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
}
.cardStat{
  border: 2px solid #d1d1d1;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.cardStatTitle {
  grid-column-start: 1;
  grid-column-end: 3;
  font-size: 14px;
  font-weight: 400;
}
.cardStatItem {
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 10px;
}
.cardStatPercent {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}
.cardStatCount {
  font-size: 32px;
  font-weight: 700;
}
.cardStatPercentBtn {
  outline: none;
  background-color: #ECFFE9;
  border: 2px solid #83C287;
  color: #83C287;
  border-radius: 15px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-weight: 600;
}
.itemOnHome_5 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.appCell {
  height: 91%;
  gap: 10px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}
.FilterPopup {
  position: absolute;
  left: 105%;
  top: 20%;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
}
.filterBtnPos {
  position: fixed;
}
</style>