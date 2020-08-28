import React, { useRef, useState} from 'react'
import { useSpring, a, config } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import {themeEvent} from './../context/theme-event'

const items = [
  {
    'name': 'Linkedin',
    'link': 'https://www.linkedin.com/company/on-first-digital'
  },
  {
    'name': 'facebook',
    'link': 'https://www.facebook.com/onfirstdigital'
  },
  {
    'name':'twitter',
    'link': 'https://twitter.com/OnfirstDigital'
  },
  {
    'name':'contact',
    'link': '/contact'
  }]
const height = items.length * 60 + 80

const DownMenu = ({BooleanCloseEvent, boolCloseMenu}) => {
  const draggingRef = useRef(false)
  const [{ y }, set] = useSpring(() => ({ y: height }))
  let myPos = 0

  const [togglePanel, setTogglePanel] = useState(true)

  const close = (velocity = 0) => {
    console.log('closePopin', BooleanCloseEvent)
      set({ y: height, config: { ...config.stiff, velocity } })
  }

  const open = () => {
    // when cancel is true, it means that the user passed the upwards threshold
    // so we change the spring config to create a nice wobbly effect
    set({ y: myPos, config: '' ? config.wobbly : config.stiff })
  }

  const controlTogglePanel = () => {
    console.log('toggleOpen', togglePanel, 'BooleanCloseEvent', BooleanCloseEvent)
    setTogglePanel(!togglePanel)

    if(!togglePanel){
      return close()
    } else {
      return open()
    }
  }
  const bind = useDrag(
    ({ first, last, vxvy: [, vy], movement: [, my], cancel, canceled }) => {
      if (first) draggingRef.current = true
      // if this is not the first or last frame, it's a moving frame
      // then it means the user is dragging
      else if (last) setTimeout(() => (draggingRef.current = false), 0)

      // if the user drags up passed a threshold, then we cancel
      // the drag so that the sheet resets to its open position
      if (my < -70) cancel()

      // when the user releases the sheet, we check whether it passed
      // the threshold for it to close, or if we reset it to its open positino
      if (last) my > height * 0.75 || vy > 0.5 ? open(vy) : close(vy)
      // when the user keeps dragging, we just move the sheet according to
      // the cursor position
      else set({ y: my, immediate: false, config: config.stiff })
    },
    { initial: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true }
  )

  const display = y.to(py => (py < height ? 'block' : 'none'))

  const bgStyle = {
    transform: y.to([0, height], ['translateY(-8%) scale(1.16)', 'translateY(0px) scale(1)']),
    opacity: y.to([0, height], [0.4, 1], 'clamp')
    // touchAction: y.to(v => (v > 0 ? 'auto' : 'none'))
  }
  return (
    <themeEvent.Consumer>
        {mssg => (
        <>
          <div className="action-btn" onClick={() => {
            mssg.OpenningPanel()
            controlTogglePanel()}}/>
          {boolCloseMenu && close()}
          <a.div
            className="sheet" {...bind()}
            style={{display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
          >
            {items.map((entry, i) => (
              <div key={entry + i} onClick={() => !draggingRef.current && close()}>
                <a href={entry.link} children={entry.name}></a>
              </div>
            ))}
          </a.div>
        </>
      )}
    </themeEvent.Consumer>
  )
}

export default DownMenu
