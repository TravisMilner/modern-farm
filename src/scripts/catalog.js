export const catalog = (foodArr) => {
    let contentContainer = document.querySelector(".container")
    for (const food of foodArr ) {
        contentContainer.innerHTML +=  `
        <section class = "plants">
        ${food.type}
        </section>`
        
    }
}