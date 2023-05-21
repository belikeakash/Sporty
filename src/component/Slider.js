import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "../styles/Slider.css"

const WheelControls = (slider) => {
  let touchTimeout
  let position
  let wheelActive

  function dispatch(e, name) {
    position.x -= e.deltaX
    position.y -= e.deltaY
    slider.container.dispatchEvent(
      new CustomEvent(name, {
        detail: {
          x: position.x,
          y: position.y,
        },
      })
    )
  }

  function wheelStart(e) {
    position = {
      x: e.pageX,
      y: e.pageY,
    }
    dispatch(e, "ksDragStart")
  }

  function wheel(e) {
    dispatch(e, "ksDrag")
  }

  function wheelEnd(e) {
    dispatch(e, "ksDragEnd")
  }

  function eventWheel(e) {
    e.preventDefault()
    if (!wheelActive) {
      wheelStart(e)
      wheelActive = true
    }
    wheel(e)
    clearTimeout(touchTimeout)
    touchTimeout = setTimeout(() => {
      wheelActive = false
      wheelEnd(e)
    }, 50)
  }

  slider.on("created", () => {
    slider.container.addEventListener("wheel", eventWheel, {
      passive: false,
    })
  })
}

export default function App() {
  const [sliderRef] = useKeenSlider( 
    {breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },},
    {
      loop: false,
      rubberband: true,
      vertical: false,
    },
    [WheelControls]
  )

  return (
    <div ref={sliderRef} className="keen-slider" style={{ height: 40 }}>
      {
        Array(5).fill().map(()=> {
          return (
            <div className="keen-slider__slide number-slide" >LOGOS</div>
          )
        }) 
      }
      
    </div>
  )
}
