class GameOver extends Phaser.Scene {
    constructor() {
        super("gameOverScene");
    }

    init(data) {
        this.finalScore = data.score; // Get the final score passed from the platformer scene
    }

    create() {
        // Display game over text
        this.add.text(700, 700, 'Level 2', {
            fontSize: '64px',
            fill: "#4B0082"
        }).setOrigin(0.5);

        // Display final score
        this.add.text(700, 900, 'Score: ' + this.finalScore, {
            fontSize: '32px',
            fill: "#4B0082"

        }).setOrigin(0.5);

        // Add a restart button
        const restartButton = this.add.text(700, 1000, 'continue', {
            fontSize: '32px',
            fill: "#4B0082"
        }).setOrigin(0.5).setInteractive();

        restartButton.on('pointerdown', () => {
            this.scene.start('level2Scene'); 
        });
    }
}
