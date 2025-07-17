<script>
	import { getSummaries } from './data.remote';
</script>

<h1>blog</h1>

<ul>
	{#each await getSummaries() as { slug, title }}
		<li><a href="/blog/{slug}">{title}</a></li>
	{/each}
</ul>
