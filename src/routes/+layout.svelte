<script lang="ts">
	import '../app.css';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	
	let { children } = $props();

	injectSpeedInsights();
	
</script>

{@render children()}
