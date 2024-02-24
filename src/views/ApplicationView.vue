<template>
    <div id="applicationView">
        <div class="appViewItem appViewItem_1">
            <!-- <button @click="goBackToApplications()">Назад</button>
            <h1>application id {{ id }}</h1> -->
        </div>
        <div class="appViewItem appViewItem_2">
            <div class="appViewCard">
                <div class="appCardContent">
                    <div style="display: flex; flex-direction: row; align-items: center; margin-left: 20px;">
                        <p>Заявка №{{ id }}</p>
                        <button style="margin-left: 10px;" class="itemStatus">Завершено</button>
                    </div>
                    <div style="display: flex; flex-direction: row-reverse; width: 100%;">
                        <button @click="goBackToApplications()">Отказ</button>
                        <button @click="goBackToApplications()">Отмена</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="appViewItem appViewItem_3">
            <div>
                <h6>Обзор</h6>
                <div class="appViewCard">
                    
                </div>
            </div>
            <div>
                <h6>Детали</h6>
                <div class="appViewCard">
                    
                </div>
            </div>
        </div>
        <div class="appViewItem appViewItem_4">
            <h6>Финансовая информация</h6>
            <div class="appViewCard">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params['id'],
        }
    },
    methods: {
        goBackToApplications(){
            this.$router.push('/applications')
        }
    },
    watch: {
        $route (toR) {
            this.id = toR.params['id']
        }
    },
    computed: {
        applications() {
            return this.$store.state.applications
        }
    }
}
</script>

<style scoped>
#applicationView {
    height: 100%;
    display: grid;
    row-gap: 20px;
    grid-template-rows: 2% 8% 50% 30%;
}
.appViewItem {
    margin-left: 30px;
    margin-right: 30px;
}
.appViewItem h6 {
    margin: 0;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 700;
}
.appViewItem_3 {
    display: grid;
    column-gap: 20px;
    grid-template-columns: 1fr 1fr;
}
.appViewCard {
    border-radius: 15px;
    border: 2px solid #d1d1d1;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
    height: 85%;
    background-color: white;
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
.appCardContent {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
}
</style>