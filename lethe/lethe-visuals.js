// Set canvas width and height variables
var vw = window.innerWidth;
var vh = window.innerHeight;

// Lock animation to 30 frames per second
PIXI.settings.TARGET_FPMS = 0.03;
PIXI.ticker.shared.FPS = 30;

// Create renderer, which will display everything
var renderer = new PIXI.autoDetectRenderer(vw,vh,{ view: document.getElementById("pixi"), transparent: true, autoresize: true, legacy: true });
//renderer.backgroundColor = 0xaa1b1b;
renderer.plugins.interaction.autoPreventDefault = false;

// Create a parent container which will enclose all elements
var stage = new PIXI.Container();

// Create containers for each scene
var scene00 = new PIXI.Container();
var scene01 = new PIXI.Container();
var endContent = new PIXI.Container();
var endScreen = new PIXI.Container();

// Create stopwatch to track how much time the user spends inside the story
var t;
var sec = 0;
var min = 0;
function add() {
  sec++;
  if (sec >= 60) {
      sec = 0;
      min++;
  }
  timer();
}
function timer() {
  t = setTimeout(add, 1000);
}

// Load assets before calling the animation function
PIXI.loader
  .add([
    '../assets/audio/theTurmoil.mp3',
    '../assets/audio/theEscape.mp3',
    '../assets/audio/theInsanity.mp3',
    '../assets/audio/theLight.mp3',
    '../assets/audio/theDark.mp3',
    '../assets/audio/waterDrops.mp3',
    '../assets/audio/hover.mp3',
    '../assets/audio/doorBang.mp3',
    '../assets/audio/on.mp3',
    '../assets/audio/off.mp3',
    '../assets/audio/rub.mp3',
    '../assets/audio/cigarette.mp3',
    '../assets/audio/exhale.mp3',
    '../assets/audio/unlock.mp3',
    '../assets/audio/creak.mp3',
    '../assets/audio/walls.mp3',
    '../assets/audio/deepBreath.mp3',
    '../assets/audio/wind.mp3',
    '../assets/audio/splash.mp3',
    '../assets/audio/ticking.mp3',
    '../assets/audio/tickingFast.mp3',
    '../assets/audio/glitch.mp3',
    '../assets/audio/bolt.mp3',
    '../assets/audio/stun.mp3',
    '../assets/audio/crackling.mp3',
    '../assets/audio/embersDrip.mp3',
    '../assets/audio/bigFire.mp3',
    '../assets/audio/growls.mp3',
    '../assets/audio/voices/focus.mp3',
    '../assets/audio/voices/notSafe.mp3',
    '../assets/audio/voices/dustOff.mp3',
    '../assets/audio/voices/dammit.mp3',
    '../assets/audio/voices/dontGo.mp3',
    '../assets/audio/voices/openIt.mp3',
    '../assets/audio/voices/avoid.mp3',
    '../assets/audio/voices/theHellOut.mp3',
    '../assets/audio/voices/doSmthn.mp3',
    '../assets/audio/voices/move.mp3',
    '../assets/audio/voices/goFaster.mp3',
    '../assets/audio/voices/wasClose.mp3',
    '../assets/audio/voices/brightLights.mp3',
    '../assets/audio/voices/almostThere.mp3',
    '../assets/audio/voices/noWayBack.mp3',
    '../assets/audio/voices/thePhone.mp3',
    '../assets/audio/voices/itsGone.mp3',
    '../assets/audio/voices/stepBack.mp3',
    '../assets/audio/voices/watchOut.mp3',
    '../assets/audio/voices/soDark.mp3',
    '../assets/audio/voices/remember.mp3',
    '../assets/audio/voices/goDown.mp3',
    '../assets/audio/voices/disgusting.mp3',
    '../assets/audio/voices/getBurnt.mp3',
    '../assets/audio/voices/getAway.mp3',
    '../assets/audio/voices/defend.mp3',
    '../assets/audio/voices/dead.mp3',
    '../assets/audio/voices/dangerous.mp3',
    '../assets/audio/voices/followIt.mp3',
    '../assets/audio/voices/stupid.mp3',
    '../assets/audio/voices/wontMakeIt.mp3',
    '../assets/audio/voices/tickTock.mp3',
    '../assets/audio/voices/getIn.mp3',
    '../assets/audio/voices/behindYou.mp3',
    '../assets/audio/voices/soWeak.mp3',
    '../assets/audio/voices/youDidIt.mp3',
    '../assets/buttons/00begin.png',
    '../assets/buttons/01getUp.png',
    '../assets/buttons/02aFocus.png',
    '../assets/buttons/02bLook.png',
    '../assets/buttons/goOn.png',
    '../assets/buttons/goAhead.png',
    '../assets/buttons/keepWalking.png',
    '../assets/buttons/04wayOut.png',
    '../assets/buttons/05aLook.png',
    '../assets/buttons/05a01putBack.png',
    '../assets/buttons/05bLeave.png',
    '../assets/buttons/06exhale.png',
    '../assets/buttons/08moment.png',
    '../assets/buttons/09getOut.png',
    '../assets/buttons/09aFlashlight.png',
    '../assets/buttons/f01glance.png',
    '../assets/buttons/f03aStop.png',
    '../assets/buttons/f03a01sit.png',
    '../assets/buttons/f03a02recompose.png',
    '../assets/buttons/f03bRun.png',
    '../assets/buttons/f03b02lookAround.png',
    '../assets/buttons/f03b04walkAway.png',
    '../assets/buttons/f03b06reach.png',
    '../assets/buttons/09bDark.png',
    '../assets/buttons/d01aLeft.png',
    '../assets/buttons/d01a02goDownstairs.png',
    '../assets/buttons/d01a04turnBack.png',
    '../assets/buttons/d01a05getAway.png',
    '../assets/buttons/d01a06stare.png',
    '../assets/buttons/d01bRight.png',
    '../assets/buttons/d01b03goUpstairs.png',
    '../assets/buttons/d01b04breathe.png',
    '../assets/buttons/d01b05focus.png',
    '../assets/buttons/d01b06lock.png',
    '../assets/buttons/d01b07stare.png',
    '../assets/buttons/theEnd.png',
    '../assets/buttons/relive.png',
    '../assets/fonts/butler.fnt',
    '../assets/img/bathtub.jpg',
    '../assets/img/towel.jpg',
    '../assets/img/switchOn.jpg',
    '../assets/img/switchOff.jpg',
    '../assets/img/room.jpg',
    '../assets/img/dust.jpg',
    '../assets/img/dust.png',
    '../assets/img/picture-frame.jpg',
    '../assets/img/peephole.jpg',
    '../assets/img/openedDoor.jpg',
    '../assets/img/corridorWall.jpg',
    '../assets/img/hallway.jpg',
    '../assets/img/concrete.jpg',
    '../assets/img/crack.jpg',
    '../assets/img/figure.jpg',
    '../assets/img/eram.png',
    '../assets/textures/ripple.png',
    '../assets/textures/towelMap.jpg',
    '../assets/textures/flashlight.png',
    '../assets/video/blinds.mp4',
    '../assets/video/bathtub.mp4',
    '../assets/video/smoking.mp4',
    '../assets/video/roomNo.mp4',
    '../assets/video/lightBlink.mp4',
    '../assets/video/breath.mp4',
    '../assets/video/moonlight.mp4',
    '../assets/video/forest.mp4',
    '../assets/video/shadow.mp4',
    '../assets/video/shadowGlitch.mp4',
    '../assets/video/immersion.mp4',
    '../assets/video/darkness.mp4',
    '../assets/video/staircase.mp4',
    '../assets/video/moonshine.mp4',
    '../assets/video/needle.mp4',
    '../assets/video/embers.mp4',
    '../assets/video/fire.mp4',
    '../assets/video/demons.mp4',
    '../assets/video/flames.mp4',
  ])
  .on('progress', loadProgress)
  .load(onAssetsLoaded);
  stage.addChild(scene00);
  $('#noise-canvas').fadeIn(3000);

  function loadProgress(loader) {
    $('#visuals .percent').html(Math.round(loader.progress) + "%</h1>");
  }

