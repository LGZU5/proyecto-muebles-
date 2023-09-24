import Image from "next/image";
import imageBanner from "../../public/images/image1.jpg";
import image2 from "../../public/images/image2.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <Image
        src={image2}
        alt="Your Image"
        objectFit="cover"
        objectPosition="center top"
      />
      <div className="absolute top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-7xl font-bold">CREA TU PROPIO DISEÑO</h1>
        <p className="text-4xl mt-4">el límite es tu imaginación</p>
        <button className="text-1xl bg-white text-black rounded-full p-4 mt-8">
          empieza a crear aquí
        </button>
      </div>
      <div className="mt-16 bg-white">
        <h2 className="text-4xl font-bold mb-4 text-black m-10">Colección A</h2>
        <div className="flex justify-center">
          {/* Cuadro 1 */}
          <div className="p-4 ">
            <Image
              src={imageBanner} // Ruta a la imagen 1
              alt="Colección A 1"
            />
            <h3 className="mt-2 text-xl text-black font-bold">
              Título de la imagen 1
            </h3>
            <p className="mt-2 text-xl text-black font-serif">$$$</p>
          </div>
          {/* Cuadro 2 */}
          <div className="p-4">
            <Image
              src={imageBanner} // Ruta a la imagen 2
              alt="Colección A 2"
            />
            <h3 className="mt-2 text-xl text-black font-bold">
              Título de la imagen 2
            </h3>
            <p className="mt-2 text-xl text-black font-serif">$$$</p>
          </div>
          {/* Cuadro 3 */}
          <div className="p-4">
            <Image
              src={imageBanner} // Ruta a la imagen 3
              alt="Colección A 3"
            />
            <h3 className="mt-2 text-xl text-black font-bold">
              Título de la imagen 3
            </h3>
            <p className="mt-2 text-xl text-black font-serif">$$$</p>
          </div>
        </div>
      </div>
      <div className="mt-16 bg-white">
        <h2 className="text-4xl font-bold mb-4 text-black m-10">Colección B</h2>
        <div className="flex justify-center">
          {/* Cuadro 1 */}
          <div className="p-4 ">
            <Image
              src={imageBanner} // Ruta a la imagen 1
              alt="Colección A 1"
            />
            <h3 className="mt-2 text-xl text-black font-bold">
              Título de la imagen 1
            </h3>
            <p className="mt-2 text-xl text-black font-serif">$$$</p>
          </div>
          {/* Cuadro 2 */}
          <div className="p-4">
            <Image
              src={imageBanner} // Ruta a la imagen 2
              alt="Colección A 2"
            />
            <h3 className="mt-2 text-xl text-black font-bold">
              Título de la imagen 2
            </h3>
            <p className="mt-2 text-xl text-black font-serif">$$$</p>
          </div>
          {/* Cuadro 3 */}
          <div className="p-4">
            <Image
              src={imageBanner} // Ruta a la imagen 3
              alt="Colección A 3"
            />
            <h3 className="mt-2 text-xl text-black font-bold">
              Título de la imagen 3
            </h3>
            <p className="mt-2 text-xl text-black font-serif">$$$</p>
          </div>
        </div>
      </div>
      <div className="mt-16 bg-black">
        <h2 className="text-4xl font-bold mb-4 m-10 p-10">
          Reseñas de los usuarios
        </h2>
        <div className="flex justify-center ">
          {/* Reseña 1 */}
          <div className="p-10 text-left">
            <div className="mt-20">
              <p className="text-base font-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vitae nisl nec urna convallis euismod. Proin sed mi eu lectus
                bibendum tristique eu ut dui. Vestibulum viverra, justo nec
                auctor luctus, eros neque feugiat mi
              </p>
            </div>
          </div>
          {/* Reseña 2 */}
          <div className="p-10 text-left">
            <div className="mt-20">
              <p className="text-base font-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vitae nisl nec urna convallis euismod. Proin sed mi eu lectus
                bibendum tristique eu ut dui. Vestibulum viverra, justo nec
                auctor luctus, eros neque feugiat mi
              </p>
            </div>
          </div>
          {/* Reseña 3 */}
          <div className="p-10 text-left">
            <div className="mt-20">
              <p className="text-base font-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vitae nisl nec urna convallis euismod. Proin sed mi eu lectus
                bibendum tristique eu ut dui. Vestibulum viverra, justo nec
                auctor luctus, eros neque feugiat mi
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            {/* Información de contacto */}
            <div>
              <h3 className="text-3xl font-semibold mb-2">Contáctanos</h3>{" "}
              {/* Aumenta el tamaño de la letra */}
              <p className="text-xl">Número de contacto: +123456789</p>{" "}
              {/* Aumenta el tamaño de la letra */}
            </div>
            {/* Iconos de redes sociales */}
            <div className="flex space-x-4 mt-4">
              {" "}
              {/* Agrega espacio arriba para separar el número de los iconos */}
              <a href="#" className="text-white">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-white">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-white">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
