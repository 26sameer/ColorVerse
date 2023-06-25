import { useState } from 'react'
import { generateRandomColor } from '../utils/RandomColor'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Tooltip } from 'react-tooltip'

const Generator = () => {
  const getInitialColor = () => {
    const value = '#23ed92'
    return value
  }

  const getInitialMode = () => {
    const mode = 'analogic'
    return mode
  }

  const [color, setColor] = useState(getInitialColor)
  const [mode, setMode] = useState(getInitialMode)

  const fetchScheme = () => {
    return axios.get(`https://www.thecolorapi.com/scheme?hex=${color.slice(1)}&format=json&mode=${mode}&count=4`)
  }

  const { data, error, isError, isFetching, refetch } = useQuery({
    queryKey: ['color'],
    queryFn: fetchScheme,
    refetchOnWindowFocus: false,
    enabled: false,
  })

  if (isError) {
    return <div>{error.message}</div>
  }

  const handleClick = (ev) => {
    ev.preventDefault()
    refetch()
    setColor(generateRandomColor)
    console.log(color)
  }

  const handleChange = (ev) => {
    ev.preventDefault()
    setMode(ev.target.value)
  }

  return (
    <div className="generator">
      <h3>Color Palette Generator</h3>
      <form action="/">
        <label htmlFor="chooseColor">Choose a Scheme</label>
        <br />
        <select id="chooseColor" name="chooseColor" onChange={(ev) => handleChange(ev)} value={mode} required>
          <option value="analogic">Analogic</option>
          <option value="monochrome">Monochrome</option>
          <option value="monochrome-dark">Monochrome-Dark</option>
          <option value="monochrome-light">Monochrome-Light</option>
          <option value="complement">Complement</option>
          <option value="analogic-complement">Analogic-Complement</option>
          <option value="triad">Triad</option>
          <option value="quad">Quad</option>
        </select>
        <button onClick={(ev) => handleClick(ev)}>Generate Random Color</button>
      </form>
      <Tooltip id="my-tooltip" openOnClick="true">
        Copied! ✅
      </Tooltip>

      {console.log(data?.data)}
      {console.log(data?.data.mode)}

      {isFetching ? (
        <h3>Loading...</h3>
      ) : (
        <div className="color-group">
          {data?.data?.colors &&
            data?.data?.colors?.map((allColors) => {
              return (
                <div
                  key={allColors.hex.value}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-place="top"
                  data-tooltip-content="Copied! ✅"
                  data-tooltip-delay-hide={800}
                  style={{ backgroundColor: allColors?.hex?.value }}
                  onClick={() => navigator.clipboard.writeText(`${allColors?.hex?.value}`)}
                  className="color">
                  {allColors?.hex?.value}
                </div>
              )
            })}
        </div>
      )}
    </div>
  )
}

export default Generator
