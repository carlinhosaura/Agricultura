document.getElementById("learnMoreBtn").addEventListener("click", function() {
    const info = document.getElementById("moreInfo");
    if (info.classList.contains("hidden")) {
        info.classList.remove("hidden");
        this.textContent = "Esconder informação";
    } else {
        info.classList.add("hidden");
        this.textContent = "Saiba mais";
    }
});