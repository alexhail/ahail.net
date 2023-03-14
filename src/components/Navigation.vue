
  <!-- <nav v-if="route == 'home'">
    <Button v-for="branch in routeTree" :to="branch[0]" router>{{ capitalize(branch[0]) }}</Button>
  </nav>
  <template v-else> -->









    <!-- <template v-for="branch in routeTree">
      <template v-if="Array.isArray(branch[1])">
        <template v-for="twig in branch[1]">
          <Button v-if="" :to="twig" router>{{ capitalize(twig) }}</Button>
        </template>
      </template>
      <template v-else>
        <nav v-if="route == branch">
          <Button :to="branch" router>{{ capitalize(branch) }}</Button>
        </nav>
      </template>
    </template> -->
  <!-- </template> -->


<template>
  <nav v-if="route == 'home'">
    <template v-for="branch in routeTree['home']">
      <template v-for="(veins, leaf) in branch">
        <Button :to="leaf" router>{{ capitalize(leaf) }}</Button>
      </template>
    </template>
  </nav>
  <nav v-if="route != 'home' && hasBranches(route)">
    <template v-for="branch in routeTree['home']">
      <template v-for="(veins, leaf) in branch">
        <template v-if="route == leaf">
          <Button v-for="route in veins" :to="route" router>{{ capitalize(route) }}</Button>
        </template>
      </template>
    </template>
  </nav>
  <p v-if="route != 'home'" class="router-back"><RouterLink :to="{ name: 'home' }">&larr; Back</RouterLink></p>
</template>

<script lang="ts">
import { capitalize } from '../helper'
import { useRouter } from 'vue-router'
import { computed, ref, watch } from 'vue'
import { isArray } from '@vue/shared'

export default {
  setup() {
    const router = useRouter()
    const routeTree= {
      home: [
        {
          code: ['resume', 'portfolio'],
        },
        {
          music: []
        }
      ]
    }

    interface Grove {
      code?: Array<any>;
      music?: Array<any>;
    }

    function hasBranches(tree: string) {
      if(tree == 'home') return true

      for(const grove of routeTree.home) {
        for(const trunk in grove) {
          const routes = (<Grove> grove)[trunk as keyof Grove]
          
          if(typeof routes !== "undefined") {
            for(const route of routes){
              if(tree == route) {
                if(typeof route === 'string' || route instanceof String)
                  return false
                
                return true
              }
            }
          }
        }
      }
         
      return true
    }
  
    return {
      route: <any> computed(() => router.currentRoute.value.name),
      routeTree,
      capitalize,
      hasBranches
    }
  }
}
</script>