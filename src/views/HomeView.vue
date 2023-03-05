<template>
  <div v-if="false" id="view" view="home">
    <div class="home-title-container">
      <div class="home-title">
        ahail
        <div class="home-title-backdrop blue">ahail</div>
        <div class="home-title-backdrop red">ahail</div>
        <div class="home-title-backdrop green">ahail</div>
      </div>
      <div class="home-subtitle">
        <ul>
          <li class="programmer">Programmer</li>
          <li class="audio-engineer">Audio Engineer</li>
          <li class="musician">Musician</li>
        </ul>
      </div>
    </div>
    <Navigation />
  </div>
</template>

<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import { onMounted } from 'vue';

  function openMenuForItem(item: Element){
    // If menu item is already open, close it
    if(item.classList.contains("selected")){
      closeMenuForItem(item);
      return;
    }

    let homeMenu = document.querySelector(".home-menu-items");
    let homeMenuContent = document.querySelector(".home-menu-content");
    let homeMenuContentItem = document.querySelector(".home-menu-item-content[option='"+item.getAttribute("option")+"']");

    // Close all menu items before selecting new one
    let homeMenuItemsClose = document.querySelectorAll(".home-menu-item-content-close");

    for(let menuItemClose of homeMenuItemsClose)
      closeMenuForItem(menuItemClose);

    item.classList.add("selected");

    if(homeMenuContent && homeMenuContentItem){
      homeMenuContent.classList.add("open");
      homeMenuContentItem.classList.add("open");
    }
  }

  function closeMenuForItem(item: Element): void {
    let homeMenuItem = document.querySelector(".home-menu-item[option='"+item.getAttribute("option")+"']");
    let homeMenuContent = document.querySelector(".home-menu-content");
    let homeMenuContentItem = document.querySelector(".home-menu-item-content[option='"+item.getAttribute("option")+"']");

    if(homeMenuItem)
      homeMenuItem.classList.remove("selected");
    
    if(homeMenuContent)
      homeMenuContent.classList.remove("open");

    if(homeMenuContentItem)
      homeMenuContentItem.classList.remove("open");
  }

  onMounted(() => {
    // Apply opening and closing functionality to home menu
    let homeMenuItems = document.querySelectorAll(".home-menu-item");
    let homeMenuItemsClose = document.querySelectorAll(".home-menu-item-content-close");

    for(let menuItem of homeMenuItems)
      menuItem.addEventListener("click", (e) => openMenuForItem(menuItem));

    for(let menuItemClose of homeMenuItemsClose)
      menuItemClose.addEventListener("click", (e) => closeMenuForItem(menuItemClose));

    // // Every 4s, shuffle the subtitle li elements
    // setInterval(function(){
    //   let subtitleOptionFirstListElement = document.querySelectorAll(".home-subtitle ul li")[0];

    //   if(subtitleOptionFirstListElement.parentNode !== null)
    //     subtitleOptionFirstListElement.parentNode.appendChild(subtitleOptionFirstListElement);
    // }, 4000);
  })
</script>
