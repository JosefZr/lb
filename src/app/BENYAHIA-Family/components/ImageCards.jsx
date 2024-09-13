import Image from 'next/image'
import React from 'react'

export default function ImageCards({image1,image2, style, text}) {
    return (
        /* From Uiverse.io by eslam-hany */ 
        <div className={` flex flex-col items-center  ${style}`}>
            <div className="book max-[680px]:max-w-fit w-auto">
                <Image
                    src={image1}
                    width={300}
                    height={300}
                    className=' w-auto max-w-fit'

                    alt="Benyahia Mostapha"
                    />
                <div className="cover max-[680px]:max-w-fit w-auto" >
                    <Image
                    src={image2}
                    width={300}
                    height={300}
                    className=' w-auto max-w-fit'
                    alt="Benyahia Mostapha"
                    />
                </div>
            </div>
            <h1 className='max-[680px]:w-2/4 text-center max-[530px]:w-3/4'>
                {text}
            </h1>
        </div>
    )
}