// Create the animation
function onAssetsLoaded() {
  $('#visuals .percent').fadeOut(1000, function() {
    // Scale visuals on window resize
    $(window).on('resize', function () {
      //onResize();
    });
    function onResize() {
      // Preserve aspect ratio to avoid distortions
      let ratio = 1;
      if (vw / vh >= ratio) {
          w = vw * ratio;
          h = vh;
      } else {
          w = vw;
          h = vh / ratio;
      }
      // Resize renderer
      renderer.width = w;
      renderer.height = h;
      renderer.resize(vw, vh);
      // Center visuals
      lethe.anchor.x = lethe.anchor.y = .5;
      lethe.x = renderer.view.width / 2;
      lethe.y = renderer.view.height / 2 - lethe.height;
    }
    // Set up variables to control the text size
    var BaseFontSize = 200; // Default font size
    var MinFontSize  = 50; // Minimum font size allowed
    var fontSize = BaseFontSize * Math.min(window.innerWidth / 1536, window.innerHeight / 793); // 1536 x 793 is the base screen size
    fontSize = Math.max(MinFontSize, fontSize);

    // Create LETHE text as bitmap font (this will enable per character animation)
    var lethe = new PIXI.extras.BitmapText('LETHE', { font: fontSize + 'px Butler', align: 'center', tint: 0x333333 });
    lethe.letterSpacing = 40;
    // Center text
    lethe.anchor.x = .5;
    lethe.anchor.y = .5;
    lethe.x = renderer.view.width / 2;
    lethe.y = renderer.view.height / 2 - lethe.height;
    // Center each letter anchor point
    for(i = 0; i < lethe.children.length; i++) {
      var letter = lethe.children[i];
      letter.anchor.x = letter.anchor.y = .5;
      letter.x = letter.x + letter.width / 2;
      letter.y = letter.y + letter.height / 2;
    }
    // Set initial scale and alpha to fade in the text
    lethe.scale.x = lethe.scale.y = .6;
    lethe.alpha = 0;

    // Create tagline text and "BEGIN" button
    var tagline = new PIXI.Text('A DARK INTERACTIVE STORY', { fontFamily: "Averia Serif Libre", fontSize: 12, fontweight: 300, fill: 0xffffff, breakWords: true, wordWrap: true, wordWrapWidth: vw / 2, lineHeight: 30, letterSpacing: 5, align: 'center' });
    var begin = new PIXI.Sprite.fromImage('../assets/buttons/00begin.png');

    // Set position and other initial values
    tagline.scale.x = tagline.scale.y = .5;
    begin.scale.x = begin.scale.y = .8;
    tagline.anchor.x = tagline.anchor.y = begin.anchor.x = begin.anchor.y = .5;
    tagline.x = begin.x = renderer.view.width / 2;
    tagline.y = renderer.view.height / 2 + lethe.height - tagline.height;
    begin.y = tagline.y + begin.height * 2;
    tagline.alpha = begin.alpha = 0;

    // Display text on stage
    scene00.addChild(lethe,tagline,begin);

    // Initial fade in animation
    fadeIn();
    function fadeIn() {
      // setTimeout(function(){
      //   begin.interactive = true;
      // },3500);
      TweenMax.to([lethe,tagline], 4, { alpha: 1, ease: Linear.easeInOut });
      TweenMax.to([lethe.scale,tagline.scale], 4, { x: 1, y: 1, ease: Circ.easeOut, onComplete:
        function() {
          begin.interactive = true;
          TweenMax.to(begin, 4, { alpha: .2, ease: Linear.easeInOut });
          TweenMax.to(begin.scale, 4, { x: 1, y: 1, ease: Circ.easeOut });
        }
      });
    }

    // Create text animation as a function
    function randomText() {
      // Animate each letter individually
      for (i = 0; i < lethe.children.length; i++) {
        // Set animation variables
        var letter = lethe.children[i];
        var duration = (Math.random() * (6 - 3) + 3);
        var opacityRand = Math.round(Math.random() * (1 - 0.2 + 1)) + 0.2;
        var blurRand = Math.round(Math.random() * (1 - 0 + 10)) + 0;
        var scaleRand = Math.random() * (0.1 - -0.1 + 0.1) - 0.1;
        var transformRand = Math.round(Math.random() * (1 - -6 + 6)) - 6;
        var rotationRand = Math.round(Math.random() * (1 - -5 + 5)) - 5;

        // Create new timeline and pass random values to each attribute
        var identity = new TimelineMax();
        identity.to(letter, duration, { pixi:
          {
            blur: 3 + blurRand * letter.scale.x,
            x: letter.x + transformRand * .5,
            y: letter.y + transformRand * 2,
            opacity: opacityRand,
            rotation: rotationRand * 2,
            scaleX: letter.scale.x + scaleRand * .1,
            scaleY: letter.scale.y + scaleRand * .1
          },
          // Set easing, delay between letters and loop animation infinitely
          ease: Linear.easeNone,
          delayedCall: duration,
          onComplete: randomText
        });
      }
    }

    // Create texture
    var texture = PIXI.Texture.fromImage('../assets/textures/perlin.jpg');

    // Create a tiling sprite from the texture, set its width, height, scale, blend mode and alpha
    var tilingSprite = new PIXI.extras.TilingSprite(texture, renderer.view.width + 100, renderer.view.height + 100);
    tilingSprite.blendMode = PIXI.BLEND_MODES.MULTIPLY;
    tilingSprite.alpha = .6;
    tilingSprite.x = renderer.view.width / 2;
    tilingSprite.y = renderer.view.height / 2;
    tilingSprite.anchor.x = tilingSprite.anchor.y = .5;
    tilingSprite.tileScale.x = 2;
    tilingSprite.tileScale.y = 2;
    scene00.addChild(tilingSprite);

    var count = 0;

    function perlinTexture() {
      count += 0.005;
      tilingSprite.tilePosition.y += 2;
      requestAnimationFrame(perlinTexture);
    }

    // Call Tween timeline function
    timeline00();
    // Create Tween master timeline to trigger multiple animations
    function timeline00() {
      let masterTimeline = new TimelineMax();
      masterTimeline
      // Text animation
      .add(randomText)
      // Texture overlay, it will provide an eerier feel
      .add(perlinTexture)
    }

    // Store full story and split it in variables
    var story01 = 'You slowly come back to full consciousness. A tiny echo becomes clearer as water drops plunge down endlessly from the tap. You are in a bathtub. Your head is a mess and confusion reigns over your mind.';
    var story02 = 'You get out of the tub, dry yourself off with a towel and get dressed with somewhat apathy. Do you even know where you are?';
    var story02a = 'You try hard, but it’s useless… All you can think of is why the hell are you here. Did someone do this to you?';
    var story02b = 'You seem to be in a small apartment. Not bad, but nothing fancy neither. A faint orangish beam of light leaks through the half-closed window blinds. It must be late night.';
    var story03 = 'You walk around. Everything is dark and strangely quiet. You reach for a light switch, which flips at your touch, but nothing happens. It looks like the power went off. You feel shivers crawling down your spine. Maybe you should get out of here.';
    var story04 = 'You walk to the door, but as soon as your wrist flicks to turn the handle, you realize it’s locked. Fuck. Your eyes peek nervously around the main room, searching for some clue about what’s going on. A picture frame drags your attention.';
    var story05 = 'The more time you spend here, the less you understand. The situation is really beginning to get on your nerves. You pat your pockets and take out a lighter and a pack of cigarettes. You don’t smoke on a regular basis, but it helps keeping yourself together when anxiety hits you. The tip of the cigarette blazes up and glows in a bright, intense red, as a thread of swirling smoke makes its way upwards.';
    var story06 = 'Suddenly, someone bangs the door. You turn your back and paralyse for a second. You put out the cigarette and walk towards the exit, once again, as your heartbeat intensifies.';
    var story07 = 'Just when you’re halfway there, the door lock clicks. You stop immediately. You try hard to be rational and gulp back the fear. You keep moving as stealthy as you can, and when you get to the door, you hold it with all your strength and stick your eye to the peephole. Nothing. At least that’s what you can tell, because it doesn’t get much darker than it is outside.';
    var story08 = 'You take a few seconds to calm yourself down, even though you can’t avoid heaving in tension. But what choice do you have? You know you can’t stay here forever. You clutch the handle and push the door gently.';
    var story09 = 'The hinges creak a little. Once you sneak out, you find yourself in the middle of a pitch black corridor. You check your phone. There’s no signal, indeed, plus there’s not much battery left.';
    var story09a = 'And there was light. There are several doors on each side of the corridor. There’s a four-figure number on the right hand of every door. You realize you’re in some kind of hotel.';
    var story09a01 = 'You shed light on your door. Room 1311. Wait, what was that? You figure out that someone, or something, wants to kill you. You start to run down the corridor. You hold the phone in front of you, so it lights the way. If you tripped over or winded up in a dead end, you’d surely be gone for good.';
    var story09a02 = 'The hallway seems to be an infinite loop, and as you go on, the walls begin to close in and narrow down your path. The faster you dash, the quicker the walls shrink.';
    var story09a02a = 'You lean on one side of the corridor, panting. The walls cease to move. In fact, they are sluggishly expanding back. Who knows how you would have ended up if you kept running? What the hell just happened anyway? Well, the thing is you feel safe now.';
    var story09a02a01 = 'As the hallway shapeshifts to its natural size, you tilt your head towards the ceiling. The lights start to blink shyly, until they stay lit after a few seconds of suspense. At first, the whitish harsh brightness hurts your eyes, but you manage to get used to it.';
    var story09a02a02 = 'By the way, what where you exactly escaping from? There is nobody here. You are sure of that by now. For the first time since you came back, you take a deep breath of fresh air. You feel it rushing through your veins and inner cavities. Something at your very core has finally changed.'; // ENDING ONE - ALIVE
    var story09a02b = 'You keep your pace steady. Door after door after door… You watch in horror how the walls are now just a few inches away from your body. You shut your eyes tightly.';
    var story09a02b01 = 'Suddenly, you feel the cold wind slicing through your cheeks. You open your eyes again and fall to your knees, exhausted. Shocked, you realize you are outside. It’s still dark, although the moon shines quite bright and casts a pale light on your surroundings.';
    var story09a02b02 = 'There’s nobody nearby. Just a bunch of trees and a thick fog levitating between them. You turn around, but can’t see any building neither. You’re just in the middle of nowhere. The phone. It’s your only chance, you can call for h-… nevermind. Battery died a while back.';
    var story09a02b03 = 'You’re hopeless, on the verge of collapsing. Abruptly, you notice your shadow starts shifting, as if it came to life on its own. This is a true nightmare.';
    var story09a02b04 = 'You don’t really know what to do or where to go. Fear is consuming you. Your shadow dances ungracefully, jittering, almost like it’s convulsing. You can’t steer your look away from it, but you slowly start to take some steps back in a rather awkward way.';
    var story09a02b05 = 'Your foot fails to contact the ground. You fall. Time freezes as you’re suspended in the air. A huge splash and you’re submerged into bleak water.';
    var story09a02b06 = 'You’re slowly sinking. You desperately kick and stroke your limbs in anguish, but it’s useless. You’re running out of breath and you are hardly able to resist anymore. The pure darkness of the depths embraces you and will not let you go.'; // ENDING TWO - DEAD
    var story09b = 'You put the phone back in your pocket. You might need it later and turning on the flashlight would drain the battery. Besides, you don’t want to draw attention. You’re not sure what to expect from now on, as you can barely see your own feet. Yet, no matter what, you trust your senses.';
    var story09b01a = 'You have a gut feeling that this is the right way. To walk like you were blindfolded is really unsettling. However, bit by bit, you progress quite a long distance. Eventually, you can feel a change in the atmosphere.';
    var story09b01a01 = 'There is a dim breeze that caresses your skin. You can also hear a remote crackling, which seems to come from a lower floor, right below your feet. You go further ahead. You get imbalanced as your foot sinks in the air, but touches the ground right away. It’s some kind of a downward staircase.';
    var story09b01a02 = 'Cautiously, you descend until you reach the lower floor. It’s warmer here. At the very moment when you go down the last step, your feet dip into a highly dense, almost sticky water.';
    var story09b01a03 = 'The floor is flooded, and that liquid stuff covers your feet up to your ankles. You find it harder to move. Suddenly, hundreds of sparks sprout out of nowhere. A few seconds later, the sparks become little flames that grow devilishly fast.';
    var story09b01a04 = 'You panic. The huge fire surrounds you, blocking every possible way out. In the blink of an eye, you feel something grabbing you. You desperately try to escape from its grasp, but you don’t have enough strength. You scream as your voice breaks into a billion pieces.';
    var story09b01a05 = 'As the blaze spreads all over the place, you watch how some demons rise from the ground, coming steadily at you. You tremble in sheer dread, whilst the fire dances gracefully and the fiends walk through them.';
    var story09b01a06 = 'The look in their fully black eyes is the purest strain of death. You’re irrevocably trapped. The ardent lick of the flames is the last thing you are able to feel.'; // ENDING THREE - DEAD
    var story09b01b = 'You have a gut feeling that this is the right way. You take one step at a time, your hand grazing the cold concrete wall. After a few meters, you notice there are several doors, which are exactly the same as the one you walked out from.';
    var story09b01b01 = 'The ticking. Can you hear it? It sounds fairly distant, like it’s hardly leaking through the cracks in the ceiling. You’re starting to get used to the dark.';
    var story09b01b02 = 'You reach the end of the hallway. The first step of a staircase almost makes you trip over. You tightly grab the handrail, and you begin to climb the stairs carefully.';
    var story09b01b03 = 'When you get to the higher floor, a breach of moonshine splits the corridor in half, although it’s pretty far away. You stare with a feeling of awe. The moon has always fascinated you.';
    var story09b01b04 = 'What was that? The ticking has frantically increased its frequency. You get extremely alert and paranoid. Whilst you abruptly turn around to every direction, you lose reference of space and your sight begins to twitch.';
    var story09b01b05 = 'You spot an opened door in the distance. Arduously, you manage to get into that room. You feel safer in a closed space. You firmly shut the door behind you, and sigh in relief.';
    var story09b01b06 = 'You bolt the door. Nonetheless, as you turn around to the room, you see an extremely tall human figure just a couple of feet in front of you. Your face skews in horror and your heart starts racing. The figure is completely faceless.';
    var story09b01b07 = 'No eyes, no nose, no mouth, no nothing. But before you can even think of screaming, you feel a sharp, piercing sting penetrating your skin. After a little while, your sight stops twitching, the ticking vanishes and the faceless figure becomes someone that, actually, you know very well.';

    // Create function for all full screen sprites
    function fullSprite(el) {
      el.scale.x = 1.1;
      el.scale.y = 1.1;
      el.alpha = 0;
      el.anchor.x = el.anchor.y = .5;
      el.x = renderer.view.width / 2;
      el.y = renderer.view.height / 2;
    }

    // Create drone objects
    var turmoil = new PIXI.sound.Sound.from( { url: '../assets/audio/theTurmoil.mp3', volume: 0 } );
    var escape = new PIXI.sound.Sound.from( { url: '../assets/audio/theEscape.mp3', volume: 0 } );
    var insanity = new PIXI.sound.Sound.from( { url: '../assets/audio/theInsanity.mp3', volume: 0 } );
    var light = new PIXI.sound.Sound.from( { url: '../assets/audio/theLight.mp3', volume: 0 } );
    var dark = new PIXI.sound.Sound.from( { url: '../assets/audio/theDark.mp3', volume: 0 } );
    turmoil.loop = escape.loop = insanity.loop = light.loop = dark.loop = true;

    // Create hover sound object
    var hoverWhoosh = new PIXI.sound.Sound.from( { url: '../assets/audio/hover.mp3', volume: .5 } );

    // Liquid distortion settings (Landing page)
    var turbVal = {
      val: 0.000001
    };
    var liquidEl = document.querySelectorAll('#liquidDistort feTurbulence')[0];
    var liquidSize = document.querySelectorAll('#liquidDistort feDisplacementMap')[0];
    var liquidDistort = new TimelineLite({
      paused: true,
      onUpdate: function() {
        liquidEl.setAttribute('baseFrequency', turbVal.val / 2 + ' ' + turbVal.val);
      }
    });

    liquidDistort.to(turbVal, 4, { val: 0.02 });

    var bathtub;

    begin
    .on('mouseover', function(){
      hovering = true;
      TweenMax.to(cursor, .5, {
        pixi: { scaleX: 4, scaleY: 4, lineWidth: .1, alpha: .4, ease: Linear.easeOut }
      });
      TweenMax.to(begin, 1, { alpha: 1 });
    })
    .on('mouseout', function(){ choiceOut(begin) })
    // Fade out and remove identity if user begins story
    .on('mousedown', function() {
      // Start time counting
      timer();
      // Play sounds
      hoverWhoosh.play();
      setTimeout(function() {
        turmoil.play();
        TweenMax.to(turmoil, 20, { volume: .5 });
      }, 2000);
      choiceDown(begin);
      begin.interactive = false;
      var random = Math.floor((Math.random() * 100) + 1);
      liquidEl.setAttribute('seed', random);
      liquidDistort.restart();
      liquidDistort.to(turbVal, 0.000001, { val: 0.000001 });

      TweenMax.to([lethe,tagline,begin], 4, { alpha: 0, onComplete:
        function() {
          stage.removeChild(scene00);
          stage.addChild(scene01,cursor);
          scene01.addChild(tilingSprite);
          timeline01();
        }
      })
    })

    // SCENE 01

    function fragment01() {
      // Branch 01
      let text = new PIXI.Text(story01, {
        fontFamily: "Averia Serif Libre",
        fontSize: 20,
        fontWeight: 300,
        fill: 0x999999,
        wordWrap: true,
        wordWrapWidth: vw / 2,
        lineHeight: 30
      });

      // Declare all visuals variables to be used in their own loops or functions
      var towel, blindsSourceVid, blindsVid, switchOn, switchOff, room, smokeSourceVid, smokeVid, peephole, openedDoor, corridorWall, roomNoSourceVid, roomNoVid, hallway, lightBlinkSourceVid, lightBlinkVid, breathSourceVid, breathVid, moonlightSourceVid, moonlightVid, forestSourceVid, forestVid, shadowSourceVid, shadowVid, shadowGlitchSourceVid, shadowGlitchVid, immersionSourceVid, immersionVid, darknessSourceVid, darknessVid, concreteSprite, staircaseSourceVid, staircaseVid, embersSourceVid, embersVid, fireSourceVid, fireVid, demonsSourceVid, demonsVid, flamesSourceVid, flamesVid, crack, moonshineSourceVid, moonshineVid, figure, needleSourceVid, needleVid;
      // Declare all audio variables to be used in their own loops or functions
      var flipOn, flipOff, rub, lighter, exhale, doorBang, unlock, creak, walls, deepBreath, wind, splash, ticking, tickingFast, glitch, bolt, stun, crackling, embersDrip, bigFire, growls;
      // Declare all voices variables
      var focus, notSafe, dustOff, dammit, dontGo, openIt, avoid, theHellOut, doSmthn, move, goFaster, wasClose, brightLights, almostThere, noWayBack, thePhone, itsGone, stepBack, watchOut, soDark, dangerous, followIt, stupid, wontMakeIt, tickTock, getIn, behindYou, soWeak, youDidIt, remember, goDown, disgusting, getBurnt, getAway, defend, dead;
      // Declare all filter variables
      var stickyWater;
      // Declare all decision buttons
      var choice01 = new PIXI.Sprite.fromImage('../assets/buttons/01getUp.png');
      var choice02a = new PIXI.Sprite.fromImage('../assets/buttons/02aFocus.png');
      var choice02b = new PIXI.Sprite.fromImage('../assets/buttons/02bLook.png');
      var choice03 = new PIXI.Sprite.fromImage('../assets/buttons/goOn.png');
      var choice04 = new PIXI.Sprite.fromImage('../assets/buttons/04wayOut.png');
      var choice05a = new PIXI.Sprite.fromImage('../assets/buttons/05aLook.png');
      var choice05a01 = new PIXI.Sprite.fromImage('../assets/buttons/05a01putBack.png');
      var choice05b = new PIXI.Sprite.fromImage('../assets/buttons/05bLeave.png');
      var choice06 = new PIXI.Sprite.fromImage('../assets/buttons/06exhale.png');
      var choice07 = new PIXI.Sprite.fromImage('../assets/buttons/keepWalking.png');
      var choice08 = new PIXI.Sprite.fromImage('../assets/buttons/08moment.png');
      var choice09 = new PIXI.Sprite.fromImage('../assets/buttons/09getOut.png');
      var choice09a = new PIXI.Sprite.fromImage('../assets/buttons/09aFlashlight.png');
      var choice09a01 = new PIXI.Sprite.fromImage('../assets/buttons/f01glance.png');
      var choice09a02 = new PIXI.Sprite.fromImage('../assets/buttons/goOn.png');
      var choice09a03a = new PIXI.Sprite.fromImage('../assets/buttons/f03aStop.png');
      var choice09a03a01 = new PIXI.Sprite.fromImage('../assets/buttons/f03a01sit.png');
      var choice09a03a02 = new PIXI.Sprite.fromImage('../assets/buttons/f03a02recompose.png');
      var choice09a03b = new PIXI.Sprite.fromImage('../assets/buttons/f03bRun.png');
      var choice09a03b01 = new PIXI.Sprite.fromImage('../assets/buttons/goAhead.png');
      var choice09a03b02 = new PIXI.Sprite.fromImage('../assets/buttons/f03b02lookAround.png');
      var choice09a03b03 = new PIXI.Sprite.fromImage('../assets/buttons/goOn.png');
      var choice09a03b04 = new PIXI.Sprite.fromImage('../assets/buttons/f03b04walkAway.png');
      var choice09a03b05 = new PIXI.Sprite.fromImage('../assets/buttons/keepWalking.png');
      var choice09a03b06 = new PIXI.Sprite.fromImage('../assets/buttons/f03b06reach.png');
      var choice09b = new PIXI.Sprite.fromImage('../assets/buttons/09bDark.png');
      var choice09b01a = new PIXI.Sprite.fromImage('../assets/buttons/d01aLeft.png');
      var choice09b01a01 = new PIXI.Sprite.fromImage('../assets/buttons/goAhead.png');
      var choice09b01a02 = new PIXI.Sprite.fromImage('../assets/buttons/d01a02goDownstairs.png');
      var choice09b01a03 = new PIXI.Sprite.fromImage('../assets/buttons/goOn.png');
      var choice09b01a04 = new PIXI.Sprite.fromImage('../assets/buttons/d01a04turnBack.png');
      var choice09b01a05 = new PIXI.Sprite.fromImage('../assets/buttons/d01a05getAway.png');
      var choice09b01a06 = new PIXI.Sprite.fromImage('../assets/buttons/d01a06stare.png');
      var choice09b01b = new PIXI.Sprite.fromImage('../assets/buttons/d01bRight.png');
      var choice09b01b01 = new PIXI.Sprite.fromImage('../assets/buttons/goOn.png');
      var choice09b01b02 = new PIXI.Sprite.fromImage('../assets/buttons/keepWalking.png');
      var choice09b01b03 = new PIXI.Sprite.fromImage('../assets/buttons/d01b03goUpstairs.png');
      var choice09b01b04 = new PIXI.Sprite.fromImage('../assets/buttons/d01b04breathe.png');
      var choice09b01b05 = new PIXI.Sprite.fromImage('../assets/buttons/d01b05focus.png');
      var choice09b01b06 = new PIXI.Sprite.fromImage('../assets/buttons/d01b06lock.png');
      var choice09b01b07 = new PIXI.Sprite.fromImage('../assets/buttons/d01b07stare.png');
      var theEnd = new PIXI.Sprite.fromImage('../assets/buttons/theEnd.png');
      var relive = new PIXI.Sprite.fromImage('../assets/buttons/relive.png');
      // Create hit area
      var hotspot = new PIXI.Graphics();
      hotspot.beginFill(0x000000);
      hotspot.drawRect(text.x, text.y, text.width, text.height);
      hotspot.endFill();
      hotspot.alpha = 0;
      hotspot
        .on('mouseover', function(){
          TweenMax.to(cursor, .5, {
            pixi: { scaleX: 4, scaleY: 4, lineWidth: .1, lineColor: 0xaaaaaa, ease: Linear.easeOut }
          });
        })
        .on('mouseout', function(){
          TweenMax.to(cursor, .5, {
            pixi: { scaleX: 1, scaleY: 1, lineWidth: 2, lineColor: 0xffffff, ease: Linear.easeOut }
          });
        });

      // Set text and buttons position and initial states
      text.anchor.x = text.anchor.y = choice01.anchor.x = choice03.anchor.x = choice04.anchor.x = choice05a01.anchor.x = choice06.anchor.x = choice07.anchor.x = choice08.anchor.x = choice09.anchor.x = choice09a01.anchor.x = choice09a02.anchor.x = choice09a03a01.anchor.x = choice09a03a02.anchor.x = choice09a03b01.anchor.x = choice09a03b02.anchor.x = choice09a03b03.anchor.x = choice09a03b04.anchor.x = choice09a03b05.anchor.x = choice09a03b06.anchor.x = choice09b01a01.anchor.x = choice09b01a02.anchor.x = choice09b01a03.anchor.x = choice09b01a04.anchor.x = choice09b01a05.anchor.x = choice09b01a06.anchor.x = choice09b01b01.anchor.x = choice09b01b02.anchor.x = choice09b01b03.anchor.x = choice09b01b04.anchor.x = choice09b01b05.anchor.x = choice09b01b06.anchor.x = choice09b01b07.anchor.x = theEnd.anchor.x = .5;

      text.x = choice01.x = choice03.x = choice04.x = choice05a01.x = choice06.x = choice07.x = choice08.x = choice09.x = choice09a01.x = choice09a02.x = choice09a03a01.x = choice09a03a02.x = choice09a03b01.x = choice09a03b02.x = choice09a03b03.x = choice09a03b04.x = choice09a03b05.x = choice09a03b06.x = choice09b01a01.x = choice09b01a02.x = choice09b01a03.x = choice09b01a04.x = choice09b01a05.x = choice09b01a06.x = choice09b01b01.x = choice09b01b02.x = choice09b01b03.x = choice09b01b04.x = choice09b01b05.x = choice09b01b06.x = choice09b01b07.x = hotspot.x = theEnd.x = renderer.view.width / 2;

      text.y = hotspot.y = renderer.view.height / 2 - text.height / 2;

      choice02a.x = choice05a.x = choice09a.x = choice09a03a.x = choice09b01a.x = renderer.view.width / 2 - text.width / 2;

      choice02b.x = choice05b.x = choice09b.x = choice09b.x = choice09a03b.x = choice09b01b.x = renderer.view.width / 2 + text.width / 2;

      choice02b.anchor.x = choice05b.anchor.x = choice09b.anchor.x = choice09a03b.anchor.x = choice09b01b.anchor.x = 1;

      hotspot.pivot.set(hotspot.width/2, hotspot.height/2);

      text.resolution = 4;

      // Set initial alpha to 0
      text.alpha = choice01.alpha = choice02a.alpha = choice02b.alpha = choice03.alpha = choice04.alpha = choice05a.alpha = choice05a01.alpha = choice05b.alpha = choice06.alpha = choice07.alpha = choice08.alpha = choice09.alpha = choice09a.alpha = choice09b.alpha = choice09a01.alpha = choice09a02.alpha = choice09a03a01.alpha = choice09a03a02.alpha = choice09a03b01.alpha = choice09a03b02.alpha = choice09a03b03.alpha = choice09a03b04.alpha = choice09a03b05.alpha = choice09a03b06.alpha = choice09b01a01.alpha = choice09b01a02.alpha = choice09b01a03.alpha = choice09b01a04.alpha = choice09b01a05.alpha = choice09b01a06.alpha = choice09b01b01.alpha = choice09b01b02.alpha = choice09b01b03.alpha = choice09b01b04.alpha = choice09b01b05.alpha = choice09b01b06.alpha = choice09b01b07.alpha = choice09a03a.alpha = choice09a03b.alpha = choice09b01a.alpha = choice09b01b.alpha = theEnd.alpha = 0;

      // Button position.y function
      function btnY(choice) {
        choice.y = text.y + text.height / 2 + choice.height;
      }

      // Set flag variables
      var showButtons01 = true;

      // Create ripples array
      var ripples = [];

      function updateRipple() {
        requestAnimationFrame(updateRipple);
        // Update ripples
        for(var i=0; i<ripples.length; i++) {
          ripples[i].update();
        }
      }

      // Create ripple function
      function Ripple(x, y) {
        // Ripple texture map
        this.sprite = new PIXI.Sprite.fromImage('../assets/textures/ripple.png');
        this.sprite.anchor.set(0.5);
        this.sprite.position.set(x, y);
        this.sprite.scale.set(0);
        stage.addChild(this.sprite);
        // Add displacement filter
        this.filter = new PIXI.filters.DisplacementFilter(this.sprite);
      }

      // Animate each ripple
      Ripple.prototype.update = function() {
        if(inBathtub) {
          this.sprite.scale.x += 0.05;
          this.sprite.scale.y += 0.05;
          if(this.filter.scale.x > 0){
            this.filter.scale.x += -.3;
            this.filter.scale.y += -.3;
          }
        }
      }

      focus = new PIXI.sound.Sound.from( { url: '../assets/audio/voices/focus.mp3', volume: 1 } );
      bathtub = new PIXI.Sprite.fromImage('../assets/img/bathtub.jpg');
      fullSprite(bathtub);
      // Add elements to scene
      scene01.addChild(hotspot,bathtub,text,choice01);
      // Set flag variable
      var inBathtub = false;
      // Init ripples
      updateRipple();
      var focusIn = new PIXI.filters.BlurFilter();
      scene01.filters = [focusIn];
      requestAnimationFrame(blurIn);
      var amount = 4;
      function blurIn() {
        if(amount > 0) {
          amount -= 0.05;
          focusIn.blur = amount;
          requestAnimationFrame(blurIn);
        } else {
          hotspot.interactive = true;
          inBathtub = true;
        }
      }
      TweenMax.to(bathtub, 3, { alpha: .8, onComplete: function(){ setTimeout(function(){ focus.play() }, 500); } });
      TweenMax.to(text, 3, { alpha: 1 });
      // Watch mousedown event
      $(document).on('mousedown', function(ev) {
        setTimeout(function(){
          if(ripples.length > 2) {
            ripples.shift();
          }
        }, 5000);
        // Only allow 3 ripples in the array, for performance matters
        if(inBathtub == true && ripples.length < 5) {
          if(showButtons01 == true) {
            showButtons01 = false;
            btnY(choice01);
            choice01.interactive = true;
            TweenMax.to(choice01, 3, { alpha: .2 });
          }
          // Generate a random number between 1 and 4, which are the four different drop sounds
          var randDrop = Math.floor(Math.random()*(4-1+1)+1);
          waterDrops.play(''+randDrop+'');
          // Push ripple
          ripples.push(new Ripple(ev.clientX, ev.clientY));
          // Apply displacement map
          scene01.filters = ripples.map(function(f) { return f.filter; });
        }
      });

      // Set drops sprite times
      var sprites = {
          '1': { start: 0, end: 2.4 },
          '2': { start: 2.5, end: 4.9 },
          '3': { start: 5, end: 7.4 },
          '4': { start: 7.5, end: 10 },
      };

      // Add the sprites data when creating sounds
      var waterDrops = PIXI.sound.Sound.from({
          url: '../assets/audio/waterDrops.mp3',
          sprites: sprites,
          volume: .5
      });
      //waterDrops.filters = [new PIXI.sound.filters.ReverbFilter(3,15)];

      // Choice 01
      choice01
        .on('mouseover', function(){ choiceOver(choice01) })
        .on('mouseout', function(){ choiceOut(choice01) })
        .on('mousedown', function(){
          towel = new PIXI.Sprite.fromImage('../assets/img/towel.jpg');
          fullSprite(towel);
          choiceDown(choice01);
          TweenMax.to([choice01,text,bathtub,hotspot], 2, { alpha: 0, onComplete:
            function() {
              towel.filters = [towelDisplace];
              scene01.filters = '';
              text.text = story02;
              TweenMax.to(text, 2, { alpha: 1 });
              scene01.removeChild(choice01,hotspot,bathtub,text);
              scene01.addChild(choice02a,choice02b,text);
              inBathtub = false;
              btnY(choice02a);
              btnY(choice02b);
              choice02a.interactive = choice02b.interactive = true;
              TweenMax.to(towel, 3, { alpha: .4 });
              TweenMax.to([choice02a,choice02b], 3, { alpha: .2 });
              // Destroy textures
              //bathtubSourceVid.destroy(true);
              //bathtubVid.destroy(true);
              bathtub.destroy(true);
              ripples = '';
            }
          });
          scene01.addChild(towel,towelSprite);
          towelTouch = true;
        });

        // Touching towel
        var towelTouch = false;
        var towelSprite = new PIXI.Sprite.fromImage('../assets/textures/towelMap.jpg');
        towelSprite.anchor.x = towelSprite.anchor.y = .5;
        var towelDisplace = new PIXI.filters.DisplacementFilter(towelSprite);

        var movingTowel = $(document).on('mousemove', function(ev){
          if(towelTouch) {
            towelSprite.x = ev.clientX;
            towelSprite.y = ev.clientY;
          }
        });

        // Choice 02a
        choice02a
          .on('mouseover', function(){ choiceOver(choice02a) })
          .on('mouseout', function(){ choiceOut(choice02a) })
          .on('mousedown', function(){
            document.removeEventListener('mousemove', movingTowel, false);
            choiceDown(choice02a);
            choiceDown(choice02b);
            TweenMax.to(turmoil, 15, { volume: 0, onComplete: function(){ turmoil.pause() } });
            escape.play();
            TweenMax.to(escape, 35, { volume: .5 } );
            TweenMax.to([towel,choice02a,text,choice02b], 2, { alpha: 0, onComplete:
              function() {
                towelTouch = false;
                text.text = story02a;
                TweenMax.to(text, 2, { alpha: 1 });
                scene01.removeChild(towel,choice02a,choice02b);
                scene01.addChild(choice03,tilingSprite);
                text.filters = choice03.filters = [focusing];
                requestAnimationFrame(blurSine);
                btnY(choice03);
                choice03.interactive = true;
                TweenMax.to(choice03, 3, { alpha: .2 });
                //Destroy textures
                towel.destroy(true);
                towelSprite.destroy(true);
              }
            })
          });

          var focusing = new PIXI.filters.BlurFilter();
          var count = 0;

          function blurSine() {
            count += 0.05;
            var blurAmount = Math.sin(count) * 1.5;
            focusing.blur = blurAmount;
            requestAnimationFrame(blurSine);
          }
          function blurSineHeavy() {
            count += 0.05;
            var blurAmount = Math.sin(count) * 20;
            focusing.blur = blurAmount;
            requestAnimationFrame(blurSineHeavy);
          }

          // Choice 02b
          choice02b
            .on('mouseover', function(){ choiceOver(choice02b) })
            .on('mouseout', function(){ choiceOut(choice02b) })
            .on('mousedown', function(){
              document.removeEventListener('mousemove', movingTowel, false);
              blindsSourceVid = new PIXI.Texture.fromVideo('../assets/video/blinds.mp4');
              var blindsSource = blindsSourceVid.baseTexture.source;
              blindsVid = new PIXI.Sprite(blindsSourceVid);
              blindsSource.load();
              fullSprite(blindsVid);
              choiceDown(choice02b);
              choiceDown(choice02a);
              TweenMax.to(turmoil, 15, { volume: 0, onComplete: function(){ turmoil.pause() } });
              escape.play();
              TweenMax.to(escape, 35, { volume: .5 } );
              TweenMax.to([towel,choice02a,text,choice02b], 2, { alpha: 0, onComplete:
                function() {
                  blindsSource.currentTime = 0;
                  text.text = story02b;
                  scene01.removeChild(towel,text,choice02a,choice02b);
                  scene01.addChild(blindsVid,choice03,text);
                  TweenMax.to([blindsVid,choice03,text], 2, { alpha: 1 });
                  blindsSource.play();
                  btnY(choice03);
                  choice03.interactive = true;
                  TweenMax.to(choice03, 3, { alpha: .2 });
                }
              })
            });

      // Choice 03
      choice03
        .on('mouseover', function(){ choiceOver(choice03) })
        .on('mouseout', function(){ choiceOut(choice03) })
        .on('mousedown', function(){
          switchOn = new PIXI.Sprite.fromImage('../assets/img/switchOn.jpg');
          switchOff = new PIXI.Sprite.fromImage('../assets/img/switchOff.jpg');
          fullSprite(switchOn);
          fullSprite(switchOff);
          notSafe = new PIXI.sound.Sound.from( { url: '../assets/audio/voices/notSafe.mp3', volume: 1 } );
          flipOn = PIXI.sound.Sound.from({
              url: '../assets/audio/on.mp3',
              volume: .8
          });
          flipOff = PIXI.sound.Sound.from({
              url: '../assets/audio/off.mp3',
              volume: .8
          });
          choiceDown(choice03);
          TweenMax.to([blindsVid,choice03,text], 2, { alpha: 0, onComplete:
            function() {
              text.text = story03;
              text.filters = '';
              scene01.removeChild(choice03,text);
              tilingSprite.alpha = .7;
              switchOn.alpha = switchOff.alpha = 1;
              switchContainer.alpha = 0;
              switchContainer.addChild(switchOn,switchOff);
              scene01.addChild(switchContainer,choice04,text);
              text.x = renderer.view.width / 3;
              choice04.anchor.x = 0;
              choice04.x = text.x - text.width / 2;
              TweenMax.to([switchContainer,text], 3, { alpha: 1, onComplete:
                function() { switchFlip = true }
              });
              btnY(choice04);
              choice04.interactive = true;
              TweenMax.to(choice04, 3, { alpha: .2 });
              setTimeout(function(){
                notSafe.play()
              }, 2500);
              // Destroy textures
              if(blindsVid != undefined) {
                blindsSourceVid.destroy(true);
                blindsVid.destroy(true);
              }
            }
          })
        });

        var switchContainer = new PIXI.Container();

        var switchFlip = false;

        // Flip switch
        var flippedOn = true;
        var flipSwitch = $(document).on('mousemove', function(ev){
          if(switchFlip && ev.clientY < renderer.view.height / 2 && flippedOn) {
            TweenMax.to(switchOff, .3, { alpha: 0 });
            flipOn.play();
            flippedOn = false;
          }
          if(switchFlip && ev.clientY > renderer.view.height / 2 && !flippedOn) {
            TweenMax.to(switchOff, .3, { alpha: 1 });
            flipOff.play();
            flippedOn = true;
          }
        });

      // Choice 04
      choice04
        .on('mouseover', function(){ choiceOver(choice04) })
        .on('mouseout', function(){ choiceOut(choice04) })
        .on('mousedown', function(){
          document.removeEventListener('mousemove', flipSwitch, false);
          room = new PIXI.Sprite.fromImage('../assets/img/room.jpg');
          fullSprite(room);
          choiceDown(choice04);
          switchFlip = false;
          TweenMax.to([switchContainer,choice04,text], 2, { alpha: 0, onComplete:
            function() {
              text.text = story04;
              text.x = renderer.view.width / 2;
              scene01.removeChild(switchContainer,choice04,text);
              scene01.addChild(room,choice05a,choice05b,text);
              TweenMax.to([room,text], 2, { alpha: 1 });
              btnY(choice05a);
              btnY(choice05b);
              choice05a.interactive = choice05b.interactive = true;
              TweenMax.to([choice05a,choice05b], 3, { alpha: .2 });
              // Destroy switch audio
              flipOn.destroy(true);
              flipOff.destroy(true);
            }
          })
        });

          // Choice 05a
          choice05a
            .on('mouseover', function(){ choiceOver(choice05a) })
            .on('mouseout', function(){ choiceOut(choice05a) })
            .on('mousedown', function(){
              rub = PIXI.sound.Sound.from({ url: '../assets/audio/rub.mp3', volume: .4 });
              rub.loop = true;
              dustOff = PIXI.sound.Sound.from({
                  url: '../assets/audio/voices/dustOff.mp3',
                  volume: 1
              });
              choiceDown(choice05a);
              choiceDown(choice05b);
              TweenMax.to([room,choice05a,choice05b,text], 2, { alpha: 0, onComplete:
                function() {
                  scene01.removeChild(room,choice05a,choice05b);
                  dust.alpha = pictureFrame.alpha = renderTextureSprite.alpha = 1;
                  pictureContainer.alpha = 0;
                  pictureContainer.addChild(dust,pictureFrame,renderTextureSprite);
                  scene01.addChild(pictureContainer,choice05a01);
                  TweenMax.to([pictureContainer], 4, { alpha: 1 });
                  dustyFrame = true;
                  dust.interactive = true;
                  setTimeout(function(){
                    dustOff.play();
                  }, 2000);
                }
              })
            });

            // Interactive picture frame

            var pictureContainer = new PIXI.Container();

            // Set flag variables
            var dustyFrame = false;
            var showDustButton = true;

            // Set up finger brush
            const finger = new PIXI.Graphics();
            finger.beginFill(0xffffff);
            finger.drawCircle(0, 0, 40);
            finger.endFill();
            // Load dust and actual frame
            const dust = new PIXI.Sprite.fromImage('../assets/img/dust.jpg');
            const pictureFrame = new PIXI.Sprite.fromImage('../assets/img/picture-frame.jpg');
            // Center them
            fullSprite(dust);
            fullSprite(pictureFrame);
            // Feather edges
            var fingerFeather = new PIXI.filters.BlurFilter();
            finger.filters = [fingerFeather];
            fingerFeather.blur = 30;
            // Declare render texture to create the mask
            const renderTexture = PIXI.RenderTexture.create(renderer.view.width, renderer.view.height);
            const renderTextureSprite = new PIXI.Sprite(renderTexture);
            pictureFrame.mask = renderTextureSprite;
            // Mouse events
            dust.on('mousedown', mouseDown);
            dust.on('mouseup', mouseUp);
            dust.on('mousemove', mouseMove);
            // Dragging mouse flag
            let dragging = false;
            // On mouse/finger move, clean dust to reveal frame
            function mouseMove(event) {
              if (dragging && dustyFrame) {
                finger.position.copy(event.data.global);
                renderer.render(finger, renderTexture, false, null, false);
                // Show button
                if(showDustButton) {
                  showDustButton = false;
                  choice05a01.interactive = true;
                  choice05a01.y = renderer.view.height - choice05a01.height * 4;
                  TweenMax.to([choice05a01], 3, { alpha: .2 });
                }
              }
            }
            // On mouse/finger down, start revealing
            function mouseDown(event) {
              if(dustyFrame) {
                dragging = true;
                mouseMove(event);
                rub.play();
              }
            }
            // On mouse/finger up, stop revealing
            function mouseUp(event) {
              if(dustyFrame) {
                rub.pause();
                dragging = false;
              }
            }

          // Choice 05a01
          choice05a01
            .on('mouseover', function(){ choiceOver(choice05a01) })
            .on('mouseout', function(){ choiceOut(choice05a01) })
            .on('mousedown', function(){
              smokeSourceVid = new PIXI.Texture.fromVideo('../assets/video/smoking.mp4');
              var smokeSource = smokeSourceVid.baseTexture.source;
              smokeVid = new PIXI.Sprite(smokeSourceVid);
              smokeSource.loop = true;
              fullSprite(smokeVid);
              lighter = new PIXI.sound.Sound.from( { url: '../assets/audio/cigarette.mp3', volume: 1 } );
              choiceDown(choice05a01);
              TweenMax.to([pictureContainer,choice05a01], 2, { alpha: 0, onComplete:
                function() {
                  text.text = story05;
                  scene01.removeChild(text,room,choice05a,choice05b);
                  scene01.addChild(smokeVid,choice06,text);
                  smokeSource.play();
                  TweenMax.to(text, 2, { alpha: 1 });
                  TweenMax.to(smokeVid, 2, { alpha: .5 });
                  btnY(choice06);
                  choice06.interactive = true;
                  TweenMax.to(choice06, 3, { alpha: .2 });
                  lighter.play();
                }
              })
            });

          // Choice 05b
          choice05b
            .on('mouseover', function(){ choiceOver(choice05b) })
            .on('mouseout', function(){ choiceOut(choice05b) })
            .on('mousedown', function(){
              smokeSourceVid = new PIXI.Texture.fromVideo('../assets/video/smoking.mp4');
              var smokeSource = smokeSourceVid.baseTexture.source;
              smokeVid = new PIXI.Sprite(smokeSourceVid);
              smokeSource.loop = true;
              fullSprite(smokeVid);
              lighter = new PIXI.sound.Sound.from( { url: '../assets/audio/cigarette.mp3', volume: 2 } );
              choiceDown(choice05b);
              choiceDown(choice05a);
              TweenMax.to([room,choice05a,choice05b,text], 2, { alpha: 0, onComplete:
                function() {
                  text.text = story05;
                  scene01.removeChild(text,room,choice05a,choice05b);
                  scene01.addChild(smokeVid,choice06,text);
                  smokeSource.play();
                  TweenMax.to(text, 2, { alpha: 1 });
                  TweenMax.to(smokeVid, 2, { alpha: .5 });
                  btnY(choice06);
                  choice06.interactive = true;
                  TweenMax.to(choice06, 3, { alpha: .2 });
                  lighter.play();
                }
              })
            });

      // Choice 06
      choice06
        .on('mouseover', function(){ choiceOver(choice06) })
        .on('mouseout', function(){ choiceOut(choice06) })
        .on('mousedown', function(){
          exhale = new PIXI.sound.Sound.from( { url: '../assets/audio/exhale.mp3', volume: .25 } );
          exhale.filters = [new PIXI.sound.filters.EqualizerFilter(15, 15, 15, 15, 0, 0, 0, 0, 0, 0)];
          doorBang = new PIXI.sound.Sound.from( { url: '../assets/audio/doorBang.mp3', volume: 1 } );
          dammit = new PIXI.sound.Sound.from( { url: '../assets/audio/voices/dammit.mp3', volume: 1 } );
          choiceDown(choice06);
          exhale.play();
          setTimeout(function(){
            doorBang.play();
          }, 3000);
          setTimeout(function(){
            dammit.play();
          }, 3750);
          TweenMax.to([smokeVid,choice06,text], 2, { alpha: 0, onComplete:
            function() {
              text.text = story06;
              TweenMax.to(text, 2, { alpha: 1 });
              scene01.removeChild(smokeVid,choice06);
              scene01.addChild(choice07,tilingSprite);
              texture.alpha = .75;
              btnY(choice07);
              choice07.interactive = true;
              TweenMax.to([choice07], 3, { alpha: .2 });
              // Destroy textures
              smokeSourceVid.destroy(true);
              smokeVid.destroy(true);
            }
          })
        });

      // Choice 07
      choice07
        .on('mouseover', function(){ choiceOver(choice07) })
        .on('mouseout', function(){ choiceOut(choice07) })
        .on('mousedown', function(){
          unlock = new PIXI.sound.Sound.from( { url: '../assets/audio/unlock.mp3', volume: 1 } );
          dontGo = new PIXI.sound.Sound.from( { url: '../assets/audio/voices/dontGo.mp3', volume: 1 } );
          peephole = new PIXI.Sprite.fromImage('../assets/img/peephole.jpg');
          fullSprite(peephole);
          choiceDown(choice07);
          TweenMax.to([choice07,text], 2, { alpha: 0, onComplete:
            function() {
              text.text = story07;
              scene01.removeChild(text,choice07,tilingSprite);
              scene01.addChild(peephole,choice08,text);
              btnY(choice08);
              choice08.interactive = true;
              TweenMax.to(peephole, 2, { alpha: .8 });
              TweenMax.to(text, 2, { alpha: 1, onComplete: function(){ unlock.play(); }});
              TweenMax.to(choice08, 3, { alpha: .2 });
              setTimeout(function(){
                dontGo.play();
              }, 3500);
            }
          })
        });

      // Choice 08
      choice08
        .on('mouseover', function(){ choiceOver(choice08) })
        .on('mouseout', function(){ choiceOut(choice08) })
        .on('mousedown', function(){
          openIt = new PIXI.sound.Sound.from( { url: '../assets/audio/voices/openIt.mp3', volume: 1 } );
          choiceDown(choice08);
          TweenMax.to([choice08,text], 2, { alpha: 0, onComplete:
            function() {
              text.text = story08;
              TweenMax.to(text, 2, { alpha: 1 });
              scene01.removeChild(choice08);
              scene01.addChild(choice09);
              btnY(choice09);
              choice09.interactive = true;
              TweenMax.to(choice09, 3, { alpha: .2 });
              setTimeout(function(){
                openIt.play();
              }, 1500);
            }
          })
        });

      // Choice 09
      choice09
        .on('mouseover', function(){ choiceOver(choice09) })
        .on('mouseout', function(){ choiceOut(choice09) })
        .on('mousedown', function(){
          creak = new PIXI.sound.Sound.from( { url: '../assets/audio/creak.mp3', volume: 1 } );
          avoid = new PIXI.sound.Sound.from( { url: '../assets/audio/voices/avoid.mp3', volume: 1 } );
          openedDoor = new PIXI.Sprite.fromImage('../assets/img/openedDoor.jpg');
          fullSprite(openedDoor);
          choiceDown(choice09);
          TweenMax.to([peephole,choice09,text], 2, { alpha: 0, onComplete:
            function() {
              creak.play();
              text.text = story09;
              scene01.removeChild(peephole,choice09,text);
              scene01.addChild(openedDoor,choice09a,choice09b,text);
              btnY(choice09a);
              btnY(choice09b);
              choice09a.interactive = choice09b.interactive = true;
              TweenMax.to(openedDoor, 2, { alpha: .8 });
              TweenMax.to(text, 2, { alpha: 1 });
              TweenMax.to([choice09a,choice09b], 3, { alpha: .2 });
              setTimeout(function(){
                avoid.play();
              }, 2500);
            }
          })
        });

          // Choice 09a

          choice09a
            .on('mouseover', function(){ choiceOver(choice09a) })
            .on('mouseout', function(){ choiceOut(choice09a) })
            .on('mousedown', function(){
              doSmthn = new PIXI.sound.Sound.from( { url: '../assets/audio/voices/doSmthn.mp3', volume: 1 } );
              move = new PIXI.sound.Sound.from( { url: '../assets/audio/voices/move.mp3', volume: 1 } );
              corridorWall = new PIXI.Sprite.fromImage('../assets/img/corridorWall.jpg');
              fullSprite(corridorWall);
              flashlightOn = true;
              choiceDown(choice09a);
              choiceDown(choice09b);
              var cursorPos = renderer.plugins.interaction.mouse.global.x;
              TweenMax.to([openedDoor,choice09a,choice09b,text], 2, { alpha: 0, onComplete:
                function() {
                  // Voice tells the user to do something if he doesn't move
                  setTimeout(function() {
                    var newCursorPos = renderer.plugins.interaction.mouse.global.x;
                    if (cursorPos == newCursorPos) {
                      doSmthn.play();
                    }
                  }, 1000);
                  setTimeout(function() {
                    var newCursorPos2 = renderer.plugins.interaction.mouse.global.x;
                    if (cursorPos == newCursorPos2) {
                      move.play();
                    }
                  }, 5000);
                  text.text = story09a;
                  scene01.removeChild(openedDoor,choice09a,choice09b);
                  renderTextureSprite2.alpha = 0;
                  scene01.mask = renderTextureSprite2;
                  scene01.addChild(corridorWall,renderTextureSprite2,text,choice09a01);
                  TweenMax.to([corridorWall,renderTextureSprite2,text], 2, { alpha: 1 });
                  btnY(choice09a01);
                  renderTextureSprite2.interactive = choice09a01.interactive = true;
                  TweenMax.to(choice09a01, 3, { alpha: .2 });
                }
              })
            });

            // Turn on flashlight

            var flashlightOn = false;

            // Set up flashlight light
            const flashlight = new PIXI.Graphics();
            flashlight.beginFill(0xffffff);
            flashlight.drawCircle(0, 0, 300);
            flashlight.endFill();

            // Feather edges
            var flashlightFeather = new PIXI.filters.BlurFilter();
            flashlight.filters = [flashlightFeather];
            flashlightFeather.blur = 60;
            // Declare render texture to create the mask
            const renderTexture2 = PIXI.RenderTexture.create(renderer.view.width, renderer.view.height);
            const renderTextureSprite2 = new PIXI.Sprite(renderTexture2);
            // Mouse events
            renderTextureSprite2.on('mousemove', mouseMove2);
            // On mouse/flashlight move, light up the scene
            function mouseMove2(event) {
              if (flashlightOn) {
                flashlight.position.copy(event.data.global);
                renderer.render(flashlight, renderTexture2, true, null, false);
              }
            }

              // Choice 09a01
              choice09a01
                .on('mouseover', function(){ choiceOver(choice09a01) })
                .on('mouseout', function(){ choiceOut(choice09a01) })
                .on('mousedown', function(){
                  theHellOut = new PIXI.sound.Sound.from( { url: '../assets/audio/voices/theHellOut.mp3', volume: 1 } );
                  roomNoSourceVid = new PIXI.Texture.fromVideo('../assets/video/roomNo.mp4');
                  var roomNoSource = roomNoSourceVid.baseTexture.source;
                  roomNoVid = new PIXI.Sprite(roomNoSourceVid);
                  roomNoSource.loop = true;
                  fullSprite(roomNoVid);
                  choiceDown(choice09a01);
                  TweenMax.to(escape, 15, { volume: 0, onComplete: function(){ escape.pause() } });
                  insanity.play();
                  TweenMax.to(insanity, 15, { volume: .75 } );
                  TweenMax.to([choice09a01,text], 2, { alpha: 0, onComplete:
                    function() {
                      text.text = story09a01;
                      scene01.removeChild(text,choice09a01);
                      scene01.addChild(roomNoVid,choice09a02,text);
                      text.y = text.y + 150;
                      btnY(choice09a02);
                      TweenMax.to([roomNoVid,text], 2, { alpha: 1, onComplete: function() {
                        roomNoSource.play();
                        TweenMax.to(corridorWall, 2, { alpha: 0, onComplete: function() {
                          scene01.removeChild(corridorWall);
                        } });
                      } });
                      choice09a02.interactive = true;
                      TweenMax.to(choice09a02, 3, { alpha: .2 });
                      setTimeout(function(){
                        theHellOut.play();
                      }, 750);
                    }
                  })
                });

              // Choice 09a02
              choice09a02
                .on('mouseover', function(){ choiceOver(choice09a02) })
                .on('mouseout', function(){ choiceOut(choice09a02) })
                .on('mousedown', function(){
                  walls = new PIXI.sound.Sound.from( { url: '../assets/audio/walls.mp3', volume: 0 } );
                  walls.loop = true;
                  goFaster = new PIXI.sound.Sound.from( { url: '../assets/audio/voices/goFaster.mp3', volume: 1 } );
                  hallway = new PIXI.Sprite.fromImage('../assets/img/hallway.jpg');
                  fullSprite(hallway);
                  choiceDown(choice09a02);
                  TweenMax.to([choice09a02,text], 2, { alpha: 0, onComplete:
                    function() {
                      walls.play();
                      TweenMax.to(walls, 2, { volume: .2 });
                      hallway.filters = [motionBlur];
                      text.text = story09a02;
                      text.y = text.y - 150;
                      scene01.removeChild(choice09a02,text);
                      scene01.addChild(hallway,choice09a03a,choice09a03b,text);
                      TweenMax.to([hallway,text], 2, { alpha: 1, onComplete: function() {
                        TweenMax.to(roomNoVid, 1, { alpha: 0, onComplete: function() {
                          scene01.removeChild(roomNoVid);
                          // Destroy textures
                          roomNoSourceVid.destroy(true);
                          roomNoVid.destroy(true);
                        } });
                      } });
                      runMotion = TweenMax.fromTo(hallway, .25, {y: hallway.y - 5}, {y: hallway.y + 5, ease:Linear.easeInOut, repeat: -1, yoyo: true});
                      btnY(choice09a03a);
                      btnY(choice09a03b);
                      choice09a03a.interactive = choice09a03b.interactive = true;
                      TweenMax.to([choice09a03a,choice09a03b], 3, { alpha: .2 });
                      setTimeout(function(){
                        goFaster.play();
                      }, 750);
                    }
                  })
                });

                // Motion blur

                var motionBlur = new PIXI.filters.ZoomBlurFilter();
                motionBlur.strength = .25;
                motionBlur.center.x = renderer.view.width / 2;
                motionBlur.center.y = renderer.view.height / 2;
                motionBlur.innerRadius = 200;

                var runMotion = '';

                  // Choice 09a03a
                  choice09a03a
                    .on('mouseover', function(){ choiceOver(choice09a03a) })
                    .on('mouseout', function(){ choiceOut(choice09a03a) })
                    .on('mousedown', function(){
                      wasClose = new PIXI.sound.Sound.from( { url: '../assets/audio/voices/wasClose.mp3', volume: 1 } );
                      choiceDown(choice09a03a);
                      choiceDown(choice09a03b);
                      TweenMax.to([choice09a03a,choice09a03b,text], 2, { alpha: 0, onComplete:
                        function() {
                          TweenMax.to(walls, 2, { volume: 0, onComplete: function(){ walls.pause(); } });
                          text.text = story09a02a;
                          TweenMax.to(text, 2, { alpha: 1 });
                          TweenMax.to(motionBlur, 2, { strength: 0 });
                          runMotion.pause();
                          scene01.removeChild(choice09a03a,choice09a03b);
                          scene01.addChild(choice09a03a01);
                          btnY(choice09a03a01);
                          choice09a03a01.interactive = true;
                          TweenMax.to(choice09a03a01, 3, { alpha: .2 });
                          setTimeout(function(){
                            wasClose.play();
                          }, 1500);
                        }
                      })
                    });

                  // Choice 09a03a01
                  choice09a03a01
                    .on('mouseover', function(){ choiceOver(choice09a03a01) })
                    .on('mouseout', function(){ choiceOut(choice09a03a01) })
                    .on('mousedown', function(){
                      brightLights = new PIXI.sound.Sound.from( { url: '../assets/audio/voices/brightLights.mp3', volume: 1 } );
                      lightBlinkSourceVid = new PIXI.Texture.fromVideo('../assets/video/lightBlink.mp4');
                      var lightBlinkSource = lightBlinkSourceVid.baseTexture.source;
                      lightBlinkVid = new PIXI.Sprite(lightBlinkSourceVid);
                      lightBlinkSource.load();
                      choiceDown(choice09a03a01);
                      TweenMax.to(insanity, 15, { volume: 0, onComplete: function(){ insanity.pause() } });
                      light.play();
                      TweenMax.to(light, 15, { volume: .75 } );
                      TweenMax.to([hallway,renderTextureSprite2,choice09a03a01,text], 2, { alpha: 0, onComplete:
                        function() {
                          lightBlinkSource.currentTime = 0;
                          flashlightOn = false;
                          scene01.mask = '';
                          text.text = story09a02a01;
                          scene01.removeChild(hallway,renderTextureSprite2,choice09a03a01,text);
                          scene01.addChild(lightBlinkVid,choice09a03a02,text);
                          fullSprite(lightBlinkVid);
                          TweenMax.to(lightBlinkVid, 1, { alpha: 1, onComplete: function() {
                            brightLights.play();
                            TweenMax.to(lightBlinkVid, 5, { alpha: .5 })
                          } });
                          lightBlinkSource.play();
                          TweenMax.to(text, 2, { alpha: 1 });
                          btnY(choice09a03a02);
                          choice09a03a02.interactive = true;
                          TweenMax.to(choice09a03a02, 3, { alpha: .2 });
                        }
                      })
                    });

                  // Choice 09a03a02
                  choice09a03a02
                    .on('mouseover', function(){ choiceOver(choice09a03a02) })
                    .on('mouseout', function(){ choiceOut(choice09a03a02) })
                    .on('mousedown', function(){
                      deepBreath = new PIXI.sound.Sound.from( { url: '../assets/audio/deepBreath.mp3', volume: 1 } );
                      whiteBg = true;
                      breathSourceVid = new PIXI.Texture.fromVideo('../assets/video/breath.mp4');
                      var breathSource = breathSourceVid.baseTexture.source;
                      breathVid = new PIXI.Sprite(breathSourceVid);
                      breathSource.load();
                      choiceDown(choice09a03a02);
                      TweenMax.to([lightBlinkVid,choice09a03a02,text], 2, { alpha: 0, onComplete:
                        function() {
                          text.text = story09a02a02;
                          scene01.removeChild(lightBlinkVid,choice09a03a02,text);
                          fullSprite(breathVid);
                          scene01.addChild(breathVid,text,theEnd);
                          TweenMax.to([breathVid,text], 2, { alpha: 1, onComplete: function() {
                            $('*').css({'cursor':'none'});
                            $('*').css({'cursor':'url("../assets/img/dotBk2.png") 2.5 2.5, auto'});
                            $('*').css({'cursor':'-webkit-image-set(url("../assets/img/dotBk2.png") 1x, url("../assets/img/dotBk.png") 2x) 2.5 2.5, auto'});
                            TweenMax.to(cursor, 1, {
                              pixi: { lineColor: 0x000000, ease: Linear.easeOut }
                            });
                          } });
                          breathSource.play();
                          setTimeout(function(){
                            deepBreath.play();
                          }, 2000);
                          // Destroy textures
                          lightBlinkSourceVid.destroy(true);
                          lightBlinkVid.destroy(true);
                          // THE END
                          setTimeout(function(){
                            theEnd.tint = 0x000000;
                            btnY(theEnd);
                            theEnd.interactive = true;
                            TweenMax.to(theEnd, 4, { alpha: 1 });
                          }, 5000);
                        }
                      })
                    });

                  // Choice 09a03b
                  choice09a03b
                    .on('mouseover', function(){ choiceOver(choice09a03b) })
                    .on('mouseout', function(){ choiceOut(choice09a03b) })
                    .on('mousedown', function(){
                      almostThere = new PIXI.sound.Sound.from( { url: '../assets/audio/voices/almostThere.mp3', volume: 1 } );
                      choiceDown(choice09a03b);
                      choiceDown(choice09a03a);
                      TweenMax.to([choice09a03a,choice09a03b,text], 2, { alpha: 0, onComplete:
                        function() {
                          TweenMax.to(walls, 2, { volume: .35 });
                          text.text = story09a02b;
                          runMotion = TweenMax.fromTo(hallway, .15, {y: hallway.y - 10}, {y: hallway.y + 10, ease:Linear.easeInOut, repeat: -1, yoyo: true});
                          runMotion = TweenMax.fromTo(hallway.scale, .15, {x: 4}, {x: .5, ease:Linear.easeInOut, repeat: -1, yoyo: true});
                          flashlightBlink = TweenMax.fromTo(flashlight.scale, .2, {x: 1, y: 1.2}, {x: .7, y: .5, ease:Linear.easeInOut, repeat: -1, yoyo: true});
                          motionBlur.strength = .75;
                          TweenMax.to(text, 2, { alpha: 1 });
                          scene01.removeChild(choice09a03a,choice09a03b);
                          scene01.addChild(choice09a03b01);
                          btnY(choice09a03b01);
                          choice09a03b01.interactive = true;
                          TweenMax.to(choice09a03b01, 3, { alpha: .2 });
                          setTimeout(function(){
                            almostThere.play();
                          }, 750);
                        }
                      })
                    });

                    // Shrinking and shaking

                    var flashlightBlink = '';

                  // Choice 09a03b01
                  choice09a03b01
                    .on('mouseover', function(){ choiceOver(choice09a03b01) })
                    .on('mouseout', function(){ choiceOut(choice09a03b01) })
                    .on('mousedown', function(){
                      wind = new PIXI.sound.Sound.from( { url: '../assets/audio/wind.mp3', volume: 0 } );
                      wind.loop = true;
                      noWayBack = new PIXI.sound.Sound.from( { url: '../assets/audio/voices/noWayBack.mp3', volume: 1 } );
                      moonlightSourceVid = new PIXI.Texture.fromVideo('../assets/video/moonlight.mp4');
                      var moonlightSource = moonlightSourceVid.baseTexture.source;
                      moonlightVid = new PIXI.Sprite(moonlightSourceVid);
                      moonlightSource.loop = true;
                      moonlightSource.load();
                      choiceDown(choice09a03b01);
                      TweenMax.to(insanity, 15, { volume: 0, onComplete: function(){ insanity.pause() } });
                      dark.play();
                      TweenMax.to(dark, 15, { volume: .75 } );
                      TweenMax.to([hallway,renderTextureSprite2,choice09a03b01,text], 2, { alpha: 0, onComplete:
                        function() {
                          TweenMax.to(walls, 2, { volume: 0, onComplete: function(){ walls.pause(); } });
                          text.text = story09a02b01;
                          scene01.mask = '';
                          scene01.removeChild(hallway,renderTextureSprite2,choice09a03b01,text);
                          fullSprite(moonlightVid);
                          scene01.addChild(moonlightVid,choice09a03b02,text);
                          TweenMax.to(text, 2, { alpha: 1 });
                          TweenMax.to(moonlightVid, 2, { alpha: .8 });
                          moonlightSource.play();
                          btnY(choice09a03b02);
                          choice09a03b02.interactive = true;
                          TweenMax.to(choice09a03b02, 3, { alpha: .2 });
                          setTimeout(function(){
                            noWayBack.play();
                          }, 3000);
                          wind.play();
                          TweenMax.to(wind, 2, { volume: 1 });
                          // Destroy textures
                          renderTextureSprite2.destroy(true);
                        }
                      })
                    });

                  // Choice 09a03b02
                  choice09a03b02
                    .on('mouseover', function(){ choiceOver(choice09a03b02) })
                    .on('mouseout', function(){ choiceOut(choice09a03b02) })
                    .on('mousedown', function(){
                      thePhone = new PIXI.sound.Sound.from( { url: '../assets/audio/voices/thePhone.mp3', volume: 1 } );
                      forestSourceVid = new PIXI.Texture.fromVideo('../assets/video/forest.mp4');
                      var forestSource = forestSourceVid.baseTexture.source;
                      forestVid = new PIXI.Sprite(forestSourceVid);
                      forestSource.loop = true;
                      forestSource.load();
                      choiceDown(choice09a03b02);
                      TweenMax.to([moonlightVid,choice09a03b02,text], 2, { alpha: 0, onComplete:
                        function() {
                          text.text = story09a02b02;
                          scene01.removeChild(moonlightVid,choice09a03b02,text);
                          fullSprite(forestVid);
                          scene01.addChild(forestVid,choice09a03b03,text);
                          TweenMax.to([text,forestVid], 2, { alpha: 1 });
                          forestSource.play();
                          btnY(choice09a03b03);
                          choice09a03b03.interactive = true;
                          TweenMax.to(choice09a03b03, 3, { alpha: .2 });
                          setTimeout(function(){
                            thePhone.play();
                          }, 3500);
                          // Destroy textures
                          moonlightSourceVid.destroy(true);
                          moonlightVid.destroy(true);
                        }
                      })
                    });

                  // Choice 09a03b03
                  choice09a03b03
                    .on('mouseover', function(){ choiceOver(choice09a03b03) })
                    .on('mouseout', function(){ choiceOut(choice09a03b03) })
                    .on('mousedown', function(){
                      itsGone = new PIXI.sound.Sound.from( { url: '../assets/audio/voices/itsGone.mp3', volume: 1 } );
                      shadowSourceVid = new PIXI.Texture.fromVideo('../assets/video/shadow.mp4');
                      var shadowSource = shadowSourceVid.baseTexture.source;
                      shadowVid = new PIXI.Sprite(shadowSourceVid);
                      shadowSource.loop = true;
                      shadowSource.load();
                      choiceDown(choice09a03b03);
                      TweenMax.to([forestVid,choice09a03b03,text], 2, { alpha: 0, onComplete:
                        function() {
                          text.text = story09a02b03;
                          scene01.removeChild(forestVid,choice09a03b03,text);
                          fullSprite(shadowVid);
                          scene01.addChild(shadowVid,choice09a03b04,text);
                          TweenMax.to(text, 2, { alpha: 1 });
                          TweenMax.to(shadowVid, 2, { alpha: .5 });
                          shadowSource.play();
                          btnY(choice09a03b04);
                          choice09a03b04.interactive = true;
                          TweenMax.to(choice09a03b04, 3, { alpha: .2 });
                          setTimeout(function(){
                            itsGone.play();
                          }, 1000);
                          // Destroy textures
                          forestSourceVid.destroy(true);
                          forestVid.destroy(true);
                        }
                      })
                    });

                  // Choice 09a03b04
                  choice09a03b04
                    .on('mouseover', function(){ choiceOver(choice09a03b04) })
                    .on('mouseout', function(){ choiceOut(choice09a03b04) })
                    .on('mousedown', function(){
                      stepBack = new PIXI.sound.Sound.from( { url: '../assets/audio/voices/stepBack.mp3', volume: 1 } );
                      shadowGlitchSourceVid = new PIXI.Texture.fromVideo('../assets/video/shadowGlitch.mp4');
                      var shadowGlitchSource = shadowGlitchSourceVid.baseTexture.source;
                      shadowGlitchVid = new PIXI.Sprite(shadowGlitchSourceVid);
                      shadowGlitchSource.loop = true;
                      shadowGlitchSource.load();
                      choiceDown(choice09a03b04);
                      TweenMax.to([shadowVid,choice09a03b04,text], 2, { alpha: 0, onComplete:
                        function() {
                          text.text = story09a02b04;
                          scene01.removeChild(shadowVid,choice09a03b04,text);
                          fullSprite(shadowGlitchVid);
                          scene01.addChild(shadowGlitchVid,choice09a03b05,text);
                          TweenMax.to(text, 2, { alpha: 1 });
                          TweenMax.to(shadowGlitchVid, 2, { alpha: .5, onComplete: function(){ stepBack.play(); } });
                          shadowGlitchSource.play();
                          btnY(choice09a03b05);
                          choice09a03b05.interactive = true;
                          TweenMax.to(choice09a03b05, 3, { alpha: .2 });
                          // Destroy textures
                          shadowSourceVid.destroy(true);
                          shadowVid.destroy(true);
                        }
                      })
                    });

                  // Choice 09a03b05
                  choice09a03b05
                    .on('mouseover', function(){ choiceOver(choice09a03b05) })
                    .on('mouseout', function(){ choiceOut(choice09a03b05) })
                    .on('mousedown', function(){
                      TweenMax.to(wind, 2, { volume: 0, onComplete: function(){ wind.pause(); } })
                      splash = new PIXI.sound.Sound.from( { url: '../assets/audio/splash.mp3', volume: 1 } );
                      depths = new PIXI.sound.Sound.from( { url: '../assets/audio/depths.mp3', volume: 0 } );
                      depths.loop = true;
                      watchOut = new PIXI.sound.Sound.from( { url: '../assets/audio/voices/watchOut.mp3', volume: 1 } );
                      immersionSourceVid = new PIXI.Texture.fromVideo('../assets/video/immersion.mp4');
                      var immersionSource = immersionSourceVid.baseTexture.source;
                      immersionVid = new PIXI.Sprite(immersionSourceVid);
                      immersionSource.load();
                      choiceDown(choice09a03b05);
                      TweenMax.to([shadowGlitchVid,choice09a03b05,text], 2, { alpha: 0, onComplete:
                        function() {
                          text.text = story09a02b05;
                          scene01.removeChild(shadowGlitchVid,choice09a03b05,text);
                          fullSprite(immersionVid);
                          scene01.addChild(immersionVid,choice09a03b06,text);
                          TweenMax.to(text, 3, { alpha: 1 });
                          setTimeout(function() {
                            TweenMax.to(immersionVid, 2, { alpha: 1, onComplete: function() { TweenMax.to(immersionVid, 4.5, { alpha: 0 }) } });
                            // Distort text on immersion
                            setTimeout(function(){
                              var distortScale = 40;
                              liquidDistort.to(turbVal, 10, { val: 0.04, ease: Power4.easeOut, onUpdate: function() {
                                distortScale = distortScale - 0.4;
                                if(distortScale > 0) {
                                  liquidSize.setAttribute('scale', ' '+ distortScale +' ');
                                }
                              } });
                            }, 750);
                            immersionSource.play();
                            setTimeout(function(){
                              splash.play();
                              depths.play();
                            }, 400);
                            TweenMax.to(depths, 2.5, { volume: 1, onComplete:
                              function(){
                                btnY(choice09a03b06);
                                choice09a03b06.interactive = true;
                                TweenMax.to(choice09a03b06, 3, { alpha: .2 });
                              }
                            });
                          }, 3000);
                          setTimeout(function(){
                            watchOut.play();
                          }, 500);
                          // Destroy textures
                          shadowGlitchSourceVid.destroy(true);
                          shadowGlitchVid.destroy(true);
                        }
                      })
                    });

                  // Choice 09a03b06
                  choice09a03b06
                    .on('mouseover', function(){ choiceOver(choice09a03b06) })
                    .on('mouseout', function(){ choiceOut(choice09a03b06) })
                    .on('mousedown', function(){
                      darknessSourceVid = new PIXI.Texture.fromVideo('../assets/video/darkness.mp4');
                      var darknessSource = darknessSourceVid.baseTexture.source;
                      darknessVid = new PIXI.Sprite(darknessSourceVid);
                      darknessSource.loop = true;
                      darknessSource.load();
                      choiceDown(choice09a03b06);
                      TweenMax.to([immersionVid,choice09a03b06,text], 2, { alpha: 0, onComplete:
                        function() {
                          text.text = story09a02b06;
                          scene01.removeChild(immersionVid,choice09a03b06,text);
                          fullSprite(darknessVid);
                          scene01.addChild(darknessVid,text,theEnd);
                          TweenMax.to(text, 2, { alpha: 1 });
                          TweenMax.to(darknessVid, 2, { alpha: .6 });
                          darknessSource.play();
                          // Destroy textures
                          immersionSourceVid.destroy(true);
                          immersionVid.destroy(true);
                          // THE END
                          setTimeout(function(){
                            btnY(theEnd);
                            theEnd.interactive = true;
                            TweenMax.to(theEnd, 4, { alpha: 1 });
                          }, 5000);
                        }
                      })
                    });

            // Choice 09b
            choice09b
              .on('mouseover', function(){ choiceOver(choice09b) })
              .on('mouseout', function(){ choiceOut(choice09b) })
              .on('mousedown', function(){
                soDark = new PIXI.sound.Sound.from( { url: '../assets/audio/voices/soDark.mp3', volume: 1 } );
                choiceDown(choice09b);
                choiceDown(choice09a);
                TweenMax.to([openedDoor,choice09a,choice09b,text], 2, { alpha: 0, onComplete:
                  function() {
                    text.text = story09b;
                    TweenMax.to(text, 2, { alpha: 1 });
                    scene01.removeChild(openedDoor,choice09a,choice09b);
                    scene01.addChild(choice09b01a,choice09b01b,tilingSprite);
                    text.filters = choice09b01a.filters = choice09b01b.filters = [focusing];
                    requestAnimationFrame(blurSine);
                    btnY(choice09b01a);
                    btnY(choice09b01b);
                    choice09b01a.interactive = choice09b01b.interactive = true;
                    TweenMax.to([choice09b01a,choice09b01b], 3, { alpha: .2 });
                    setTimeout(function(){
                      soDark.play();
                    }, 1000);
                  }
                })
              });

                // Choice 09b01a
                choice09b01a
                  .on('mouseover', function(){ choiceOver(choice09b01a) })
                  .on('mouseout', function(){ choiceOut(choice09b01a) })
                  .on('mousedown', function(){
                    remember = new PIXI.sound.Sound.from( { url: '../assets/audio/voices/remember.mp3', volume: 1 } );
                    var concrete = PIXI.Texture.fromImage('../assets/img/concrete.jpg');
                    concreteSprite = new PIXI.extras.TilingSprite(concrete, renderer.view.width + 100, renderer.view.height + 100);
                    concreteSprite.alpha = 0;
                    concreteSprite.x = renderer.view.width / 2;
                    concreteSprite.y = renderer.view.height / 2;
                    concreteSprite.anchor.x = concreteSprite.anchor.y = .5;
                    concreteSprite.tileScale.x = 2;
                    concreteSprite.tileScale.y = 2;
                    choiceDown(choice09b01a);
                    choiceDown(choice09b01b);
                    TweenMax.to([choice09b01a,choice09b01b,text], 2, { alpha: 0, onComplete:
                      function() {
                        text.filters = '';
                        text.text = story09b01a;
                        TweenMax.to(text, 2, { alpha: 1 });
                        scene01.removeChild(tilingSprite,choice09b01a,choice09b01b,text);
                        scene01.addChild(concreteSprite,choice09b01a01,text);
                        TweenMax.to(concreteSprite, 2, { alpha: .6 });
                        concreteTextureLeft();
                        btnY(choice09b01a01);
                        choice09b01a01.interactive = true;
                        TweenMax.to(choice09b01a01, 3, { alpha: .2 });
                      }
                    });
                    setTimeout(function(){
                      remember.play();
                    }, 2000);
                  });

                  // Moving concrete wall

                  var counter = 0;
                  function concreteTextureLeft() {
                    counter += 0.005;
                    concreteSprite.tilePosition.x += 4;
                    requestAnimationFrame(concreteTextureLeft);
                  }
                  function concreteTextureRight() {
                    counter += 0.005;
                    concreteSprite.tilePosition.x += -4;
                    requestAnimationFrame(concreteTextureRight);
                  }

                // Choice 09b01a01
                choice09b01a01
                  .on('mouseover', function(){ choiceOver(choice09b01a01) })
                  .on('mouseout', function(){ choiceOut(choice09b01a01) })
                  .on('mousedown', function(){
                    crackling = new PIXI.sound.Sound.from( { url: '../assets/audio/crackling.mp3', volume: 0 } );
                    crackling.loop = true;
                    crackling.filters = [new PIXI.sound.filters.EqualizerFilter(0, 0, 0, 0, 0, 0, 0, 0, -20, -20)];
                    goDown = new PIXI.sound.Sound.from( { url: '../assets/audio/voices/goDown.mp3', volume: 1 } );
                    staircaseSourceVid = new PIXI.Texture.fromVideo('../assets/video/staircase.mp4');
                    var staircaseSource = staircaseSourceVid.baseTexture.source;
                    staircaseVid = new PIXI.Sprite(staircaseSourceVid);
                    staircaseSource.loop = true;
                    staircaseSource.animationSpeed = -1;
                    staircaseSource.load();
                    choiceDown(choice09b01a01);
                    TweenMax.to([concreteSprite,choice09b01a01,text], 2, { alpha: 0, onComplete:
                      function() {
                        crackling.play();
                        TweenMax.to(crackling, 2, { volume: .6 });
                        text.text = story09b01a01;
                        scene01.removeChild(concreteSprite,choice09b01a01,text);
                        fullSprite(staircaseVid);
                        scene01.addChild(staircaseVid,choice09b01a02,text);
                        TweenMax.to(staircaseVid, 2, { alpha: .6 });
                        TweenMax.to(text, 2, { alpha: 1 });
                        staircaseSource.play();
                        btnY(choice09b01a02);
                        choice09b01a02.interactive = true;
                        TweenMax.to(choice09b01a02, 3, { alpha: .2 });
                        setTimeout(function(){
                          goDown.play();
                        }, 1000);
                      }
                    })
                  });

                // Choice 09b01a02
                choice09b01a02
                  .on('mouseover', function(){ choiceOver(choice09b01a02) })
                  .on('mouseout', function(){ choiceOut(choice09b01a02) })
                  .on('mousedown', function(){
                    disgusting = new PIXI.sound.Sound.from( { url: '../assets/audio/voices/disgusting.mp3', volume: 1 } );
                    stickyWater = new PIXI.filters.ReflectionFilter();
                    stickyWater.boundary = .6;
                    stickyWater.alpha = [.3,.1];
                    stickyWater.amplitude.start = 0;
                    stickyWater.amplitude.end = 25;
                    stickyWater.waveLength.start = 30;
                    stickyWater.waveLength.end = 200;
                    choiceDown(choice09b01a02);
                    var eqVal = -20;
                    TweenMax.to([staircaseVid,choice09b01a02,text], 2, { alpha: 0, onComplete:
                      function() {
                        TweenMax.to(crackling, 2, { volume: 1, onUpdate:
                          function(){
                            eqVal = eqVal + 1;
                            if(eqVal < 0) {
                              crackling.filters = [new PIXI.sound.filters.EqualizerFilter(0, 0, 0, 0, 0, 0, 0, 0, eqVal, eqVal)];
                            }
                          }
                        });
                        text.text = story09b01a02;
                        TweenMax.to(text, 2, { alpha: 1 });
                        scene01.removeChild(staircaseVid,choice09b01a02);
                        scene01.addChild(choice09b01a03,tilingSprite);
                        btnY(choice09b01a03);
                        choice09b01a03.interactive = true;
                        TweenMax.to(choice09b01a03, 3, { alpha: .2 });
                        animateWaves();
                        stage.filters = [stickyWater];
                        // Destroy textures
                        staircaseSourceVid.destroy(true);
                        staircaseVid.destroy(true);
                      }
                    });
                    setTimeout(function(){
                      disgusting.play();
                    }, 2000);
                  });

                  // Water reflection

                  function animateWaves(){
                    stickyWater.time += .1;
                    requestAnimationFrame(animateWaves);
                  }

                // Choice 09b01a03
                choice09b01a03
                  .on('mouseover', function(){ choiceOver(choice09b01a03) })
                  .on('mouseout', function(){ choiceOut(choice09b01a03) })
                  .on('mousedown', function(){
                    embersDrip = new PIXI.sound.Sound.from( { url: '../assets/audio/embersDrip.mp3', volume: 0 } );
                    embersDrip.loop = true;
                    getBurnt = new PIXI.sound.Sound.from( { url: '../assets/audio/voices/getBurnt.mp3', volume: 1 } );
                    embersSourceVid = new PIXI.Texture.fromVideo('../assets/video/embers.mp4');
                    var embersSource = embersSourceVid.baseTexture.source;
                    embersVid = new PIXI.Sprite(embersSourceVid);
                    embersSource.loop = true;
                    embersSource.load();
                    choiceDown(choice09b01a03);
                    TweenMax.to([choice09b01a03,text], 2, { alpha: 0, onComplete:
                      function() {
                        embersDrip.play();
                        TweenMax.to(crackling, 2, { volume: 0, onComplete: function() { crackling.pause() } });
                        TweenMax.to(embersDrip, 2, { volume: 1 });
                        text.text = story09b01a03;
                        scene01.removeChild(choice09b01a03,text);
                        fullSprite(embersVid);
                        scene01.addChild(embersVid,choice09b01a04,text);
                        TweenMax.to([embersVid,text], 2, { alpha: 1 });
                        embersSource.play();
                        btnY(choice09b01a04);
                        choice09b01a04.interactive = true;
                        TweenMax.to(choice09b01a04, 3, { alpha: .2 });
                      }
                    });
                    setTimeout(function(){
                      getBurnt.play();
                    }, 3000);
                  });

                // Choice 09b01a04
                choice09b01a04
                  .on('mouseover', function(){ choiceOver(choice09b01a04) })
                  .on('mouseout', function(){ choiceOut(choice09b01a04) })
                  .on('mousedown', function(){
                    bigFire = new PIXI.sound.Sound.from( { url: '../assets/audio/bigFire.mp3', volume: 0 } );
                    bigFire.loop = true;
                    getAway = new PIXI.sound.Sound.from( { url: '../assets/audio/voices/getAway.mp3', volume: 1 } );
                    fireSourceVid = new PIXI.Texture.fromVideo('../assets/video/fire.mp4');
                    var fireSource = fireSourceVid.baseTexture.source;
                    fireVid = new PIXI.Sprite(fireSourceVid);
                    fireSource.loop = true;
                    fireSource.load();
                    choiceDown(choice09b01a04);
                    TweenMax.to(escape, 15, { volume: 0, onComplete: function(){ escape.pause() } });
                    insanity.play();
                    TweenMax.to(insanity, 15, { volume: .75 } );
                    TweenMax.to([embersVid,choice09b01a04,text], 2, { alpha: 0, onComplete:
                      function() {
                        bigFire.play();
                        TweenMax.to(embersDrip, 2, { volume: 0, onComplete: function() { embersDrip.pause() } });
                        TweenMax.to(bigFire, 2, { volume: 1 });
                        text.text = story09b01a04;
                        stickyWater.alpha = [.8,.6]
                        stickyWater.boundary = .7;
                        scene01.removeChild(embersVid,choice09b01a04,text);
                        fullSprite(fireVid);
                        scene01.addChild(fireVid,choice09b01a05,text);
                        TweenMax.to([fireVid,text], 2, { alpha: 1 });
                        fireSource.play();
                        btnY(choice09b01a05);
                        choice09b01a05.interactive = true;
                        TweenMax.to(choice09b01a05, 3, { alpha: .2 });
                        // Destroy textures
                        embersSourceVid.destroy(true);
                        embersVid.destroy(true);
                      }
                    });
                    setTimeout(function(){
                      getAway.play();
                    }, 5000);
                  });

                // Choice 09b01a05
                choice09b01a05
                  .on('mouseover', function(){ choiceOver(choice09b01a05) })
                  .on('mouseout', function(){ choiceOut(choice09b01a05) })
                  .on('mousedown', function(){
                    growls = new PIXI.sound.Sound.from( { url: '../assets/audio/growls.mp3', volume: 0 } );
                    growls.loop = true;
                    defend = new PIXI.sound.Sound.from( { url: '../assets/audio/voices/defend.mp3', volume: 1 } );
                    demonsSourceVid = new PIXI.Texture.fromVideo('../assets/video/demons.mp4');
                    var demonsSource = demonsSourceVid.baseTexture.source;
                    demonsVid = new PIXI.Sprite(demonsSourceVid);
                    demonsSource.loop = true;
                    demonsSource.load();
                    choiceDown(choice09b01a05);
                    TweenMax.to([fireVid,choice09b01a05,text], 2, { alpha: 0, onComplete:
                      function() {
                        growls.play();
                        TweenMax.to(bigFire, 2, { volume: 0, onComplete: function() { bigFire.pause() } });
                        TweenMax.to(growls, 2, { volume: 1 });
                        text.text = story09b01a05;
                        scene01.removeChild(fireVid,choice09b01a05,text);
                        fullSprite(demonsVid);
                        scene01.addChild(demonsVid,choice09b01a06,text);
                        TweenMax.to([demonsVid,text], 2, { alpha: 1 });
                        demonsSource.play();
                        wiggleText();
                        btnY(choice09b01a06);
                        choice09b01a06.interactive = true;
                        TweenMax.to(choice09b01a06, 3, { alpha: .2 });
                        // Destroy textures
                        fireSourceVid.destroy(true);
                        fireVid.destroy(true);
                      }
                    });
                    setTimeout(function(){
                      defend.play();
                    }, 3500);
                  });

                  function wiggleText() {
                    var wiggleX = Math.floor(Math.random() * 3) + 1;
                    var wiggleY = Math.floor(Math.random() * 3) + 1;
                    TweenMax.to(text, .05, { x: renderer.view.width / 2 + wiggleX, y: (renderer.view.height / 2 - text.height / 2) + wiggleY });
                    requestAnimationFrame(wiggleText);
                  }

                // Choice 09b01a06
                choice09b01a06
                  .on('mouseover', function(){ choiceOver(choice09b01a06) })
                  .on('mouseout', function(){ choiceOut(choice09b01a06) })
                  .on('mousedown', function(){
                    dead = new PIXI.sound.Sound.from( { url: '../assets/audio/voices/dead.mp3', volume: .7 } );
                    flamesSourceVid = new PIXI.Texture.fromVideo('../assets/video/flames.mp4');
                    var flamesSource = flamesSourceVid.baseTexture.source;
                    flamesVid = new PIXI.Sprite(flamesSourceVid);
                    flamesSource.loop = true;
                    flamesSource.load();
                    choiceDown(choice09b01a06);
                    TweenMax.to(insanity, 15, { volume: 0, onComplete: function(){ insanity.pause() } });
                    dark.play();
                    TweenMax.to(dark, 15, { volume: .75 } );
                    TweenMax.to([demonsVid,choice09b01a06,text], 2, { alpha: 0, onComplete:
                      function() {
                        text.text = story09b01a06;
                        scene01.removeChild(demonsVid,choice09b01a06,text);
                        fullSprite(flamesVid);
                        scene01.addChild(flamesVid,theEnd,text);
                        TweenMax.to([flamesVid,text], 2, { alpha: 1 });
                        flamesSource.play();
                        // Destroy textures
                        demonsSourceVid.destroy(true);
                        demonsVid.destroy(true);
                        // THE END
                        setTimeout(function(){
                          btnY(theEnd);
                          theEnd.interactive = true;
                          TweenMax.to(theEnd, 4, { alpha: 1 });
                        }, 5000);
                      }
                    });
                    setTimeout(function(){
                      dead.play();
                    }, 3000);
                  });

                  // Choice 09b01b
                  choice09b01b
                    .on('mouseover', function(){ choiceOver(choice09b01b) })
                    .on('mouseout', function(){ choiceOut(choice09b01b) })
                    .on('mousedown', function(){
                      dangerous = new PIXI.sound.Sound.from( { url: '../assets/audio/voices/dangerous.mp3', volume: 1 } );
                      var concrete = PIXI.Texture.fromImage('../assets/img/concrete.jpg');
                      concreteSprite = new PIXI.extras.TilingSprite(concrete, renderer.view.width + 100, renderer.view.height + 100);
                      concreteSprite.alpha = 0;
                      concreteSprite.x = renderer.view.width / 2;
                      concreteSprite.y = renderer.view.height / 2;
                      concreteSprite.anchor.x = concreteSprite.anchor.y = .5;
                      concreteSprite.tileScale.x = 2;
                      concreteSprite.tileScale.y = 2;
                      choiceDown(choice09b01b);
                      choiceDown(choice09b01a);
                      TweenMax.to([choice09b01a,choice09b01b,text], 2, { alpha: 0, onComplete:
                        function() {
                          text.filters = '';
                          text.text = story09b01b;
                          scene01.removeChild(tilingSprite,choice09b01a,choice09b01b, text);
                          scene01.addChild(concreteSprite,choice09b01b01, text);
                          TweenMax.to(concreteSprite, 2, { alpha: .6 });
                          TweenMax.to(text, 2, { alpha: 1 });
                          concreteTextureRight();
                          btnY(choice09b01b01);
                          choice09b01b01.interactive = true;
                          TweenMax.to(choice09b01b01, 3, { alpha: .2 });
                        }
                      });
                      setTimeout(function(){
                        dangerous.play();
                      }, 2500);
                    });

                      // Choice 09b01b01
                      choice09b01b01
                        .on('mouseover', function(){ choiceOver(choice09b01b01) })
                        .on('mouseout', function(){ choiceOut(choice09b01b01) })
                        .on('mousedown', function(){
                          ticking = new PIXI.sound.Sound.from( { url: '../assets/audio/ticking.mp3', volume: 0 } );
                          ticking.loop = true;
                          ticking.play();
                          TweenMax.to(ticking, 1.5, { volume: .5 });
                          followIt = new PIXI.sound.Sound.from( { url: '../assets/audio/voices/followIt.mp3', volume: 1 } );
                          crack = new PIXI.Sprite.fromImage('../assets/img/crack.jpg');
                          fullSprite(crack);
                          choiceDown(choice09b01b01);
                          TweenMax.to([concreteSprite,choice09b01b01,text], 2, { alpha: 0, onComplete:
                            function() {
                              text.text = story09b01b01;
                              scene01.removeChild(concreteSprite,choice09b01b01,text);
                              scene01.addChild(crack,choice09b01b02,text);
                              TweenMax.to(crack, 2, { alpha: .5 });
                              TweenMax.to(text, 2, { alpha: 1 });
                              btnY(choice09b01b02);
                              choice09b01b02.interactive = true;
                              TweenMax.to(choice09b01b02, 3, { alpha: .2 });
                            }
                          });
                          setTimeout(function(){
                            followIt.play();
                          }, 1000);
                        });

                      // Choice 09b01b02
                      choice09b01b02
                        .on('mouseover', function(){ choiceOver(choice09b01b02) })
                        .on('mouseout', function(){ choiceOut(choice09b01b02) })
                        .on('mousedown', function(){
                          stupid = new PIXI.sound.Sound.from( { url: '../assets/audio/voices/stupid.mp3', volume: 1 } );
                          staircaseSourceVid = new PIXI.Texture.fromVideo('../assets/video/staircase.mp4');
                          var staircaseSource = staircaseSourceVid.baseTexture.source;
                          staircaseVid = new PIXI.Sprite(staircaseSourceVid);
                          staircaseSource.loop = true;
                          staircaseSource.load();
                          choiceDown(choice09b01b02);
                          TweenMax.to([crack,choice09b01b02,text], 2, { alpha: 0, onComplete:
                            function() {
                              TweenMax.to(ticking, 1.5, { volume: .8 });
                              text.text = story09b01b02;
                              scene01.removeChild(crack,choice09b01b02,text);
                              fullSprite(staircaseVid);
                              scene01.addChild(staircaseVid,choice09b01b03,text);
                              TweenMax.to(staircaseVid, 2, { alpha: .6 });
                              TweenMax.to(text, 2, { alpha: 1 });
                              staircaseSource.play();
                              btnY(choice09b01b03);
                              choice09b01b03.interactive = true;
                              TweenMax.to(choice09b01b03, 3, { alpha: .2 });
                            }
                          });
                          setTimeout(function(){
                            stupid.play();
                          }, 3500);
                        });

                      // Choice 09b01b03
                      choice09b01b03
                        .on('mouseover', function(){ choiceOver(choice09b01b03) })
                        .on('mouseout', function(){ choiceOut(choice09b01b03) })
                        .on('mousedown', function(){
                          wontMakeIt = new PIXI.sound.Sound.from( { url: '../assets/audio/voices/wontMakeIt.mp3', volume: 1 } );
                          moonshineSourceVid = new PIXI.Texture.fromVideo('../assets/video/moonshine.mp4');
                          var moonshineSource = moonshineSourceVid.baseTexture.source;
                          moonshineVid = new PIXI.Sprite(moonshineSourceVid);
                          moonshineSource.loop = true;
                          moonshineSource.load();
                          choiceDown(choice09b01b03);
                          TweenMax.to([staircaseVid,choice09b01b03,text], 2, { alpha: 0, onComplete:
                            function() {
                              text.text = story09b01b03;
                              text.style.align = 'right';
                              scene01.removeChild(staircaseVid,choice09b01b03,text);
                              fullSprite(moonshineVid);
                              choice09b01b04.anchor.x = 1;
                              text.x = renderer.view.width - renderer.view.width / 3;
                              choice09b01b04.x = text.x + text.width / 2;
                              scene01.addChild(moonshineVid,choice09b01b04,text);
                              TweenMax.to([moonshineVid,text], 2, { alpha: 1 });
                              moonshineSource.play();
                              btnY(choice09b01b04);
                              choice09b01b04.interactive = true;
                              TweenMax.to(choice09b01b04, 3, { alpha: .2 });
                              // Destroy textures
                              staircaseSourceVid.destroy(true);
                              staircaseVid.destroy(true);
                            }
                          });
                          setTimeout(function(){
                            wontMakeIt.play();
                          }, 3000);
                        });

                      // Choice 09b01b04
                      choice09b01b04
                        .on('mouseover', function(){ choiceOver(choice09b01b04) })
                        .on('mouseout', function(){ choiceOut(choice09b01b04) })
                        .on('mousedown', function(){
                          glitch = new PIXI.sound.Sound.from( { url: '../assets/audio/glitch.mp3', volume: 1 } );
                          tickingFast = new PIXI.sound.Sound.from( { url: '../assets/audio/tickingFast.mp3', volume: 0 } );
                          tickingFast.loop = true;
                          tickingFast.play();
                          TweenMax.to(escape, 15, { volume: 0, onComplete: function(){ escape.pause() } });
                          insanity.play();
                          TweenMax.to(insanity, 15, { volume: .75 } );
                          setTimeout(function(){
                            TweenMax.to(ticking, 4, { volume: 0, onComplete: function() { ticking.pause(); } });
                            TweenMax.to(tickingFast, 4, { volume: 1 });
                          }, 1500);
                          tickTock = new PIXI.sound.Sound.from( { url: '../assets/audio/voices/tickTock.mp3', volume: 1 } );
                          choiceDown(choice09b01b04);
                          TweenMax.to([choice09b01b04,text], 2, { alpha: 0, onComplete:
                            function() {
                              glitch.play();
                              text.text = story09b01b04;
                              TweenMax.to(text, 2, { alpha: 1 });
                              scene01.removeChild(choice09b01b04,text);
                              scene01.filters = [twitching,focusing];
                              requestAnimationFrame(blurSine);
                              twitch();
                              choice09b01b05.anchor.x = 1;
                              choice09b01b05.x = text.x + text.width / 2;
                              scene01.addChild(red,choice09b01b05,text);
                              btnY(choice09b01b05);
                              choice09b01b05.interactive = true;
                              TweenMax.to(choice09b01b05, 3, { alpha: .2 });
                            }
                          });
                          setTimeout(function(){
                            tickTock.play();
                          }, 3000);
                        });

                        // Twitching scene

                        var twitching = new PIXI.filters.GlitchFilter();
                        twitching.slices = 11;
                        twitching.offset = 99;
                        twitching.direction = -18;
                        twitching.fillMode = 3;

                        var red = new PIXI.Graphics();
                        red.beginFill(0xff0000);
                        red.drawRect(renderer.view.width / 2 - 75, renderer.view.height / 2 - 75, renderer.view.width + 150, renderer.view.height + 150);
                        red.endFill();
                        red.alpha = 0;
                        red.pivot.set(renderer.view.width/2, renderer.view.height/2);
                        red.blendMode = PIXI.BLEND_MODES.MULTIPLY;

                        var i = 0;

                        function twitch() {
                          if(i < 8){
                            var randRed = Math.round(Math.random());
                            var sliceNo = Math.floor(Math.random()*(15-4+4)+4);
                            red.alpha = randRed;
                            twitching.slices = sliceNo;
                            requestAnimationFrame(twitch);
                            i++;
                          } else {
                            var stillTime = Math.floor(Math.random()*(1000-1200+1200)+1200);
                            twitching.slices = 0;
                            red.alpha = 0;
                            setTimeout(function(){
                              i = 0;
                              requestAnimationFrame(twitch);
                            }, stillTime);
                          }
                        }

                      // Choice 09b01b05
                      choice09b01b05
                        .on('mouseover', function(){ choiceOver(choice09b01b05) })
                        .on('mouseout', function(){ choiceOut(choice09b01b05) })
                        .on('mousedown', function(){
                          getIn = new PIXI.sound.Sound.from( { url: '../assets/audio/voices/getIn.mp3', volume: 1 } );
                          corridorWall = new PIXI.Sprite.fromImage('../assets/img/corridorWall.jpg');
                          fullSprite(corridorWall);
                          choiceDown(choice09b01b05);
                          TweenMax.to([moonshineVid,choice09b01b05,text], 2, { alpha: 0, onComplete:
                            function() {
                              text.text = story09b01b05;
                              text.style.align = 'left';
                              scene01.removeChild(red,moonshineVid,choice09b01b05,text);
                              text.x = renderer.view.width / 2;
                              scene01.addChild(corridorWall,red,choice09b01b06,text);
                              TweenMax.to([corridorWall,text], 2, { alpha: 1 });
                              btnY(choice09b01b06);
                              choice09b01b06.interactive = true;
                              TweenMax.to(choice09b01b06, 3, { alpha: .2 });
                              // Destroy textures
                              moonshineSourceVid.destroy(true);
                              moonshineVid.destroy(true);
                            }
                          });
                          setTimeout(function(){
                            getIn.play();
                          }, 2500);
                        });

                      // Choice 09b01b06
                      choice09b01b06
                        .on('mouseover', function(){ choiceOver(choice09b01b06) })
                        .on('mouseout', function(){ choiceOut(choice09b01b06) })
                        .on('mousedown', function(){
                          bolt = new PIXI.sound.Sound.from( { url: '../assets/audio/bolt.mp3', volume: 1 } );
                          setTimeout(function(){
                            bolt.play();
                          }, 1000);
                          behindYou = new PIXI.sound.Sound.from( { url: '../assets/audio/voices/behindYou.mp3', volume: 1 } );
                          figure = new PIXI.Sprite.fromImage('../assets/img/figure.jpg');
                          fullSprite(figure);
                          choiceDown(choice09b01b06);
                          TweenMax.to([choice09b01b06,text], 2, { alpha: 0, onComplete:
                            function() {
                              requestAnimationFrame(blurSineHeavy);
                              text.text = story09b01b06;
                              scene01.removeChild(red,choice09b01b06,text);
                              scene01.addChild(figure,red,choice09b01b07,text);
                              figure.scale.set(1.02);
                              figure.x = -2 * renderer.view.width;
                              figure.filters = [speedBlur,focusing];
                              corridorWall.filters = [speedBlur];
                              scene01.filters = [twitching]
                              TweenMax.to(text, 2, { alpha: 1, onComplete:
                                function() {
                                  TweenMax.fromTo(speedBlur.velocity, 3, {x: 0}, {x: 90, ease: Power4.easeOut, repeat: 1, yoyo: true});
                                  TweenMax.to(corridorWall, 2.5, { alpha: 0, x: renderer.view.width * 2, ease: Power4.easeOut, onComplete: function() { scene01.removeChild(corridorWall) } });
                                  TweenMax.to(figure, 2.5, { alpha: .6, x: renderer.view.width / 2, ease: Power4.easeOut, onComplete:
                                    function() {
                                      wiggle();
                                    }
                                  });
                                }
                              });
                              btnY(choice09b01b07);
                              choice09b01b07.interactive = true;
                              TweenMax.to(choice09b01b07, 3, { alpha: .2 });
                            }
                          });
                          setTimeout(function(){
                            behindYou.play();
                          }, 4600);
                        });

                        // Faceless figure

                        var speedBlur = new PIXI.filters.MotionBlurFilter();
                        speedBlur.velocity.x = speedBlur.velocity.y = 0;

                        function wiggle() {
                          var wiggleX = Math.floor(Math.random() * 20) + 1;
                          var wiggleY = Math.floor(Math.random() * 20) + 1;
                          TweenMax.to(figure, .05, { x: renderer.view.width / 2 + wiggleX, y: renderer.view.height / 2 + wiggleY });
                          requestAnimationFrame(wiggle);
                        }

                      // Choice 09b01b07
                      choice09b01b07
                        .on('mouseover', function(){ choiceOver(choice09b01b07) })
                        .on('mouseout', function(){ choiceOut(choice09b01b07) })
                        .on('mousedown', function(){
                          stun = new PIXI.sound.Sound.from( { url: '../assets/audio/stun.mp3', volume: 1 } );
                          youDidIt = new PIXI.sound.Sound.from( { url: '../assets/audio/voices/youDidIt.mp3', volume: 1 } );
                          soWeak = new PIXI.sound.Sound.from( { url: '../assets/audio/voices/soWeak.mp3', volume: 1 } );
                          var needleSourceVid = new PIXI.Texture.fromVideo('../assets/video/needle.mp4');
                          var needleSource = needleSourceVid.baseTexture.source;
                          needleVid = new PIXI.Sprite(needleSourceVid);
                          needleSource.load();
                          choiceDown(choice09b01b07);
                          TweenMax.to(insanity, 15, { volume: 0, onComplete: function(){ insanity.pause() } });
                          light.play();
                          TweenMax.to(light, 15, { volume: .75 } );
                          TweenMax.to([figure,choice09b01b07,text], 2, { alpha: 0, onComplete:
                            function() {
                              text.text = story09b01b07;
                              scene01.removeChild(red,figure,choice09b01b07,text);
                              fullSprite(needleVid);
                              scene01.addChild(needleVid,theEnd,text);
                              TweenMax.to(text, 2, { alpha: 1 });
                              setTimeout(function(){
                                TweenMax.to(needleVid, 2, { alpha: 1, onComplete: function() {
                                  TweenMax.to(tickingFast, 5, { volume: 0, onComplete: function() { tickingFast.pause(); } });
                                  scene01.filters = '';
                                } });
                                needleSource.play();
                                setTimeout(function(){
                                  stun.play();
                                }, 1250);
                                setTimeout(function(){
                                  // THE END
                                  theEnd.tint = 0x000000;
                                  btnY(theEnd);
                                  theEnd.interactive = true;
                                  TweenMax.to(theEnd, 4, { alpha: 1 });
                                  setTimeout(function(){
                                    youDidIt.play();
                                  }, 6500);
                                  whiteBg = true;
                                  $('*').css({'cursor':'none'});
                                  $('*').css({'cursor':'url(../assets/img/dotBk.png) 2.5 2.5, auto'});
                                  TweenMax.to(cursor, 1, {
                                    pixi: { lineColor: 0x000000, ease: Linear.easeOut }
                                  });
                                }, 5000);
                              }, 2500);
                            }
                          });
                          setTimeout(function(){
                            soWeak.play();
                          }, 4000);
                        });

    // The end button
    theEnd
      .on('mouseover', function(){ choiceOver(theEnd) })
      .on('mouseout', function(){ choiceOut(theEnd) })
      .on('mousedown', function(){
        newBg.width = vw + 100;
        newBg.height = vh + 100;
        if(!whiteBg){
          newBg.tint = 0x000000;
        }
        // Stop time counting
        clearTimeout(t);
        stage.addChild(newBg,scene01);
        choiceDown(theEnd);
        TweenMax.to(scene01, 2, { alpha: 0, onComplete:
          function() {
            stage.filters = '';
            // END SCREEN

            // Declare containers
            endScreen.alpha = 0;
            // Set up variables to control the text size
            var maxProjectSize = 170; // Default font size
            var minProjectSize  = 50; // Minimum font size allowed
            var projectSize = maxProjectSize * Math.min(window.innerWidth / 1536, window.innerHeight / 793); // 1536 x 793 is the base screen size
            projectSize = Math.max(minProjectSize, projectSize);
            // Set up text variables
            let theProject = new PIXI.Text("THE PROJECT", {
              fontFamily: "Butler",
              fontSize: projectSize,
              fontWeight: 700,
              fill: 0x171717,
              wordWrap: true,
              wordWrapWidth: vw,
              lineHeight: 30
            });
            // Tint elements according to ending
            var elementsColor, cta;
            if(whiteBg) {
              elementsColor = relive.tint = 0x000000;
              theProject.alpha = .05;
              tilingSprite.blendMode = PIXI.BLEND_MODES.SCREEN;
              tilingSprite.alpha = .7;
              cta = 'This time, you managed to overcome the darkness. But not everyone is able to say that.';
            } else {
              elementsColor = 0xf0f0f0;
              cta = 'This time, all the lights faded out. But this doesn’t mean that you can’t get through it.';
            }
            var maxTitleSize = 50; // Default font size
            var minTitleSize  = 40; // Minimum font size allowed
            var titleSize = maxTitleSize * Math.min(window.innerWidth / 1536, window.innerHeight / 793); // 1536 x 793 is the base screen size
            titleSize = Math.max(minTitleSize, titleSize);
            let youve = new PIXI.Text("You've been", {
              fontFamily: "Butler Ultra Light",
              fontSize: titleSize,
              fontWeight: 100,
              fill: elementsColor,
              wordWrap: true,
              wordWrapWidth: vw,
              lineHeight: titleSize + 15
            });
            let minutes = new PIXI.Text(""+min+" minutes and "+sec+" seconds", {
              fontFamily: "Butler",
              fontSize: titleSize,
              fontWeight: 700,
              fill: elementsColor,
              wordWrap: true,
              wordWrapWidth: vw,
              lineHeight: titleSize + 15
            });
            let experiencing = new PIXI.Text("experiencing what it might feel like to have delusions and hallucinations.", {
              fontFamily: "Butler Ultra Light",
              fontSize: titleSize,
              fontWeight: 100,
              fill: elementsColor,
              wordWrap: true,
              wordWrapWidth: vw / 2,
              lineHeight: titleSize + 10
            });
            var maxBodySize = 18; // Default font size
            var minBodySize  = 12; // Minimum font size allowed
            var bodySize = maxBodySize * Math.min(window.innerWidth / 1536, window.innerHeight / 793); // 1536 x 793 is the base screen size
            bodySize = Math.max(minBodySize, bodySize);
            let bodyText = new PIXI.Text("But for someone who suffers from schizophrenia, it may last for several years.\n\nLethe is an interactive fiction story which aims to create an immersive environment to break the stigma around schizophrenia. Based on a metaphorical interpretation of the symptoms and effects that this mental illness produces, the experience aspires to raise awareness about how people who suffer from it perceive the world.\n\n"+cta+"", {
              fontFamily: "Averia Serif Libre",
              fontSize: bodySize,
              fontWeight: 300,
              fill: elementsColor,
              wordWrap: true,
              wordWrapWidth: vw / 2,
              lineHeight: bodySize * 1.2
            });
            // Author and ERAM logo
            var eram = new PIXI.Sprite.fromImage('../assets/img/eram.png');
            eram.tint = 0x999999;
            let copyText = new PIXI.Text("Made by Daniel Martos", {
              fontFamily: "Averia Serif Libre",
              fontSize: bodySize * .8,
              fontWeight: 300,
              fill: 0x999999,
              wordWrap: true,
              wordWrapWidth: vw / 2,
              lineHeight: bodySize * 1.2
            });
            eram.scale.x = eram.scale.y = .12;
            eram.alpha = .75;
            eram.x = copyText.x = renderer.view.width - copyText.width / 2;
            eram.y = renderer.view.height - copyText.width / 2;
            copyText.y = eram.y - eram.height - copyText.height / 2;
            eram.anchor.x = eram.anchor.y = copyText.anchor.x = copyText.anchor.y = 1;
            var copyLink = new PIXI.Graphics();
            copyLink.beginFill(0xff0000);
            copyLink.drawRect(copyText.x, copyText.y, copyText.width, copyText.height);
            copyLink.endFill();
            copyLink.alpha = 0;
            copyLink.interactive = true;
            copyLink.pivot.set(copyLink.width, copyLink.height);
            copyLink
              .on('mouseover', function(){
                console.log('hey');
                TweenMax.to(cursor, .5, {
                  pixi: { scaleX: 4, scaleY: 4, lineWidth: .1, lineColor: 0xaaaaaa, ease: Linear.easeOut }
                });
              })
              .on('mouseout', function(){
                TweenMax.to(cursor, .5, {
                  pixi: { scaleX: 1, scaleY: 1, lineWidth: 2, lineColor: 0xffffff, ease: Linear.easeOut }
                });
              })
              .on('mousedown', function(){
                window.open('https://instagram.com/dani.martos', '_blank');
              });

            // Set elements position
            var maxReliveSize = 1; // Default font size
            var minReliveSize  = .5; // Minimum font size allowed
            var reliveSize = maxReliveSize * Math.min(window.innerWidth / 1536, window.innerHeight / 793); // 1536 x 793 is the base screen size
            reliveSize = Math.max(minReliveSize, reliveSize);
            theProject.anchor.x = .2;
            theProject.anchor.y = .5;
            minutes.y = youve.height - 10;
            experiencing.y = minutes.height * 2 - 20;
            bodyText.y = experiencing.y + experiencing.height * 1.2;
            relive.y = bodyText.y + bodyText.height * 1.2;
            relive.scale.set(reliveSize);
            relive.interactive = true;
            relive.alpha = .3;
            endContent.x = vw / 4.5;
            endContent.y = vh / 4.5;
            // Render scene
            endContent.addChild(theProject,youve,minutes,experiencing,bodyText,relive);
            endScreen.addChild(endContent,copyText,copyLink,eram,tilingSprite);
            stage.addChild(endScreen,cursor);
            TweenMax.to(endScreen, 2, { alpha: 1 });
          }
        });
      });
      // Relive the story
      relive
        .on('mouseover', function(){ choiceOver(relive) })
        .on('mouseout', function(){ choiceOut(relive) })
        .on('mousedown', function(){
          choiceDown(relive);
          TweenMax.to(tilingSprite, 1, { alpha: 0 });
          TweenMax.to([newBg,endScreen], 4, { alpha: 0 });
          $('#noise-canvas').fadeOut(3000);
          TweenMax.to([light,dark], 4, { volume: 0, onComplete: function() { location.reload(); } });
          if(growls != undefined){
            TweenMax.to(growls, 4, { volume: 0 });
          }
          if(depths != undefined){
            TweenMax.to(depths, 4, { volume: 0 });
          }
        });

    }

    // Create Tween master timeline to trigger multiple animations
    function timeline01() {
      let masterTimeline = new TimelineMax();
      masterTimeline
      // Text animation
      .add(fragment01)
      // Texture overlay, it will provide an eerier feel
      .add(perlinTexture)
    }

    // Set buttons mouseOver state

    function choiceOver(choice) {
      hovering = true;
      hoverWhoosh.play();
      // Change cursor light to stroke
      TweenMax.to(cursor, .5, {
        pixi: { scaleX: 4, scaleY: 4, lineWidth: .1, alpha: .4, ease: Linear.easeOut }
      });
      TweenMax.to(choice, 1, { alpha: 1 });
    }
    // Set buttons mouseOut state
    function choiceOut(choice) {
      hovering = false;
      // Change cursor stroke back to light
      TweenMax.to(cursor, .5, {
        pixi: { scaleX: 1, scaleY: 1, lineWidth: 2, alpha: 1, ease: Linear.easeOut }
      });
      TweenMax.to(choice, 1, { alpha: .2 });
    }
    // Set buttons mouseDown state
    function choiceDown(choice) {
      hovering = false;
      TweenMax.to(cursor, .5, {
        pixi: { scaleX: 1, scaleY: 1, lineWidth: 2, alpha: 1, ease: Linear.easeOut }
      });
      choice.interactive = false;
    }
    // Link audio panning to mouse position
    var panning =  new PIXI.sound.filters.StereoFilter();
    PIXI.sound.filtersAll = [panning];
    $(document).on('mousemove', function(evt){
      var currentX = evt.clientX;
      var x = renderer.view.width;
      var mapped = (currentX/x)*(.5-(-.5))+(-.5);
      panning.pan = mapped;
    })

  });
}

