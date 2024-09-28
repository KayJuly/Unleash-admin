export interface Allbookmark {
    title: string;
    title_id: number;
    status: boolean;
    data: {
        id: number,
        image: string,
        title: string,
        url: string,
        desc: string,
        collection: string;
        favourite: boolean;
    }[]
}

export interface bookmarkDataInterface {
    id: number,
    image: string,
    title: string,
    url: string,
    desc: string,
    collection: string;
    favourite: boolean;
}

export const allBookmarkData: Allbookmark[] = [
    {
        title: 'Created By Me',
        title_id: 1,
        status: true,
        data: []
    }]

export const tagData: Allbookmark[] = []
