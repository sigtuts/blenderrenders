<script>
  import SanityImage from './SanityImage.svelte'

  export let post
</script>

<article>
  <h2>
    <a rel="prefetch" href="/blog/{post.slug.current}">{post.title}</a>
  </h2>
  {#if post.image}
    <a rel="prefetch" href="/blog/{post.slug.current}">
      <div class="image">
        <SanityImage image={post.image} maxWidth={300} />
      </div>
    </a>
  {/if}
</article>

<style>
  article {
    display: flex;
    /* Show images first */
    flex-direction: column-reverse;
  }

  h2 {
    margin: 1rem 0 0;
    color: #888;
  }

  h2 a {
    text-decoration: none;
    color: #888;
  }

  .image {
    padding-bottom: 62.5%;
    position: relative;
    overflow: hidden;
    box-shadow: 2px 2px 15px #111, -2px -2px 15px #111;
  }

  .image :global(img) {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: 0;
  }
</style>
