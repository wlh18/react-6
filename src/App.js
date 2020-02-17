import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {getUser} from './redux/reducer'

class App extends React.Component {

  componentDidMount(){
    this.props.getUser()
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        I'm the App
        {this.props.userReducer.loading ? <div>We are loading</div> : <div>We are not loading</div>}
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
 return { 
   userReducer: reduxState.userReducer,
   productReducer: reduxState.productReducer
}
 // return { reduxState } equal to above line
}

// const mapDispatchToProps = {

// }

export default connect(mapStateToProps, {getUser: getUser})(App);
// export default connect(mapStateToProps, mapDispatchToProps or {getUser} passed as second arg)(App); equal to line above
