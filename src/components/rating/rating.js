import Image from "next/image";

export const Rating = ({ total }) => {
  const ratingIcons = [];

  for (let i = 0; i < total; i++) {
    ratingIcons.push(
      <Image
        key={`vector1-${i}`}
        src="/assets/Vector1.svg"
        width={10}
        height={10}
        alt="rating"
      />
    );
  }

  const remainingIcons = 5 - total;

  for (let i = 0; i < remainingIcons; i++) {
    ratingIcons.push(
      <Image
        key={`vector-${i}`}
        src="/assets/Vector.svg"
        width={10}
        height={10}
        alt="rating"
      />
    );
  }

  return <>{ratingIcons}</>;
};
