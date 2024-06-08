class Begin extends Phaser.Scene {
    constructor() {
        super({ key: 'BeginScene' });
    }

    preload() {
        // Load assets needed for the title screen
        this.load.image('background', 'assets/background.webp');
        this.load.image('startButton', 'assets/start_button.png');
    }

    create() {
        // Display background image
        const background = this.add.image(0, 0, 'background').setOrigin(0);
        background.setScale(1.5);

        // Display title text
        this.add.text(600, 300, 'Fantasy Escape', { fontSize: '32px', fill: '#FFFAF0' }).setOrigin(0.5);

        // Create a clickable start button and make it smaller
        const startButton = this.add.image(600, 400, 'startButton').setOrigin(0.5);
        startButton.setScale(0.5); // Set scale to make the button smaller
        startButton.setInteractive();

        // Handle start button click
        startButton.on('pointerdown', () => {
            this.scene.start('platformerScene'); 
        });
    }
}
