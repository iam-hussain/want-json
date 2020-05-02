import React, { Component } from "react";

export default class FakeAPIExample extends Component {
  render() {
    return (
      <div className="content">
        <div className="home-sampleview row align-items-center justify-content-center">
          <div className="col">
            <h2>Dummy Data API</h2>
            <p>
              free online REST API that you can use whenever you need some fake
              data.
            </p>
            <button className="button secondary hover-animate">See all</button>
            <div className="row">
              <div className="col-md-6 home-sample-table">
                <table className="resources">
                  <thead>
                    <tr>
                      <th>URL</th>
                    </tr>
                    <tr>
                      <th>Discribe</th>
                    </tr>
                    <tr>
                      <th>Try it</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a href="/posts">/posts</a>
                      </td>
                      <td>100 posts</td>
                      <td>
                        <button className="button round">
                          <i className="fa fa-arrow-right"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="/comments">/comments</a>
                      </td>
                      <td>500 comments</td>
                      <td>
                        <button className="button round">
                          <i className="fa fa-arrow-right"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="/albums">/albums</a>
                      </td>
                      <td>100 albums</td>
                      <td>
                        <button className="button round">
                          <i className="fa fa-arrow-right"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="/photos">/photos</a>
                      </td>
                      <td>5000 photos</td>
                      <td>
                        <button className="button round">
                          <i className="fa fa-arrow-right"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="/todos">/todos</a>
                      </td>
                      <td>200 todos</td>
                      <td>
                        <button className="button round">
                          <i className="fa fa-arrow-right"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="/users">/users</a>
                      </td>
                      <td>10 users</td>
                      <td>
                        <button className="button round">
                          <i className="fa fa-arrow-right"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-6 browserBox">
                <div className="browser">
                  <div className="browser-button"></div>
                  <div className="browser-button"></div>
                  <div className="browser-button"></div>
                  <div className="address">
                    <span className="host">my-json-server.typicode.com/</span>
                    <span className="path">user/repo/posts/1</span>
                  </div>
                  <pre>
                    <code className="js hljs javascript">
                      // Click Try it to see response
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
