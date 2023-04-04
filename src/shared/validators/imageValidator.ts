// image.validator.ts
import { IImage } from "../../domain/models/BuildingModel";


export function validateImage(image: IImage): Error | null {
    if (!image.filename  || !image.mimetype) {
        return new Error('Invalid image data');
    }

    return null;
}