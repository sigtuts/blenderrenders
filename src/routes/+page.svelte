<script>
  export let data;
  import Header from "$lib/Header.svelte";
  import SanityImage from "$lib/SanityImage.svelte";
  import { onMount } from "svelte";
  let datas = data.client;
  //   let get = false;
  //   onMount(async () => {
  //     get = true;
  //   });
</script>

<Header {datas} />

<div>
  {#each data.post as post}
    <SanityImage image={post.image} data={data.client} />
  {/each}
</div>

<style>
  div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 3rem 2rem;
    margin-top: 3rem;
  }
</style>
