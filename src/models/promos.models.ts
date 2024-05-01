import promosInterface from '../types/promos.type';
import { PaginateModel, Schema, model } from 'mongoose';
import paginate from 'mongoose-paginate-v2';


const promosSchema = new Schema<promosInterface>({
    name: { type: String, required: true },
    url: { type: String, required: true },
    createdAt:{type: Date, default: Date.now} 
}, { versionKey: false });

promosSchema.plugin(paginate);

const Promos: PaginateModel<promosInterface> = model<promosInterface, PaginateModel<promosInterface>>('Promos', promosSchema);
export default Promos;