import { writable } from 'svelte/store'
import {
  keyDown,
  keyUp,
  moveObstacles,
  gameOverAction,
  checkColitions
} from './storeUtils'

const initialStore = {
  globalScore: 0,
  score: 0,
  deads: 0,
  gameActive: false,
  objects: [],
  player: {
    imageSrc: '/assets/uniStep1.png',
    action: 'walk',
    position: 10
  },
  frames: 10,
  obstacles: [],
  dificulty: 5,
  framesActives: 0,
  message: 'Press Bar to start'
}

export const store = writable(initialStore)

export const dispatch = (action, state) => {
  switch (action.type) {
    case 'setActive':
      store.set({ ...state, active: !state.active })
      break
    case 'updateScore':
      store.set({ ...state, score: state.score + 1 })
      break
    case 'updatePlayerImage':
      state.player.imageSrc = action.imageSrc
      store.set({ ...state })
      break
    case 'updatePlayerAction':
      state.player.action = action.imageAction
      store.set({ ...state })
      break
    case 'keyDown':
      store.set(keyDown(state, action))
      break
    case 'keyUp':
      store.set(keyUp(state, action))
      break
    case 'moveObstacles':
      store.set(moveObstacles(state, action))
      break
    case 'newObstacle':
      state.obstacles = [
        ...state.obstacles,
        action.obstacle
      ]
      store.set({ ...state })
      break
    case 'checkColitions':
      store.set(checkColitions(state, action))
      break
    default:
      store.set({ ...state })
      break
  }
}
