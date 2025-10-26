import Image from 'next/image';
import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import GetLang from '@/hooks/getLang';

type ImageData = {
  src: string;
};

interface Props {
  images: ImageData[];
  isLoading?: boolean;
}

export default function ProductImageGridWithZoom({ images, isLoading = false }: Props) {
  const lang = GetLang();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const handleImageClick = (index: number) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  const initialImages = images.slice(0, 4);
  const extraImages = images.slice(3);

  // Skeleton block for loading state
  const Skeleton = ({ aspect = 'aspect-video' }: { aspect?: string }) => (
    <div className={`bg-gray-200 animate-pulse rounded-xl w-full ${aspect}`}></div>
  );

  return (
    <>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left: 1 big image */}
        <div className="md:col-span-2 cursor-zoom-in" onClick={() => !isLoading && handleImageClick(0)}>
          <div className="relative aspect-video rounded-xl overflow-hidden">
            {isLoading ? (
              <Skeleton />
            ) : (
              initialImages[0] && (
                <Image
                  src={initialImages[0].src}
                  alt="Main image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              )
            )}
          </div>
        </div>

        {/* Right: 2 stacked images */}
        <div className="flex flex-col gap-4">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="relative aspect-video rounded-xl overflow-hidden cursor-zoom-in"
              onClick={() => !isLoading && handleImageClick(i)}
            >
              {isLoading ? (
                <Skeleton />
              ) : (
                initialImages[i] && (
                  <Image
                    src={initialImages[i].src}
                    alt={`Small image ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                )
              )}
            </div>
          ))}
        </div>
      </div>

      {/* "Show More" images */}
      {!isLoading && showMore && extraImages.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {extraImages.map((img, idx) => (
            <div
              key={idx + 3}
              className="relative aspect-video rounded-xl overflow-hidden cursor-zoom-in"
              onClick={() => handleImageClick(idx + 3)}
            >
              <Image
                src={img.src}
                alt={`Extra image ${idx + 4}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>
          ))}
        </div>
      )}

      {/* Load More Button */}
      {!isLoading && extraImages.length > 0 && (
        <div className="text-center mt-3 mb-5">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
          >
            {showMore ? 'Show Less' : `Show More (${extraImages.length})`}
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      {!isLoading && lightboxOpen && (
        <Lightbox
          mainSrc={images[photoIndex].src}
          nextSrc={images[(photoIndex + 1) % images.length].src}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
          onCloseRequest={() => setLightboxOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
          imageCaption={`Image ${photoIndex + 1} of ${images.length}`}
        />
      )}
    </>
  );
}
