const year = document.querySelector<HTMLBaseElement>("#year");

if(year?.textContent != null){
  year.textContent = new Date().getFullYear().toString()
  year.style.color = "#ffffff"
}

export {}