const h2 = document.createElement("h2");
h2.textContent = "Florence Simba";
h2.style.color = "#ffffff";
h2.style.fontSize = "40px";
h2.style.marginTop = "20px";
h2.style.textAlign = "center";

const p = document.createElement("p");
p.textContent = "A passionate data analyst and software developer based in Nairobi, Kenya.";
p.style.color = "#ffffff";
p.style.fontSize = "30px";
p.style.marginTop = "5px";
p.style.textAlign = "center";

const nav = document.querySelector("header nav"); 
nav.insertAdjacentElement("afterend", h2);
h2.insertAdjacentElement("afterend", p); 