// Create cursor light

const cursor = new PIXI.Graphics();
cursor.lineStyle(2, 0xffffff);
cursor.drawCircle(0, 0, 4);
cursor.endFill();
cursor.alpha = 0;
// Blur light
var cursorFeather = new PIXI.filters.BlurFilter();
cursor.filters = [cursorFeather];
cursorFeather.blur = 4;

// Follow mouse
stage.addChild(cursor);
var lastTimeMouseMoved = "";
// Check if it's hovering a button
var hovering = false;
// Set flag for white background
var whiteBg = false;
var newBg = new PIXI.Sprite(PIXI.Texture.WHITE);
$(document).on('mousemove', function(ev){
  if(!hovering){ TweenMax.to(cursor, 2, { alpha: 1 }) };
  if(whiteBg) {
    $('*').css({'cursor': 'url("../assets/img/dotBk2.png") 2.5 2.5, auto;', 'cursor': '-webkit-image-set(url("../assets/img/dotBk2.png") 1x, url("../assets/img/dotBk.png") 2x) 2.5 2.5, auto'});
  } else {
    $('*').css({'cursor': 'url("../assets/img/dot2.png") 2.5 2.5, auto;', 'cursor': '-webkit-image-set(url("../assets/img/dot2.png") 1x, url("../assets/img/dot.png") 2x) 2.5 2.5, auto'});
  }
  // Move cursor light to mouse pointer position
  cursor.x = renderer.plugins.interaction.mouse.global.x;
  cursor.y = renderer.plugins.interaction.mouse.global.y;
  // Hide cursor if it's been inactive for 2.5 seconds
  lastTimeMouseMoved = new Date().getTime();
  var t = setTimeout(function() {
    var currentTime = new Date().getTime();
    if (currentTime - lastTimeMouseMoved > 1000 && !hovering) {
      TweenMax.to(cursor, 2, { alpha: 0 });
      $('*').css({'cursor':'none'});
    }
  }, 2500);
});

// Move stage on mousemove
var movementStrength = 20;
var height = movementStrength / vh;
var width = movementStrength / vw;
$('body').on('mousemove', function(ev) {
  var mousePosition = renderer.plugins.interaction.mouse.global;
  var moveX = width * mousePosition.x;
  var moveY = height * mousePosition.y;
  TweenMax.to([scene00,scene01,endScreen], 2, { x: moveX, y: moveY });
});

// Display visuals
displayVisuals();

function displayVisuals() {
  renderer.render(stage);
  requestAnimationFrame(displayVisuals);
}
