<script lang="ts">
	import { example_repository } from '../../data/repos/example_repository.svelte';
	import type { PageProps } from './$types';
	
  let { data }: PageProps = $props();

  function add_model() {
    example_repository.postExample({name: "new"})
  }

  
</script>

<h1>Examples</h1>
{#each data.models as model}
  <div>{model.name}</div>
{/each}  

<button onclick={add_model}>ADDMORE</button>

