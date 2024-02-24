<template>
    <form class="cardDesigner" novalidate>
        <div style="display: flex; flex-direction: column; width: 100%;">
            <button v-if="adress.length > 1" class="deleteBtn" @click="deleteAdress(id)">X</button>
            <label>Адрес погрузки</label>
            <input class="designerInput" required minlength="4" maxlength="8" size="10" />
        </div>
        <div style="display: flex; flex-direction: row; align-items: center; justify-content: center; height: 100%; width: 100%; gap: 4%; margin-top: 10px">
            <div style="display: flex; flex-direction: column; width: 100%;">
                <label>Подъезд</label>
                <input class="designerInput" required minlength="4" maxlength="8" size="10" />
            </div>
            <div style="display: flex; flex-direction: column; width: 100%;">
                <label>Этаж</label>
                <input class="designerInput" required minlength="4" maxlength="8" size="10" />
            </div>
            <div style="display: flex; flex-direction: row; width: 100%; height: 100%; align-items: flex-end; justify-content: center">
                <div style="margin-top: 20px; display: flex; align-items: center; gap: 10px;">
                    <input class="checkHome" type="checkbox"/>
                    <label>Частный дом</label>
                </div>
            </div>
        </div>
        <div style="display: flex; flex-direction: column; width: 100%; margin-top: 10px;">
            <label>Адрес отгрузки</label>
            <input class="designerInput" type="text" required minlength="4" maxlength="8" size="10" />
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
    </form>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
        }
    },
    computed: {
        adress() {
            return this.$store.state.adress
        },
    },
    methods: {
        deleteAdress: function(id) {
                this.adress.splice(id, 1);
        },
	}
}
</script>

<style scoped>
.cardDesigner {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    position: relative;
}
.deleteBtn {
    position: absolute;
    right: 5px;
    top: 5px;
    border-radius: 100%;
    border: none;
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
.cardDesigner label {
    font-size: 15px;
    font-weight: 400;
}
.designerInput:hover {
    box-shadow: 0 0 0 1px rgba(0, 25, 136, 0.393);
    border: none;
    outline: none;
}
.designerInput:focus-visible {
    box-shadow: 0 0 0 1px rgba(0, 25, 136, 0.393);
    border: none;
    outline: none;
}
.cardDesigner textarea:focus-visible {
    box-shadow: 0 0 0 1px rgba(0, 25, 136, 0.393);
    border: none;
    outline: none;
}
.checkHome {
    height: 20px;
    width: 20px;
}
</style>