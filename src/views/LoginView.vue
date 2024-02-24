<template>
    <div id="loginPage">
        <div class="itemLoginPage item_1" style="border-radius: 40px 0px 0px 40px;">
            <div class="sideWithImg">
                <div>
                    <h2 style="color: white; font-weight: 600; font-size: 40px;">Добро пожаловать!</h2>
                    <h5 style="color: white; font-weight: 400; font-size: 17px; letter-spacing: 2.5px">Один клик, чтобы полностью<br/>перейти на цифровой формат</h5>
                </div>  
            </div>
        </div>
        <div class="itemLoginPage item_2"><div class="sideWithLogin"><LoginComponent/></div></div>
    </div>
</template>

<script>
import LoginComponent from '@/components/LoginComponent.vue'

export default {
    components: {
        LoginComponent
    }
}


</script>

<style scoped>
#loginPage {
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
    transform: scaleX(-1);
    opacity: 0;
    animation: ani 1.5s forwards;
}
.item_1 {
    background-image: url('@/assets/BACKGROUND1.png');
    background-repeat: no-repeat;
    background-size: cover;
    transform: scaleX(-1);
}
.item_2 { 
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
    .item_1 {
        display: none;
    }
    #loginPage {
        height: 100%;
        width: 100%;
        grid-template-columns: 1fr;
    }
}
</style>