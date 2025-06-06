const HeartIconButton = ({ onHeartClick, isFavorite = false }) => {
  return (
    <button className="btn" onClick={(e) => onHeartClick(e, isFavorite)}>
      <img
        className="btn__img"
        src={isFavorite ? "/img/heart-fill-icon.svg" : "/img/heart-icon.svg"}
      />
    </button>
  );
};

const LinkIconButton = ({ link }) => {
  return (
    <a className="btn" href={link} target="_blank" rel="noreferrer">
      <img className="btn__img" src="/img/link-icon.svg" alt="" />
    </a>
  );
};

const CourseItem = ({
  title,
  id,
  description,
  thumbnail,
  isFavorite,
  link,
  onFavorite,
}) => {
  const handleFavorite = (e) => {
    e.stopPropagation();
    onFavorite(id, !isFavorite);
  };

  const handleItemClick = (e) => {
    open(link, "_blank");
  };

  return (
    <article className="course" onClick={handleItemClick}>
      <img className="course__img" src={thumbnail} alt={title} />
      <div className="course__body">
        <div className="course__title">{title}</div>
        <div className="course__description">{description}</div>
      </div>
      <div className="course__icons">
        <HeartIconButton
          isFavorite={isFavorite}
          onHeartClick={handleFavorite}
        />
        {link && <LinkIconButton link={link} />}
      </div>
    </article>
  );
};

export default CourseItem;
