document.addEventListener("DOMContentLoaded", function () {
    createSnowflakes();
});

function createSnowflakes() {
    const numSnowflakes = 150;

    for (let i = 0; i < numSnowflakes; i++) {
        createSnowflake();
    }
}

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflakes";
    document.body.appendChild(snowflake);

    const initialX = Math.random() * window.innerWidth;
    const initialY = Math.random() * window.innerHeight;
    const size = Math.random() * 3 + 1;
    const animationDuration = Math.random() * 5 + 5;

    snowflake.style.left = initialX + "px";
    snowflake.style.top = initialY + "px";
    snowflake.style.width = size + "px";
    snowflake.style.height = size + "px";
    snowflake.style.animationDuration = animationDuration + "s";

    snowflake.addEventListener("animationiteration", () => {
        snowflake.style.left = Math.random() * window.innerWidth + "px";
        snowflake.style.top = -10 + "px";
    });
}
