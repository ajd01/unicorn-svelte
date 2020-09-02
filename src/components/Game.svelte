<script>
    import { store, dispatch } from '../store'
	import { onMount } from 'svelte'
	import Unicorn from '../components/Unicorn.svelte'
	import Obstacles from '../components/Obstacles.svelte'

	let frames = 0

	onMount(() => {
		let frame;
		function loop() {
            frame = requestAnimationFrame(loop);
			if ($store.gameActive) {
				if (frames % $store.frames === 0) {
					// Player Actions
					if ($store.player.action === 'walk') {
					const newImage = $store.player.imageSrc === '/assets/uniStep1.png'
						? '/assets/uniStep2.png'
						: '/assets/uniStep1.png'
					dispatch({ type: 'updatePlayerImage', imageSrc: newImage }, $store)
					}
					if ($store.player.action === 'jump') {
						dispatch({ type: 'updatePlayerImage', imageSrc: '/assets/uniJump.png' }, $store)
					}
					if ($store.player.action === 'getDown') {
						dispatch({ type: 'updatePlayerImage', imageSrc: '/assets/uniDown.png' }, $store)
					}
					// Obstacles Actions
					dispatch({ type: 'moveObstacles' }, $store)
					if (frames % parseInt(Math.random() * 200) === 0) {
						dispatch({
							type: 'newObstacle',
							obstacle: {
								type: parseInt(Math.random() * 11) % 2 === 0 ? 'hay' : 'frame',
								position: 100,
								counted: false
							}
						}, $store)
					}
					// Colisions
					dispatch({ type: 'checkColitions' }, $store)
				}
			}
			frames += 1	
		}
		loop();
		return () => cancelAnimationFrame(frame);
	})
</script>

<div>
    {#if $store.message !== '' }
        <h1 class='message'>{$store.message}</h1>
	{/if}
	<Unicorn />
    <Obstacles />
</div>

<style>
    .message {
		display: flex;
		justify-content: center;
		width: 110%;
		height: 100%;
		color: white;
		position: absolute;
		background-color: #00000063;
		left: -50px;
		top: -30px;
		padding-bottom: 20%;
		padding-top: 20%;
		z-index: 100;
	}
</style>