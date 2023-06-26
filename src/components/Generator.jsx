import { useState } from 'react';
import {
  generateRandomColor,
  getInitialColor,
  getInitialMode,
} from '../utils/RandomColor';
import { useColorAPI } from '../query/useColorAPI';
import DisplayScheme from './DisplayScheme';
import SelectScheme from './SelectScheme';
import PrimaryButton from './PrimaryButton';

const Generator = () => {
  const [color, setColor] = useState(getInitialColor);
  const [mode, setMode] = useState(getInitialMode);

  const { data, error, isError, isFetching, refetch, isFetched } = useColorAPI(
    color,
    mode
  );

  if (isError) {
    return (
      <p
        className="axios-message"
        style={{ color: data?.data?.seed?.hex?.value }}
      >
        {error.message}
      </p>
    );
  }

  const handleClick = ev => {
    ev.preventDefault();
    refetch();
    setColor(generateRandomColor);
    console.log(color);
  };

  const handleChange = ev => {
    ev.preventDefault();
    setMode(ev.target.value);
  };

  return (
    <div className="generator">
      <div className="top">
        <h1 className="main-heading">
          The Color
          <span
            className="main-heading-span"
            style={{
              color: data?.data?.seed?.hex?.value,
              backgroundColor: 'transparent',
            }}
          >
            Verse
          </span>
        </h1>
        <h3 className="sub-heading">Color Palette Generator</h3>
        <form>
          <SelectScheme mode={mode} handleChange={handleChange} data={data} />
          <PrimaryButton handleClick={handleClick} data={data} />
        </form>
      </div>
      <DisplayScheme
        className="display-scheme"
        isFetching={isFetching}
        isFetched={isFetched}
        data={data}
      />
    </div>
  );
};

export default Generator;
