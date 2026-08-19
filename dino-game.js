/* ---- tiny offline-dino-style easter egg: click a "$" in the tech section to open it ---- */
(function () {
  var canvas = document.getElementById('dinoCanvas');
  if (!canvas) return;

  // touch devices (same signal the tech-hint text already keys off of) don't
  // get the easter egg — precise jump timing on a small tap target isn't fun
  if (window.matchMedia && window.matchMedia('(hover: none)').matches) return;

  var ctx = canvas.getContext('2d');

  var playerImg = new Image();
  playerImg.src = 'assets/personal/portrait-web.jpg';

  // reuse the tech icons already defined in projects-data.js as the obstacles
  var iconImgs = (typeof TECH !== 'undefined') ? Object.keys(TECH).map(function (id) {
    var img = new Image();
    img.src = TECH[id].icon;
    return img;
  }) : [];

  // two tuned presets: a short one-row layout (e.g. Databaser) and a taller
  // two-row layout (e.g. Språk) — picked by the actual measured tile height
  function compactCfg() {
    return { groundMargin: 12, playerSize: 15, jumpV: -7, gravity: 0.5, obsMin: 14, obsMax: 22, gapBase: 55, speedStart: 3.4, speedMax: 11, font: '11px' };
  }
  function spaciousCfg() {
    return { groundMargin: 20, playerSize: 22, jumpV: -11, gravity: 0.6, obsMin: 28, obsMax: 44, gapBase: 70, speedStart: 5, speedMax: 15, font: '13px' };
  }

  var W = canvas.width, H = canvas.height, GROUND_Y = H;
  var cfg = spaciousCfg();
  var state = 'idle'; // idle | running | over
  var player, obstacles, speed, score, spawnIn;

  function reset() {
    GROUND_Y = H - cfg.groundMargin;
    player = { x: Math.max(24, Math.round(W * 0.06)), y: GROUND_Y - cfg.playerSize, w: cfg.playerSize, h: cfg.playerSize, vy: 0, jumping: false };
    obstacles = [];
    speed = cfg.speedStart;
    score = 0;
    spawnIn = cfg.gapBase;
  }

  function jump() {
    if (state === 'idle' || state === 'over') {
      state = 'running';
      reset();
      requestAnimationFrame(loop);
      return;
    }
    if (!player.jumping) {
      player.vy = cfg.jumpV;
      player.jumping = true;
    }
  }

  function spawnObstacle() {
    var size = cfg.obsMin + Math.random() * (cfg.obsMax - cfg.obsMin);
    var img = iconImgs.length ? iconImgs[Math.floor(Math.random() * iconImgs.length)] : null;
    obstacles.push({ x: W + 10, y: GROUND_Y - size, w: size, h: size, img: img });
  }

  function update() {
    player.vy += cfg.gravity;
    player.y += player.vy;
    if (player.y > GROUND_Y - player.h) {
      player.y = GROUND_Y - player.h;
      player.vy = 0;
      player.jumping = false;
    }

    spawnIn--;
    if (spawnIn <= 0) {
      spawnObstacle();
      var base = Math.max(cfg.gapBase * 0.6, cfg.gapBase * 1.6 - speed * 4);
      spawnIn = base * (0.5 + Math.random() * 0.9);
    }

    obstacles.forEach(function (o) { o.x -= speed; });
    obstacles = obstacles.filter(function (o) { return o.x + o.w > 0; });

    var pad = Math.max(2, Math.round(player.w * 0.18));
    for (var i = 0; i < obstacles.length; i++) {
      var o = obstacles[i];
      if (player.x + pad < o.x + o.w - pad && player.x + player.w - pad > o.x + pad &&
        player.y + pad < o.y + o.h - pad && player.y + player.h - pad > o.y + pad) {
        state = 'over';
      }
    }

    score++;
    speed = Math.min(cfg.speedMax, cfg.speedStart + score / 400);
  }

  function centerText(text) {
    ctx.fillStyle = '#111';
    ctx.font = cfg.font + ' monospace';
    var w = ctx.measureText(text).width;
    ctx.fillText(text, (W - w) / 2, H / 2);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    ctx.strokeStyle = '#ccc';
    ctx.beginPath();
    ctx.moveTo(0, GROUND_Y + 0.5);
    ctx.lineTo(W, GROUND_Y + 0.5);
    ctx.stroke();

    if (playerImg.complete && playerImg.naturalWidth) {
      var cx = player.x + player.w / 2, cy = player.y + player.h / 2, r = player.w / 2;
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.clip();
      ctx.drawImage(playerImg, player.x, player.y, player.w, player.h);
      ctx.restore();
    } else {
      ctx.fillStyle = '#111';
      ctx.fillRect(player.x, player.y, player.w, player.h);
    }

    obstacles.forEach(function (o) {
      if (o.img && o.img.complete && o.img.naturalWidth) {
        ctx.drawImage(o.img, o.x, o.y, o.w, o.h);
      } else {
        ctx.fillStyle = '#999';
        ctx.fillRect(o.x, o.y, o.w, o.h);
      }
    });

    ctx.fillStyle = '#111';
    ctx.font = cfg.font + ' monospace';
    ctx.fillText(String(Math.floor(score / 5)), W - 30, 16);

    if (state === 'idle') centerText('Klikk for å starte');
    if (state === 'over') centerText('Game over — klikk for å prøve igjen');
  }

  function loop() {
    if (state !== 'running') { draw(); return; }
    update();
    draw();
    requestAnimationFrame(loop);
  }

  canvas.addEventListener('click', jump);
  document.addEventListener('keydown', function (e) {
    if (e.code === 'Space' && canvas.classList.contains('active')) {
      e.preventDefault();
      jump();
    }
  });

  // park the canvas off-screen until a "$" swaps it into a group
  var gameHome = document.createElement('div');
  gameHome.style.display = 'none';
  document.body.appendChild(gameHome);
  gameHome.appendChild(canvas);

  var ANIM_MS = 350;
  var activeGroup = null;
  var animating = false;

  function forceReflow(el) { return el.offsetWidth; }

  // slides the tiles out to the right and fades them, then hands off to `after`
  function slideTilesOut(stage, tiles, after) {
    stage.style.height = stage.getBoundingClientRect().height + 'px';
    tiles.classList.add('tech-offscreen');
    setTimeout(function () {
      tiles.style.display = 'none';
      tiles.classList.remove('tech-offscreen');
      after();
    }, ANIM_MS);
  }

  // slides the tiles back in from the right
  function slideTilesIn(stage, tiles) {
    tiles.style.display = '';
    tiles.classList.add('tech-offscreen-instant');
    forceReflow(tiles);
    tiles.classList.remove('tech-offscreen-instant');
    setTimeout(function () { stage.style.height = ''; }, ANIM_MS);
  }

  // slides the game canvas out to the right and fades it, then hands off to `after`
  function slideGameOut(after) {
    canvas.classList.add('tech-offscreen');
    setTimeout(function () {
      canvas.classList.remove('active', 'tech-offscreen');
      canvas.hidden = true;
      gameHome.appendChild(canvas);
      after();
    }, ANIM_MS);
  }

  // slides the game canvas in from the right into `stage`
  function slideGameIn(stage, rect) {
    W = canvas.width = Math.round(rect.width);
    H = canvas.height = Math.round(rect.height);
    cfg = H <= 150 ? compactCfg() : spaciousCfg();
    state = 'idle';
    reset();

    stage.appendChild(canvas);
    canvas.hidden = false;
    canvas.classList.add('active', 'tech-offscreen-instant');
    draw();
    forceReflow(canvas);
    canvas.classList.remove('tech-offscreen-instant');
  }

  function closeGame(done) {
    if (!activeGroup) { if (done) done(); return; }
    var group = activeGroup;
    var stage = group.querySelector('.tech-stage');
    var tiles = stage.querySelector('.skills');
    activeGroup = null;
    // only clip while something is actually sliding — clipping the tiles'
    // hover tooltip (which pops up above them) the rest of the time would hide it
    stage.classList.add('tech-clipping');
    slideGameOut(function () {
      slideTilesIn(stage, tiles);
      setTimeout(function () { stage.classList.remove('tech-clipping'); }, ANIM_MS);
      if (done) done();
    });
  }

  function openIn(group, done) {
    var stage = group.querySelector('.tech-stage');
    var tiles = stage.querySelector('.skills');
    if (!stage || !tiles) { if (done) done(); return; }
    var rect = tiles.getBoundingClientRect();
    activeGroup = group;
    stage.classList.add('tech-clipping');
    slideTilesOut(stage, tiles, function () {
      slideGameIn(stage, rect);
      setTimeout(function () { stage.classList.remove('tech-clipping'); }, ANIM_MS);
      if (done) done();
    });
  }

  function handleDollarClick(group) {
    if (animating) return;
    animating = true;
    function finish() { animating = false; }
    if (activeGroup === group) {
      closeGame(finish);
    } else if (activeGroup) {
      closeGame(function () { openIn(group, finish); });
    } else {
      openIn(group, finish);
    }
  }

  // each group's own "$" swaps that group's icons out for the game, in place —
  // sized to exactly match the tile grid it replaces
  Array.prototype.forEach.call(document.querySelectorAll('#tech .k'), function (el) {
    el.addEventListener('click', function (e) {
      e.stopPropagation();
      var group = el.closest('.skill-group');
      if (group) handleDollarClick(group);
    });
  });
})();
