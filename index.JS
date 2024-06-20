document.addEventListener("DOMContentLoaded", function() {
    let formEle = document.getElementById("bookmarkForm");
    let nameInEle = document.getElementById("siteNameInput");
    let urlInEle = document.getElementById("siteUrlInput");
    let nameMsg = document.getElementById("siteNameErrMsg");
    let urlMsg = document.getElementById("siteUrlErrMsg");
    let list = document.getElementById("bookmarksList");
    let arryList = [];

    nameInEle.addEventListener("change", function() {
        if (nameInEle.value.trim() === "") {
            nameMsg.textContent = "Required*";
        } else {
            nameMsg.textContent = "";
        }
    });

    urlInEle.addEventListener("change", function() {
        if (urlInEle.value.trim() === "") {
            urlMsg.textContent = "Required*";
        } else {
            urlMsg.textContent = "";
        }
    });

    formEle.addEventListener("submit", function(event) {
        event.preventDefault();

        let nameValue = nameInEle.value.trim();
        let urlValue = urlInEle.value.trim();
        let isValid = true;

        if (nameValue === "") {
            nameMsg.textContent = "Required*";
            isValid = false;
        } else {
            nameMsg.textContent = "";
        }

        if (urlValue === "") {
            urlMsg.textContent = "Required*";
            isValid = false;
        } else {
            urlMsg.textContent = "";
        }

        if (isValid) {
            let newList = {
                name: nameValue,
                url: urlValue,
                uniqueNo: arryList.length + 1,
            };

            arryList.push(newList);

            let listEle = document.createElement("li");
            listEle.classList.add("listStyle");

            let siteEle = document.createElement("h1");
            siteEle.textContent = newList.name;
            listEle.appendChild(siteEle);

            let linkEle = document.createElement("a");
            linkEle.href = newList.url;
            linkEle.target = "_blank";
            linkEle.textContent = newList.url;
            listEle.appendChild(linkEle);

            list.appendChild(listEle);

            // Clear input fields
            nameInEle.value = "";
            urlInEle.value = "";
        }
    });
});