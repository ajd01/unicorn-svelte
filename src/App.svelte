<script>
	import { store, dispatch } from './store'
	import Game from './components/Game.svelte'

</script>

<div
	class='App'
	tabIndex='0'
	on:keydown={(e) => dispatch({ type: 'keyDown', keyCode: e.keyCode }, $store)}
	on:keyup={(e) => dispatch({ type: 'keyUp', keyCode: e.keyCode }, $store)}
	>
	<header class='App-header'>
		<div>Score: {$store.score} MAX: {$store.globalScore}</div>
		<div>Run Unicorn!</div>
		<div>Deads: {$store.deads}</div>
	</header>
	<game>
		<Game/>
	</game>
	<footer>
		<div>UnoTalks</div>
		<div>Audelio Lujan</div>
		<div>JS Guild</div>
	</footer>
</div>

<style>
	.App {
		font-family: 'Luckiest Guy', cursive;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		align-content: space-between;
		justify-content: space-between;
		background-color: rgb(26, 194, 26);
	}

	header {
		display: flex;
		font-size: 24px;
		justify-content: space-between;
		background-color: rgb(24, 161, 54);
		color: white;
		padding: 30px;
	}

	game {
		display: flex;
		padding: 30px;
		flex-direction: column nowrap;
		justify-content: space-between;
	}

	footer {
		display: flex;
		text-align: center;
		justify-content: space-between;
		background-color: rgb(24, 161, 54);
		color: white;
		padding: 30px;
		font-size: 24px;
	}
</style>