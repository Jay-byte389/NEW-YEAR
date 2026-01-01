import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";


export default function Gallery() {
  const images = [
  img1,img2,img3,img4    
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">🎉 New Year Gallery 🎉</h2>

      <div className="row g-4">
        {images.map((img, index) => (
          <div className="col-12 col-sm-6 col-md-4" key={index}>
            <div className="card shadow-sm h-100">
              <img
                src={img}
                alt={`gallery-${index}`}
                className="img-fluid rounded"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
