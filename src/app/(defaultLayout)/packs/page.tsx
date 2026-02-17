import React from 'react'
import BreadCumb from '../../Components/Common/BreadCumb'
import ReelsPacks from '../../Components/Pricing/ReelsPacks'
import PersonalBrandingPacks from '../../Components/Pricing/PersonalBrandingPacks'
import PodcastPacks from '../../Components/Pricing/PodcastPacks'
import VideoEditingPacks from '../../Components/Pricing/VideoEditingPacks'
import AdditionalServices from '../../Components/Pricing/AdditionalServices'

const PacksPage = () => {
    return (
        <div>
            <BreadCumb Title="Packs" content="Explore our comprehensive pricing plans designed to meet your business needs" />
            <ReelsPacks />
            <VideoEditingPacks />
            <PersonalBrandingPacks />
            <PodcastPacks />
            <AdditionalServices />
        </div>
    )
}

export default PacksPage
