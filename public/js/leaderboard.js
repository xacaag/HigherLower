db.collection("users")
  .orderBy("score", "desc")
  .limit(50)
  .onSnapshot((querySnapshot) => {
    let i = 1;
    querySnapshot.forEach((doc) => {
      let container = document.createElement("div");
      container.classList.add("row");
      let heddeh = document.createElement("div");
      let name = document.createElement("div");
      let score = document.createElement("div");
      heddeh.classList.add("TenOfTen");
      heddeh.innerHTML = "#" + i;
      name.classList.add("name");
      name.innerHTML = doc.data().name;
      score.classList.add("score");
      score.innerHTML = doc.data().score;
      container.appendChild(heddeh);
      container.appendChild(name);
      container.appendChild(score);
      document.getElementsByClassName("cololumn")[0].appendChild(container);
      document.getElementById("loader").style.display = "none";
      i++;
    });
  });
const back = () => {
  location.href = "./index.html ";
};
  const back_index = () => {
    window.location = "index.html";
  }
