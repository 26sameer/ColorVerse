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
    return <div>{error.message}</div>;
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
      <h3 className="sub-heading">Color Palette Generator</h3>
      <form>
        <SelectScheme mode={mode} handleChange={handleChange} />
        <PrimaryButton handleClick={handleClick} />
      </form>
      <DisplayScheme
        isFetching={isFetching}
        isFetched={isFetched}
        data={data}
      />

      {console.log(data?.data)}
      {console.log(data?.data.mode)}
    </div>
  );
};

export default Generator;
