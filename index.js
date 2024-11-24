// Create and style the h2 element
const h2 = document.createElement("h2");
h2.textContent = "Florence Simba";
h2.style.color = "#ffffff";
h2.style.fontSize = "40px";
h2.style.marginTop = "20px";
h2.style.textAlign = "center";

// Create and style the p element
const p = document.createElement("p");
p.textContent = "A passionate data analyst and software developer based in Nairobi, Kenya.";
p.style.color = "#ffffff";
p.style.fontSize = "20px";
p.style.marginTop = "5px";
p.style.textAlign = "center";

// Find the navigation element and insert the new elements below it
const nav = document.querySelector("header nav"); // Target the nav inside the header
nav.insertAdjacentElement("afterend", h2); // Insert h2 below the navigation
h2.insertAdjacentElement("afterend", p); // Insert p below the h2
