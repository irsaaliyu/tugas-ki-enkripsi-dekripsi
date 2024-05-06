'use client'

import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from "@/components/ui/button"
import { useState } from 'react';

const swap = (S: any, i: number, j: number) => {
  const temp = S[i];
  S[i] = S[j];
  S[j] = temp;
};

const initializeSBox = (key: string) => {
  const S: any = [];
  for (let i = 0; i < 256; i++) {
    S[i] = i;
  }

  let j = 0;
  for (let i = 0; i < 256; i++) {
    j = (j + S[i] + key.charCodeAt(i % key.length)) % 256;
    swap(S, i, j);
  }

  return S;
};

const RC4 = (plaintext: string, key: string) => {
  const S = initializeSBox(key);
  let i = 0;
  let j = 0;
  let ciphertext = '';

  for (let k = 0; k < plaintext.length; k++) {
    i = (i + 1) % 256;
    j = (j + S[i]) % 256;
    swap(S, i, j);
    const K = S[(S[i] + S[j]) % 256];
    ciphertext += String.fromCharCode(plaintext.charCodeAt(k) ^ K);
  }

  return ciphertext;
};

const Enkripsi = () => {
  const [plaintext, setPlaintext] = useState<string>('');
  const [key, setKey] = useState<string>('');
  const [decryptedText, setDecryptedText] = useState<string>('');

  const handleEncrypt = () => {
    const encrypted = RC4(plaintext, key);
    setDecryptedText(encrypted);
  };

  return (
    <div className='container  h-full flex justify-center items-center lg:mt-[200px] sm:mt-[150px] mt-[100px] flex-col'>
      <div className='border-2 border-blue-400 lg:px-20 lg:py-12 px-8 py-6 rounded-[70px] lg:w-[1050px]'>
        <p className='text-black lg:text-2xl text-xs md:text-base text-justify'>
        &quot;Aplikasi Enkripsi-Dekripsi Algoritma RC4 memungkinkan pengguna untuk mengamankan dan memulihkan pesan teks dengan mudah menggunakan algoritma RC4. Dengan fitur memasukkan teks dan memilih kunci, pengguna dapat melihat hasil enkripsi (cipher text) dan dekripsi (plainteks) secara langsung.&quot;
        </p>
      </div>
      <div className='lg:mt-14 my-4'>
        <Link href='/#enkripsi' className='py-4 px-4 bg-blue-400 hover:bg-[#30787d] rounded-xl text-white text-xs md:text-base lg:text-2xl'>
            Cobalah sekarang
        </Link>
      </div>

      <section id='enkripsi'>
        <Card className='my-12 pt-6 border-blue-400'>
          <CardHeader>
            <CardTitle className='text-center'>Algoritma RC 4</CardTitle>
            <CardDescription>Silahkan gunakan input dibawah ini untuk melakukan proses enkripsi dan dekripsi</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='flex flex-col gap-6 justify-center items-center'>
              <Textarea placeholder="Masukan data yang dienkripsi" value={plaintext} onChange={(e) => setPlaintext(e.target.value)} />
              <Input type="text" placeholder="Secret Key" value={key} onChange={(e) => setKey(e.target.value)} />
              <Textarea placeholder="Hasil Dekripsi Data" value={decryptedText} readOnly />
              <Button className='w-full text-white' variant="default" onClick={handleEncrypt}>Enkripsi Dekripsi</Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

export default Enkripsi
