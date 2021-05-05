import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import * as StarWarsAPI from './utils/StarWarsAPI';
import ListPeople from "./ListPeople";
// import CreateContact from './CreateContact';

class App extends Component {
  state = {
    people: []
  }

  componentDidMount() {
    StarWarsAPI.getAll()
        .then((people) => {
          this.setState(() => ({
            people
          }))
        })
  }

  render() {
    return (
        <div>
          <Route exact path='/' render={() => (
              <ListPeople
                  people={this.state.people}
              />
          )} />
          {/*<Route path='/create' render={({ history }) => (*/}
          {/*    <CreateContact*/}
          {/*        onCreateContact={(contact) => {*/}
          {/*          this.createContact(contact)*/}
          {/*          history.push('/')*/}
          {/*        }}*/}
          {/*    />*/}
          {/*)} />*/}
        </div>
    );
  }
}

export default App;
