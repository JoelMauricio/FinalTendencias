<template>
  <Nav />
  <Chat />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import Nav from '@/components/Nav.vue';
import Chat from '@/components/Chat.vue';

export default {
  name: 'App',
  components: { Nav, Chat }
}
</script>