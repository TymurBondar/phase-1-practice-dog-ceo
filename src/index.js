const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const imgContainer = document.getElementById("dog-image-container");
const doglist = document.getElementById("dog-breeds");

fetch(imgUrl)
    .then((response) => response.json())
    .then((image) => image.message.forEach(function (imageUrl) {
        const img = document.createElement("img");
        img.src = imageUrl;
        imgContainer.appendChild(img);
    })
    )

fetch(breedUrl)
    .then((response) => response.json())
    .then((dogs) => {
        for (const breed in dogs.message) {
            const subBread = dogs.message[breed];
            const li = document.createElement("li");
            li.innerText = breed;
            li.classList.add("changeColor");
            if (Array.isArray(subBread) && subBread.length > 0) {
                for (let i = 0; i < subBread.length; i++) {
                    const subLi = document.createElement("li");
                    subLi.innerText = `${breed}  ${subBread[i]}`;
                    doglist.appendChild(subLi);
                }
            }
            else {
                doglist.appendChild(li);
            }
        }
    })


doglist.addEventListener("click", (event) => {
    event.target.style.color = 'red';
})
