import Image from "next/image"
import { Container } from "./components/container"
import Link from "next/link"
import site18 from '@/assets/site-18.jpg'
import site1 from '@/assets/site-1.png'
import site19 from '@/assets/site-19.jpeg'
import site4 from '@/assets/site-4.png'
import site5 from '@/assets/site-5.png'
import site6 from '@/assets/site-6.png'
import site7 from '@/assets/site-7.png'
import site8 from '@/assets/site-8.png'
import site9 from '@/assets/site-9.png'
import site11 from '@/assets/site-11.png'
import site12 from '@/assets/site-12.png'
import site13 from '@/assets/site-13.png'
import site14 from '@/assets/site-14.png'
import site15 from '@/assets/site-15.png'
import site16 from '@/assets/site-16.png'
import site17 from '@/assets/site-17.png'
import site20 from '@/assets/site-20.jpeg'
import site21 from '@/assets/site-21.png'

export default function Home() {
  return (
    <Container>
      <div className="mt-6">
        <h3 className="text-gray-950 font-semibold">20 de julho de 2024 /
          <Link href={'/'}>
            <span className="font-bold text-blue-800"> #PROJETO</span>
          </Link></h3>
      </div>
      <p className="font-medium text-5xl mt-4">
        15 Portfólios de Desenvolvedores Web para Inspirar Você
      </p>
      <div className="flex mt-8 items-center gap-3">
        <Image
          src={site18}
          alt="foto Laurence Bradford"
          width={120}
          priority
          quality={100}
        />
        <h2 className="font-bold text-lg">Laurence Bradford</h2>
      </div>
      <Image
        src={site1}
        alt="Imagem 1 do site"
        width={1064}
        priority
        quality={100}
      />
      <section className="w-full flex mt-7 mb-10">
        <div className="flex-1">
          <p className="font-medium text-3xl">Uma das coisas mais difíceis de fazer para um novo
            desenvolvedor é montar um 
            <span className="text-blue-500">
              <Link href="https://learntocodewith.me/posts/portfolio-tips/" target="_blank">
               portfólio online</Link></span>.</p>
          <ul className="py-10 font-medium text-xl">
            <li className="mb-2">- O que deveria dizer?</li>
            <li className="mb-2">- O que devo incluir?</li>
            <li >- O que devo deixar de fora?</li>
          </ul>
          <p className="font-bold text-xl mb-7">Mas não precisa ser assim.</p>
          <p className="text-2xl mb-7">
            Se você estiver travado, dê uma olhada nestes 15 exemplos de portfólios de desenvolvedores
            web para se inspirar. (E se você quiser ainda mais orientação sobre como construir seu
            portfólio, <span className="text-blue-500 font-bold mt-4">
              <Link href="https://learntocodewith.me/portfoliodojo" target="_blank">veja aqui</Link></span> .)
          </p>
          <h1 className="text-2xl font-bold mb-8">1. Matt Farley</h1>
          <span className="font-bold text-lg text-blue-500">
            <Link href="https://mattfarley.ca/" target="_blank">mattfarley.ca</Link>
          </span>
          <p className="text-lg"><span className="font-semibold text-xl">O que ele faz</span>
            : UX/UI e desenvolvimento front-end</p>
        </div>
        <div className="flex-2">
          <Image
            src={site19}
            alt="Casa do dragão"
          />
        </div>
      </section>
      <section className="flex flex-col ">
        <Image
          src={site1}
          alt="Imagem 1 do site"
          priority
          quality={100}
        />
        <h1 className="text-2xl font-bold mb-8 mt-10">2. Dejan Markovic</h1>
        <span className="font-bold text-lg text-blue-500">
          <Link href="https://www.dejan.works/" target="_blank">dejan.works</Link>
        </span>
        <p className="text-lg mb-10"><span className="font-semibold text-xl">O que ele faz</span>
          : UX e UI Design</p>
        <Image
          src={site4}
          alt="Imagem 4 do site"
          priority
          quality={100}
        />
        <h1 className="text-2xl font-bold mb-8 mt-10">3. Rafael Caferati</h1>
        <span className="font-bold text-lg text-blue-500">
          <Link href={'/'}>caferati.me</Link>
        </span>
        <p className="text-lg mb-10"><span className="font-semibold text-xl">O que ele faz</span>
          : front-end, back-end e UX</p>
        <Image
          src={site5}
          alt="Imagem 5 do site"
          priority
          quality={100}
        />
        <h1 className="text-2xl font-bold mb-8 mt-10">4. Emily Cume</h1>
        <span className="font-bold text-lg text-blue-500">
          <Link href={'/'}>www.emilyridge.ie</Link>
        </span>
        <p className="text-lg mb-10"><span className="font-semibold text-xl">O que ele faz</span>
          : Desenvolvedora e designer WordPress</p>
        <Image
          src={site6}
          alt="Imagem 6 do site"
          priority
          quality={100}
        />
        <h1 className="text-2xl font-bold mb-8 mt-10">5. Ian Lunn</h1>
        <span className="font-bold text-lg text-blue-500">
          <Link href={'/'}>ianlunn.co.uk</Link>
        </span>
        <p className="text-lg mb-10"><span className="font-semibold text-xl">O que ele faz</span>
          :  web design e desenvolvimento front-end</p>
        <Image
          src={site7}
          alt="Imagem 7 do site"
          priority
          quality={100}
        />
        <h1 className="text-2xl font-bold mb-8 mt-10">6. Pedro Nel</h1>
        <span className="font-bold text-lg text-blue-500">
          <Link href={'/'}>pierre.io</Link>
        </span>
        <p className="text-lg mb-10"><span className="font-semibold text-xl">O que ele faz</span>
          :  design, front-end, back-end e muito mais</p>
        <Image
          src={site8}
          alt="Imagem 8 do site"
          priority
          quality={100}
        />
        <section className="flex">
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-8 mt-10">7. Timmy O'Mahony</h1>
            <span className="font-bold text-lg text-blue-500">
              <Link href={'/'}>timmyomahony.com</Link>
            </span>
            <p className="text-lg mb-10"><span className="font-semibold text-xl">O que ele faz</span>
              :  Desenvolvedor Django</p>
            <Image
              src={site9}
              alt="Imagem 9 do site"
              priority
              quality={100}
            />
            <h1 className="text-2xl font-bold mb-8 mt-10">8. Denise Chandler</h1>
            <span className="font-bold text-lg text-blue-500">
              <Link href={'/'}>www.denisechandler.com</Link>
            </span>
            <p className="text-lg mb-10"><span className="font-semibold text-xl">O que ele faz</span>
              :  web design, desenvolvimento e muito mais</p>
            <Image
              src={site11}
              alt="Imagem 11 do site"
              priority
              quality={100}
            />
          </div>
          <div className="flex-2 mt-80">
            <Image
              src={site19}
              alt="Casa do dragão"
            />
          </div>
        </section>
        <h1 className="text-2xl font-bold mb-8 mt-10">9. Ben Adão</h1>
        <span className="font-bold text-lg text-blue-500">
          <Link href={'/'}>benadam.eu</Link>
        </span>
        <p className="text-lg mb-10"><span className="font-semibold text-xl">O que ele faz</span>
          :  design UX/UI e desenvolvimento front-end</p>
        <Image
          src={site12}
          alt="Imagem 12 do site"
          priority
          quality={100}
        />
        <h1 className="text-2xl font-bold mb-8 mt-10">10. Daniel Fischer</h1>
        <span className="font-bold text-lg text-blue-500">
          <Link href={'/'}>www.danielfischer.com</Link>
        </span>
        <p className="text-lg mb-10"><span className="font-semibold text-xl">O que ele faz</span>
          :  front-end, back-end (Ruby on Rails) e muito mais</p>
        <Image
          src={site13}
          alt="Imagem 13 do site"
          priority
          quality={100}
        />
        <h1 className="text-2xl font-bold mb-8 mt-10">11. Seb Kay</h1>
        <span className="font-bold text-lg text-blue-500">
          <Link href={'/'}>sebkay.com</Link>
        </span>
        <p className="text-lg mb-10"><span className="font-semibold text-xl">O que ele faz</span>
          :  web design e desenvolvimento WordPress</p>
        <Image
          src={site14}
          alt="Imagem 14 do site"
          priority
          quality={100}
        />
        <h1 className="text-2xl font-bold mb-8 mt-10">12. Jonny MacEachern</h1>
        <span className="font-bold text-lg text-blue-500">
          <Link href={'/'}>www.jonny.me</Link>
        </span>
        <p className="text-lg mb-10"><span className="font-semibold text-xl">O que ele faz</span>
          :  desenvolvimento front-end</p>
        <Image
          src={site15}
          alt="Imagem 15 do site"
          priority
          quality={100}
        />
        <h1 className="text-2xl font-bold mb-8 mt-10">13. Kathryn McClintock</h1>
        <span className="font-bold text-lg text-blue-500">
          <Link href={'/'}>www.kathrynmcclintock.com</Link>
        </span>
        <p className="text-lg mb-10"><span className="font-semibold text-xl">O que ele faz</span>
          :  Desenvolvedora Drupal</p>
        <Image
          src={site16}
          alt="Imagem 16 do site"
          priority
          quality={100}
        />
      </section>
      <section className="flex mb-10">
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-8 mt-10">14. Jack Jeznach</h1>
          <span className="font-bold text-lg text-blue-500">
            <Link href={'/'}>jacekjeznach. com</Link>
          </span>
          <p className="text-lg mb-10"><span className="font-semibold text-xl">O que ele faz</span>
            :  desenvolvimento front-end e WordPress</p>
          <Image
            src={site17}
            alt="Imagem 17 do site"
            priority
            quality={100}
          />
          <h1 className="text-3xl font-bold mb-8 mt-10">
            15. Quais desenvolvedores criaram portfólios que você ama?
          </h1>
          <p className="text-2xl">
            Há inspiração em todos os lugares. Espero que este artigo tenha ajudado você a encontrar a sua!
          </p>
          <p className="mt-4 text-lg">
            Quer *ainda mais* sobre como criar um portfólio de primeira linha?
            <span className="font-bold text-blue-600 text-lg"><Link href={'/'}>
              Clique aqui para obter minha folha de dicas gratuita de 7 passos para elaborar um portfólio estelar.
            </Link></span>
          </p>
        </div>
        <div className="flex-2 mt-96">
          <Image
            src={site20}
            alt="Imagem cine max"
            priority
            quality={100}
          />
        </div>
      </section>
      <section className="border-4 border-y-indigo-200 p-3">
      <div className="flex items-center gap-3">
        <Image
          src={site18}
          alt="foto Laurence Bradford"
          width={100}
          priority
          quality={100}
        />
        <div>
        <h2 className="font-bold text-lg">Laurence Bradford</h2>
        <p className="font-medium">Criador do blog + podcast Learn to Code With Me</p>
        </div>
      </div>
      </section>
      <section className="mt-8 mb-8">
        <p className="mb-4 text-lg font-semibold">
          Se você leu até aqui, agradeça ao autor para mostrar que você se importa.
          <span className="font-bold bg-blue-800 text-white rounded-sm px-4 py-2"><Link href={'/'}>Diga Obrigado</Link></span>
          </p>
        <p className="text-lg font-semibold">
        Aprenda a programar gratuitamente. O currículo de código aberto do freeCodeCamp ajudou mais de 40.000 
        pessoas a conseguir empregos como desenvolvedores.
        <span className="font-bold bg-blue-800 text-white rounded-sm px-4 py-2"><Link href={'/'}>Iniciar</Link></span>
        </p>
        <div className="mt-10 mb-10 flex flex-col items-center justify-center">
          <h1>ANÚNCIO</h1>
          <Image
          src={site21}
          alt="Imagem do anúncio"
          priority
          quality={100}
          />
        </div>
      </section>
    </Container>
  )
}
