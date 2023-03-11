import Image from "next/image";
import { GithubLogo, TwitterLogo } from "phosphor-react";
import { Envelope, FacebookLogo, GoogleLogo } from "phosphor-react";
import data from '../data.json'
import axios from "axios";
import { useState } from "react";

import { RiAddLine, RiEdit2Fill, RiFacebookBoxFill, RiFacebookBoxLine, RiInstagramFill, RiLinkedinBoxFill, RiPencilLine, RiSearchLine } from "react-icons/ri";
import { BsFacebook, BsInstagram, BsWhatsapp, BsLinkedin, BsFillRecord2Fill, BsHammer, BsAt, BsLink, BsGithub } from "react-icons/bs";
import { BiWorld } from 'react-icons/bi'
import { FaTiktok } from 'react-icons/fa'
import { AiFillFire } from 'react-icons/ai'

export async function getServerSideProps(context) {
  const id = context.query.id;
  let body = JSON.stringify({
    email: 'henrique.heiden@gmail.com'
  });
  let dados = [];

  var authOptions = {
    method: "post",
    url: 'http://localhost:3000/api/consulta',
    data: body,
    headers: {
      "Content-Type": "application/json",
    },
    json: true,
  };
  const teste = await axios(authOptions);
  return {
    props: {
      dados: teste?.data
    }
  }
}

function LinkCard({ link, title, image, tipoLink }: { link: string; title: string; image?: string, tipoLink: string }) {
  debugger
  return (
    <a href={link}
      className="flex items-center p-1 w-full rounded-md
     hover:scale-105 transition-all bg-gray-100
     mb-3 max-w-3xl">
      <div className="flex text-center w-full">
        <div className="w-10 h-10 mt-2 ml-3">

          {
            tipoLink === 'facebook' && <BsFacebook size={32} color="#616161"/> ||
            tipoLink === 'instagram' && <BsInstagram size={32} color="#616161"/> ||
            tipoLink === 'tiktok' && <FaTiktok size={32} color="#616161"/> ||
            tipoLink === 'whatsapp' && <BsWhatsapp size={32} color="#616161"/> ||
            tipoLink === 'linkedin' && <BsLinkedin size={32} color="#616161"/> ||
            tipoLink === 'github' && <BsGithub size={32} color="#616161"/> ||
            tipoLink === 'hotmart' && <AiFillFire size={32} color="#616161"/> ||
            tipoLink === 'braip' && <BsHammer size={32} color="#616161"/> ||
            tipoLink === 'site' && <BiWorld size={32} color="#616161"/>
          }
          {/* {image && (
            <Image
              className="rounded-sm"
              src={image}
              alt={title}
              width={40}
              height={40}
            />
          )} */}
        </div>
        <h2 className="flex justify-center items-center font-semibold
         w-full text-gray-700 -ml-10">
          {tipoLink[0].toUpperCase() + tipoLink.substring(1)}
        </h2>
        {/* <p className="text-gray-500">{description}</p> */}
      </div>
    </a>
  );
}

export default function Home(props) {
  const [dados, setDados] = useState(props.dados)
  debugger
  return (
    <div className="flex items-center flex-col mx-auto 
    w-full justify-center mt-16 px-8">
      <Image
        className="rounded-full"
        src={data.avatar}
        alt={data.name}
        width={96}
        height={96}
      />

      <h1 className="font-bold mt-4 mb-8 text-xl text-white">{data.name}</h1>

      <div className="flex items-center gap-4 mb-8">

        {
          data.socials.map((link) => {

            if (link.href.includes('twitter')) {
              return (
                <>
                  <TwitterLogo size={32} color="#28879f" />
                </>
              )
            }

            if (link.href.includes('github')) {
              return (
                <>
                  <GithubLogo size={32} color="#28879f" />
                </>
              )
            }

          })
        }

      </div>

      {props?.dados?.map((link, index) => (
        <LinkCard key={`${link.link} + ${index}`} {...link} />
      ))}

    </div>
  )
}