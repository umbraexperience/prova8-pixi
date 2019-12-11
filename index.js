//Create a Pixi Application
let app = new PIXI.Application({
    antialias: true,
    resolution: window.devicePixelRatio,
    autoResize: true,
    resizeTo: window,
    backgroundColor: 0x061639
});
//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

console.log("Resolution:", window.devicePixelRatio);

app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";

function reportWindowSize() {
    app.resize();
}

window.addEventListener("resize", reportWindowSize);

startup();

async function startup() {
    const src = "./assets/video.mp4";

    const videoSource = new PIXI.resources.VideoResource(src, {
        autoPlay: false,
        autoLoad: true
    });

    let texture = PIXI.Texture.from(videoSource);

    let videoSprite = new PIXI.Sprite(texture);

    videoSprite.width = app.screen.width;
    videoSprite.height = app.screen.height;
    videoSprite.scale.set(1.2);

    video = texture.baseTexture.resource.source;

    video.muted = true;
    video.loop = true;

    app.stage.addChild(videoSprite);
    videoSource.source.play();
}

const basicStyle = new PIXI.TextStyle({
    fontFamily: "Tiempos Headline Light",
    fontSize: 16,
    fill: "#d1d1d1",
    // fill: ["#1f1f1f", "#d1d1d1", "#d1d1d1", "#1f1f1f"], // gradient
    fillGradientStops: [0.1, 0.4, 0.6, 1],
    fillGradientType: 1,
    wordWrap: true,
    wordWrapWidth: 440,

});



/* anime({
    targets: basicStyle,
    fill: "#FFFFFF",
    duration: 2600,
    loop: true,
    direction: 'alternate',
    delay: 200,
    easing: 'easeInOutCubic',
}); */



const basicText = new PIXI.Text(
    "An inmersive experience to find yourself",
    basicStyle
);
basicText.x = app.screen.width / 2;

basicText.anchor.set(0.5);
basicText.scale.set(1.2);

basicText.y = app.screen.height / 2 + 110;
basicText.cursor = "wait";
basicText.interactive = true;

var blurFilter = new PIXI.filters.BlurFilter();
basicText.filters = [blurFilter];
// blurFilter.blur = 0.85;
basicText.alpha = 0;

anime({
    targets: basicText,
    alpha: 1,
    duration: 4000,
    loop: true,
    direction: 'alternate',
    delay: 200,
    easing: 'easeInOutCubic',
});

anime({
    targets: basicText.position,
    y: {
        value: '+=0.5'
    },
    x: {
        value: '+=0.5'
    },
    duration: 900,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutCubic'
});



function randomValues() {
    anime({
        targets: blurFilter,
        blur: {
            value: function () {
                return anime.random(0.85, 3);
            }
        },
        duration: 1800,
        easing: 'easeInOutCubic',
        complete: randomValues
    });
}

randomValues();

app.stage.addChild(basicText);