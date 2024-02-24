<template>
    <div class="FilterPopup">
        <div class="FilterPopupInside">
            <button class="closePopupBtn" @click="closePopup()">X</button>
            popup
            {{ this.popupVisible }}
        </div>
    </div>
</template>

<script>

export default {
    data: () => ({
    }),
    props: ['popupVisible'],
    methods: {
        closePopup() {
            this.$emit('popup-changed')
        }
    }
}

</script>

<style scoped>
.FilterPopup {
    position: fixed;
    background-color: white;
    border: 1px solid #A9A9A91A;
    height: 350px;
    width: 250px;
    border-radius: 15px;
}
.closePopupBtn {
    position: absolute;
    right: 5px;
    top: 5px;
    border-radius: 100%;
    border: none;
}
.FilterPopupInside {
    padding: 15px;
    padding-top: 30px;
}
</style>