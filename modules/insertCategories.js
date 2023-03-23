export default function insertCategories(jokeInfo) {
  const figuresBox = document.querySelector("#figures-box")
  //we need to display the supported categories
  jokeInfo.categories.forEach(function (element, index, array) {
    console.log(element)
    if (element === "Any") {
      return null
    }
    //create a figure element.
    const figure = document.createElement("figure")
    //create three children elements, which will be contained in figure. Img, h3, div
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const div = document.createElement("div");
    // Add attributes or and/or content to the children
    img.src = `./images/categories/${element}.png`
    h3.textContent = `${element}`
    //insert afterbegin to figure with the three children elements inside of it for the category section.
    figure.insertAdjacentElement("beforeend", img)
    figure.insertAdjacentElement("beforeend", h3)
    figure.insertAdjacentElement("beforeend", div)
    figuresBox.insertAdjacentElement("beforeend", figure)

  })
}