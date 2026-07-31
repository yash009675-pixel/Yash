"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const themeButton = document.getElementById("themeButton");
  const savedTheme = safeGet("love-site-theme");

  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
  }
  updateThemeButton(themeButton);

  themeButton?.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    const activeTheme = document.body.classList.contains("light-theme") ? "light" : "dark";
    safeSet("love-site-theme", activeTheme);
    updateThemeButton(themeButton);
  });

  const currentYear = document.getElementById("currentYear");
  if (currentYear) currentYear.textContent = String(new Date().getFullYear());

  setupCountdown();
  setupMusic();
  setupDialogs();
});

function setupCountdown() {
  const days = document.getElementById("days");
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");
  const yearsTogether = document.getElementById("yearsTogether");

  if (!days || !hours || !minutes || !seconds) return;

  const startDate = new Date(2021, 0, 22);
  const update = () => {
    const now = new Date();
    let nextAnniversary = new Date(now.getFullYear(), 0, 22, 0, 0, 0);
    if (nextAnniversary <= now) nextAnniversary = new Date(now.getFullYear() + 1, 0, 22, 0, 0, 0);

    const timeLeft = Math.max(0, nextAnniversary.getTime() - now.getTime());
    const totalSeconds = Math.floor(timeLeft / 1000);
    const remainingDays = Math.floor(totalSeconds / 86400);
    const remainingHours = Math.floor((totalSeconds % 86400) / 3600);
    const remainingMinutes = Math.floor((totalSeconds % 3600) / 60);
    const remainingSeconds = totalSeconds % 60;

    days.textContent = String(remainingDays).padStart(3, "0");
    hours.textContent = String(remainingHours).padStart(2, "0");
    minutes.textContent = String(remainingMinutes).padStart(2, "0");
    seconds.textContent = String(remainingSeconds).padStart(2, "0");

    if (yearsTogether) {
      const completedYears = now.getFullYear() - startDate.getFullYear() - (now < new Date(now.getFullYear(), 0, 22) ? 1 : 0);
      yearsTogether.textContent = `${completedYears} beautiful years together`;
    }
  };

  update();
  window.setInterval(update, 1000);
}

function setupMusic() {
  const music = document.getElementById("bgMusic");
  const musicButton = document.getElementById("musicButton");
  if (!music || !musicButton) return;

  const showPaused = () => {
    musicButton.textContent = "♫ Play our song";
    musicButton.setAttribute("aria-pressed", "false");
  };
  const showPlaying = () => {
    musicButton.textContent = "❚❚ Pause our song";
    musicButton.setAttribute("aria-pressed", "true");
  };

  musicButton.addEventListener("click", async () => {
    if (!music.paused) {
      music.pause();
      return;
    }
    try {
      await music.play();
    } catch {
      musicButton.textContent = "Unable to play song";
      musicButton.setAttribute("aria-pressed", "false");
    }
  });

  music.addEventListener("play", showPlaying);
  music.addEventListener("pause", showPaused);
  music.addEventListener("ended", showPaused);
}

function setupDialogs() {
  const memoryDialog = document.getElementById("memoryDialog");
  const dialogTitle = document.getElementById("dialogTitle");
  const dialogText = document.getElementById("dialogText");

  document.querySelectorAll(".gallery-card").forEach((card) => {
    card.addEventListener("click", () => {
      if (!memoryDialog || !dialogTitle || !dialogText) return;
      dialogTitle.textContent = card.dataset.memoryTitle || "A beautiful memory";
      dialogText.textContent = card.dataset.memoryText || "Every moment with you is precious to me.";
      openDialog(memoryDialog);
    });
  });

  const giftButton = document.getElementById("giftButton");
  const giftDialog = document.getElementById("giftDialog");
  giftButton?.addEventListener("click", () => {
    if (giftDialog) openDialog(giftDialog);
  });

  document.querySelectorAll("[data-close-dialog]").forEach((button) => {
    button.addEventListener("click", () => button.closest("dialog")?.close());
  });

  document.querySelectorAll("dialog").forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
  });
}

function openDialog(dialog) {
  if (typeof dialog.showModal === "function") dialog.showModal();
}

function updateThemeButton(button) {
  if (!button) return;
  const isLight = document.body.classList.contains("light-theme");
  button.textContent = isLight ? "🌙" : "☀️";
  button.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
}

function safeGet(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSet(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Theme still works even if browser storage is unavailable.
  }
}
```javascript
  );

}
```
