<template>
  <div class="applicationCellPage">
      <router-link class="cardAppCell" :to="'/application/' + applicationData.id" style="text-decoration: none; cursor: pointer; color: black">
      <div class="ApplicationCell" style="background-color: white; border-radius: 5px;">
          <div class="applicationCellItem"><h6>{{ applicationData.id }}</h6></div>
          <div class="applicationCellItem"><h6>fghjkl</h6></div>
          <div class="applicationCellItem"><h6><button class="itemStatus">Завершено</button></h6></div>
          <div class="applicationCellItem"><h6>{{ applicationData.direction }}</h6></div>
          <div class="applicationCellItem"><h6>root</h6></div>
          <div class="applicationCellItem"><h6>Cell.Time</h6></div>
          <div class="applicationCellItem"><h6>{{ applicationData.master }}</h6></div>
          <div class="applicationCellItem"><h6>{{ applicationData.address }}</h6></div>
      </div>
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ApplicationCell',
    props: {
        applicationData: {
            type: Object,
            default() {
                return
            }
        },
    },
  }
  </script>
  
  <style scoped>
.ApplicationCell {
    display: grid;
    grid-template-columns:  0.3fr 1fr 1fr 1.5fr 1fr 1fr 1fr 1fr;
    border: 2px solid #d1d1d1;
    /* margin-left: auto;
    margin-right: auto; */
    /* margin-top: 10px; */
    font-family: 'Roboto';
    height: 100%;
    transition: 0.15s linear;
    animation: ani 0.5s forwards;
  }
.ApplicationCell h6 {
  font-size: 12px;
  font-weight: 500;
  font-family: 'Roboto';
  margin: 0;
}
.applicationCellItem {
  display: flex;
  align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    /* justify-content: center; */
    height: 100%;
}
.itemStatus {
    border: 2px solid #83C287;
    color: #83C287;
    background-color: #ECFFE9;
    outline: none;
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 13px;
    font-weight: 600;
    height: 28px;
}
a:hover {
  .ApplicationCell{
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
  }
}
@keyframes ani {
  0% {opacity: 0;}
  100% {opacity: 1;}
}
  </style>