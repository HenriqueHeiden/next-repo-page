import Image from "next/image";
import { GithubLogo, TwitterLogo } from "phosphor-react";
import { Envelope, FacebookLogo, GoogleLogo } from "phosphor-react";
import data from '../data.json'

function LinkCard({ href, title, image }: { href: string; title: string; image?: string }) {
  return (
    <a href={href}
      className="flex items-center p-1 w-full rounded-md
     hover:scale-105 transition-all bg-gray-100
     mb-3 max-w-3xl">
      <div className="flex text-center w-full">
        <div className="w-10 h-10">
          {image && (
            <Image
              className="rounded-sm"
              src={image}
              alt={title}
              width={40}
              height={40}
            />
          )}
        </div>
        <h2 className="flex justify-center items-center font-semibold
         w-full text-gray-700 -ml-10">
          {title}
        </h2>
        {/* <p className="text-gray-500">{description}</p> */}
      </div>
    </a>
  );
}

export default function Home() {
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

      {data.links.map((link, index) => (
        <LinkCard key={`${link.href} + ${index}`} {...link} />
      ))}

    </div>
  )
}