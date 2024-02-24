<template>
    <div class="sidebar-field" :style="{ width: sidebarWidth }">
        <div class="item itemOnSidebar_1">
            <div class="user-name">
                <div style="border-radius: 100%; background-color: aqua; height: 50px; width: 50px; display: flex; justify-content: center; align-items: center;">hh</div>
                <h1 v-if="!collapsed">user.name</h1>
            </div>
        </div>
        <div class="item itemOnSidebar_2">
            <div :class="{ menuItems : !collapsed, menuItemsColl : collapsed }">
                <router-link to="/applications" style="text-decoration: none;">
                    <button :class="{ menuBtn : !collapsed, menuBtnColl : collapsed }" style="display: flex; flex-direction: row; justify-content: flex-start; align-items: center; gap: 5px">
                        <svg style="padding: 15px;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-square"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
                        <a v-if="!collapsed">Заявки</a>
                    </button>
                </router-link>
                <router-link to="/company" style="text-decoration: none;">
                    <button :class="{ menuBtn : !collapsed, menuBtnColl : collapsed }" style="display: flex; flex-direction: row; justify-content: flex-start; align-items: center; gap: 5px">
                        <svg style="padding: 15px;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-briefcase"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                        <a v-if="!collapsed">Компании</a>
                    </button>
                </router-link>
                <router-link to="/chats" style="text-decoration: none;">
                    <button :class="{ menuBtn : !collapsed, menuBtnColl : collapsed }" style="display: flex; flex-direction: row; justify-content: flex-start; align-items: center; gap: 5px">
                        <svg style="padding: 15px;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                        <a v-if="!collapsed">Чаты</a>
                    </button>
                </router-link>
            </div>
        </div>
        <div class="item itemOnSidebar_3">
            <div :class="{ menuItems_2 : !collapsed, menuItems_2Coll : collapsed }">
                <router-link to="/applications" style="text-decoration: none;">
                    <button :class="{ menuBtn_2 : !collapsed, menuBtn_2Coll : collapsed }" style="display: flex; flex-direction: row; justify-content: flex-start; align-items: center; gap: 5px">
                        <svg style="padding: 15px;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                        <a v-if="!collapsed">Уведомления</a>
                    </button>
                </router-link>
                <router-link to="/company" style="text-decoration: none;">
                    <button :class="{ menuBtn_2 : !collapsed, menuBtn_2Coll : collapsed }" style="display: flex; flex-direction: row; justify-content: flex-start; align-items: center; gap: 5px">
                        <svg style="padding: 15px;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-tool"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                        <a v-if="!collapsed">Поддержка</a>
                    </button>
                </router-link>
                <router-link to="/chats" style="text-decoration: none;">
                    <button :class="{ menuBtn_2 : !collapsed, menuBtn_2Coll : collapsed }" style="display: flex; flex-direction: row; justify-content: flex-start; align-items: center; gap: 5px">
                        <svg style="padding: 15px;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sliders"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
                        <a v-if="!collapsed">Настройки</a>
                    </button>
                </router-link>
            </div>
        </div>
        <div class="item itemOnSidebar_4">
            <div style="display: flex; justify-content: center; height: 100%;">
                <router-link to='/login' style="text-decoration: none">
                    <button :class="{ menuBtn_2 : !collapsed, menuBtn_2Coll : collapsed }" style="display: flex; flex-direction: row; justify-content: flex-start; align-items: center; gap: 5px">
                        <svg style="padding: 15px;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                        <a v-if="!collapsed">Выйти</a>
                    </button>
                </router-link>
            </div>
        </div>
        <div>
            <span class="collapse-icon" :class="{ 'rotate-180' : collapsed }" @click="toggleSidebar"><svg style="padding: 15px; color: #1C24A2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevrons-left"><polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline></svg></span>
        </div>
    </div>
</template>

<script>
import { collapsed, toggleSidebar, sidebarWidth } from './StateSidebar.js'

export default {
    setup() {
        return{ collapsed, toggleSidebar, sidebarWidth }
    }
}

</script>

<style scoped>
.sidebar-field {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #f3f2f2;
    position: relative;
    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    bottom: 0;
    left:0;
    /* padding:0.5em; */

    transition: 0.3s ease;
}
.collapse-icon {
    position: absolute;
    bottom: 50%;
    left: 70%;
    padding: 0.75em;
    opacity: 0;

    transition: 0.2s linear;
}
.rotate-180 {
    transform: rotate(180deg);
    transition: 0.2s linear;
    left: -8%;
    opacity: 0;
}
.user-name {
    display: flex; 
    justify-content: center;
    align-items: center; 
    height: 100%;
    background-color: #fff;
}
.user-name h1 {
    font-size: 15px;
    margin-left: 15px;
}
.itemOnSidebar_1 {
height: 10%;
}
.itemOnSidebar_2 {
height: 55%;
}
.itemOnSidebar_3 {
height: 25%;
}
.itemOnSidebar_4 {
height: 10%;
}
.router-link-exact-active {
    color: white;
}
.router-link-exact-active button {
    background-color: #EDF3FF;
    color: #1C24A2;
    font-weight: 600;
}
.menuBtn {
    border: none;
    outline: none;
    background-color: transparent;
    width: 200px;
    height: 40px;
    margin-top: 20px;
    border-radius: 5px;
    font-size: 16px;
    align-items: flex-start;
}
.menuBtnColl {
    border: none;
    outline: none;
    background-color: transparent;
    /* width: 200px; */
    height: 40px;
    border-radius: 10px 0px 0px 10px;
    font-size: 20px;
    margin-top: 20px;
    align-items: flex-start;
}
.menuBtn_2 {
    border: none;
    outline: none;
    background-color: transparent;
    width: 200px;
    height: 40px;
    margin-top: 10px;
    border-radius: 5px;
    font-size: 16px;
    align-items: flex-start;
}
.menuBtn_2Coll {
    border: none;
    outline: none;
    background-color: transparent;
    /* width: 200px; */
    height: 40px;
    border-radius: 10px 0px 0px 10px;
    font-size: 20px;
    margin-top: 10px;
    align-items: flex-start;
}
.menuItems {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    height: 100%;
    width: 100%;
    align-items: center;
    /* gap: 10px; */
}
.menuItemsColl {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    height: 100%;
    width: 100%;
    align-items: flex-end;
    /* gap: 20px; */
}
.menuItems_2 {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    height: 100%;
    width: 100%;
    align-items: center;
    /* gap: 10px; */
}
.menuItems_2Coll {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    height: 100%;
    width: 100%;
    align-items: flex-end;
    /* gap: 20px; */
}
.menu-items > * {
    margin-top: 40px;
}
.navSidebarBtn {
    /* width: 200px; */
    height: 50px;
    /* color: white; */
    outline: none;
    border: none;
    border-radius: 10px 0px 0px 10px;
    margin-bottom: 20px;
    background-color: #360ac55b;
}
.sidebar-field:hover {
    .collapse-icon{
        opacity: 1;
    }
}
</style>