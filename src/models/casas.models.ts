import casasInterface from '../types/casas.type';
import { PaginateModel, Schema, model } from 'mongoose';
import paginate from 'mongoose-paginate-v2';

const casasSchema = new Schema<casasInterface>({
    nameModel: { type: String, required: true },
    price: { type: Number, required: true },
    rooms: { type: Number, required: true },
    bathroom: { type:Number, default: 1 },
    dimensions: { type: Number, required: true },
    blueprints: [{ type: String, required: true }],
    inside: [{ type: String, required: true }],
    offside: [{ type: String, required: true }]
}, { versionKey: false });

casasSchema.plugin(paginate);

const Casas: PaginateModel<casasInterface> = model<casasInterface, PaginateModel<casasInterface>>('casas', casasSchema);
export default Casas;