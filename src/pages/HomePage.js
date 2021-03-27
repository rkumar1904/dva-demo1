import { connect } from 'dva';
import React, { Component } from 'react'

class HomePage extends Component {
  componentDidMount() {

    // this.props.dispatch({
    //   type: 'product/getPost',
    //   payload: {
    //     extra_params: { 'abc': 'zzz' }
    //   },
    // });
  }

  addProductHandler = () => {
    this.props.dispatch({
      type: 'product/setState',
      payload: {
        isLoading: true,
      }
    });
  }

  render() {
    const { product } = this.props;
    const { productList = [], postList = [] } = product;
    return (
      <div>
        {/* <ul>
          {postList.map(item => {
            return <li style={{ margin: '15px', padding: '10px', border: '1px solid #ddd' }}>
              <h3> {item.title.rendered} </h3>
              <div dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
            </li>
          })}
        </ul> */}



        {/* <h1>Home page</h1>
        <h2> Product Count: {productList.length} </h2>

        <button onClick={this.addProductHandler}> Add Product  </button> */}
      </div>
    )
  }
}

export default connect(({ product }) => ({
  product,
}))(HomePage);


