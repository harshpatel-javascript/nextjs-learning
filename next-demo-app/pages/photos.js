import Image from "next/image";
import img1 from "../public/1.jpg";

function Photos() {
  return (
    <>
      <Image
        src={img1}
        placeholder="blur"
        alt="images"
        height="500"
        width="700"
      />
      {[2, 3, 4, 5].map((path) => (
        <Image
          key={path}
          src={`/${path}.jpg`}
          alt="images"
          height="500"
          width="700"
        />
      ))}
    </>
  );
}
export default Photos;
