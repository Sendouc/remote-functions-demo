<script>
	import { getSummaries } from '../data.remote.js';

	let { children } = $props();
</script>

<div class="layout">
	<main>
		{@render children()}
	</main>

	<aside>
		<h2>More posts</h2>
		<ul>
			{#each await getSummaries() as { slug, title }}
				<li>
					<a href="/blog/{slug}">{title}</a>
				</li>
			{/each}
		</ul>
	</aside>
</div>

<style>
	main {
		margin: 0 0 4rem 0;
	}

	@media (min-width: 640px) {
		.layout {
			display: grid;
			gap: 2em;
			grid-template-columns: 1fr 16em;
		}
	}
</style>
