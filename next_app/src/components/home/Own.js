import React, { Component } from 'react'

export default class OwnAPIExample extends Component {
    render() {
        return (
            <div className="content">

                <div className="home-sampleview row align-items-center justify-content-center">
                    <div className="col-12">
                        <h2>Own Data API</h2>
                        <p>free online REST API that you can use whenever you need some fake data.</p>
                        <button className="button secondary hover-animate">Create</button>
                        <div className="row">
                            <div className="col-md-6 first">
                                <div className="browser">
                                    <div className="browser-button"></div>
                                    <div className="browser-button"></div>
                                    <div className="browser-button"></div>
                                    <div className="address"><span className="host">my-json-server.typicode.com/</span><span
                                            className="path">user/repo/posts/1</span></div>
                                    <pre><code className="js hljs javascript">

                                </code></pre>
                                </div>
                            </div>
                            <div className="col-md-6 second">
                                <div className="browser">
                                    <div className="browser-button"></div>
                                    <div className="browser-button"></div>
                                    <div className="browser-button"></div>
                                    <div className="address"><span className="host">my-json-server.typicode.com/</span><span
                                            className="path">user/repo/posts/1</span></div>
                                    <pre><code className="js hljs javascript">

                            </code></pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
