$(document).ready(function() {

  var isMobile = window.matchMedia("(max-width: 1024px)").matches;

    if (isMobile) { mobileContent() }

    $(window).on('resize', function(){
      isMobile = window.matchMedia("(max-width: 1024px)").matches;
      if (isMobile) { mobileContent() }
    });

    function mobileContent() {
      $('#pixi, .percent').remove();
      $('.onMobile').text('So as to provide a better experience, Lethe is currently only available on desktop.')
      $('#visuals').addClass('isotype');
      if($('#visuals img').length == 0) {
      $('#visuals').append('<img class="mobileLogo" src="../assets/img/logo.png">')
      }
    }

  // CURSOR //

  // Custom circle instead of default cursor
  $('body').mousemove(function(e) {
    var mouseX = e.pageX - $('.cursor').width() / 2;
    var mouseY = e.pageY - $('.cursor').height() / 2;
    $('.cursor').css({
      "transform": "matrix(1,0,0,1," + mouseX + "," + mouseY + ")"
    });
  });

  // Hide cursor if inactive and not hovering a hotspot
  // document.onmousemove = (function() {
  //   var onmousestop = function() {
  //       $('.light').fadeOut(function(){
  //         $('*').css({'cursor':'none'});
  //       });
  //     },
  //     thread;
  //   // Show cursor on mouse move
  //   return function() {
  //     clearTimeout(thread);
  //     thread = setTimeout(onmousestop, 2000);
  //     $('.light').fadeIn(function(){
  //       $('*').css({'cursor':'url("../assets/img/dot2.png") 2.5 2.5, auto'});
  //       $('*').css({'cursor':'-webkit-image-set(url("../assets/img/dot2.png") 1x, url("../assets/img/dot.png") 2x) 2.5 2.5, auto'});
  //     });
  //   };
  // })();

  // Add or remove outline circle while hovering a hotspot
  $(document).mousemove(function(){
    $('.interact').mousemove(function() {
      if ($(this).css('opacity') > .3) {
        $('.cursor').addClass('hover');
      }
    });
    $('.interact').mouseleave(function() {
      $('.cursor').removeClass('hover');
    });
    $('.interact').mouseup(function() {
      $('.cursor').removeClass('hover');
    });
  });

  // ANIMATIONS //

  // // Landing page "Lethe" animation
  // letheInDelay = 3000;
  // // Get the letters from the original string.
  // var letters = $("h1").text().split("");
  // // Remove the original string.
  // $("h1").text("");
  //
  // // Create a span for each letter and append them to the document.
  // letters.forEach(function(item, index) {
  //   var time = (Math.random() * (5 - 3) + 3) * 1000;
  //   var span = $("<span class='blur' style='margin:0 3px; display:inline-block; animation-duration: " + time + "ms; transition: " + time + "ms'>").text(item);
  //   $("h1").append(span);
  //   if (time > letheInDelay) {
  //     letheInDelay = time;
  //   }
  // }, letheLoop());
  //
  // function letheLoop() {
  //   setTimeout(function() {
  //     setInterval(function() {
  //       // Animate each span
  //       $(document).find(".blur").each(function() {
  //         // Random variables: every user gets a unique animation within given boundaries
  //         var delay = Math.random();
  //         var letter = $(this);
  //         var opacityRand = Math.round(Math.random() * (1 - 0.2 + 1)) + 0.2;
  //         var blurRand = Math.round(Math.random() * (1 - 0 + 10)) + 0;
  //         var scaleRand = Math.random() * (1.2 - 0.8) + 0.8;
  //         var transformRand = Math.round(Math.random() * (1 - -5 + 5)) - 5;
  //
  //         // Set a timeout to animate the spans
  //         setTimeout(function() {
  //           letter.css({
  //             "opacity": opacityRand,
  //             "filter": 'blur(' + blurRand + 'px)',
  //             "transform": 'translate(' + transformRand + 'px,' + transformRand + 'px) rotate(' + transformRand * 2 + 'deg) scale(' + scaleRand + ')'
  //           });
  //         }, delay);
  //       });
  //     }, 2000);
  //   }, letheInDelay);
  // }

  // Display texture once it's been loaded
  setTimeout(function(){
    $('#main-screen').addClass('texture');
  }, 100);


  // Move elements slightly according to mouse move
  // var movementStrength = 25;
  // var height = movementStrength / $(window).height();
  // var width = movementStrength / $(window).width();
  // $("body").mousemove(function(e) {
  //   var pageX = e.pageX - ($(window).width() / 2);
  //   var pageY = e.pageY - ($(window).height() / 2);
  //   var newvalueX = width * pageX;
  //   var newvalueY = height * pageY - 25;
  //   var newvalueXb = width * pageX * 5;
  //   var newvalueYb = height * pageY * 5 - 25;
  //   // Set which elements will get default movement
  //   $('#main-screen').css({
  //     "transform": "translate(" + newvalueX + "px," + newvalueY + "px)"
  //   });
  //   // Set which elements will get 5x movement
  //   $('#image').css({
  //     "transform": "translate(" + newvalueXb + "px," + newvalueYb + "px) scale(1.3)"
  //   });
  // });

  var fadeTime = 500;
  var remember, look, branch1, lookFrame, branch2, branch3, flashlight, dark, stop, run, right, left = false;
  $(document).on('click', '#remember', function(){remember = true});
  $(document).on('click', '#look', function(){look = true});
  $(document).on('click', '#branch1', function(){branch1 = true});
  $(document).on('click', '#look-frame', function(){lookFrame = true});
  $(document).on('click', '#branch2', function(){branch2 = true});
  $(document).on('click', '#branch3', function(){branch3 = true});
  $(document).on('click', '#flashlight', function(){flashlight = true});
  $(document).on('click', '#dark', function(){dark = true});
  $(document).on('click', '#stop', function(){stop = true});
  $(document).on('click', '#run', function(){run = true});
  $(document).on('click', '#right', function(){right = true});
  $(document).on('click', '#left', function(){left = true});

  $(document).on('click', '.options a', function(){
    if(remember) {
      updateStory(
        'You try hard, but it’s useless… All you can think of is why the hell are you here. Did someone do this to you?',
        '<a class="interact" id="branch1">Go on.</a>'
      )
    }
    if(look) {
      updateStory(
        'You seem to be in a small apartment. Not bad, but nothing fancy neither. A faint orangish beam of light leaks through the half-closed window blinds. It must be late night.',
        '<a class="interact" id="branch1">Go on.</a>'
      )
    }
    if(branch1) {
      updateStory(
        'You walk around. Everything is dark and strangely quiet. You reach for a light switch. It flips, but nothing changes. It looks like the power went off. You feel shivers crawling down your spine. Maybe you should get out of here. You walk to the door, but as soon as your wrist flicks to turn the handle, you realize it’s locked. Fuck. Your eyes peek nervously around the main room, searching for some clue about what’s going on. A picture frame drags your attention.',
        '<a class="interact" id="look-frame">Look it over.</a><a class="interact" id="branch2">Leave it as it is.</a>'
      )
    }
    if(lookFrame) {
      updateStory(
        'The frame glass is covered by dust. You bet this place hasn’t been cleaned in weeks, to say the least. The picture is actually a riddling sentence: “When it ends, it’s really only starting”.',
        '<a class="interact" id="branch2">Go on.</a>'
      )
    }
    if(branch2) {
      updateStory(
        'The more time you spend here, the less you understand. The situation is really beginning to get on your nerves. You pat your pockets and take out a lighter and a pack of cigarettes. You don’t smoke on a regular basis, but it helps keeping yourself together when anxiety hits you. The tip of the cigarette blazes up and glows in a bright, intense red, as a thread of swirling smoke makes its way upwards.',
        '<a class="interact" id="branch3">Go on.</a>'
      )
    }
    if(branch3) {
      updateStory(
        'Suddenly, someone bangs the door. You turn your back and paralyse for a second. You put out the cigarette and walk towards the exit, once again, as your heartbeat intensifies. Just when you’re halfway there, the door lock clicks. You stop immediately. You try hard to be rational and gulp back the fear. You keep moving as stealthy as you can. When you get to the door, you hold it with all your strength and stick your eye to the peephole. Nothing. At least that’s what you can tell, because it doesn’t get much darker than it is outside. You take a few seconds to calm yourself down, even though you can’t avoid heaving in tension. But what choice do you have? You know you can’t stay here forever. You clutch the handle and push the door gently. The hinges creak a little. Once you sneak out, you find yourself in the middle of a pitch black corridor. You check your phone. There’s no signal, indeed, plus there’s not much battery left.',
        '<a class="interact" id="flashlight">Turn on the phone flashlight.</a><a class="interact" id="dark">Keep moving in the dark.</a>'
      )
    }
    if(flashlight) {
      updateStory(
        'And there was light. There are several doors on each side of the corridor. There’s a four-figure number on the right hand of every door. You realize you’re in some kind of hotel. You shed light on your door. Room 1311. Wait, what was that? You figure out that someone, or something, wants to kill you. You start to run down the corridor. You hold the phone in front of you, so it lights the way. If you tripped over or winded up in a dead end, you’d surely be gone for good. The hallway seems to be an infinite loop, and as you go on, the walls begin to close in and narrow down your path. The faster you dash, the quicker the walls shrink.',
        '<a class="interact" id="stop">Stop.</a><a class="interact" id="run">Keep running.</a>'
      )
    }
        if(stop) {
          updateStory(
            'You lean on one side of the corridor, panting. The walls cease to move. In fact, they are sluggishly expanding back. Who knows what would’ve happened if you kept running? Well, the thing is you feel safe now. As the hallway shapeshifts to its natural size, you tilt your head towards the ceiling. The lights start to blink shyly, until they stay lit after a few seconds of suspense. At first, the whitish harsh brightness blinds you, but you manage to get used to it. Anyway, who were you fleeing from? There is nobody here. You are sure of that by now. For the first time since you came back, you take a deep breath of fresh air. You feel it rushing through your veins and inner cavities. Something in you has finally changed.',
            'The end.'
          )
        }
        if(run) {
          updateStory(
            'You keep your pace steady. Door after door after door… You watch in horror how the walls are now just a few inches away from your body. You shut your eyes tightly. Suddenly, you feel the cold wind slicing through your cheeks. You open your eyes again and fall to your knees, exhausted. Shocked, you realize you are outside. It’s still dark, although the moon shines quite bright and casts a pale light on your surroundings. There’s nobody nearby. You turn around, but can’t see any building neither. You’re just in the middle of nowhere. The phone. It’s your only chance, you can call for h-… nevermind. Battery died a while back. You’re hopeless, on the verge of collapsing. Abruptly, you notice your shadow starts shifting, as if it came to life on its own. This is a true nightmare. You don’t really know what to do or where to go. Fear is consuming you. Your shadow dances ungracefully, jittering, almost like it’s convulsing. You can’t steer your look from it, but you slowly start to take some steps back in a rather awkward way. Your foot fails to contact the ground. You fall. Time freezes as you’re suspended in the air. A huge splash and you’re submerged into bleak water. You’re slowly sinking. You desperately kick and stroke your limbs in anguish, but it’s useless. You’re running out of breath and you are hardly able to resist anymore. The pure darkness of the depths embrace you and will not let you go.',
            'The end.'
          )
        }
    if(dark) {
      updateStory(
        'You put the phone back in your pocket. You might need it later and turning on the flashlight would drain the battery. Besides, you don’t want to draw attention. You’re not sure what to expect from now on, as you can barely see your own feet. Yet, no matter what, you trust your senses.',
        '<a class="interact" id="left">Go left.</a><a class="interact" id="right">Go right.</a>'
      )
    }
        if(left) {
          updateStory(
            'You have a gut feeling that this is the right way. To walk like you were blindfolded is really unsettling. However, bit by bit, you progress quite a long distance. Eventually, you can feel a change in the atmosphere. There is a dim breeze that caresses your skin. You can also hear a remote crackling, which seems to come from a lower floor, right below your feet. You go further ahead. You get imbalanced as your foot sinks in the air, but touches the ground right away. It’s some kind of a downward staircase. Cautiously, you descend until you reach the lower floor. It’s warmer here. At the very moment when you go down the last step, your feet dip into a highly dense, almost sticky water. The floor is flooded, and that liquid stuff covers your feet up to your ankles. You find it harder to move. Suddenly, hundreds of sparks sprout out of nowhere. A few seconds later, the sparks become little flames that grow devilishly fast. You panic. The huge fire surrounds you, blocking every possible way out. In the blink of an eye, you feel something grabbing you. You desperately try to get away, but you don’t have enough strength. You scream. As the blaze spreads all over the place, you watch how some demons rise from the ground, coming steadily at you. You tremble in sheer dread, whilst the fire dances gracefully and the fiends walk through them. The look in their fully black eyes is the purest strain of death. You’re irrevocably trapped. The ardent lick of the flames is the last thing you are able to feel.',
            'The end.'
          )
        }
        if(right) {
          updateStory(
            'You have a gut feeling that this is the right way. You take one step at a time, your hand grazing the cold concrete wall. After a few meters, you notice there are several doors, which are exactly the same as the one you walked out from. The ticking. Can you hear it? It sounds fairly distant, like it’s hardly leaking through the cracks in the ceiling. You start getting used to the dark. You reach the end of the hallway. The first step of a staircase almost makes you trip over. You tightly grab the railing, and you begin to climb the stairs carefully. When you get to the higher floor, a breach of moonshine cuts through the corridor, although it’s pretty far away. You stare with a feeling of awe. The moon has always fascinated you. Meanwhile, the ticking has increased its frequency. You keep walking. What was that? You get extremely alert and paranoid. Whilst you abruptly turn around to every direction, you lose reference of space and your sight begins to twitch. You spot an opened door in the distance. Arduously, you manage to get into that room. You feel safer in a closed space. You firmly shut the door behind you, and sigh in relief. Nonetheless, as you turn around to the room, you see an extremely tall human figure just a couple of feet in front of you. Your face skews in horror and your heart starts racing. The figure is completely faceless. No eyes, no nose, no mouth, no nothing. But before you can even think of screaming, you feel a sharp, piercing sting penetrating your skin. After a little while, your sight stops twitching, the ticking vanishes and the faceless figure becomes someone that, actually, you know very well.',
            'The end.'
          )
        }
  });

  function updateStory(text,choice) {
    $('.story').animate({opacity : 0}, {
      duration: fadeTime,
      complete: function(){
        $('.story .text').empty().append('' + text + '');
        $('.story .options').empty().append('' + choice + '');
        $('.story').animate({opacity : 1}, fadeTime)
      }
    });
  }

  // END
});
