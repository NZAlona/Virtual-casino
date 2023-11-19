const refs = {
  container: document.querySelector(".js-wrap"),
  btn: document.querySelector(".js-btn"),
};

console.dir(refs.container.children);
// this is pseudo-array

refs.btn.addEventListener("click", onBtnClick);

function onBtnClick() {
  const winner = [];

  const field = refs.container.children.length;
  for (let i = 0; i < field; i += 1) {
    refs.container.children[i].textContent = "";

    createPromise("💰", "⏳", i * 350)
      .then((res) => {
        createFieldMark(refs.container.children[i], res);
        winner.push(1);
      })
      .catch((err) => {
        createFieldMark(refs.container.children[i], err);
        winner.push(0);
      })
      .finally(() => {
        if (winner.length === field) {
          setTimeout(() => {
            if (getWinner(winner)) {
              if (confirm(" Mega Win 😍"));
              {
                const o = Array.from(
                  refs.container.children,
                  (el) => (el.textContent = "")
                );

                // refs.container.children[i].textContent = "";
                // console.log(refs.container.children);
              }
            } else {
              if (confirm("Sorry, Mega Lost 😢"));
              {
                const o = Array.from(
                  refs.container.children,
                  (el) => (el.textContent = "")
                );
              }
            }
          }, 850);
        }
      });
  }
}

function getWinner(arr) {
  const result = arr.every((el) => el);
  return result;
}

function createFieldMark(p, smile) {
  p.textContent = smile;
}

function createPromise(win, lost, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomM = Math.random() > 0.4;
      if (randomM) {
        resolve(win);
      } else {
        reject(lost);
      }
    }, delay);
  });

  return promise;
}
