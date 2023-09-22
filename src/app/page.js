import Image from "next/image";
import imageBanner from "../../public/images/image1.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <div className="relative w-full h-screen">
        <Image
          src={imageBanner}
          alt="Your Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <h1 className="text-white text-7xl font-bold">
            CREA TU PROPIO DISEÑO
          </h1>
        </div>
        <div className="absolute top-40 left-0 right-0 bottom-0 flex items-center justify-center">
          <p className="text-white text-4xl">el límite es tu imaginación</p>
        </div>
        <div className="absolute top-80 left-0 right-0 bottom-0 flex items-center justify-center">
          <button className="text-black text-1xl bg-white rounded-full p-4">
            empieza a crear aqui
          </button>
        </div>
      </div>
      <div>
      </div>
    </main>
  );
}
