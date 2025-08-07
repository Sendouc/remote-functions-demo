<script>
	import { getPost, toggleIsPublished } from '../data.remote.js';

	let { params } = $props();

	let post = $derived(await getPost(params.slug));
	$inspect(post);
</script>

<h1>{post.title}</h1>
<div>{post.isPublished}</div>
<div>{@html post.content}</div>
<button onclick={async () => await toggleIsPublished(params.slug)}>Toggle is published</button>
