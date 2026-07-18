    /* ---- single source of truth for projects + tech, rendered into #work and #projects ---- */
    (function () {
      var featList = document.querySelector('#work .feat');
      var rowList = document.querySelector('.proj-list');
      var skillGroupsEl = document.querySelector('.skill-groups');
      if (!featList && !rowList && !skillGroupsEl) return;

      var SCHOOL_BADGE = '<span class="school-badge" title="Gjort gjennom studiet"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true"><path d="M12 4 2 9l10 5 10-5-10-5Z" /><path d="M6 11v4.2c0 1.3 2.7 2.3 6 2.3s6-1 6-2.3V11" /><path d="M22 9v4.5" /></svg></span>';

      // TECH / SKILL_GROUPS / PROJECTS come from projects-data.js, loaded before this file

      function techIcon(id) { return TECH[id] || { label: id, icon: '' }; }

      function renderLink(l, isFeat) {
        if (isFeat && l.download) return '';
        var cls = l.className ? ' class="' + l.className + '"' : '';
        var target = l.external ? ' target="_blank" rel="noopener"' : '';
        var dl = l.download ? ' download' : '';
        var prefix = (isFeat && l.prefixPlay) ? '▶ ' : '';
        return '<a' + cls + ' href="' + l.href + '"' + target + dl + '>' + prefix + l.label + '</a>';
      }

      function renderFeatMedia(m) {
        if (m.type === 'gallery') {
          var isSingle = m.pages.every(function (page) { return page.length === 1; });
          var pages = m.pages.map(function (page) {
            var imgs = page.map(function (im) {
              return '<img alt="' + im.alt + '" loading="lazy" src="' + im.src + '" />';
            }).join('');
            return '<div class="fg-page">' + imgs + '</div>';
          }).join('');
          return '<div class="feat-media feat-gallery' + (isSingle ? ' fg-single' : '') + '" data-gallery>' +
            '<div class="fg-viewport"><div class="fg-track">' + pages + '</div></div>' +
            '<button class="fg-btn fg-prev" type="button" aria-label="Forrige bilder">‹</button>' +
            '<button class="fg-btn fg-next" type="button" aria-label="Neste bilder">›</button>' +
            '<div class="fg-dots" role="tablist" aria-label="Bildesider"></div></div>';
        }
        if (m.type === 'photo') {
          return '<div class="feat-media feat-photo"><img alt="' + m.alt + '" loading="lazy" src="' + m.src + '" /></div>';
        }
        return '<div class="ph feat-media"><span>' + m.label + '</span></div>';
      }

      function gradeBlock(grade) {
        return '<div class="grade"><span class="gc">Karakter</span><span class="gv">' + grade + '</span></div>';
      }

      function renderFeatCard(p) {
        var f = p.featured;
        var techRow = p.tech.map(function (t) {
          var ti = techIcon(t);
          return '<span class="ft"><img alt="' + ti.label + '" loading="lazy" src="' + ti.icon + '" />' + ti.label + '</span>';
        }).join('');
        var links = (p.links || []).map(function (l) { return renderLink(l, true); }).join('');
        return '<article class="feat-card reveal">' +
          renderFeatMedia(f.media) +
          '<div class="feat-body">' +
          '<span class="idx">' + f.idxLabel + '</span>' +
          '<h3>' + f.headline + '</h3>' +
          '<p>' + f.blurb + '</p>' +
          '<div class="feat-tech">' + techRow + '</div>' +
          (p.grade ? gradeBlock(p.grade) : '') +
          '<div class="flinks">' + links + '</div>' +
          '</div></article>';
      }

      function renderRow(p) {
        var rtech = p.tech.map(function (t) {
          var ti = techIcon(t);
          return '<img alt="' + ti.label + '" loading="lazy" src="' + ti.icon + '" />';
        }).join('');
        var stopTech = p.tech.map(function (t) {
          var ti = techIcon(t);
          return '<span class="stech has-tip" data-tip="' + ti.label + '"><img alt="' + ti.label + '" loading="lazy" src="' + ti.icon + '" /></span>';
        }).join('');
        var desc = p.description.map(function (para) { return '<p>' + para + '</p>'; }).join('');
        var learned = p.learned ? '<span class="stop-sub">Lærte</span><ul class="pd-learned">' +
          p.learned.map(function (l) { return '<li>' + l + '</li>'; }).join('') + '</ul>' : '';
        var links = (p.links || []).map(function (l) { return renderLink(l, false); }).join('');
        return '<div class="proj-row reveal" tabindex="0" role="button" aria-label="Les mer om ' + p.title + '" data-rating="' + p.rating + '" data-year="' + p.yearSort + '">' +
          '<div class="stars" aria-label="Vurdering"></div>' +
          '<div class="meta"><h4>' + p.title + (p.school ? SCHOOL_BADGE : '') + '</h4><p>' + p.teaser + '</p></div>' +
          '<div class="rtech">' + rtech + '</div>' +
          '<span class="yr">' + p.year + '</span>' +
          '<span class="arrow">↗</span>' +
          '<div class="proj-detail">' +
          '<div class="pd-head"><div class="stars-static" aria-hidden="true"></div><span class="yr">' + p.year + ' · ' + p.category + '</span></div>' +
          '<h3>' + p.title + '</h3>' +
          desc +
          (p.grade ? '<div class="pd-grade"><span class="gc">Karakter</span><span class="gv">' + p.grade + '</span></div>' : '') +
          '<span class="stop-sub">Teknologier</span><div class="stop-tech">' + stopTech + '</div>' +
          learned +
          '<div class="pd-links">' + links + '</div>' +
          '</div></div>';
      }

      if (featList) {
        var featured = PROJECTS.filter(function (p) { return p.featured; })
          .sort(function (a, b) { return a.featured.order - b.featured.order; });
        featList.innerHTML = featured.map(renderFeatCard).join('');
      }
      if (rowList) {
        rowList.innerHTML = PROJECTS.map(renderRow).join('');
      }

      function usesOf(techId) {
        var extra = TECH[techId].extra || [];
        var projectHits = PROJECTS.filter(function (p) { return p.tech.indexOf(techId) !== -1; })
          .map(function (p) { return p.title; });
        return extra.concat(projectHits);
      }

      function renderSkillTile(techId) {
        var t = TECH[techId];
        var uses = usesOf(techId).map(function (u) { return '<span>' + u + '</span>'; }).join('');
        return '<div class="skill">' +
          '<img alt="' + t.label + '" loading="lazy" src="' + t.icon + '" />' +
          '<span class="nm">' + (t.nm || t.label) + '</span>' +
          '<span class="tip"><b>' + t.label + '</b><span class="cap">brukt i</span><span class="uses">' + uses + '</span></span>' +
          '</div>';
      }

      if (skillGroupsEl) {
        skillGroupsEl.innerHTML = SKILL_GROUPS.map(function (g) {
          var ids = Object.keys(TECH).filter(function (id) { return TECH[id].group === g.key; });
          var tiles = ids.map(renderSkillTile).join('');
          return '<div class="skill-group reveal"><h3 class="grp-h"><span class="k">$</span> ' + g.heading + '</h3>' +
            '<div class="skills">' + tiles + '</div></div>';
        }).join('');
      }
    })();

    // Scroll reveal
    (function () {
      var els = document.querySelectorAll('.reveal');
      if (!('IntersectionObserver' in window)) {
        els.forEach(function (e) { e.classList.add('in'); });
        return;
      }
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
      els.forEach(function (e) { io.observe(e); });
    })();

    // Rotating technology readout on the hero chip
    (function () {
      var iconEl = document.getElementById('techChipIcon');
      if (!iconEl) return;

      var techs = [];
      Array.prototype.forEach.call(document.querySelectorAll('#tech .skill'), function (sk) {
        var img = sk.querySelector('img');
        var nm = sk.querySelector('.nm');
        if (img) techs.push({ src: img.getAttribute('src'), name: nm ? nm.textContent.trim() : '' });
      });
      if (!techs.length) return;

      // warm the browser cache so swaps are instant
      techs.forEach(function (t) { var im = new Image(); im.src = t.src; });

      var i = 0;
      iconEl.src = techs[0].src;
      iconEl.alt = techs[0].name;
      iconEl.style.opacity = 1;

      function preload(src) {
        return new Promise(function (res) {
          var im = new Image();
          im.onload = im.onerror = function () { res(); };
          im.src = src;
        });
      }

      setInterval(function () {
        var next = (i + 1) % techs.length;
        preload(techs[next].src).then(function () {
          iconEl.style.opacity = 0;          // fade current out
          setTimeout(function () {
            i = next;
            iconEl.src = techs[i].src;        // swap while invisible (already cached)
            iconEl.alt = techs[i].name;
            iconEl.style.opacity = 1;         // fade new in
          }, 180);
        });
      }, 1800);
    })();

    // Route map: build dotted path through waypoints, draw it on scroll
    (function () {
      var journey = document.getElementById('journey');
      if (!journey) return;
      var fg = journey.querySelector('.route-fg');
      var bg = journey.querySelector('.route-bg');
      var maskPath = journey.querySelector('#routeMaskPath');
      var traveler = journey.querySelector('.traveler');
      var pulse = journey.querySelector('.traveler-pulse');
      var stopEls = Array.prototype.slice.call(journey.querySelectorAll('.stop'));
      var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      var len = 0, pts = [];

      function smoothPath(p) {
        if (p.length < 2) return '';
        var d = 'M ' + p[0].x + ' ' + p[0].y;
        for (var i = 0; i < p.length - 1; i++) {
          var p0 = p[i - 1] || p[i], p1 = p[i], p2 = p[i + 1], p3 = p[i + 2] || p2;
          var c1x = p1.x + (p2.x - p0.x) / 6, c1y = p1.y + (p2.y - p0.y) / 6;
          var c2x = p2.x - (p3.x - p1.x) / 6, c2y = p2.y - (p3.y - p1.y) / 6;
          d += ' C ' + c1x + ' ' + c1y + ' ' + c2x + ' ' + c2y + ' ' + p2.x + ' ' + p2.y;
        }
        return d;
      }

      function build() {
        var jb = journey.getBoundingClientRect();
        var w = journey.clientWidth, h = journey.clientHeight;
        if (!w || !h) return;
        journey.querySelector('.route').setAttribute('viewBox', '0 0 ' + w + ' ' + h);
        pts = stopEls.map(function (s) {
          var r = s.querySelector('.pin').getBoundingClientRect();
          return { x: r.left - jb.left + r.width / 2, y: r.top - jb.top + r.height / 2, frac: 0, el: s };
        });
        var d = smoothPath(pts);
        bg.setAttribute('d', d); fg.setAttribute('d', d); maskPath.setAttribute('d', d);
        len = fg.getTotalLength();
        maskPath.style.strokeDasharray = len;
        // map each veipunkt to a fraction of the path length
        var N = 260, samples = [];
        for (var i = 0; i <= N; i++) {
          var l = len * i / N, q = fg.getPointAtLength(l);
          samples.push({ l: l, x: q.x, y: q.y });
        }
        pts.forEach(function (pt) {
          var best = Infinity, bl = 0;
          for (var k = 0; k < samples.length; k++) {
            var dx = samples[k].x - pt.x, dy = samples[k].y - pt.y, dd = dx * dx + dy * dy;
            if (dd < best) { best = dd; bl = samples[k].l; }
          }
          pt.frac = len ? bl / len : 0;
        });
        update();
      }

      function progress() {
        var r = journey.getBoundingClientRect();
        var readLine = window.innerHeight * 0.62;
        var p = (readLine - r.top) / r.height;
        return Math.max(0, Math.min(1, p));
      }

      function update() {
        if (!len) return;
        var p = reduce ? 1 : progress();
        maskPath.style.strokeDashoffset = len * (1 - p);
        if (!reduce && p > 0.004 && p < 0.996) {
          var pt = fg.getPointAtLength(len * p);
          traveler.setAttribute('cx', pt.x); traveler.setAttribute('cy', pt.y);
          pulse.setAttribute('cx', pt.x); pulse.setAttribute('cy', pt.y);
          traveler.style.opacity = 1; pulse.style.opacity = '';
          journey.classList.add('travelling');
        } else {
          traveler.style.opacity = 0; pulse.style.opacity = 0;
          journey.classList.remove('travelling');
        }
        pts.forEach(function (pt) {
          if (p >= pt.frac - 0.02) pt.el.classList.add('reached');
          else pt.el.classList.remove('reached');
        });
      }

      var ticking = false;
      window.addEventListener('scroll', function () {
        if (!ticking) { requestAnimationFrame(function () { update(); ticking = false; }); ticking = true; }
      }, { passive: true });
      var rt;
      window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(build, 150); });

      build();
      window.addEventListener('load', build);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(build);
      // lazy-loaded images (stop photos, tech icons) change the journey's
      // height after build() first runs, which left the route path ending
      // short of the last card; re-measure whenever the section resizes.
      if (window.ResizeObserver) {
        var ro = new ResizeObserver(function () { clearTimeout(rt); rt = setTimeout(build, 100); });
        ro.observe(journey);
      }
    })();

    /* ---- project detail modal ---- */
    (function () {
      var modal = document.getElementById('projModal');
      if (!modal) return;
      var body = modal.querySelector('.pd-body');
      var lastFocus = null;

      function open(row) {
        var detail = row.querySelector('.proj-detail');
        body.innerHTML = detail ? detail.innerHTML : '';
        var st = body.querySelector('.stars-static');
        if (st && window.__fillStars) {
          var rows = document.querySelectorAll('.proj-row');
          var idx = Array.prototype.indexOf.call(rows, row);
          window.__fillStars(st, window.__projRating ? window.__projRating(idx) : 0);
        }
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        lastFocus = row;
        modal.querySelector('.x').focus();
      }
      function close() {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        body.innerHTML = '';
        if (lastFocus) lastFocus.focus();
      }

      Array.prototype.forEach.call(document.querySelectorAll('.proj-row'), function (row) {
        row.addEventListener('click', function () { open(row); });
        row.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(row); }
        });
      });
      modal.querySelector('.backdrop').addEventListener('click', close);
      modal.querySelector('.x').addEventListener('click', close);
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('open')) close();
      });
    })();

    /* ---- link project names inside tech tooltips to the archive + open the modal ---- */
    (function () {
      var rows = document.querySelectorAll('.proj-row');
      if (!rows.length) return;
      var map = {};
      Array.prototype.forEach.call(rows, function (row) {
        var label = (row.getAttribute('aria-label') || '').replace(/^Les mer om\s+/i, '').trim();
        if (label) map[label] = row;
      });
      var projSection = document.getElementById('projects');
      var nav = document.querySelector('header.nav');

      function openProject(row) {
        if (projSection) {
          var navH = nav ? nav.offsetHeight : 72;
          var top = projSection.getBoundingClientRect().top + window.pageYOffset - navH - 14;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
        setTimeout(function () { row.click(); }, 520);
      }

      Array.prototype.forEach.call(document.querySelectorAll('.skill .tip .uses span'), function (span) {
        var name = (span.textContent || '').replace(/\s+/g, ' ').trim();
        var row = map[name];
        if (!row) return;
        span.classList.add('uses-link');
        span.setAttribute('role', 'link');
        span.setAttribute('tabindex', '0');
        span.setAttribute('title', 'Åpne «' + name + '» i prosjektarkivet');
        span.addEventListener('click', function (e) { e.stopPropagation(); openProject(row); });
        span.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openProject(row); }
        });
      });
    })();

    /* ---- star ratings: 5 pips in a pentagon, first N filled (set via data-rating) ---- */
    (function () {
      var rows = Array.prototype.slice.call(document.querySelectorAll('.proj-row'));

      // five pentagon vertices (point up), as % of the box
      var PENTAGON = [[50, 14], [84, 39], [71, 79], [29, 79], [16, 39]];

      function render(container, rating) {
        container.innerHTML = '';
        var n = Math.max(0, Math.min(5, rating || 0));
        PENTAGON.forEach(function (pos, i) {
          var s = document.createElement('span');
          s.className = 's' + (i < n ? ' on' : '');
          s.textContent = '★';
          s.style.left = pos[0] + '%';
          s.style.top = pos[1] + '%';
          container.appendChild(s);
        });
      }

      function ratingOf(row) { return parseInt(row.getAttribute('data-rating'), 10) || 0; }

      rows.forEach(function (row) {
        var c = row.querySelector('.stars');
        if (c) {
          render(c, ratingOf(row));
          c.setAttribute('aria-label', ratingOf(row) + ' av 5 stjerner');
        }
      });

      // expose for the detail modal
      window.__projRating = function (idx) { return rows[idx] ? ratingOf(rows[idx]) : 0; };
      window.__fillStars = render;
    })();

    /* ---- archive sort + technology filter ---- */
    (function () {
      var list = document.querySelector('.proj-list');
      if (!list) return;
      var rows = Array.prototype.slice.call(list.querySelectorAll('.proj-row'));
      var sortSeg = document.getElementById('sortSeg');
      var techFilter = document.getElementById('techFilter');
      var empty = document.getElementById('projEmpty');

      function nameOf(r) { return (r.querySelector('.meta h4').textContent || '').trim().toLowerCase(); }
      function yearOf(r) {
        var d = r.getAttribute('data-year');
        if (d != null && d !== '') return parseFloat(d) || 0;
        var y = r.querySelector(':scope > .yr'); return y ? parseInt(y.textContent, 10) || 0 : 0;
      }
      function ratingOf(r) { return parseInt(r.getAttribute('data-rating'), 10) || 0; }
      function techsOf(r) {
        return Array.prototype.map.call(r.querySelectorAll('.proj-detail .stech'), function (s) {
          return s.getAttribute('data-tip');
        });
      }

      // build the union of technologies (name -> icon src)
      var techMap = {};
      rows.forEach(function (r) {
        Array.prototype.forEach.call(r.querySelectorAll('.proj-detail .stech img'), function (img) {
          var name = img.getAttribute('alt');
          if (name && !techMap[name]) techMap[name] = img.getAttribute('src');
        });
      });

      var activeTechs = {};

      var allChip = document.createElement('button');
      allChip.type = 'button';
      allChip.className = 'pt-tech all active';
      allChip.textContent = 'Alle';
      allChip.addEventListener('click', function () { activeTechs = {}; updateTechUI(); apply(); });
      techFilter.appendChild(allChip);

      Object.keys(techMap).sort().forEach(function (name) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'pt-tech';
        b._name = name;
        var img = document.createElement('img');
        img.src = techMap[name]; img.alt = name; img.loading = 'lazy';
        b.appendChild(img);
        b.appendChild(document.createTextNode(name));
        b.addEventListener('click', function () {
          if (activeTechs[name]) delete activeTechs[name]; else activeTechs[name] = true;
          updateTechUI(); apply();
        });
        techFilter.appendChild(b);
      });

      function updateTechUI() {
        var any = Object.keys(activeTechs).length > 0;
        allChip.classList.toggle('active', !any);
        Array.prototype.forEach.call(techFilter.querySelectorAll('.pt-tech:not(.all)'), function (b) {
          b.classList.toggle('active', !!activeTechs[b._name]);
        });
      }

      var sortKey = 'date';
      var sortDir = { date: -1, rating: -1, name: 1 };

      sortSeg.addEventListener('click', function (e) {
        var btn = e.target.closest('.pt-btn');
        if (!btn) return;
        var key = btn.getAttribute('data-sort');
        if (key === sortKey) sortDir[key] *= -1;
        sortKey = key;
        Array.prototype.forEach.call(sortSeg.querySelectorAll('.pt-btn'), function (b) {
          b.classList.toggle('active', b === btn);
          var d = b.querySelector('.dir');
          if (d) d.remove();
        });
        setDir(btn, sortDir[key]);
        apply();
      });

      function setDir(btn, dir) {
        var span = document.createElement('span');
        span.className = 'dir';
        span.textContent = dir < 0 ? '↓' : '↑';
        btn.appendChild(span);
      }

      function apply() {
        var sorted = rows.slice().sort(function (a, b) {
          var d = sortDir[sortKey];
          if (sortKey === 'name') { var na = nameOf(a), nb = nameOf(b); return na < nb ? -d : na > nb ? d : 0; }
          if (sortKey === 'rating') { return (ratingOf(a) - ratingOf(b)) * d || (nameOf(a) < nameOf(b) ? -1 : 1); }
          return (yearOf(a) - yearOf(b)) * d || (nameOf(a) < nameOf(b) ? -1 : 1);
        });
        sorted.forEach(function (r) { list.appendChild(r); });

        var sel = Object.keys(activeTechs);
        var lastVisible = null;
        rows.forEach(function (r) { r.classList.remove('is-last'); });
        var visible = 0;
        sorted.forEach(function (r) {
          var show = sel.length === 0 || techsOf(r).some(function (t) { return activeTechs[t]; });
          r.style.display = show ? '' : 'none';
          if (show) { visible++; lastVisible = r; }
        });
        if (lastVisible) lastVisible.classList.add('is-last');
        if (empty) empty.classList.toggle('show', visible === 0);
      }

      setDir(sortSeg.querySelector('[data-sort="date"]'), sortDir.date);
      apply();
    })();

    /* ---- experience level on tech tiles, from the "brukt i" list in each tooltip ---- */
    (function () {
      function level(c) { return c >= 5 ? 3 : c >= 3 ? 2 : c >= 1 ? 1 : 0; }
      // count = number of project <span> elements listed under .tip .uses
      function countOf(sk) {
        return sk.querySelectorAll('.tip .uses span').length;
      }
      Array.prototype.forEach.call(document.querySelectorAll('.skill'), function (sk) {
        var c = countOf(sk);
        var lv = level(c);
        sk.classList.remove('lvl-1', 'lvl-2', 'lvl-3');
        sk.setAttribute('data-projects', c);
        if (lv) sk.classList.add('lvl-' + lv);
      });

      // sort each category's tiles by experience (most projects first)
      Array.prototype.forEach.call(document.querySelectorAll('.skill-group .skills'), function (group) {
        var tiles = Array.prototype.slice.call(group.querySelectorAll('.skill'));
        tiles.sort(function (a, b) {
          var d = countOf(b) - countOf(a);
          if (d) return d;
          // tie-break alphabetically so order is stable
          var na = (a.querySelector('.nm') || {}).textContent || '';
          var nb = (b.querySelector('.nm') || {}).textContent || '';
          return na.localeCompare(nb);
        });
        tiles.forEach(function (t) { group.appendChild(t); });
      });
    })();

    /* ---- featured project screenshot gallery: 2 images per page, arrows + dots ---- */
    (function () {
      Array.prototype.forEach.call(document.querySelectorAll('[data-gallery]'), function (gal) {
        var track = gal.querySelector('.fg-track');
        var pages = gal.querySelectorAll('.fg-page');
        var prev = gal.querySelector('.fg-prev');
        var next = gal.querySelector('.fg-next');
        var dotsWrap = gal.querySelector('.fg-dots');
        var n = pages.length;
        if (!track || n === 0) return;
        var i = 0;

        var dots = [];
        if (dotsWrap) {
          for (var d = 0; d < n; d++) {
            var b = document.createElement('button');
            b.type = 'button';
            b.setAttribute('role', 'tab');
            b.setAttribute('aria-label', 'Side ' + (d + 1));
            (function (idx) { b.addEventListener('click', function () { go(idx); }); })(d);
            dotsWrap.appendChild(b);
            dots.push(b);
          }
        }

        function go(idx) {
          i = (idx + n) % n;
          track.style.transform = 'translateX(' + (-i * 100) + '%)';
          dots.forEach(function (dot, k) {
            dot.classList.toggle('active', k === i);
            dot.setAttribute('aria-selected', k === i ? 'true' : 'false');
          });
        }

        if (prev) prev.addEventListener('click', function () { go(i - 1); });
        if (next) next.addEventListener('click', function () { go(i + 1); });
        go(0);
      });
    })();

    /* ---- compact flip galleries inside journey stop cards ---- */
    (function () {
      Array.prototype.forEach.call(document.querySelectorAll('[data-sgallery]'), function (gal) {
        var track = gal.querySelector('.sg-track');
        var slides = gal.querySelectorAll('.sg-slide');
        var prev = gal.querySelector('.sg-prev');
        var next = gal.querySelector('.sg-next');
        var dotsWrap = gal.querySelector('.sg-dots');
        var n = slides.length;
        if (!track || n === 0) return;
        var i = 0, dots = [];
        if (dotsWrap) {
          for (var d = 0; d < n; d++) {
            var b = document.createElement('button');
            b.type = 'button';
            b.setAttribute('role', 'tab');
            b.setAttribute('aria-label', 'Bilde ' + (d + 1));
            (function (idx) { b.addEventListener('click', function () { go(idx); }); })(d);
            dotsWrap.appendChild(b);
            dots.push(b);
          }
        }
        function go(idx) {
          i = (idx + n) % n;
          track.style.transform = 'translateX(' + (-i * 100) + '%)';
          dots.forEach(function (dot, k) {
            dot.classList.toggle('active', k === i);
            dot.setAttribute('aria-selected', k === i ? 'true' : 'false');
          });
        }
        if (prev) prev.addEventListener('click', function () { go(i - 1); });
        if (next) next.addEventListener('click', function () { go(i + 1); });
        go(0);
      });
    })();
