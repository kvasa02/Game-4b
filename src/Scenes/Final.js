class Final extends Phaser.Scene {
    constructor() {
        super({ key: 'FinalScene' });
    }

    preload() {
        // Load assets needed for the title screen
        this.load.image('final', 'assets/final.jpeg');
    }

    create() {
        // Display background image
        const final = this.add.image(0, 0, 'final').setOrigin(0);
        final.setScale(0.9);

        // Display title text
        this.add.text(600, 100, "Credits: \nSree Kolli\nVarsana Ilango\nKoushik Vasa", { fontSize: '32px', fill: '#FFFAF0' }).setOrigin(0.5);
    }
}
