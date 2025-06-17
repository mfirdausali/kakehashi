import AdvertisementBanner from "./advertisement-banner"

interface SidebarAdProps {
  ad: {
    id: string
    imageUrl: string
    altText: string
    linkUrl: string
  }
}

export default function SidebarAd({ ad }: SidebarAdProps) {
  return (
    <div className="mb-6">
      <AdvertisementBanner
        id={ad.id}
        imageUrl={ad.imageUrl}
        altText={ad.altText}
        linkUrl={ad.linkUrl}
        position="sidebar"
      />
    </div>
  )
}
