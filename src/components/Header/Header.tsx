import React from 'react';
import { Options } from '../../types';
import classes from './Header.module.css';

type Props = {
  option: string;
  setOption: Function;
};

const Header: React.FC<Props> = (props) => {
  const { option, setOption } = props;

  return (
    <div className={classes.header}>
      <div
        className={classes.div}
        onClick={() => setOption(Options.trending)}
        style={{ backgroundColor: option === 'trending' ? 'grey' : '' }}
      >
        Home
      </div>

      <div
        className={classes.div}
        onClick={() => setOption(Options.upcoming)}
        style={{ backgroundColor: option === 'upcoming' ? 'grey' : '' }}
      >
        Upcoming Movies
      </div>
    </div>
  );
};

export default Header;
