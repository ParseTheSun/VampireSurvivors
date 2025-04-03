import './style.css'
import Phaser from 'phaser'

class Example extends Phaser.Scene {
	preload() {
		this.load.setBaseURL('https://cdn.phaserfiles.com/v385')

		this.load.image('sky', 'assets/skies/space3.png')
		this.load.image('logo', 'assets/sprites/phaser3-logo.png')
		this.load.image('red', 'assets/particles/red.png')
	}

	create() {
		this.add.image(400, 300, 'sky')

		const particles = this.add.particles(0, 0, 'blue', {
			speed: 100,
			scale: { start: 1, end: 0 },
			blendMode: 'ADD',
		})

		const logo = this.physics.add.image(400, 100, 'logo')

		logo.setVelocity(100, 200)
		logo.setBounce(1, 1)
		logo.setCollideWorldBounds(true)

		particles.startFollow(logo)
	}
}

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	scene: Example,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { x: 0, y: 50 },
		},
	},
	parent: 'canvasWrapper',
}

new Phaser.Game(config)
