import "./ImagePicker.css";
import type { Image } from "../constants";

type ImagePickerProps = {
  images: { [key: string]: Image };
  selectedImageSrc: string;
  setImageSrc: React.Dispatch<React.SetStateAction<string>>;
};

const ImagePicker = ({
  images,
  selectedImageSrc,
  setImageSrc,
}: ImagePickerProps) => {
  return (
    <div className="image-picker">
      <select
        className="image-picker__select"
        defaultValue={selectedImageSrc}
        value={selectedImageSrc}
        onChange={(e) => setImageSrc(e.target.value)}
      >
        {Object.keys(images).map((key) => {
          const image = images[key];
          return <option value={image.src}>{image.title}</option>;
        })}
      </select>
    </div>
  );
};

export default ImagePicker;
