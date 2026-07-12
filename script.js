/* ==========================================================================
   DREW B IT — shared site behavior (v2 "The Ledger")
   Responsibilities (nothing else): reveal observer, nav toggle,
   live-frame facade loader (click-to-load, 2-active cap, Dickerson
   auto-load on index), footer year.
   ========================================================================== */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Footer year: <span data-year></span> ---------- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Mobile nav toggle ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- Section reveal (threshold 0.15, unobserve after fire) ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ---------- Live-frame facade loader ----------
     .live-frame carries data-src (real URL) and optional data-title.
     Poster click injects the iframe; max 2 active at once — activating a
     third swaps the oldest back to its poster. */
  var MAX_ACTIVE = 2;
  var activeFrames = [];

  function deactivateFrame(frame) {
    var iframe = frame.querySelector('.live-frame__viewport iframe');
    if (iframe) iframe.remove();
    frame.classList.remove('is-active');
    var poster = frame.querySelector('.frame-poster');
    if (poster) {
      poster.removeAttribute('aria-hidden');
      poster.tabIndex = 0;
      poster.disabled = false;
    }
    var i = activeFrames.indexOf(frame);
    if (i > -1) activeFrames.splice(i, 1);
  }

  function activateFrame(frame) {
    if (frame.classList.contains('is-active')) return;
    while (activeFrames.length >= MAX_ACTIVE) deactivateFrame(activeFrames[0]);

    var viewport = frame.querySelector('.live-frame__viewport');
    var src = frame.getAttribute('data-src');
    if (!viewport || !src) return;

    var iframe = document.createElement('iframe');
    iframe.src = src;
    iframe.title = frame.getAttribute('data-title') || 'Live site preview';
    viewport.appendChild(iframe);
    frame.classList.add('is-active');
    /* The faded poster must leave the tab order and the a11y tree */
    var poster = frame.querySelector('.frame-poster');
    if (poster) {
      poster.setAttribute('aria-hidden', 'true');
      poster.tabIndex = -1;
      poster.disabled = true;
    }
    activeFrames.push(frame);
  }

  document.querySelectorAll('.live-frame[data-src]').forEach(function (frame) {
    var poster = frame.querySelector('.frame-poster');
    if (poster) {
      poster.addEventListener('click', function () { activateFrame(frame); });
    }
  });

  /* ---------- Index Dickerson auto-load (the ONE intent-free iframe) ---------- */
  var autoFrame = document.querySelector('.live-frame[data-autoload][data-src]');
  if (autoFrame) {
    if ('IntersectionObserver' in window) {
      var autoObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            activateFrame(autoFrame);
            autoObserver.unobserve(autoFrame);
          }
        });
      }, { threshold: 0.25 });
      autoObserver.observe(autoFrame);
    } else {
      activateFrame(autoFrame);
    }
  }
})();
