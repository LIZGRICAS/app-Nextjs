import { Image } from "../../../types/image";

interface ImagesGridProps {
  images: Image[] | null;
}

export default function ImagesGrid({ images }: ImagesGridProps) {
  console.count("images grid");

  console.log(images);


  if (images?.length) {
    return (
      <div className="pt-8 grid grid-cols-4 gap-4" >
        {images.map(({ id, alt, src }) => (
          <div key={id}>
            <img src={src.portrait} alt="" width={200}
              height={150}/>
            <p>{alt}</p>
          </div>
        ))}
      </div>
    );
  }

  return <p> No hay imagenes que mostrar</p>;
}
