<template>
    <div id="registrationPage">
        <div class="itemRegisstrationPage item_1">
            <div class="sideWithReg">
                <router-view></router-view>
            </div>
        </div>
        <div class="itemRegisstrationPage item_2" style="border-radius: 40px 0px 0px 40px;">
            <div class="sideWithImg">
                <div>
                    <h2 style="color: white; font-weight: 600; font-size: 40px;">Создай свой аккаунт!</h2>
                    <h5 style="color: white; font-weight: 400; font-size: 17px; letter-spacing: 2.5px">Один клик, чтобы полностью<br/>перейти на цифровой формат</h5>
                </div>  
            </div>
        </div>
    </div>
</template>

<script>

export default {
    components: {
    }
}

</script>

<style scoped>
#registrationPage {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.sideWithImg {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    opacity: 0;
    animation: ani 1.5s forwards;
}
.item_2 {
    background-image: url('@/assets/BACKGROUND1.png');
    background-repeat: no-repeat;
    background-size: cover;
}
.item_1 { 
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    animation: ani 1.5s forwards;
}
@keyframes ani {
  0% {opacity: 0;}
  100% {opacity: 1;}
}
@media screen and (max-width: 1200px) {
    .item_2 {
        display: none;
    }
    #registrationPage {
        height: 100%;
        width: 100%;
        grid-template-columns: 1fr;
    }
}
</style>