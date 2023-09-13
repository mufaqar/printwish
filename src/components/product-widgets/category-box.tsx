import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Category_Box = ({ data }: any) => {
    return (
        <div className=''>
            <Link href={`/${data?.link}`}>
                <Image src={data?.img} alt="image" width={300} height={300} className='object-fill w-full mx-auto mb-3' />
                <div className=''>
                    <p className='md:text-2xl font-bold text-accent hover:text-secondary text-center'>
                        {data?.name}
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default Category_Box