import { Application, Texture, Sprite } from 'pixi.js';

class MyGame {
    private pixiApp: Application;
    private sprire: Sprite;
    constructor(container: HTMLElement) {
        const pixiApp = new Application({
            width: 600,
            height: 480,
            backgroundColor: 0xcccccc
        });
        container.appendChild(pixiApp.view);

        const texture = Texture.from('slime.png');
        const sprite = new Sprite(texture);

        sprite.anchor.x = 0.5;
        sprite.anchor.y = 0.5;
        sprite.x = pixiApp.screen.width / 2;
        sprite.y = pixiApp.screen.height / 2;
        pixiApp.stage.addChild(sprite);
        this.sprire = sprite;

        pixiApp.ticker.add(this.frame, this);

        this.pixiApp = pixiApp;
    }

    private frame() {
        this.sprire.x += 2;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    new MyGame(document.getElementById('Container'));
});

