import { useEffect, useState } from "react";
import useDatasetStore from "../../stores/datasetStore";
import PropertyCard from "../PropertyCard/PropertyCard";
import LoadingSpinner from "../LoadingSpinner";
import img1 from "../../assets/propertyImages/image1.jpg"
import img2 from "../../assets/propertyImages/image2.jpg"
import img3 from "../../assets/propertyImages/image3.jpg"
import img4 from "../../assets/propertyImages/image4.jpg"
import img5 from "../../assets/propertyImages/image5.jpg"
import img6 from "../../assets/propertyImages/image6.jpg"

const images = [img1, img2, img3, img4, img5, img6]

function FeaturedProperties() {

  const { dataset, isLoading } = useDatasetStore();

  const [cardsContent, setCardsContent] = useState();

  useEffect(() => {
    if (dataset) {
      const result = dataset.slice(0, 4)
      setCardsContent(result);
    }
  }, [dataset])

  if (isLoading) {
    return (
      <div className="w-full h-fit py-10 px-28">
        <LoadingSpinner />
      </div>
    );
  }
  else {
    return (
      <div className="w-full h-fit py-10 px-28 grid grid-cols-4 gap-3">
        {cardsContent?.map((property, index) => {
          const randomImage = images[Math.floor(Math.random() * images.length)];
          return (
            <PropertyCard name={property.name} neighbourhood={[property.neighbourhood]} price={property.price} host_name={property.host_name} image={randomImage} />
          )
        })}
      </div>
    );
  }
}

export default FeaturedProperties;
