import { forwardRef } from "react";

const Image = forwardRef(({ src, mobileSrc, alt, className }, ref) => {
  if (mobileSrc) {
    return (
      <>
        <img
          ref={ref}
          className={`hidden md:block ${className}`}
          src={src}
          alt={alt}
        />
        <img
          ref={ref}
          className={`md:hidden ${className}`}
          src={mobileSrc}
          alt={alt}
        />
      </>
    );
  }

  return <img ref={ref} className={className} src={src} alt={alt} />;
});

export default Image;
