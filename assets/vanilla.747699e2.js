import"./index.7a991a0b.js";const c=document.querySelector(".card"),o=document.querySelector(".rating_screen"),a=document.querySelector(".rating_section"),u=a.querySelector("span"),s=document.querySelector(".result_screen"),l=s.querySelector("button");function d(){for(let e=2;e<=5;e++){const n=u.cloneNode(!0),t=n.querySelector("input"),r=n.querySelector("label"),i=`rated-${e}`;t.id=i,t.value=e.toString(),r.innerText=e.toString(),r.setAttribute("for",i),e===5&&(t.checked=!0),a.appendChild(n)}c.classList.remove("hide")}function g(e){e.preventDefault();const t=new FormData(e.currentTarget).get("rating");if(!t)return;const r=s.querySelector(".result_banner");r.innerText=`You have selected ${+t} out of 5`,o.classList.add("hide"),s.classList.remove("hide"),c.classList.add("result")}function m(){s.classList.add("hide"),c.classList.remove("result"),o.classList.remove("hide")}d();o.addEventListener("submit",g);l.addEventListener("click",m);
