export interface SanityBody {
  _createdAt: string
  _id: string
  _rev: string
  _updatedAt: string
}
export interface Image {
  _type: "image"
  asset: {
    _ref: string
    _type: "reference"
  }
  crop: {
    _type: "sanity.imageCrop"
    bottom: number
    left: number
    right: number
    top: number
  }
  hotspot: {
    _type: "sanity.imageHotspot"
    height: number
    width: number
    x: number
    y: number
  }
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo"
  backgroundHead: string
  backgroundInfo: string
  heroImage: Image
  name: string
  profilePic: Image
  role: string
  slidingText: string[]
  socials: Social[]
}

export interface Skill extends SanityBody {
  _type: "skill"
  image: Image
  title: string
}
export interface Project extends SanityBody {
  _type: "project"
  summary: string
  title: string
  tecnologies: Skill[]
  image: Image
  linkToBuild: string
}

export interface Social extends SanityBody {
  _type: "social"
  title: string
  url: string
}
