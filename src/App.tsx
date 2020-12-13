import { Component } from "react";
import axios from "axios";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import { User } from "./models/User";

interface IProps {}

interface IState {
  users?: User[];
  search: string;
}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      search: "",
    };
  }

  componentDidMount = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(
      (res) => {
        if (res.data !== undefined || res.data !== null) {
          this.setState({
            users: res.data,
          });
        }
      },
      (e) => {
        console.log("axios failed");
        console.log(e);
      }
    );
  };

  render(): JSX.Element {
    const { users, search } = this.state;
    const filteredUsers = users?.filter((u) =>
      u.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className="App">
        <h1 className="title">React Typescript App 1</h1>
        <SearchBox
          placeholder="Search Users"
          handleChange={this.handleChange}
        />
        <CardList cardList={filteredUsers} />
      </div>
    );
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      search: e.target.value,
    });
  };
}

export default App;
