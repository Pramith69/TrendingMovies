import classes from './Card.module.css';

type Props = {
  imageUrl: string;
  title?: string;
};

const Card: React.FC<Props> = (props) => {
  const { imageUrl, title } = props;

  return (
    <div className={classes.card}>
      <img
        className={classes.img}
        src={`https://image.tmdb.org/t/p/w500${imageUrl}`}
      />
      {title && <p>{title}</p>}
    </div>
  );
};

export default Card;
