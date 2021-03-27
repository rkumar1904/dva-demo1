import { connect } from 'dva'
import React, { Component } from 'react'

class AboutPage extends Component {

  counterFun = () => {
    const { OnlinePeople, dispatch } = this.props;
    const updatePeople = OnlinePeople + 1;
    console.log('counterFun', updatePeople);

    dispatch({
      type: 'product/setState',
      payload: {
        OnlinePeople: updatePeople,
      }
    });
  }

  render() {
    // console.log('this.props', this.props);
    const { OnlinePeople } = this.props;
    return (
      <div>
        <h2>About page</h2>
        <h4>Online count: {OnlinePeople} </h4>
        <button onClick={this.counterFun}>Increase people count</button>
      </div>
    )
  }
}

export default connect(({ product }) => (
  product
))(AboutPage);


