import nl from '@/locales/nl.json';

export class PhotosNotFetchedError extends Error {
    public constructor() {
        super(nl.layout.photos.could_not_fetch_photos);
    }
}
