<template>
    <div id="designerView">
        <form @submit.prevent="createAppHandler()" novalidate>
        <div class="gridOnDesignerPage">
            <div>
                <div>
                    Создание заявки
                </div>
                <div class="cardDesigner">
                    <div style="display: flex; flex-direction: column">
                        <label>Компания</label>
                        <select class="designerSelect" v-model="company">
                            <option v-for="company in companies" :key="company.id">{{ company.name }}</option>
                        </select>
                    </div>
                    <div style="display: flex; flex-direction: row; width: 100%; gap: 10%; margin-top: 10px;">
                        <div style="display: flex; flex-direction: column; width: 100%;">
                            <label>Направление заявки</label>
                            <select class="designerSelect" v-model="direction">
                                <option v-for="direction in this.allDirections" :key="direction.id">{{ direction.name }}</option>
                            </select>
                        </div>
                        <div style="display: flex; flex-direction: column; width: 100%;">
                            <label>Специализация</label>
                            <select v-if="direction === ''" disabled="disabled" class="designerSelect">
                                <option>Выберите направление заявки</option>
                            </select>
                            <select v-if="direction == this.allDirections[0]?.name" class="designerSelect">
                                <option v-for="item in this.allDirections[0]?.subdirections" :key="item.id">{{ item.name }}</option>
                            </select>
                            <select v-if="direction == this.allDirections[1]?.name" class="designerSelect">
                                <option v-for="item in this.allDirections[1]?.subdirections" :key="item.id">{{ item.name }}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div v-if="direction == this.allDirections[1]?.name">
                    <div class="scroll">
                        <AdressComponent v-for="(item, index) in adress" :key="index" :id="index"></AdressComponent>
                    </div>
                    <button class="createAdress" @click="addNewAdress()">Добавить адрес</button>
                </div>
                <div v-if="direction == this.allDirections[0]?.name">
                    <div>
                        Данные клиента
                        <form class="cardDesigner" novalidate>
                            <div style="display: flex; flex-direction: column; width: 100%;">
                                <label>Имя</label>
                                <input class="designerInput" type="text" required minlength="4" maxlength="8" size="10" />
                                <label style="margin-top: 10px;">Телефон</label>
                                <input class="designerInput" type="text" required minlength="4" maxlength="8" size="10" />
                                <label style="margin-top: 10px;">Адрес</label>
                                <input class="designerInput" type="text" v-model="user_adress" />
                                {{ this.user_adress }}
                            </div>
                            <div style="display: flex; flex-direction: row; align-items: center; justify-content: center; height: 100%; width: 100%; gap: 4%; margin-top: 10px">
                                <div style="display: flex; flex-direction: column; width: 100%;">
                                    <label>Подъезд</label>
                                    <input class="designerInput" type="text" required minlength="4" maxlength="8" size="10" />
                                </div>
                                <div style="display: flex; flex-direction: column; width: 100%;">
                                    <label>Этаж</label>
                                    <input class="designerInput" type="text" required minlength="4" maxlength="8" size="10" />
                                </div>
                                <div style="display: flex; flex-direction: row; width: 100%; height: 100%; align-items: flex-end; justify-content: center">
                                    <div style="margin-top: 20px; display: flex; align-items: center; gap: 10px;">
                                        <input class="checkHome" type="checkbox"/>
                                        <label>Частный дом</label>
                                    </div>
                                </div>
                            </div>
                            <div style="display: flex; flex-direction: row; width: 100%; gap: 10%; margin-top: 10px;">
                                <div style="display: flex; flex-direction: column; width: 100%;">
                                    <label>Дата</label>
                                    <VueDatePicker class="db_designerInput" v-model="date" locale="ru" :enable-time-picker="false" :format="format">
                                        <template #input-icon>
                                            <div class="input-icon">
                                                <svg style="padding: 10px;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                            </div>
                                        </template>
                                    </VueDatePicker>
                                </div>
                                <div style="display: flex; flex-direction: column; width: 100%;">
                                    <label>Время</label>
                                    <VueDatePicker class="db_designerInput" v-model="time" time-picker>
                                        <template #input-icon>
                                            <div class="input-icon">
                                                <svg style="padding: 10px;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                            </div>
                                        </template>
                                    </VueDatePicker>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    Информация о заказе
                </div>
                <div class="cardDesigner">
                    <div v-if="direction == this.allDirections[1]?.name" style="display: flex; flex-direction: row; width: 100%; gap: 10%">
                        <div style="display: flex; flex-direction: column; width: 100%;">
                            <label>{{ this.allDirections[1]?.fields.weight.tittle }}</label>
                            <input class="designerInput" type="text" required minlength="4" maxlength="8" size="10" />
                        </div>
                        <div style="display: flex; flex-direction: column; width: 100%;">
                            <label>{{ this.allDirections[1]?.fields.dimensions.tittle }}</label>
                            <input class="designerInput" type="text" required minlength="4" maxlength="8" size="10" />
                        </div>
                    </div>
                    <div v-if="direction == this.allDirections[0]?.name" style="display: flex; flex-direction: row; width: 100%; gap: 10%">
                        <div style="display: flex; flex-direction: column; width: 100%;">
                            <label>{{ this.allDirections[0]?.fields.brand.tittle }}</label>
                            <input class="designerInput" type="text" required minlength="4" maxlength="8" size="10" />
                        </div>
                        <div style="display: flex; flex-direction: column; width: 100%;">
                            <label>{{ this.allDirections[0]?.fields.problem.tittle }}</label>
                            <input class="designerInput" type="text" required minlength="4" maxlength="8" size="10" />
                        </div>
                    </div>
                    <div v-if="direction == ''" style="display: flex; flex-direction: row; width: 100%; gap: 10%">
                        <div style="display: flex; flex-direction: column; width: 100%;">
                            <label>??</label>
                            <input class="designerInput" disabled="disabled" type="text" required minlength="4" maxlength="8" size="10" />
                        </div>
                        <div style="display: flex; flex-direction: column; width: 100%;">
                            <label>??</label>
                            <input class="designerInput" disabled="disabled" type="text" required minlength="4" maxlength="8" size="10" />
                        </div>
                    </div>
                    <div style="display: flex; flex-direction: column; margin-top: 10px;">
                        <label>Комментарий к заказу</label>
                        <textarea rows="5" cols="33"></textarea>
                    </div>
                </div>
                <div v-if="direction == this.allDirections[1]?.name">
                    <div>
                        Данные клиента
                    </div>
                    <div class="cardDesigner">
                        <div style="display: flex; flex-direction: column; width: 100%;">
                                <label>Имя</label>
                                <input class="designerInput" type="text" required minlength="4" maxlength="8" size="10" />
                        </div>
                        <div style="display: flex; flex-direction: column; width: 100%; margin-top: 10px;">
                                <label>Телефон</label>
                                <input class="designerInput" type="text" required minlength="4" maxlength="8" size="10" />
                        </div>
                        <div style="display: flex; flex-direction: row; width: 100%; gap: 10%; margin-top: 10px;">
                            <div style="display: flex; flex-direction: column; width: 100%;">
                                <label>Дата</label>
                                <VueDatePicker class="db_designerInput" v-model="date" locale="ru" :enable-time-picker="false" :format="format">
                                    <template #input-icon>
                                        <div class="input-icon">
                                            <svg style="padding: 10px;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                        </div>
                                    </template>
                                </VueDatePicker>
                            </div>
                            <div style="display: flex; flex-direction: column; width: 100%;">
                                <label>Время</label>
                                <VueDatePicker class="db_designerInput" v-model="time" time-picker>
                                    <template #input-icon>
                                        <div class="input-icon">
                                            <svg style="padding: 10px;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                        </div>
                                    </template>
                                </VueDatePicker>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cardDesigner">
                    <div style="display: flex; flex-direction: column">
                        <label>Источник</label>
                        <select class="designerSelect">
                            <option v-for="item in applications" :key="item.applicationId">{{ item.applicationTitle }}</option>
                        </select>
                    </div>
                </div>
                <div style="display: flex; flex-direction: row-reverse; width: 100%">
                    <!-- <button class="createAppBtn" type="submit" :disabled="direction === ''">Создать заявку</button> -->
                    <button class="createAppBtn" type="submit">Создать заявку</button>

                </div>
            </div>
        </div>
        </form>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

        const date = ref(new Date());

        const format = (date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    }
