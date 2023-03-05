<template>
  <div class="title-container">
    <div class="title">
      ahail
      <div class="title-backdrop blue">ahail</div>
      <div class="title-backdrop red">ahail</div>
      <div class="title-backdrop green">ahail</div>
    </div>
    <div class="subtitle">
      <ul>
        <li class="electronic-music-artist">Electronic Music Artist</li>
        <li class="programmer">Software Engineer</li>
        <li class="audio-engineer">Producer & Audio Engineer</li>
        <li class="web-developer">Web Developer</li>
        <li class="aviation-enthusiast">Aviation Enthusiast</li>
        <li class="mountain-lover">Mountain Lover</li>
        <li class="sky-advocate">Sky Advocate</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import { dom } from '../helper'

  function rotateSubtitleElements() {
    // Every 4s, shuffle the subtitle li elements
    setInterval(function(){
      let first = dom(".subtitle ul li:nth-child(1)")
      
      if(first == null)
        return

      if(first.parentNode !== null)
        first.parentNode.appendChild(first)
    }, 4000)
  }

  onMounted(() => rotateSubtitleElements())
</script>