import Link from "next/link";

export function SubHeader() {
    return (
        <header className="flex w-full bg-blue-900 h-12 items-center justify-center text-white font-bold">
            <h2>
                Aprenda a programar
                <Link href={'/'}>
                    <span> - currículo gratuito de 3.000 horas</span>
                </Link>
            </h2>
        </header>
    )
}
