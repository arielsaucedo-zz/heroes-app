import React from "react";

export const SearchCard = ({ name, image }) => {
  const handleHeroClick = () => {
    console.log("Agregar heroe al equipo");
  };

  return (
    <div className="card d-flex flex-column rounded" style={{ maxWidth: 200 }}>
      <div>
        <img src={image.url} alt={name} className="img-thumbnail img-fluid" />
      </div>
      <div className="m-2 text-dark d-flex flex-column justify-content-around">
        <h4>{name}</h4>
        <br />
        <div className="text-center">
          <div className="mt-3 d-flex justify-content-around">
            <button className="btn btn-success w-100" onClick={handleHeroClick}>
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
