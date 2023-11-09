<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let option: string;

	let checked = false;

	const dispatch = createEventDispatcher();

	const handleClick = () => {
		checked = true;
		const event = new CustomEvent('answer-clicked', {
			detail: { answerId: option }
		});
		dispatch('answer-clicked', event);
		checked = false;
	};
</script>

<label class="btn variant-filled flex items-center space-x-2">
	<button on:click={handleClick}>
		<!--<Icon icon="material-symbols:select" />-->
	</button>
	<p class="hover:cursor-pointer">{option}</p>
</label>
