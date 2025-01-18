import { Fragment } from "react";
import Card from "../Card";
import CourseItem from "./CourseItem";

const CourseListCard = ({ title, items }) => {
  return (
    <Card title={title}>
      <div className="courses">
        {items.map((item, index) => (
          <Fragment key={item.id}>
            <CourseItem {...item} />
            {index !== items.length - 1 && <hr className="divider" />}
          </Fragment>
        ))}
      </div>
    </Card>
  );
};

export default CourseListCard;
