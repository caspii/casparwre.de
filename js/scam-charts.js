/*
 * Charts for "Anatomy of a scam campaign".
 *
 * Loaded via `custom_js` in the post's front matter, which injects the tag into
 * <head> without `defer`, so everything waits for DOMContentLoaded.
 *
 * Each figure is a <div class="viz" data-fig="..."></div> in the post body.
 * Colours are the two-hue categorical pair validated for contrast and for
 * colour-vision deficiency: blue #2a78d6, orange #eb6834. Identity is never
 * carried by colour alone; every figure has a legend or direct labels, plus a
 * table view. The site has no dark mode, so neither do these.
 */
(function () {
  'use strict';

  var TOTAL = 89826;

  var CSS = [
    '.viz{margin:3.2rem 0;padding:1.6rem 0 1.4rem;font-family:"DM Sans",system-ui,sans-serif;',
      '--surface:#fcfcfb;--track:#f0efec;--grid:#e6e4df;',
      '--ink:#1a1a19;--ink2:#52514e;--ink3:#83817b;',
      '--blue:#2a78d6;--orange:#eb6834}',
    '.viz-t{font-family:"Space Grotesk",system-ui,sans-serif;font-size:1.26rem;',
      'font-weight:600;color:var(--ink);margin-bottom:.45rem;line-height:1.3}',
    '.viz-s{font-size:1.03rem;color:var(--ink2);margin-bottom:1.2rem;line-height:1.55}',
    '.viz-legend{display:flex;gap:1.5rem;flex-wrap:wrap;margin-bottom:1.1rem;',
      'font-size:.98rem;color:var(--ink2)}',
    '.viz-legend span{display:inline-flex;align-items:center;gap:.4rem}',
    '.viz-sw{width:13px;height:13px;border-radius:3px;display:inline-block;flex:none}',
    '.viz-row{display:grid;grid-template-columns:minmax(105px,225px) 1fr minmax(62px,auto);',
      'align-items:center;gap:.85rem;padding:4px 0;outline:none}',
    '.viz-row:hover .viz-bar,.viz-row:focus-visible .viz-bar{filter:brightness(1.08)}',
    '.viz-lab{font-size:.98rem;color:var(--ink2);text-align:right;line-height:1.3}',
    '.viz-track{background:var(--track);border-radius:5px;height:19px}',
    '.viz-bar{height:19px;border-radius:0 5px 5px 0;min-width:2px}',
    '.viz-val{font-size:.98rem;color:var(--ink);font-variant-numeric:tabular-nums}',
    '.viz-note{font-size:.94rem;color:var(--ink3);margin-top:1rem;line-height:1.55}',
    '.viz details{margin-top:1rem;font-size:.94rem}',
    '.viz summary{cursor:pointer;color:var(--ink3)}',
    '.viz table{border-collapse:collapse;margin-top:.6rem;font-size:.94rem}',
    '.viz th,.viz td{text-align:left;padding:2px 1.4rem 2px 0;border-bottom:1px solid var(--grid);color:var(--ink2)}',
    '.viz svg{width:100%;height:auto;display:block}',
    '.viz .spine{stroke:var(--grid);stroke-width:2}',
    '.viz .tick{stroke:var(--grid);stroke-width:1.5}',
    '.viz .tm{font:600 14.5px ui-monospace,Menlo,monospace;fill:var(--ink3)}',
    '.viz .lb{font-size:16.2px;fill:var(--ink);font-family:"DM Sans",system-ui,sans-serif}',
    '.viz .lb .m{font-family:ui-monospace,Menlo,monospace;font-size:15px;fill:var(--ink2)}',
    '.viz .gapbox{fill:var(--track)}',
    '.viz .gapline{stroke:var(--grid);stroke-width:1.5;stroke-dasharray:2 3}',
    '.viz .gap{font:600 14.5px "DM Sans",system-ui;fill:var(--ink2)}',
    '#viz-tip{position:fixed;pointer-events:none;opacity:0;transition:opacity .1s;',
      'background:#1a1a19;color:#fff;font:500 12px "DM Sans",system-ui;padding:5px 9px;',
      'border-radius:6px;z-index:999;white-space:nowrap}',
    '@media(max-width:560px){.viz-lab{font-size:.85rem}.viz-row{gap:.5rem;',
      'grid-template-columns:minmax(80px,42%) 1fr auto}.viz{padding:1rem 0}}'
  ].join('');

  var FIGS = {
    facebook: {
      title: 'Clicks by client',
      sub: '89,826 clicks across three slugs, 29–30 August 2026.',
      legend: [['Facebook-owned client', 'orange'], ['Everything else', 'blue']],
      note: 'Covers 99.8% of clicks (89,637 of 89,826).',
      head: 'Client',
      pct: true,
      rows: [['Facebook in-app browser', 66959, 1], ['Chrome Mobile', 15833, 0],
             ['FacebookBot (link crawler)', 5317, 1], ['Chrome', 1127, 0],
             ['Firefox', 112, 0], ['Samsung Internet', 111, 0], ['Edge', 108, 0],
             ['Chrome Mobile WebView', 67, 0], ['Mobile Safari', 2, 0], ['Edge Mobile', 1, 0]]
    },
    geography: {
      title: 'Clicks by country',
      note: 'Top nine countries only, about 72% of clicks. The remaining tail was still in the ' +
            'database when it was deleted, and is not recoverable.',
      head: 'Country',
      pct: true,
      rows: [['Mexico', 16593, 0], ['United States', 16437, 0], ['Colombia', 13985, 0],
             ['Venezuela', 5535, 0], ['Argentina', 3709, 0], ['Brazil', 3465, 0],
             ['Peru', 2690, 0], ['Ecuador', 1847, 0], ['Chile', 771, 0]]
    }
  };

  var EVENTS = [
    ['17:32', 'def', ['Monthly abuse sweep finds 89,826 clicks', 'on a single destination'], 32],
    ['17:49', 'def', ['Purge #1 — 11 links deleted'], 49],
    ['17:51', 'att', ['Re-registers <tspan class="m">jip</tspan>, the same slug,', 'two minutes later. Two more by 17:54.'], 51],
    ['18:03', 'def', ['Destination blocked, deployed to production'], 63],
    ['18:17', 'def', ['Purge #2 — 3 links deleted (811 clicks)'], 77],
    ['18:32', 'att', ['Takes all three slugs back, now pointing at two', 'new domains that forward to the same place'], 92],
    ['19:01', 'def', ['Purged slugs <tspan class="m">reserved</tspan>, not freed.', 'Forwarding domains blocked.'], 121],
    ['19:07', 'def', ['Purge #3 — slugs reserved <tspan class="m">before</tspan> deletion'], 127]
  ];

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function fmt(n) { return n.toLocaleString('en-GB'); }

  function head(node, cfg) {
    node.appendChild(el('div', 'viz-t', cfg.title));
    if (cfg.sub) node.appendChild(el('div', 'viz-s', cfg.sub));
    if (cfg.legend) {
      var lg = el('div', 'viz-legend');
      cfg.legend.forEach(function (l) {
        lg.appendChild(el('span', null,
          '<i class="viz-sw" style="background:var(--' + l[1] + ')"></i>' + l[0]));
      });
      node.appendChild(lg);
    }
  }

  function tail(node, cfg) {
    if (cfg.note) node.appendChild(el('div', 'viz-note', cfg.note));
    var rows = cfg.rows.map(function (r) {
      return '<tr><td>' + r[0] + '</td><td>' + fmt(r[1]) + '</td></tr>';
    }).join('');
    node.appendChild(el('details', null,
      '<summary>Table view</summary><table><thead><tr><th>' + cfg.head +
      '</th><th>Clicks</th></tr></thead><tbody>' +
      rows + '</tbody></table>'));
  }

  function bars(node, cfg) {
    head(node, cfg);
    var max = Math.max.apply(null, cfg.rows.map(function (r) { return r[1]; }));
    cfg.rows.forEach(function (r) {
      var row = el('div', 'viz-row');
      row.tabIndex = 0;
      row.dataset.tip = r[0] + ': ' + fmt(r[1]) +
        (cfg.pct ? ' · ' + (r[1] / TOTAL * 100).toFixed(1) + '%' : '');
      row.appendChild(el('div', 'viz-lab', r[0]));
      var track = el('div', 'viz-track');
      var bar = el('div', 'viz-bar');
      bar.style.width = Math.max(r[1] / max * 100, 0.4) + '%';
      bar.style.background = 'var(--' + (r[2] ? 'orange' : 'blue') + ')';
      track.appendChild(bar);
      row.appendChild(track);
      row.appendChild(el('div', 'viz-val', fmt(r[1])));
      node.appendChild(row);
    });
    tail(node, cfg);
  }

  function timeline(node) {
    node.appendChild(el('div', 'viz-t', 'Ninety minutes of taking a campaign down, and it rebuilding'));
    node.appendChild(el('div', 'viz-s',
      'Every timestamp is from the database. Vertical distance is real elapsed time, so the gaps are to scale.'));
    var lg = el('div', 'viz-legend');
    lg.appendChild(el('span', null, '<i class="viz-sw" style="background:var(--orange)"></i>What the campaign did'));
    lg.appendChild(el('span', null, '<i class="viz-sw" style="background:var(--blue)"></i>What I did'));
    node.appendChild(lg);

    var H = 760, PAD = 34, SPINE = 470, SPAN = 102, ys = [], out = '';
    EVENTS.forEach(function (e, i) {
      var y = PAD + (e[3] - 30) / SPAN * (H - 2 * PAD);
      if (i && y - ys[i - 1] < 60) y = ys[i - 1] + 60;
      ys.push(y);
    });
    EVENTS.forEach(function (e, i) {
      var att = e[1] === 'att', y = ys[i];
      var tx = att ? SPINE - 26 : SPINE + 26;
      var anc = att ? 'end' : 'start';
      var body = e[2][0] + (e[2][1] ? '<tspan x="0" dy="20">' + e[2][1] + '</tspan>' : '');
      out += '<g transform="translate(' + tx + ',' + y.toFixed(1) + ')">' +
        '<line class="tick" x1="' + (SPINE - tx) + '" y1="0" x2="' + (att ? -12 : 12) + '" y2="0"/>' +
        '<circle cx="' + (SPINE - tx) + '" cy="0" r="7" fill="var(--' + (att ? 'orange' : 'blue') +
          ')" stroke="var(--surface)" stroke-width="2"/>' +
        '<text class="tm" x="0" y="-11" text-anchor="' + anc + '">' + e[0] + '</text>' +
        '<text class="lb" x="0" y="9" text-anchor="' + anc + '">' + body + '</text></g>';
    });
    function badge(a, b, txt, w) {
      var ym = (ys[a] + ys[b]) / 2;
      return '<g transform="translate(' + (SPINE + 30) + ',' + ym.toFixed(1) + ')">' +
        '<line class="gapline" x1="-30" y1="0" x2="-6" y2="0"/>' +
        '<rect class="gapbox" x="0" y="-15" width="' + w + '" height="30" rx="7"/>' +
        '<text class="gap" x="' + w / 2 + '" y="5.5" text-anchor="middle">' + txt + '</text></g>';
    }
    node.insertAdjacentHTML('beforeend',
      '<svg viewBox="0 0 1000 ' + H + '" role="img" aria-label="Timeline from 17:32 to 19:07 on 30 August 2026: ' +
      'purge, re-registration two minutes later, block, re-registration again fifteen minutes later, then reservation">' +
      '<line class="spine" x1="' + SPINE + '" y1="' + (PAD - 6) + '" x2="' + SPINE + '" y2="' + (H - PAD + 6) + '"/>' +
      out + badge(1, 2, '2 minutes later', 130) + badge(4, 5, '15 minutes later', 140) + '</svg>');

    node.appendChild(el('details', null,
      '<summary>Table view</summary><table><thead><tr><th>Time</th><th>Who</th><th>Event</th></tr></thead><tbody>' +
      EVENTS.map(function (e) {
        return '<tr><td>' + e[0] + '</td><td>' + (e[1] === 'att' ? 'Campaign' : 'Me') + '</td><td>' +
          e[2].join(' ').replace(/<[^>]+>/g, '') + '</td></tr>';
      }).join('') + '</tbody></table>'));
  }

  function init() {
    var nodes = document.querySelectorAll('.viz[data-fig]');
    if (!nodes.length) return;
    document.head.appendChild(el('style', null, CSS));
    var tip = el('div');
    tip.id = 'viz-tip';
    document.body.appendChild(tip);

    Array.prototype.forEach.call(nodes, function (n) {
      var key = n.dataset.fig;
      if (key === 'timeline') timeline(n);
      else if (FIGS[key]) bars(n, FIGS[key]);
    });

    function show(e) {
      var t = e.currentTarget;
      tip.textContent = t.dataset.tip;
      tip.style.opacity = 1;
      var r = t.getBoundingClientRect();
      var x = e.clientX != null ? e.clientX : r.left + r.width / 2;
      tip.style.left = Math.min(x + 12, window.innerWidth - tip.offsetWidth - 10) + 'px';
      tip.style.top = (r.top - 34) + 'px';
    }
    function hide() { tip.style.opacity = 0; }
    Array.prototype.forEach.call(document.querySelectorAll('[data-tip]'), function (t) {
      t.addEventListener('mousemove', show);
      t.addEventListener('focus', show);
      t.addEventListener('mouseleave', hide);
      t.addEventListener('blur', hide);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