</script>

<script>
import AdressComponent from '@/components/AdressComponent.vue'
import axios from 'axios';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
    data: () => ({
        newItem: {adressId: '', adressTitle: '',},
        companies: [],
        direction: '',
        company: '',
        date: null,
        time: null,
        user_adress: '',
    }),
    components: {
        AdressComponent,
        VueDatePicker
    },
    computed: {
        applications() {
            return this.$store.state.applications
        },
        adress() {
            return this.$store.state.adress
        },
        allDirections() {
            return this.$store.getters.allDirections
        },
    },
    methods: {
        addNewAdress() {
            this.adress.push(this.newItem);
        },
        async createAppHandler() {
                await axios.post('api/orders/create/', { 
                phone: 'dsadas',
                company_id: '2'
                // password: this.password,
            },{
                headers: {
                    'Authorization':'Token ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                }
            }).then(
                response => {
                    console.log(response)
                    // localStorage.setItem('token' , response.data.token)
                    // this.$router.push('/applications')
                }
            ).catch(
                error => {
                    console.log(error.response)
                }
            )
        }, 
    },
    async beforeCreate() {
            await axios.get('/api/orders/create/get-companies/', {
            headers: {
                'Authorization':'Token ' + localStorage.getItem('token'),
                'Content-Type': 'application/json',
            }
            }).then(
            response => {
                        console.log(response)
                        console.log('Token ' + localStorage.getItem('token'))
                        this.companies = response.data
                    }
            ).catch(
                    error => {
                        console.log(error)
                    }
                )

               await axios.get('/api/orders/create/get-directions-data/', {
            headers: {
                'Authorization':'Token ' + localStorage.getItem('token'),
                'Content-Type': 'application/json',
            }
            }).then(
            response => {
                        console.log(response)
                        this.$store.state.directions = response.data
                    }
            ).catch(
                    error => {
                        console.log(error)
                    }
                )
        }
}
</script>

