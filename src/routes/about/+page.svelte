<script>
  export let data;
  console.log(data);
</script>

<p>Hello</p>
<ul>
  {#each data.title as data}
    <li>{data.title}</li>
  {/each}
</ul>

<a href="/">home</a>
