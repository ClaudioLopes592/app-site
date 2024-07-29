import Link from "next/link";
import Image from "next/image";
import apple from '@/assets/apple-store-badge.svg'
import google from '@/assets/google-play-badge.svg'

export function Footer() {
    return (
        <>
            <footer className="bg-gray-200 w-full flex p-6">
                <div className="flex-1 p-4">
                    <p className="mb-4">
                        freeCodeCamp é uma organização de caridade 501(c)(3) isenta de impostos e apoiada
                        por doadores (Número de Identificação Fiscal Federal dos Estados Unidos: 82-0779546)
                    </p>
                    <p className="mb-4">
                        Nossa missão: ajudar as pessoas a aprender a programar de graça. Conseguimos isso
                        criando milhares de vídeos, artigos e aulas interativas de programação - todos
                        disponíveis gratuitamente ao público.
                    </p>
                    <p className="mb-4">
                        As doações para o freeCodeCamp vão para nossas iniciativas educacionais e ajudam a pagar
                        servidores, serviços e equipe.
                    </p>
                    <p className="mt-9 font-bold">
                        Você pode - 
                        <Link href={'/'}>
                            <span className="text-blue-500">
                                 fazer uma doação dedutível de impostos aqui
                            </span>
                        </Link>
                        .</p>
                </div>
                <div className="flex-1">
                    <h4 className="text-center mt-6 mb-4 font-bold">Guias de tendências</h4>
                    <div className="flex py-8">
                        <div className="flex-1 p-2">
                            <ul>
                                <li>
                                    <Link href={'/'}>Aprenda CSS Transform</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>O que é programação?</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>Rede HTTP em JS</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>Como escrever código limpo</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>Aprenda Swift</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>Aprenda CSS Grid</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>Aprenda módulos JS</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>Desenvolvimento Front-End JS</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>Linha de comando para iniciantes</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>Melhores práticas de segurança OSS</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 p-2">
                            <ul>
                                <li>
                                    <Link href={'/'}>Crie um blog estático</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>Exemplos de código Python</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>Escreva testes unitários React</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>Aprenda PHP</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>Aprenda Golang</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>Aprenda Solidez</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>Aprenda Apache Kafka</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>Aprenda a construir APIs REST</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>Introdução aos sistemas operacionais</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>Padrões de Sistemas Distribuídos</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 p-2">
                            <ul>
                                <li>
                                    <Link href={'/'}>Crie um chatbot de IA</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>Código aberto para desenvolvedores</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>Aprenda Algoritmos em JS</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>Aprenda Java</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>Aprenda Node.js</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>Aprenda Express.js</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>Melhores práticas da API REST</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>TS intermediário e React</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>Aprenda a construir APIs GraphQL</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>Padrões de Arquitetura de Software</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h4 className="text-center font-bold">Aplicativo móvel</h4>
                    <div className="flex w-full items-center justify-center gap-6">
                        <div className="flex">
                            <Image
                                src={apple}
                                alt="Imagem do anúncio"
                                priority
                                width={180}
                                quality={100}
                            />
                        </div>
                        <div className="flex">
                            <Image
                                src={google}
                                alt="Imagem do anúncio"
                                priority
                                width={180}
                                quality={100}
                            />
                        </div>
                    </div>
                </div>
            </footer >
            <div className="flex flex-wrap mt-4 px-6 border-2 items-center justify-between h-24 border-t-indigo-500">
            <Link href={'/'}>Sobre</Link>
            <Link href={'/'}>Rede de ex-alunos</Link>
            <Link href={'/'}>Código aberto</Link>
            <Link href={'/'}>Comprar</Link>
            <Link href={'/'}>Apoiar</Link>
            <Link href={'/'}>Patrocinadores</Link>
            <Link href={'/'}>Honestidade acadêmica</Link>
            <Link href={'/'}>Código de conduta</Link>
            <Link href={'/'}>Política de privacidade</Link>
            <Link href={'/'}>Termos de serviços</Link>
            <Link href={'/'}>Política de direitos autorais</Link>
            </div>
        </>
    )
}
