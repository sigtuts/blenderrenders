<script>
  import {urlFor} from './sanityClient'
  import {createEventDispatcher} from 'svelte'

  let pass
  let img
  let dispatch = createEventDispatcher()
  export let image
  // export let maxWidth = 1200
  export let alt = undefined

  // Example image document ID: image-cc93b69600f5cd1abce97fd0d4aa71793dbbba76-1350x900-png
  // Structure: image-${storedImgId}-${dimensions}-${format}

  // If we split it by "-", the 3rd element are the dimensions (1350x900)
  $: dimensions = image?.asset?._ref?.split('-')[2]
  // If we split dimensions by "x", we get the width (1350) and height (900)
  $: [width, height] = dimensions.split('x').map(Number)

  $: aspectRatio = width / height

  // Once loaded, the image will transition to full opacity
  let loaded = false
  function open() {
    dispatch('clic', image)
  }
</script>

{#if image}
  <div>
    <!-- src={urlFor(image).width(maxWidth)} -->
    <img
      on:click={open}
      bind:this={img}
      on:keyup={() => {
        pass
      }}
      loading="lazy"
      src={urlFor(image)}
      alt={alt || image.alt || ''}
      style="aspect-ratio: {aspectRatio}; opacity: {loaded
        ? 1
        : 0}; transition: .2s opacity;width:100%; box-shadow:5px 5px 5px black, -5px -5px 5px black"
      on:load={() => (loaded = true)}
    />
  </div>
{/if}
