<script>
  export let data;
  import imageUrlBuilder from "@sanity/image-url";
  import Header from "$lib/Header.svelte";

  const builder = imageUrlBuilder(data.client);
  const urlFor = (source) => {
    return builder.image(source);
  };

  //   console.log(data.post[5].image);
</script>

<Header />

{#each data.post as post}
  <img src={urlFor(post.image)} alt="" srcset="" style="max-width: 40vw;" />
{/each}
