import React from "react";
import Image from "next/image";

const ListFitur = () => {
  return (
    <div className="container flex flex-col jusitfy-center items-center py-8 sm:py-14 lg:py-20">
      <h1 className="font-base lg:text-3xl sm:text-2xl ">
        Keamanan dan privasi merupakan hal utama
      </h1>
      {/* INFORMASI KESEHATAN */}
      <div className=" lg:ml-20 sm:ml-40 ml-60 flex flex-row lg:mt-20 mt-4 mb-6">
        <div className="relative lg:w-[420px] lg:h-[460px] md:w-[220px] md:h-[260px] w-[120px] h-[160px] border-2 lg:border-4 rounded-xl lg:rounded-[50px] border-blue-400 overflow-hidden">
            <Image
              src="/image/foto1.jpg"
              alt="InformasiKesehatan"
              fill={true}
              className="object-cover"
            />
        </div>
        <div className="flex flex-row lg:ml-10 w-[450px] lg:gap-10 gap-4 pr-2 pt-2 lg:pt-0 lg:pr-0 ml-2 lg:mt-10">
          <h1 className="text-[#3299db] lg:text-4xl sm:text-3xl text-md font-bold">1</h1>
          <div className="flex flex-col lg:gap-10 lg:mt-10 mt-4 w-[100px]">
            <h1 className="lg:text-3xl text-sm sm:text-2xl font-medium">Memasukan Input</h1>
            <p className="lg:text-2xl text-xs sm:text-xl">Masukkan teks yang ingin dienkripsi atau didekripsi</p>
          </div>
        </div>
      </div>
      {/* FORUM KOMUNITAS */}
      <div className="flex flex-row-reverse -mt-[20px] lg:-mt-[50px] lg:mr-0 sm:mr-40 mr-64 mb-6 ">
        <div className="relative lg:w-[420px] lg:h-[460px] md:w-[220px] md:h-[260px] w-[120px] h-[160px] border-2 lg:border-4 rounded-xl lg:rounded-[50px] border-blue-400 overflow-hidden">
            <Image
              src="/image/foto2.jpg"
              alt="InformasiKesehatan"
              fill={true}
              className="object-cover"
            />
        </div>
        <div className="flex flex-row-reverse lg:mr-10 w-[450px] mt-4 pr-2 pt-2 lg:pt-0 lg:pr-0 lg:mt-32">
          <h1 className="text-[#3299db] lg:text-4xl sm:text-3xl text-md font-bold">2</h1>
          <div className="flex flex-col lg:gap-10 lg:mt-10 mt-4 pl-60 lg:pl-24">
            <h1 className="lg:text-3xl text-sm sm:text-2xl font-medium">Memasukan kunci secret key</h1>
            <p className="lg:text-2xl text-xs sm:text-xl">Masukkan kunci yang akan digunakan untuk proses enkripsi atau dekripsi.</p>
          </div>
        </div>
      </div>
       {/* INFORMASI KESEHATAN */}
       <div className=" ml-48 lg:ml-20 sm:ml-32 flex flex-row -mt-[12px] lg:-mt-[40px]">
        <div className="relative lg:w-[420px] lg:h-[460px] md:w-[220px] md:h-[260px] w-[120px] h-[160px] border-2 lg:border-4 rounded-xl lg:rounded-[50px] border-blue-400 overflow-hidden">
          <div className="object-fit">
            <Image
              src="/image/foto3.jpg"
              alt="InformasiKesehatan"
              fill={true}
            />
          </div>
        </div>
        <div className="flex flex-row lg:ml-10 w-[320px] lg:gap-10 mt-4 pl-2 lg:pl-0 lg:mt-32">
          <h1 className="text-[#3299db] text-md lg:text-4xl sm:text-3xl font-bold">3</h1>
          <div className="flex flex-col lg:gap-10 lg:mt-10 mt-4 lg:ml-0 ml-2 w-[100px] lg:w-auto">
            <h1 className="lg:text-3xl text-sm sm:text-2xl font-medium">Tekan enkripsi dan dekripsi</h1>
            <p className="lg:text-2xl text-xs sm:text-xl">Klik tombol Submit untuk memproses pesan teks dengan menggunakan algoritma RC4. Setelah proses selesai, hasil enkripsi atau dekripsi akan ditampilkan dilayar.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListFitur;
