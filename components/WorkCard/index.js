import React from "react";

const WorkCard = ({ img, name = "Project Name", description = "Description", onClick }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-3 first:ml-0 link cursor-pointer w-[700px]"
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-[300px]"
      >
        <img
          alt={name}
          className="h-full w-full object-cover hover:scale-105 transition-all ease-out duration-300"
          src={img}
          loading="lazy"
        />
      </div>
      <h1 className="mt-3 text-lg font-medium">{name}</h1>
      <h2 className="text-sm opacity-50">{description}</h2>
    </div>
  );
};

export default WorkCard;
