<template>
    <div id="MainLayout">
        <div class="itemApplicationPage item_1"><SidebarField/></div>
        <div class="itemApplicationPage item_2"><router-view></router-view></div>
    </div>
  </template>
  
  <script>
  import SidebarField from '@/components/SidebarField.vue'
  import { collapsed, toggleSidebar, sidebarWidth } from '@/components/StateSidebar.js'

  export default {
    components: {
        SidebarField
    },
    setup() {
        return{ collapsed, toggleSidebar, sidebarWidth }
    }
  }
  
  </script>
  
  <style scoped>
  #MainLayout {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: v-bind(sidebarWidth) auto;

    transition: 0.3s ease;
  }
  </style>