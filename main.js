document.getElementById("category").addEventListener("click", (e) => {
  /*if I go to the live site, to the dev tools and click on console and than on each item it will show me the html for it*/
  //console.log(e.target)

  //it will show the whole event
  //console.log(e)

  /*now if we go go back to the live site, the url changes, the is after / is appearing according to the item we click on, for example if I click on books it shows /#books*/
  location.href = location.origin + location.pathname + "#" + e.target.id
})

window.addEventListener("popstate", () => {
  module.renderOnPageLoadOrURLChange()
})

window.onload = () => {
  module.renderOnPageLoadOrURLChange()
}

const module = {
  setAllRendersNull: () => {
    document.getElementById("booksRender").innerHTML = null
    document.getElementById("shoesRender").innerHTML = null
    document.getElementById("laptopsRender").innerHTML = null
  },

  renderSpecificItem: (items, renderId) => {
    let div = document.createElement("div")

    items.map(eachItem => {
      let span = document.createElement("span")
      span.innerText = eachItem.name
      div.appendChild(span)
      div.appendChild(document.createElement("br"))
    })
    module.setAllRendersNull()
    document.getElementById(renderId).appendChild(div)
  },

  renderOnPageLoadOrURLChange: () => {
    let currentPath = location.hash.substr(1)
    if (currentPath === "books") {
      let books = [
        {
          id: 1,
          name: "first book",
          author: "XXX"
        },
        {
          id: 2,
          name: "second book",
          author: "XXX"
        },
        {
          id: 3,
          name: "third book",
          author: "XXX"
        }
      ]

    module.renderSpecificItem(books, "booksRender")

    } else if ( currentPath === "laptops" ) {
      let laptops = [
        {
          id: 1,
          name: "first laptop"
        },
        {
          id: 2,
          name: "second laptop"
        },
        {
          id: 3,
          name: "third laptop"
        }
      ]

      module.renderSpecificItem(laptops, "laptopsRender")

    } else if ( currentPath === "shoes" ) {
      let shoes = [
        {
          id: 1,
          name: "first shoe"
        },
        {
          id: 2,
          name: "second shoe"
        },
        {
          id: 3,
          name: "third shoe"
        }
      ]

      module.renderSpecificItem(shoes, "shoesRender")
    } else {
        aaa
    }
      
  }
}
