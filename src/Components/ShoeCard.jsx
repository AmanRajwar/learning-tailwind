import React from 'react'

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {

    const handleClick = () => {
        if (bigShoeImg !== imgURL.bigShoe) {
            changeBigShoeImage(imgURL.bigShoe)
        }
    }
    return (
        <div className={`bordder-2 rounded-xl
    ${bigShoeImage === imgURL
                ? 'border-coral-red'
                : 'border-transparent'}
    cusror-pointer max-sm:flex-1 `}
            onClick={handleClick}
        >
<div className='flex
justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-6'>
    <img
    src={imgURL.thumbnail}
    alt='shoe collection'
    width={127}
    height={103}
    className='object-contain '
    />
</div>
        </div>
    )
}

export default ShoeCard