var pokemonRepository=function(){var e=[],t="https://pokeapi.co/api/v2/pokemon/?limit=151",n=document.querySelector("#modal-container");function o(t){e.push(t)}function i(){n.classList.remove("is-visible")}return window.addEventListener("keydown",function(e){"Escape"===e.key&&n.classList.contains("is-visible")&&i()}),n.addEventListener("click",function(e){e.target===n&&i()}),{add:o,loadList:function(){return fetch(t).then(function(e){return e.json()}).then(function(e){e.results.forEach(function(e){o({name:e.name,detailsUrl:e.url})})}).catch(function(e){console.error(e)})},getAll:function(){return e},loadDetails:function(e){var t=e.detailsUrl;return fetch(t).then(function(e){return e.json()}).then(function(t){e.imageUrl=t.sprites.front_default,e.height=t.height,e.types=t.types,e.hp=t.stats.slice(0,1),e.attack=t.stats.slice(1,2),e.defense=t.stats.slice(2,3)}).catch(function(e){console.error(e)})},closeModal:i,showModal:function(e){n.innerHTML="";var t=document.createElement("div");t.classList.add("modal");var o=document.createElement("button");o.classList.add("modal-close"),o.innerText="Close",o.addEventListener("click",function(){i()});var a=document.createElement("h2");a.innerText=e.name;var s=document.createElement("img");s.classList.add("modal-image"),s.src=e.imageUrl;var l=document.createElement("p");l.innerText="Height(m): "+e.height/10,t.appendChild(o),t.appendChild(a),t.appendChild(l),t.appendChild(s),n.appendChild(t),n.classList.add("is-visible")},addListItem:function(e){var t=document.querySelector(".pokemon-list"),n=document.createElement("li"),o=document.createElement("button");o.innerText=e.name,o.classList.add("pokemon-button"),o.addEventListener("click",function(){showDetails(e)}),n.appendChild(o),t.appendChild(n)}}}();function showDetails(e){pokemonRepository.loadDetails(e).then(function(){pokemonRepository.showModal(e)})}pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(pokemonRepository.addListItem)});var backToTop=function(){var e=document.querySelector("#js-top");window.addEventListener("scroll",()=>{let t=window.scrollY;e.className=t>0?"top-link show":"top-link hide"});var t=()=>{var e=document.documentElement.scrollTop||document.body.scrollTop;e>0&&(window.requestAnimationFrame(t),window.scrollTo(0,e-e/10))};e.onclick=function(e){e.preventDefault(),t()}}();function searchFunction(){var e=document.getElementById("search-input").value.toUpperCase(),t=document.getElementsByTagName("li");for(i=0;i<t.length;i++){-1===t[i].getElementsByClassName("pokemon-button")[0].innerHTML.toUpperCase().indexOf(e)?t[i].style.display="none":t[i].style.display=""}}
