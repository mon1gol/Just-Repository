<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  import CurrencySelector from './lib/CurrencySelector.svelte';
</script>

<main>
  <div class="card">
    <CurrencySelector />
  </div>

  <p class="read-the-docs">
    <a href="https://www.exchangerate-api.com">Курсы по API обменного курса</a>
  </p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
