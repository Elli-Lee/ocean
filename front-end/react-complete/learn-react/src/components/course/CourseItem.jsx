const HeartIconButton = ({ isFavorite = false }) => {
  return (
    <button className="btn">
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

const CourseItem = ({ title, description, thumbnail, isFavorite, link }) => {
  return (
    <article className="course">
      <img className="course__img" src={thumbnail} alt={title} />
      <div className="course__body">
        <div className="course__title">{title}</div>
        <div className="course__description">{description}</div>
      </div>
      <div className="course__icons">
        <HeartIconButton isFavorite={isFavorite} />
        {link && <LinkIconButton link={link} />}
      </div>
    </article>
  );
};

export default CourseItem;
