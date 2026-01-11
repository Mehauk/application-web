import { example_repository } from '../../data/repos/example_repository.svelte';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  return {
    models: await example_repository.getExamples()
  }
};
