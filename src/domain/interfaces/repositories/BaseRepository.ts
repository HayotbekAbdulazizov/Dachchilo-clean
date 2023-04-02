import { Model } from 'mongoose';

export class BaseRepository<T extends Document> {
    constructor(private readonly model: Model<T>) {}

    public async getAll(): Promise<T[]> {
        return this.model.find().exec();
    }

    public async getById(id: string): Promise<T | null> {
        return this.model.findById(id).exec();
    }

    public async create(data: Partial<T>): Promise<T> {
        const entity = new this.model(data);
        return entity.save();
    }

    public async update(id: string, data: Partial<T>): Promise<T | null> {
        const entity = await this.model.findById(id).exec();
        if (!entity) {
            return null;
        }
        Object.assign(entity, data);
        return entity.save();
    }

    public async delete(id: string): Promise<void> {
        await this.model.findByIdAndDelete(id).exec();
    }
}