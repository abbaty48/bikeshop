
export type TProfile = {
    id: string,
    email: string,
    name: string,
    picture: string
    given_name?: string,
    family_name?: string,
    verified_email: boolean,
}

export type TAuthStates = {
    userProfile: TProfile | null,
    resetProfile: () => void
    updateProfile: (profile: Partial<TProfile>) => void
}

export type TPresentationPayloadCursor = {
    presentation: TPresentation,
    total: number;
    kind: 'PresentationCursor'
}
export type TPresentation =  {
    id: number;
    feature: string;
    description: string;
    kind: 'Presentation'
}
export type TPresentationPayload = TPresentation |  TPresentationPayloadCursor
