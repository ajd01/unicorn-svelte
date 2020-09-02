<script>
    import { store } from '../store'
    import Obstacle from './Obstacle.svelte'
</script>

<div>
    {#if $store.obstacles.length > 0}
        {#each $store.obstacles as obs, i}
            <Obstacle
                type={obs.type}
                position={obs.position}
            />
        {/each}
    {/if}
</div>

<style>
</style>