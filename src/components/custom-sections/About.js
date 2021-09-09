import React, { Component } from "react"
import Section from "../Section"
import Lightbox from "react-image-lightbox"

import * as s from "../Section.module.css"
import "react-image-lightbox/style.css"

const images = ["/uoft-certificate.png", "/uw-diploma.png"]

export default class SectionBio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photoIndex: 0,
      isOpen: false,
    }
  }

  render() {
    const { photoIndex, isOpen } = this.state
    return (
      <Section header={"About"}>
        <div className={s.FlexBox} id="about">
          <div className={s.FlexBox_flexItem___left}>
            <h3>Education</h3>
          </div>
          <div className={s.FlexBox_flexItem___right}>
            <div>
              <button
                class="button-link"
                onClick={() => this.setState({ photoIndex: 0, isOpen: true })}
                onKeyUp={this.handleKeyUp}
              >
                UofT 2021 (Programming Bootcamp)
              </button>
            </div>
            <div>
              <button
                class="button-link"
                onClick={() => this.setState({ photoIndex: 1, isOpen: true })}
                onKeyUp={this.handleKeyUp}
              >
                UW 2015-2020 (BA)
              </button>
            </div>
          </div>
        </div>
        <div className={s.FlexBox}>
          <div className={s.FlexBox_flexItem___left}>
            <h3>Study Foci</h3>
          </div>
          <div className={s.FlexBox_flexItem___right}>
            <div className={s.Card___small}>Business (Major)</div>
            <div className={s.Card___small}>Political Science (Major)</div>
            <div className={s.Card___small}>Economics (Minor)</div>
            <div className={s.Card___small}>International Trade (Minor)</div>
          </div>
        </div>
        <div className={s.FlexBox}>
          <div className={s.FlexBox_flexItem___left}>
            <h3>Hobbies</h3>
          </div>
          <div className={s.FlexBox_flexItem___right}>
            <div className={s.Card___small}>Running</div>
            <div className={s.Card___small}>Reading</div>
            <div className={s.Card___small}>Bouldering</div>
            <div className={s.Card___small}>Gaming</div>
            <div className={s.Card___small}>Dragon Boating</div>
          </div>
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            onCloseRequest={() => this.setState({ isOpen: false })}
          />
        )}
      </Section>
    )
  }
}