<style scoped>
#designerView {
    height: 100%;
    padding-top: 2%;
    padding-left: 4%;
    padding-right: 4%;
    background-color: white;
}
.gridOnDesignerPage {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2%;
}
.cardDesigner {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
}
.cardDesigner label {
    font-size: 15px;
    font-weight: 400;
}
.cardDesigner textarea {
    resize: none;
    border-radius: 15px;
    padding: 10px;
    border: none;
    background-color: #A9A9A91A;
    color: #585858;
    transition: 0.15s linear;
}
.scroll {
    margin: 4px, 4px;
    padding: 4px;
    min-height: auto;
    max-height: 24rem;
    overflow-x: hidden;
    overflow-y: auto;
    /* text-align: justify; */
}
.scroll::-webkit-scrollbar {
  width: 8px;               /* ширина scrollbar */
}
.scroll::-webkit-scrollbar-track {
  background: none;        /* цвет дорожки */
}
.scroll::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.288);    /* цвет плашки */
  border-radius: 10px;       /* закругления плашки */
}
.createAdress {
    width: 100%;
    height: 40px;
    margin-top: 20px;
    background-color: #434CE9;
    color: white;
    outline: none;
    border: none;
    border-radius: 10px;
}
.designerInput {
    height: 30px;
    border-radius: 15px;
    padding-left: 10px;
    padding-right: 10px;
    border: none;
    background-color: #A9A9A91A;
    color: #585858;
    transition: 0.15s linear;
}
.db_designerInput{
    --dp-background-color: #A9A9A91A;
    --dp-border-color: #A9A9A91A;
    --dp-border-radius: 15px;
    --dp-button-height:: 300px;
}
.input-icon {
    display: flex;
    align-items: center;
}
.checkHome {
    height: 20px;
    width: 20px;
}
.designerSelect {
    height: 30px;
    border-radius: 15px;
    padding-left: 10px;
    padding-right: 10px;
    border: none;
    background-color: #A9A9A91A;
    color: #585858;
    font-size: 14px;
    font-weight: 500;

    appearance: none;
    -webkit-appearance: none; /* Safari и Chrome */
    -moz-appearance: none; /* Mozilla */
    -ms-appearance: none; /* IE */
    transition: 0.15s linear;

    background-image: url("data:image/svg+xml,<svg width='25' height='25' viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg'><circle cx='17' cy='17' r='17' fill='white'/><line x1='11.3536' y1='16.6464' x2='17.3535' y2='22.6464' stroke='black'/><line x1='16.5612' y1='22.6464' x2='22.5611' y2='16.6465' stroke='black'/></svg>");
    background-repeat: no-repeat;
    background-position: calc(100% - 4px) center;
}
.designerSelect:focus-visible {
    box-shadow: 0 0 0 1px rgba(0, 25, 136, 0.393);
    border: none;
    outline: none;
}
.designerSelect:hover {
    box-shadow: 0 0 0 1px rgba(0, 25, 136, 0.393);
    border: none;
    outline: none;
}
.designerInput:focus-visible {
    box-shadow: 0 0 0 1px rgba(0, 25, 136, 0.393);
    border: none;
    outline: none;
}
.designerInput:hover {
    box-shadow: 0 0 0 1px rgba(0, 25, 136, 0.393);
    border: none;
    outline: none;
}
.cardDesigner textarea:focus-visible {
    box-shadow: 0 0 0 1px rgba(0, 25, 136, 0.393);
    border: none;
    outline: none;
}
.cardDesigner textarea:hover {
    box-shadow: 0 0 0 1px rgba(0, 25, 136, 0.393);
    border: none;
    outline: none;
}
.createAppBtn {
    height: 40px;
    width: 120px;
    color: white;
    background-color: #434CE9;
    outline: none;
    border: none;
    border-radius: 10px;
}
</style>