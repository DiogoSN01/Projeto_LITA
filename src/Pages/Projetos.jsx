import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import "./Projetos.css";

const projets = [
  { src: "/sttutz1.png", alt: "" },
  { src: "/sttutz2.png", alt: "" },
  { src: "/sttutz3.png", alt: "" },
];

const images1 = [
  { src: "/smart1.png", alt: "" },
  { src: "/smart2.png", alt: "" },
  { src: "/smart3.png", alt: "" },];

export default function Projetos() {
    return (
      <section id="projects" className="bg-projects">
        <img src="/system.png" alt="system" className="system" />
        <div className="project-container">
          <h2 className='t'>PROJETOS EM ANDAMENTO</h2>

          <div className="projects-grid">
          <Swiper className="project-card"
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}  
        >
          {projets.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="project-card">
                <img src={item.src} alt={item.alt} className="project-image" />
                <h3>{item.alt}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <Swiper className="project-card"
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}  
        >
          {images1.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="project-card">
                <img src={item.src} alt={item.alt} className="project-image" />
                <h3>{item.alt}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
        </div>
      </section>
    );
  };
  

  
  