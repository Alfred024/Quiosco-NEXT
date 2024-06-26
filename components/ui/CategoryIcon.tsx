"use client"
import Image from "next/image"
import Link from "next/link"
import { useParams } from 'next/navigation'
import { Category } from "@prisma/client"

type CategoryIconProps = {
    category: Category
}

export default function CategoryIcon({ category }: CategoryIconProps) {
    const params = useParams<{category: string}>()

    return (
        <div
            className={`${category.slug === params.category ? ' bg-black' : ''} flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b`}
        >
            <div className="w-16 h-16 relative">
                <Image
                    color={`${category.slug === params.category ? 'text-white' : ''}`}
                    fill
                    src={`/${category.slug}.svg`}
                    alt="Imagen Categoria"
                />
            </div>

            <Link
                //className="text-xl font-bold  "
                className={`${category.slug === params.category ? 'text-white text-xl font-bold ' : ''}`}
                href={`/order/${category.slug}`}
            >{category.name}</Link>
        </div>
    )
}
