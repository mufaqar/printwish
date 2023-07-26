'use client'
import React from 'react'
import Gender from '../filters/gender'
import AgeFilters from '../filters/age'
import SizeFilter from '../filters/size'
import CustomisationFilter from '../filters/customisation'
import BrandsFilters from '../filters/brands'
import PriceFilter from '../filters/price'
import ColorsFilter from '../filters/colors'
import FabricFilter from '../filters/fabric'

const Product_Sidebar = () => {
    return (
        <div className=''>
            <h2 className='text-2xl font-semibold font-opensans text-accent uppercase mb-5'>
                Filter by
            </h2>
            <div className='grid gap-5'>
                <Gender />
                <AgeFilters />
                <SizeFilter />
                <BrandsFilters />
                <PriceFilter min={0} max={1000} />
                <ColorsFilter />
                <FabricFilter />
                <CustomisationFilter />
            </div>
        </div>
    )
}

export default Product_Sidebar