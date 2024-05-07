'use client'

import CryptoJS from 'crypto-js';
import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from "@/components/ui/button";

const Enkripsi = () => {
  const [plaintext, setPlaintext] = useState<string>('');
  const [key, setKey] = useState<string>('');
  const [result, setResult] = useState<string>(''); // State untuk menyimpan hasil enkripsi atau dekripsi

  const handleEncryptDecrypt = () => {
    if (result) {
      // Jika sudah ada hasil enkripsi, maka lakukan dekripsi
      const decrypted = AES_Decrypt(result, key);
      setResult(decrypted);
    } else {
      // Jika belum ada hasil enkripsi, maka lakukan enkripsi
      const encrypted = AES_Encrypt(plaintext, key);
      setResult(encrypted);
    }
  };

  const AES_Encrypt = (plaintext: string, key: string): string => {
    const encrypted = CryptoJS.AES.encrypt(plaintext, key).toString();
    return encrypted;
  };

  const AES_Decrypt = (ciphertext: string, key: string): string => {
    const decrypted = CryptoJS.AES.decrypt(ciphertext, key).toString(CryptoJS.enc.Utf8);
    return decrypted;
  };

  return (
    <div className='container h-full flex justify-center items-center lg:mt-[200px] sm:mt-[150px] mt-[100px] flex-col'>
      <div className='border-2 border-blue-400 lg:px-20 lg:py-12 px-8 py-6 rounded-[70px] lg:w-[1050px]'>
        <p className='text-black lg:text-2xl text-xs md:text-base text-justify'>
          "“Aplikasi Enkripsi-Dekripsi Algoritma AES hadir untuk memberikan pengguna kemudahan dalam mengamankan dan memulihkan pesan teks dengan keamanan tinggi menggunakan algoritma Advanced Encryption Standard (AES). Dengan fitur memasukkan teks dan memilih kunci, pengguna dapat melihat hasil enkripsi (ciphertext) dan dekripsi (plaintext) secara langsung.”"
        </p>
      </div>
      <div className='lg:mt-14 my-4'>
        <Link href='/#enkripsi' passHref>
          <div className='py-4 px-4 bg-blue-400 hover:bg-[#30787d] rounded-xl text-white text-xs md:text-base lg:text-2xl'>
            Cobalah sekarang
          </div>
        </Link>
      </div>
      <section id='enkripsi'>
        <Card className='my-12 pt-6 border-blue-400'>
          <CardHeader>
            <CardTitle className='text-center'>Algoritma AES</CardTitle>
            <CardDescription>Silahkan gunakan input dibawah ini untuk melakukan proses enkripsi dan dekripsi</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='flex flex-col gap-6 justify-center items-center'>
              <Textarea placeholder="Masukan data" value={plaintext} onChange={(e) => setPlaintext(e.target.value)} />
              <Input type="text" placeholder="Secret Key" value={key} onChange={(e) => setKey(e.target.value)} />
              <Textarea placeholder="Hasil Enkripsi/Dekripsi" value={result} readOnly />
              <Button className='w-full text-white' variant="default" onClick={handleEncryptDecrypt}>Enkripsi/Dekripsi</Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Enkripsi;
