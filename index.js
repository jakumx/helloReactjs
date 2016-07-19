// FilterableProductTable
// SearchBar
// ProductTable
// ProductCategoryRow
// ProductRow

class Main extends React.Component {
  render() {
    if (this.props.data != null) {
        return (<div><FilterableProductTable data = {this.props.data}/></div>)
    }
    else {
        return (<div>Wait for it...</div>)
    }
  }

}


class FilterableProductTable extends React.Component {

  render() {
    
    return (<div> <SearchBar/><ProductTable products={this.props.data}/></div>)
  }

}

class SearchBar extends React.Component {

  render() {
    return (<div> <input type="text" placeholder="Search"/>
      <button>Now!!!</button>
      </div>)
  }

}

class ProductTable extends React.Component {

  render() {

    let categories = []
    let productTable = []

    this.props.products.forEach((product) => {

      if (categories.indexOf(product.category) == -1) categories.push(product.category)

    })

    categories.forEach((category) => {
      productTable.push(<ProductCategoryRow key={category} name={category}/>)
      this.props.products.map((product) => {
        if (product.category == category)
          productTable.push(<ProductRow key={product.name} name={product.name} />)
      })
    })
    
    return (
      <div>

        {productTable} 
      </div>
    )
  }

}

class ProductCategoryRow extends React.Component {

  render() {
    
    return (
      <div>
        {this.props.name}
      </div>
    )
  }

}



class ProductRow extends React.Component {

  render() {
    return (
      <div> &nbsp;&nbsp;{this.props.name} </div>
    )
  }

}

let db

setTimeout( () => {
  db = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ]

  const app = document.getElementById('app')
    ReactDOM.render(<Main data = { db } />, app)
}, 1500)

const app = document.getElementById('app')
    ReactDOM.render(<Main data = { db } />, app)


