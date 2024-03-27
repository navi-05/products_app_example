// fetch(`http://localhost:3000/products`)

const container = document.getElementById('container')
const button = document.querySelector('button')

button.addEventListener("click", (e) => {
  fetch(`http://localhost:3000/products`)
    .then(res => res.json())
    .then(data => generateUI(data))
})

function generateUI(data) {
  const products = data.products; // array
  console.log(products)

  products.forEach((product) => {
    // UI Generate
    const div = document.createElement('div')
    div.classList.add('childStyles')
    
    const title = document.createElement('h1')
    title.style.textAlign = "center"
    title.classList.add('poppins-black')
    title.style.fontSize = '2rem'
    const desc = document.createElement('h5')
    desc.style.textAlign = "center"
    const price = document.createElement('p')
    const image = document.createElement('img')

    title.innerText = product.title
    desc.innerText = product.description
    price.innerText = "$ "+ product.price
    image.src = product.images[0]
    image.alt = "Product Image"

    div.appendChild(image)
    div.appendChild(title)
    div.appendChild(desc)
    div.appendChild(price)

    container.appendChild(div)

  })
}

