'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import ProximasFechas from '@/components/ProximasFechas';
import RedesSociales from '@/components/RedesSociales';
import EscuchaMusica from '@/components/EscuchaMusica';
import ElConcepto from '@/components/ElConcepto';
import Apoyanos from '@/components/Apoyanos';
import Amigos from '@/components/Amigos';
import FormularioContacto from '@/components/FormularioContacto';

export default function Home() {
  return (
    <main className='h-screen w-full'>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className='h-full w-full'
      >
        <SwiperSlide>
          <EscuchaMusica />
        </SwiperSlide>
        <SwiperSlide>
          <ElConcepto />
        </SwiperSlide>
        <SwiperSlide>
          <Apoyanos />
        </SwiperSlide>
        <SwiperSlide>
          <ProximasFechas />
        </SwiperSlide>
        {/* <SwiperSlide>
          <Amigos />
        </SwiperSlide> */}
        <SwiperSlide>
          <RedesSociales />
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
