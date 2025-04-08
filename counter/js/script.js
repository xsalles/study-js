let count = 0;

function increment() {
    count++;
    document.getElementById("count").innerText = count;
}

function save() {
    count = parseInt(document.getElementById("count").innerText);

    let savedCount = document.getElementById("saved-count");
    savedCount.innerText = count;
    
    localStorage.setItem("count", savedCount.innerText)
}
