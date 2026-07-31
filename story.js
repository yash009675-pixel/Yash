"use strict";

document.addEventListener("DOMContentLoaded", () => {

/*

* =====================================
* CURRENT YEAR
* =====================================
  */

const currentYear =
document.getElementById("currentYear");

if (currentYear) {
currentYear.textContent =
String(new Date().getFullYear());
}

/*

* =====================================
* MEMORY DIALOG
* =====================================
  */

const dialog =
document.getElementById("memoryDialog");

const dialogTitle =
document.getElementById("dialogTitle");

const dialogMessage =
document.getElementById("dialogMessage");

const dialogClose =
document.getElementById("dialogClose");

/*

* Memory cards
  */

document
.querySelectorAll(".memory-box")
.forEach((card) => {

```
  card.addEventListener("click", () => {

    if (
      !dialog ||
      !dialogTitle ||
      !dialogMessage
    ) {
      return;
    }


    const title =
      card.dataset.title ||
      "A beautiful memory";


    const message =
      card.dataset.message ||
      "Every moment with you is precious.";


    dialogTitle.textContent =
      title;

    dialogMessage.textContent =
      message;


    openDialog(dialog);

  });

});
```

/*

* Close button
  */

dialogClose?.addEventListener(
"click",
() => {

```
  dialog?.close();

}
```

);

/*

* Click outside dialog
  */

dialog?.addEventListener(
"click",
(event) => {

```
  if (
    event.target === dialog
  ) {

    dialog.close();

  }

}
```

);

/*

* Escape key
  */

document.addEventListener(
"keydown",
(event) => {

```
  if (
    event.key === "Escape" &&
    dialog?.open
  ) {

    dialog.close();

  }

}
```

);

});

/*

* =====================================
* OPEN DIALOG
* =====================================
  */

function openDialog(dialog) {

if (
typeof dialog.showModal ===
"function"
) {

```
dialog.showModal();
```

}

}

