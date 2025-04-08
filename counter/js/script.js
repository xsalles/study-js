let count = 0;

function increment() {
    count++;
    document.getElementById("count").innerText = count;
}

function decrement() {
    if (count > 0) {
        count--;
        document.getElementById("count").innerText = count;
    }
}

function clearCount() {
    count = 0;
    document.getElementById("count").innerText = count;
    console.log("Counter cleared");
}

function save() {
    count = parseInt(document.getElementById("count").innerText);

    let savedCount = document.getElementById("saved-count");
    savedCount.innerText = count;
    
    localStorage.setItem("count", savedCount.innerText)
    
    count = 0;
    document.getElementById("count").innerText = count;
}
