class Continue extends Phaser.Scene {
    constructor() {
        super("ContinueScene");
    }

    init(data) {
        this.finalScore = data.score; // Get the final score passed from the platformer scene
    }

    preload() {
        // Load assets needed for the continue screen
        this.load.image('back', 'assets/back.jpeg');
        this.load.image('continueButton', 'assets/next.png');
    }

    create() {
        // Display background image
        const back = this.add.image(0, 0, 'back').setOrigin(0);
        back.setScale(.9);

        // Display level text
        this.add.text(600, 350, 'Level 2', {
            fontSize: '64px',
            fill: '#FFFAF0'
        }).setOrigin(0.5);

        // Display final score
        this.add.text(600, 400, 'Score: ' + this.finalScore, {
            fontSize: '32px',
            fill: '#FFFAF0'
        }).setOrigin(0.5);

        // Add a continue button
        const continueButton = this.add.image(600, 450, 'continueButton').setOrigin(0.5);
        continueButton.setScale(0.2)
        continueButton.setInteractive();

        // Handle continue button click
        continueButton.on('pointerdown', () => {
            this.scene.start('level2Scene'); // Replace 'level2Scene' with the actual scene key to continue
        });
    }
}
