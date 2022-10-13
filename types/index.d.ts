import { Asset, Metadata, Sys } from 'contentful'

export interface IHero {
    metadata: Metadata
    sys: Sys
    fields: HeroFields
}

export interface HeroFields {
    title: string
    subtitle: string
    curriculumPdf: Asset
    description: string
}

export interface IWorks {
    metadata: Metadata
    sys: Sys
    fields: WorkFields
}
export interface WorkFields {
    title: string
    description: string
    thumbnail: Asset
    stackIcons: Asset[]
    slug: string
    repoUrl: string
    webUrl: string
    order: number
}
