function showList() {
  // console.log("hi");
  var list = document.getElementById("ollist");

  if (list.style.visibility == "hidden") {
    list.style.visibility = "visible";
  } else {
    list.style.visibility = "hidden";
  }
}

document.onclick = () => {
  if (document.getElementById("ollist").style.visibility == "visible") {
    document.getElementById("ollist").style.visibility = "hidden";
  }
};

function selectItem(a) {
  var x = a.innerHTML;
  // res.push(x);
  // console.log(res);
  var node = document.createElement("LI");
  var btn = document.createElement("button");
  btn.innerText = "x";
  node.append(x);
  node.appendChild(btn);
  btn.addEventListener("click", function (event) {
    event.target.parentElement.remove();
  });
  document.getElementById("demo").appendChild(node);
}

function addInput(e) {
  e.preventDefault();
  var b = document.getElementById("chips").value;
  var node = document.createElement("LI");
  var btn = document.createElement("button");
  btn.innerText = "x";
  node.append(b);
  node.appendChild(btn);
  btn.addEventListener("click", function (event) {
    event.target.parentElement.remove();
  });
  document.getElementById("demo").appendChild(node);
  formik.reset();
}

const formik = document.querySelector(".chipform");

formik.addEventListener("submit", addInput);
