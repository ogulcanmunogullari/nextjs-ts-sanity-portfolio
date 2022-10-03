export interface SanityBody {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
}
export interface Image {
  _type: "image"
  asset: {
    _ref: string
    _type: "reference"
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
  slidingText: array<string>
}

export interface Tecnology extends SanityBody {
  _type: "skill"
  image: Image
  title: string
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
  tecnologies: array<Tecnology>
  image: Image
  linkToBuild: string
}

export interface Social extends SanityBody {
  _type: "social"
  title: string
  url: string
}
