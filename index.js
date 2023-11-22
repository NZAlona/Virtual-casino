const refs = {
  container: document.querySelector(".js-wrap"),
  btn: document.querySelector(".js-btn"),
};

// console.dir(refs.container.children);
// this is pseudo-array

refs.btn.addEventListener("click", onBtnClick);

function onBtnClick() {
  const winner = [];

  const field = refs.container.children.length;

  for (let i = 0; i < field; i += 1) {
    refs.container.children[i].textContent = "";

    createPromise("💰", "⏳", i)
      .then((res) => {
        createFieldMark(refs.container.children[i], res);
        winner.push("1");
      })
      .catch((err) => {
        createFieldMark(refs.container.children[i], err);
      })
      .finally(() => {
        setTimeout(() => {
          if (i === refs.container.children.length - 1) {
            if (!winner.length || winner.length === field) {
              if (confirm(" Mega Win 😍"));
              {
                Array.from(
                  refs.container.children,
                  (el) => (el.textContent = "")
                );
              }
            } else {
              if (confirm("Sorry, Mega Lost 😢"));
              {
                Array.from(
                  refs.container.children,
                  (el) => (el.textContent = "")
                );
              }
            }
          }
        }, 500);
      });
  }
}

function createFieldMark(p, smile) {
  p.textContent = smile;
}

function createPromise(win, lost, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomM = Math.random() > 0.5;
      if (randomM) {
        resolve(win);
      } else {
        reject(lost);
      }
    }, 350 * delay);
  });

  return promise;
}
