<script>
    import { store } from '../store'
</script>

<div> 
    <img
      style="left:{$store.player.position}%;top: 30%;position: absolute;"
      alt='uncorn'
      src={$store.player.imageSrc}
    />
</div>

<style>
</style>