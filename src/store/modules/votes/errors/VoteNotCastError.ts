import nl from '@/locales/nl.json';

export class VoteNotCastError extends Error {
    public constructor() {
        super(nl.layout.votes.not_cast);
    }
}
