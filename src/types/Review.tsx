export interface Review {
    id: number;
    reviewRating: number;
    critic: string;
    isPublished: boolean; // ???? or string
    createdBy: string;
    name: string;
}