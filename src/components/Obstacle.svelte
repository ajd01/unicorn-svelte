<script>
    export let position = 0
    export let type = 'hay'
    console.log('position por obstacle: ', position)
</script>

<div>
    <img
        style="left:{position}%; top: 40%; position: absolute"
        alt='Obstacle'
        src={type !== 'hay'
            ? '/assets/fence.png'
            : '/assets/hay.png'}
    />
</div>