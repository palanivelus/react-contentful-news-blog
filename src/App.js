import React from "react";
import "./App.css";
import { client } from "./client";
import Posts from "./components/Posts";

class App extends React.Component {
  state = {
    articles: [],
    advertisements: [],
  };

  componentDidMount() {
    client
      .getEntries({ content_type: "news" })
      .then((response) => {
        //console.log(response);
        this.setState({
          articles: response.items,
        });
      })
      .catch(console.error);

    client
      .getEntries({ content_type: "advertisements" })
      .then((response) => {
        console.log("@@@@@ ", JSON.stringify(response.items[0].fields));
        //console.log(response);
        this.setState({
          advertisements: response.items[0].fields,
        });
      })
      .catch(console.error);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <header>
            <div className="wrapper">
              <span className="logo">Pro News</span>
            </div>
          </header>
          <main>
            <div className="wrapper">
              <Posts posts={this.state.articles} />
            </div>
          </main>
          <footer className="footer">
            <a href={this.state.advertisements.url}>
              {this.state.advertisements.featuredImage && (
                <img
                  src={this.state.advertisements.featuredImage.fields.file.url}
                  alt={this.state.advertisements.featuredImage.fields.file.fileName}
                  height="100%"
                  width="100%"
                />
              )}
            </a>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
