<script context="module">
  import { page } from "$app/stores";
</script>

<script>
  export let blogTitle = "Renderz";
  let path;
  $: ({ path } = $page);
</script>

<header>
  <h2>{blogTitle}</h2>
  <nav>
    <ul>
      <li><a data-selected={path === "/"} href="/">home</a></li>
    </ul>
  </nav>
</header>

<style>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a[data-selected="true"] {
    font-weight: 600;
    color: #555;
  }
  a {
    text-decoration: none;
    display: block;
    color: #5555;
  }
  a:hover {
    color: #5559;
  }
  nav {
    grid-column: 3;
    text-align: center;
  }

  header {
    display: grid;
    justify-content: space-between;
    align-content: center;
    color: #888;
    gap: 4px;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100vw;
    background-color: #202a30;
    height: 5rem;
  }
  h2 {
    grid-column: 2;
    text-align: center;
    text-shadow: #fc0 1px 0 10px;
  }
  @media screen and (min-width: 400px) {
    header {
      flex-direction: row-reverse;
      align-items: center;
    }
  }
</style>
