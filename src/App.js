import React, { useState } from 'react';
import { illustration, iconBrandRecognition, iconFullyCustomizeable, iconDetailedRecords } from './assets/images/index';
import { Header, Footer } from './components/layout/index';
import './assets/scss/main.scss';
import axios from 'axios';
import { CopyToClipboard } from 'react-copy-to-clipboard'

function App() {
  const [link, setLink] = useState('')
  const [url, setUrl] = useState([])
  const [isError, setIsError] = useState(false)

  const postLink = () => {
    if (link.length === 0) {
      setIsError(true)
    }
    if (link.length > 0) {
      setIsError(false)
      axios.post('https://rel.ink/api/links/', {
        url: link
      })
        .then(res => setUrl([...url, res.data]))
    }
  }
  return (
    <React.Fragment>
      <Header />
      <div className="hero">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="left d-flex flex-column">
            <h1>More than just shorter links</h1>
            <span>Build your brand's recognition and get detailed insights on how your links are performing</span>
            <button className="mt-4">Get Started</button>
          </div>
          <div className="right">
            <img src={illustration} alt="" />
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="container pt-5">
          <div className="box-input d-flex justify-content-between">
            <input
              type="text"
              placeholder="Shorten a link here..."
              onChange={(e) => {
                setLink(e.target.value)
                if (e.target.value.length > 0) setIsError(false)
              }}
              className={isError ? 'input-error' : ''}
            />
            {isError ? <div className="error">Please add a link</div> : ''}
            <button onClick={postLink}>Shorten it!</button>
          </div>
          <div className="row row-url">
            {
              url.map(({ hashid, url }) => {
                return (
                  <div className="col-md-12 justify-content-between" key={hashid}>
                    <div className="url d-flex justify-content-between align-items-center">
                      <div className="left">
                        <span>{url}</span>
                      </div>
                      <div className="right d-flex align-items-center">
                        <a href={`https://reLink/${hashid}`} >https://reLink/{hashid}</a>
                        <CopyToClipboard
                          text={`https://reLink/${hashid}`}
                        >
                          <button
                            className="not-copied"
                            onClick={(e) => {
                              if (e.target.className !== "not-copied") return

                              e.target.textContent = 'Copied!'
                              e.target.className = 'copied'

                              const thisEl = e.target

                              setTimeout(() => {
                                thisEl.textContent = 'Copy'
                                thisEl.className = 'not-copied'
                              }, 2000)

                            }}
                          >Copy
                        </button>
                        </CopyToClipboard>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className="statistics-content mt-5">
            <div className="title d-flex align-items-center flex-column">
              <h2>Advanced Statistics</h2>
              <span>Track how your links are performing across the web with</span>
              <span>our advanced statistics dashboard.</span>
            </div>
            <div className="row row-statistics position-relative">
              <div className="line"></div>
              <div className="col-md-4 wrap-card">
                <div className="card-statistic w-100 position-relative">
                  <h5 className="mb-3">Brand Recognition</h5>
                  <span>
                    Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instrill confidence in your content
                  </span>

                  <div className="icon d-flex justify-content-center align-items-center">
                    <img src={iconBrandRecognition} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-md-4 wrap-card">
                <div className="card-statistic w-100 position-relative">
                  <h5 className="mb-3">Detailed Records</h5>
                  <span>
                    Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
                  </span>

                  <div className="icon d-flex justify-content-center align-items-center">
                    <img src={iconDetailedRecords} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-md-4 wrap-card">
                <div className="card-statistic w-100 position-relative">
                  <h5 className="mb-3">Fully Customizable</h5>
                  <span>
                    Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
                  </span>

                  <div className="icon d-flex justify-content-center align-items-center">
                    <img src={iconFullyCustomizeable} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="boost">
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <h2>Boost your links today</h2>
          <button className="mt-3">Get Started</button>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
