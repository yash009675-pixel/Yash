# Full-featured repaired website

This is the repaired version that preserves the original large codebase and all of its intended effects.

## Upload to GitHub

Upload every file in this folder to the **root** of the GitHub repository, then commit. Do not upload the folder itself as a nested folder.

Required files:

- `index.html`
- `story.html`
- `style.css`
- `script.js`
- `song.mp3`
- `photo-placeholder.svg`

## What was repaired

- Fixed the JavaScript syntax error that stopped all of `script.js`.
- Corrected audio from missing `music.mp3` to the supplied `song.mp3`.
- Moved the script include to the end of `index.html`, so the photo viewer and final screen can find their HTML elements.
- Removed the test popup `INLINE JS WORKING`.
- Kept every original section/effect: intro, loader, stars, floating hearts, countdown, music, theme, letter, timeline, gallery, gift, heart rain, trails, photo viewer, finale, and more.
- Completed typing text, proposal interaction, confetti and fireworks.
- Removed the duplicated heart-rain timer and made the mouse/touch heart trail lighter, so it does not slow the page.

## Add your real photos

The ZIP you supplied has empty `photo1.jpg`, `photo2.jpg`, and `photo3.jpg` files (only 1 byte each); `photo4.jpg`, `photo5.jpg`, and `photo6.jpg` were absent. To avoid broken photos, this version uses `photo-placeholder.svg`.

When you have your photos, upload `photo1.jpg` through `photo6.jpg` in this folder. In `story.html`, replace each `photo-placeholder.svg` with the required filename, such as `photo1.jpg`. Keep the spelling and capital/small letters exactly the same.
