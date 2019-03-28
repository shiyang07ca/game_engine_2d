class Particle extends ImageBase{
	constructor(game, name) {
		super(game, name)
		this.setup()
	}


	static new(game, name) {
		return new this(game, name)
	}


	setup() {
		this.life = 240
	}


	init(x, y, vx, vy) {
		this.x = x
		this.y = y
		this.vy = vy
		this.vx = vx
	}


	update() {
		this.life -= 1
		this.x += this.vx
		this.y += this.vy
		var factor = 0.01
		this.vx += factor * this.vx
		this.vy += factor * this.vy
	}
}

class ParticleSystem {
	constructor(game) {
		this.game = game
		this.duration = 60
		this.x = 150
		this.y = 200
		this.particleNum = 20
		this.particles = []
	}


	static new(game) {
		return new this(game)
	}


	setXY(x, y) {
        this.x = x
        this.y = y
    }


	initParticle() {
		var particle = Particle.new(this.game, 'boom')
		return particle
	}


	update() {
		this.duration -= 1
		if (this.duration == 0) {
			this.game.scene.removeElement(this)
		}

		if (this.particles.length < this.particleNum) {
			var p = this.initParticle()
			this.particles.push(p)
		}

		for(var p of this.particles) {
			p.update()
		}
		this.particles = this.particles.filter(p => p.life > 0)
	}


	draw() {
		for(var p of this.particles) {
			p.draw()
		}
	}
}
